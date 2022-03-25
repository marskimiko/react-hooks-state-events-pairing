import React from 'react'

function VideoDetails({video}) {
  return (
    <>
      <h2>{video.title}</h2>
        <p>{video.views} views | Uploaded {video.createdAt}</p>
    </>
  )
}

export default VideoDetails;