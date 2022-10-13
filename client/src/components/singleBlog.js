import React, {useEffect, useState} from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom';

const SingleBlog = () => {
    const navigate = useNavigate();
    const {state} = useLocation();
    console.log("state", state)

    const handleDelete = async(deleteId) => {
        // const deleteId = selectedToDelete.blog_id
      console.log("check deleteId", deleteId)
      await fetch(`http://localhost:5000/blogs/${deleteId}`, {method: "DELETE"})
      .then((response) => response.json())
      .then((data) => {
          console.log("Delete Request Complete frontend", data);
          alert("Successfully Deleted")
          navigate('/')
        //   window.location.reload()
    })
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
          <i className="singlePostIcon far fa-trash-alt" onClick={()=> handleDelete (state.blog_id)}></i>
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