import { gql, useMutation, useReactiveVar } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { isLoggedInVar } from "../apollo";
import { Banner } from "../components/banner";
import { useMe } from "../hooks/useMe";
import { createPost, createPostVariables } from "../__generated__/createPost";
import infoConfirm from "../images/Frame68.svg";
import { Helmet } from "react-helmet-async";

const CREATE_POST_MUTATION = gql`
  mutation createPost($input: CreatePostInput!) {
    createPost(input: $input) {
      error
      ok
    }
  }
`;

interface ICreatePostForm {
  title: string;
  content: string;
  password?: string;
  ownerName: string;
  institution: string;
  phoneNumber: string;
  email: string;
  isLocked: boolean;
  agree: boolean;
}

export const CreatePost = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const { data: userData, refetch } = useMe();
  const [isHovering, setIsHovering] = useState(0);
  const navigate = useNavigate();

  const { register, formState, getValues, handleSubmit } =
    useForm<ICreatePostForm>({
      mode: "onChange",
    });
  const onCompleted = (data: createPost) => {
    const {
      createPost: { ok, error },
    } = data;
    if (ok) {
      navigate("/posts", { replace: true, state: true });
    } else {
      console.log(error);
    }
  };
  const [createPostMutation, { data: creataPostData, loading }] = useMutation<
    createPost,
    createPostVariables
  >(CREATE_POST_MUTATION, { onCompleted });
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

    createPostMutation({
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
        },
      },
    });
  };

  return (
    <div className="Create-post-root">
      <Helmet>
        <title>Create | DORO</title>
      </Helmet>
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
        <form className="Create-post-form" onSubmit={handleSubmit(onSubmit)}>
          <div className=" Create-post-input-parent ">
            <div className="Create-post-input-description-box">
              <span className="Create-post-input-description-text">
                ????????? ??????
              </span>
              <span style={{ color: "red" }}>*</span>
            </div>
            <div className="Create-post-input-input-box">
              <input
                {...register("ownerName", { required: true, maxLength: 4 })}
                className="Create-post-input-input-content"
                name="ownerName"
                placeholder="?????? ??????"
                maxLength={4}
                defaultValue={userData?.me.name ? userData?.me.name : ""}
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
                placeholder="?????? ????????????"
                className="Create-post-input-input-content"
                defaultValue={
                  userData?.me.institution ? userData?.me.institution : ""
                }
              />
            </div>
          </div>

          <div className=" Create-post-input-parent">
            <div className="Create-post-input-description-box">
              <span className="Create-post-input-description-text">?????????</span>
              <span style={{ color: "red" }}>*</span>
            </div>
            <div className="Create-post-input-input-box">
              <input
                {...register("phoneNumber", { required: true })}
                name="phoneNumber"
                placeholder="?????????(-) ?????? ????????? ??????"
                className="Create-post-input-input-content"
                defaultValue={
                  userData?.me.institution ? userData?.me.institution : ""
                }
              />
            </div>
          </div>

          <div className=" Create-post-input-parent">
            <div className="Create-post-input-description-box">
              <span className="Create-post-input-description-text">?????????</span>
            </div>
            <div className="Create-post-input-input-box">
              <input
                {...register("email")}
                name="email"
                placeholder="????????? ?????? ??????"
                className="Create-post-input-input-content"
                defaultValue={userData?.me.email ? userData?.me.email : ""}
              />
            </div>
          </div>

          <div className=" Create-post-input-parent">
            <div className="Create-post-input-description-box">
              <span className="Create-post-input-description-text">?????????</span>
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
              <span style={{ color: "red" }}>*</span>
            </div>
            <div className="Create-post-input-input-box">
              <input
                {...register("password", { required: true })}
                name="password"
                className="Create-post-input-input-content"
                placeholder="??? ?????? ??? ????????? ???????????????"
              />
            </div>
          </div>

          <div className="Create-post-title">????????????</div>

          <div className=" Create-post-input-parent">
            <div className="Create-post-input-description-box Create-for-border">
              <span className="Create-post-input-description-text">
                ??? ??????
              </span>
              <span style={{ color: "red" }}>*</span>
            </div>
            <div className="Create-post-input-input-box Create-for-border">
              <input
                {...register("title", { required: true })}
                name="title"
                maxLength={30}
                className="Create-post-input-input-content"
                placeholder=""
              />
            </div>
          </div>

          <div className=" Create-post-input-textarea-parent">
            <div className="Create-post-input-textarea-span-box">
              <span className="Create-post-input-description-text">
                ??? ??????
              </span>
              <span style={{ color: "red" }}> *</span>
            </div>
            <div className="Create-post-input-textarea-div">
              <textarea
                {...register("content", { required: true })}
                name="content"
                placeholder="?????? ????????? ??????????????????"
                className="Create-post-textarea"
              />
            </div>
          </div>

          <div
            className="Create-post-input-parent-notification"
            onMouseOver={() => setIsHovering(1)}
            onMouseOut={() => setIsHovering(0)}
          >
            <div className="Create-post-input-title-notification"></div>
            <div className="Create-post-input-input-box-notification">
              <div className=" create-post-notification-checkbox-parent">
                <div className="Create-post-agree-checkbox-parent flex flex-row justify-center">
                  <input
                    {...register("agree", { required: true })}
                    className="Create-post-agree-checkbox"
                    name="agree"
                    type={"checkbox"}
                  />
                  <span className="Create-post-agree-notification">
                    ????????? [???????????? ?????? ??? ????????? ?????? ??????] ?????????
                    ?????????????????? ???????????????.
                  </span>
                </div>

                <div className="Create-post-agree-info-confirm-parent">
                  {isHovering ? (
                    <img src={infoConfirm} alt="info"></img>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className=" Create-post-submit-button-parent">
            <button
              className={`${
                formState.isValid
                  ? "Create-post-submit-button-on"
                  : "Create-post-submit-button-off"
              }`}
            >
              {loading ? (
                <span className="Create-post-submit-text">?????? ???</span>
              ) : (
                <span className="Create-post-submit-text">????????????</span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
