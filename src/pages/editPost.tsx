import { gql, useMutation, useQuery, useReactiveVar } from "@apollo/client";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { isLoggedInVar } from "../apollo";
import { Banner } from "../components/banner";
import { Button } from "../components/button";
import { useMe } from "../hooks/useMe";
import { findPost, findPostVariables } from "../__generated__/findPost";

import { updatePost, updatePostVariables } from "../__generated__/updatePost";
import { NotFound } from "./404";

const EDIT_POST_MUTATION = gql`
  mutation updatePost($input: UpdatePostInput!) {
    updatePost(input: $input) {
      error
      ok
    }
  }
`;

export const FIND_POST_QUERY = gql`
  query findPost($input: FindPostInput!) {
    findPost(input: $input) {
      ok
      error
      post {
        ownerName
        institution
        phoneNumber
        email
        title
        content
        password
        isLocked
      }
    }
  }
`;

interface IEditPostForm {
  title: string;
  content: string;
  password?: string;
  ownerName: string;
  institution: string;
  phoneNumber: string;
  email: string;
  isLocked: boolean;
  id: number;
}

export const EditPost = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { state } = useLocation();

  const { id } = useParams<{ id: string }>();
  const {
    data: FindPostData,
    error,
    refetch,
  } = useQuery<findPost, findPostVariables>(FIND_POST_QUERY, {
    variables: {
      input: {
        postId: +(id ?? ""),
      },
    },
  });

  const navigate = useNavigate();

  const { register, formState, getValues, handleSubmit, reset } =
    useForm<IEditPostForm>({
      mode: "onBlur",
    });
  const onCompleted = (data: updatePost) => {
    const {
      updatePost: { ok, error },
    } = data;
    if (ok) {
      refetch();
      navigate("/posts", { replace: true, state: true });
    } else {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!error) {
      reset({
        ownerName: FindPostData?.findPost?.post?.ownerName
          ? FindPostData?.findPost?.post?.ownerName
          : "",
        institution: FindPostData?.findPost?.post?.institution
          ? FindPostData?.findPost?.post?.institution
          : "",
        phoneNumber: FindPostData?.findPost?.post?.phoneNumber
          ? FindPostData?.findPost?.post?.phoneNumber
          : "",
        email: FindPostData?.findPost?.post?.email
          ? FindPostData?.findPost?.post?.email
          : "",
        isLocked: FindPostData?.findPost?.post?.isLocked
          ? FindPostData?.findPost?.post?.isLocked
          : false,
        password: FindPostData?.findPost?.post?.password
          ? FindPostData?.findPost?.post?.password
          : "",
        title: FindPostData?.findPost?.post?.title
          ? FindPostData?.findPost?.post?.title
          : "",
        content: FindPostData?.findPost?.post?.content
          ? FindPostData?.findPost?.post?.content
          : "",
      });
    }
  }, [FindPostData, error]);

  const [updatePost, { data: updatePostData, loading }] = useMutation<
    updatePost,
    updatePostVariables
  >(EDIT_POST_MUTATION, { onCompleted });
  const onSubmit = () => {
    const {
      ownerName,
      institution,
      phoneNumber,
      email,
      title,
      content,
      password,
      isLocked,
    } = getValues();

    updatePost({
      variables: {
        input: {
          ownerName,
          institution,
          phoneNumber,
          email,
          title,
          content,
          password,
          isLocked,
          id: +(id ?? ""),
        },
      },
    });
  };

  return (
    <div className="Create-post-root">
      <Helmet>
        <title>Edit | DORO</title>
      </Helmet>

      {state ? (
        <>
          <Banner
            routeName1="??? ????????????"
            route1=""
            title="????????????"
            subtitle="Education inquiry"
            content="???????????? ????????? ????????? ???????????? ????????? ????????? ??????????????? ???????????? ?????? ???????????? ???????????????."
            contentClass="Subtitle-bigFont"
            rightImg="none"
          />
          <div className="Create-post-content-root">
            <div className="Create-post-title">??????????????????</div>
            <form
              className="Create-post-form"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className=" Create-post-input-parent ">
                <div className="Create-post-input-description-box">
                  <span className="Create-post-input-description-text">
                    ????????? ??????
                  </span>
                </div>
                <div className="Create-post-input-input-box">
                  <input
                    {...register("ownerName", { required: true, maxLength: 4 })}
                    className="Create-post-input-input-content"
                    name="ownerName"
                    placeholder="ownerName"
                    maxLength={4}
                  />
                </div>
              </div>
              <div className=" Create-post-input-parent">
                <div className="Create-post-input-description-box">
                  <span className="Create-post-input-description-text">
                    ?????? ??????(??????)
                  </span>
                </div>
                <div className="Create-post-input-input-box">
                  <input
                    {...register("institution")}
                    name="institution"
                    placeholder="institution"
                    className="Create-post-input-input-content"
                  />
                </div>
              </div>

              <div className=" Create-post-input-parent">
                <div className="Create-post-input-description-box">
                  <span className="Create-post-input-description-text">
                    ?????????
                  </span>
                </div>
                <div className="Create-post-input-input-box">
                  <input
                    {...register("phoneNumber", { required: true })}
                    name="phoneNumber"
                    placeholder="phoneNumber"
                    className="Create-post-input-input-content"
                  />
                </div>
              </div>

              <div className=" Create-post-input-parent">
                <div className="Create-post-input-description-box">
                  <span className="Create-post-input-description-text">
                    ?????????
                  </span>
                </div>
                <div className="Create-post-input-input-box">
                  <input
                    {...register("email")}
                    name="email"
                    placeholder="email"
                    className="Create-post-input-input-content"
                  />
                </div>
              </div>

              <div className=" Create-post-input-parent">
                <div className="Create-post-input-description-box">
                  <span className="Create-post-input-description-text">
                    ?????????
                  </span>
                </div>
                <div className="Create-post-input-input-box-checkbox">
                  <input
                    {...register("isLocked")}
                    name="isLocked"
                    className="Create-post-input-checkbox  w-6 h-6 ml-4 mt-2"
                    type={"checkbox"}
                  />
                </div>
              </div>

              <div className=" Create-post-input-parent">
                <div className="Create-post-input-description-box">
                  <span className="Create-post-input-description-text">
                    ????????? ????????????
                  </span>
                </div>
                <div className="Create-post-input-input-box">
                  <input
                    {...register("password", { required: true })}
                    name="password"
                    className="Create-post-input-input-content"
                    placeholder="password"
                  />
                </div>
              </div>

              <div className="Create-post-title">????????????</div>

              <div className=" Create-post-input-parent">
                <div className="Create-post-input-description-box Create-for-border">
                  <span className="Create-post-input-description-text">
                    ??? ??????
                  </span>
                </div>
                <div className="Create-post-input-input-box Create-for-border">
                  <input
                    {...register("title", { required: true })}
                    name="title"
                    maxLength={30}
                    className="Create-post-input-input-content"
                    placeholder="title"
                  />
                </div>
              </div>

              <div className=" Create-post-input-textarea-parent">
                <div className="Create-post-input-textarea-span-box">
                  <span className="Create-post-input-description-text">
                    ??? ??????
                  </span>
                </div>
                <div className="Create-post-input-textarea-div">
                  <textarea
                    {...register("content", { required: true })}
                    name="content"
                    placeholder="content"
                    className="Create-post-textarea"
                  />
                </div>
              </div>

              <div className=" Create-post-submit-button-parent">
                <button
                  className={` py-4 ${
                    formState.isValid
                      ? "Create-post-submit-button-on"
                      : "Create-post-submit-button-off"
                  }`}
                >
                  {loading ? (
                    <span className="Create-post-submit-text">?????? ???..."</span>
                  ) : (
                    <span className="Create-post-submit-text">????????????</span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </>
      ) : (
        <NotFound />
      )}
    </div>
  );
};
