import React, {useState} from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import moment from 'moment';

const SingleBlog = () => {
    var formatDate= new Date();
    var responseDate = moment(formatDate).format('YYMMDD');
    const navigate = useNavigate();
    const {state} = useLocation();
    console.log("state", state)

    const [editPost, setEditPost] = useState(false)
    const [editBlogFields, setEditBlogFields] = useState(state)
    const [clickedSave, setClickedSave] = useState(false)


    const handleDelete = async(deleteId) => {
      console.log("check deleteId", deleteId)
      await fetch(`http://localhost:5000/blogs/${deleteId}`, {method: "DELETE"})
      .then((response) => response.json())
      .then((data) => {
          console.log("Delete Request Complete frontend", data);
          alert("Successfully Deleted")
          navigate('/')
    })
    }

    const handleEditClick = (editBlog)=> { 
        console.log("editContact Details = ", editBlog)
        setEditPost(true) 
     }

     const handleFormInputToAddBlog = (e) => {
        setEditBlogFields((preValues) => ({
            ...preValues,
            [e.target.name]: e.target.value
          }));
    }


     const handleEditedBlog = async (e) => {
        e.preventDefault()
        console.log("check who is being updated", editBlogFields)
        const updateBlogId = editBlogFields.blog_id;
        return await fetch(`http://localhost:5000/blogs/${updateBlogId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editBlogFields),
        })
        .then((response) => {return response.json();
        })
        .then((data) => {
            console.log("From the PUT request", data);
            setEditPost(false)
            setEditBlogFields(data[0])
        })

     }

     const handleLike = async (likedId) => {
        setClickedSave(!clickedSave)
        console.log("likedButtonDetails = ", likedId)
        const id = likedId.blog_id
        return await fetch(`http://localhost:5000/favorites/${id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(likedId),
        })
        .then((response) => {return response.json();
        })
        .then((data) => {
            console.log("From the post request", data);
            navigate('/favorite')
        })
     }
     console.log("editBlogFields", editBlogFields)

  return (
    <>
{!editPost ?  (
  <div className="singlePost">
    <div className="singlePostWrapper">
      <img
        className="singlePostImg"
        src={editBlogFields.image}
        alt={editBlogFields.blog_id}
      />
      <h1 className="singlePostTitle">
      {editBlogFields.title}
        <div className="singlePostEdit">
          <i className="singlePostIcon fa-regular fa-heart" onClick={()=> handleLike(editBlogFields)}>{editBlogFields.favorite === true? "Unsave" : "Save"}</i>
          <i className="singlePostIcon far fa-edit" onClick={()=> handleEditClick(editBlogFields)}></i>
          <i className="singlePostIcon far fa-trash-alt" onClick={()=> handleDelete(editBlogFields.blog_id)}></i>
        </div>
      </h1>
      <div className="singlePostInfo">
        <span>
          Author:{editBlogFields.author}
          <b className="singlePostAuthor">
          </b>
        </span>
        <span>{editBlogFields.date}</span>
      </div>
      <p className="singlePostDesc">
        {editBlogFields.blog_post}
      </p>
    </div>
  </div>) :
  ( <div className="write" >
      <img
        className="writeImg"
        src={editBlogFields.image}
        alt={editBlogFields.blog_id}
      />
      <form className="writeForm" onSubmit={handleEditedBlog} >
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
          </label>
          <input 
            id="fileInput" 
            type="file"  
            name="image" 
            onChange={handleFormInputToAddBlog}
           />
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            name="title"
            autoFocus={true}
            value={editBlogFields.title}
            required
            onChange={handleFormInputToAddBlog}
          />
          <input
            className="writeInput"
            placeholder="Author"
            type="text"
            name="author"
            value={editBlogFields.author}
            required
            onChange={handleFormInputToAddBlog}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            name="blog_post"
            value={editBlogFields.blog_post}
            required
            onChange={handleFormInputToAddBlog}
          />
        </div>
        <button className="writeSubmit" type="submit">
          Save
        </button>
      </form>
    </div>
  )
}
    </>
  )
}

export default SingleBlog