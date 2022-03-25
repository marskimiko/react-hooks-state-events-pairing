import React from "react";

function Comment({ comment, user }) {

  return (
    <div>
      <br></br>
      <div className="user">{user}</div>
      <br></br>
      <div className="comment">{comment}</div>
    </div>
  );
}

export default Comment;