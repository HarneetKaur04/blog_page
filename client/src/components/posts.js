import React, {useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Post from './post'
import SingleBlog from './singleBlog';

const Posts = ({displaySinglePostOrNot}) => {
    const navigate = useNavigate();
    const [blogsData, setBlogsData] = useState([])
    const [singlePost, setSinglePost] = useState([])
    const [clicked, setClicked] = useState(false)
    

// geeting data from database todisplay different posts    
    useEffect(() => {
        const blogsCardsDisplay = async () => {
          fetch("http://localhost:5000/blogs")
            .then((response) => response.json())
            .then((data) => {
                setBlogsData(data);
                });
              }
              blogsCardsDisplay()
        }, []);

        console.log("blogsCardsDisplay", blogsData)

    const handleClick = (itemDetails) => {
        console.log("Post selected", itemDetails)
        setSinglePost(itemDetails);  
        navigate('/post', { state:itemDetails}) 
           }
console.log("singlePost", singlePost)

    
    const handleDelete = async(blog_id) => {
        // const deleteId = selectedToDelete.blog_id
      console.log("check deleteId", blog_id)
      await fetch(`http://localhost:5000/blogs/${blog_id}`, {method: "DELETE"})
      .then((response) => response.json())
      .then((data) => {
          console.log("Delete Request Complete frontend", data);
          navigate('/')
          window.location.reload()
    })
    }

console.log("singlePost", singlePost)

  return (
    <>
        <h2>Recent Blogs</h2>
        <div className='posts'>
        {blogsData.map((item)=> (
            <Post img ={item.image} title= {item.title} author={item.author} date= {item.date} blog_post={item.blog_post} blog_id={item.blog_id} onClick={()=> handleClick(item)}/>
        ))}  
        
        </div>
        {/* {clicked? (<SingleBlog singlePost={singlePost} clicked={clicked}/>) : null} */}
        
        {/* <SingleBlog singlePost={singlePost} setSinglePost={setSinglePost} handleDelete={handleDelete}/> */}
     </>
  )
}

export default Posts