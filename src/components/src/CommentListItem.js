import React from 'react'
import Comment from './Comment.js'

function CommentListItem({comments}) {

  const commentsArray = comments.map((comment) => {
    return <Comment
    title={comments}
    key={comment.id} 
    comment={comment.comment} 
    user={comment.user}
    />
  });
  
  return (
    <div>
      <h2>Comments</h2>
      {commentsArray}
    </div>
  )
}

export default CommentListItem;