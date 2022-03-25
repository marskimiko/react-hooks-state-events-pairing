
import React, { useState } from "react";

function Likes({upvotes, downvotes}) {
  const [upVote, setUpVote] = useState(upvotes)
  const [downVote, setDownVote] = useState(downvotes)
  
  
  function handleUpClick() {
    console.log('up');
    setUpVote(upVote => upVote + 1);
  }  
  function handleDownClick() {
    console.log('down');
    setDownVote(downVote => downVote + 1);
  }
  
  return (
    <>
      <button onClick={handleUpClick}>{upVote}👍</button>
      <button onClick={handleDownClick}>{downVote}👎</button>
    </>
  )
}

export default Likes;