import React, {useEffect, useState} from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom';

const SingleBlog = ({singlePost, setSinglePost, clicked, handleDelete}) => {
    const navigate = useNavigate();
    const {state} = useLocation();
console.log("state", state)
    const handleDeleteCheck = () => {
        console.log(state.blog_id)
        handleDelete(state.blog_id)
    }


  return (
    <>
    <div className="singlePost">
    <div className="singlePostWrapper">
      <img
        className="singlePostImg"
        src={state.image}
        alt={state.blog_id}
      />
      <h1 className="singlePostTitle">
      {state.title}
        <div className="singlePostEdit">
          <i className="singlePostIcon far fa-edit"></i>
          <i className="singlePostIcon far fa-trash-alt" onClick={handleDeleteCheck}></i>
        </div>
      </h1>
      <div className="singlePostInfo">
        <span>
          Author:{state.author}
          <b className="singlePostAuthor">
          </b>
        </span>
        <span>{state.date}</span>
      </div>
      <p className="singlePostDesc">
        {state.blog_post}
      </p>
    </div>
  </div>
    </>
  )
}

export default SingleBlog