import React, { useState } from "react";
import Video from "./src/Video.js"
import VideoDetails from "./src/VideoDetails"
import CommentListItem from "./src/CommentListItem.js";
import Likes from "./src/Likes.js"

import video from "../data/video.js";

function App() {
  console.log("Here's your data:", video);

  const [showComments, setShowComments] = useState(true)

	const vanishComments = () => {
		setShowComments( !showComments )
	}

  return (
    <div className="App">
      <Video 
      embedUrl={video.embedUrl} 
      title={video.title}
      />
      <VideoDetails video={video}/>
      <Likes upvotes={video.upvotes} downvotes={video.downvotes}/>
      <button onClick={vanishComments}>
				{showComments ? "Hide" : "Show"} Comments
			</button>

			<hr/>

			{ showComments ? 
				<CommentListItem comments={video.comments}/> :
				null
			}
    </div>
  );
}

export default App;
