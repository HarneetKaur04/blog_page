import React from 'react'

const Post = ({img, title, author,date,blog_post  }) => {
  return (
    <div className="post">
      <img
        className="postImg"
        src={img}
        alt=""
      />
      <div className='postInfo'>
      <hr />
        <span className="postTitle">{title}</span>
        <span className="postAuthor">{author}</span>
        <span className="postDate">{date}</span>
        <hr />
        
      <p className="postDesc">
        {blog_post}
      </p>
      </div>
    </div>
  )
}

export default Post