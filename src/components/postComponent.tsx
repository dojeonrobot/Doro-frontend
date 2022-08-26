import React from "react";
import { Link } from "react-router-dom";

interface IPostProps {
  createdAt: string;
  title: string;
  ownerName: string;
  id: number;
  num: number | string;
}

export const PostComponent: React.FC<IPostProps> = ({
  createdAt,
  title,
  ownerName,
  id,
  num,
}) => (
  <Link to={`/post/${id}`}>
    <div>
      <span>{num}</span>
      <span>{title}</span>
      <span>{ownerName}</span>
      <span>{createdAt}</span>
    </div>
  </Link>
);