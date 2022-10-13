import React from 'react'
import {  Link } from "react-router-dom";

const Post = ({img, title, author,date,blog_post, blog_id, onClick }) => {

  return (
    <div className="post" >
      <img
        className="postImg"
        src={img}
        alt={title}
        onClick={onClick}

      />
      <div className='postInfo'>
      <hr />
        <span className="postTitle" onClick={onClick}>{title}</span>
        <span className="postAuthor">{author}</span>
        <span className="postDate">{date}</span>
        <hr />
        
      <p className="postDesc">
        {blog_post}
      </p>
      <button className="postRead" onClick={onClick}>Read More</button>
      </div>
    </div>
  )
}

export default Post