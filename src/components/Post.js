import React from "react";
import "./Post.css";

function Post() {
  return (
    <div>
      <div className="post">
        <img
          className="post__image"
          src="https://images.unsplash.com/photo-1673901736230-ce32ba28009d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
        />
        <div className="text__container">
          <h4 className="post__title">
            <strong>lt's Title</strong>
          </h4>
          <h5 className="post__text">여긴 기본적인 설명입니다..</h5>
          <h6 className="post__username">By Username</h6>
          <button className="post__edit">편집</button>
          <button claaName="post__comment">댓글</button>
        </div>
      </div>
    </div>
  );
}
export default Post;
