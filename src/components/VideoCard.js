import React from 'react'

function VideoCard({ video }) {
  return (
    <div>
      <img
        className="video-thumbnail"
        alt=""
        src={require(`../../public/img/thumbnails/${video.thumbnail}`)}
      ></img>
      <h3 className="video-title">{video.title}</h3>
      <h3 className="video-year">{video.year}</h3>
    </div>
  )
}

export default VideoCard
