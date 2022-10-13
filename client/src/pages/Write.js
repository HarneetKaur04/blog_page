import React, {useState} from 'react'
import moment from 'moment';
import {useNavigate } from 'react-router-dom';

const Write = () => {
    const navigate = useNavigate();
    var formatDate= new Date();
    var responseDate = moment(formatDate).format('YYMMDD');

    const [addBlogFields, setAddBlogFields] = useState({image:"default.jpg", title:"", author:"", date: responseDate, blog_post:"", favorite: false})

    const handleFormInputToAddBlog = (e) => {
        setAddBlogFields((preValues) => ({
            ...preValues,
            [e.target.name]: e.target.value
          }));
    }
    console.log("addBlogFields", addBlogFields)

    const handleNewBlogPublish = async(e) => {
        e.preventDefault();
        console.log("values of new blog to be added" ,addBlogFields) 
        return await fetch("http://localhost:5000/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(addBlogFields),
        })
        .then((response) => {return response.json();
        })
        .then((data) => {
            console.log("From the post request", data);
            setAddBlogFields(data)
            alert("Successfully Published")
            navigate('/')
        })
      } 
    
  return (
    <div className="write">
      <img
        className="writeImg"
        src="eyes.jpg"
        alt="eyes looking straight"
      />
      <form className="writeForm" onSubmit={handleNewBlogPublish}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
          </label>
          <input 
            id="fileInput" 
            type="file"  
            name="image" 
            onChange={handleFormInputToAddBlog}/>
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            name="title"
            autoFocus={true}
            required
            onChange={handleFormInputToAddBlog}
          />
          <input
            className="writeInput"
            placeholder="Author"
            type="text"
            name="author"
            required
            onChange={handleFormInputToAddBlog}
          />
          {/* <input
            className="writeInput"
            disabled
            value= {responseDate}
            
          /> */}
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            name="blog_post"
            required
            onChange={handleFormInputToAddBlog}

          />
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  )
}

export default Write