import React, {useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Post from './post'
import SingleBlog from './singleBlog';

const Posts = ({displaySinglePostOrNot, heading, favPostData}) => {
    console.log("favPostData", favPostData)
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

    


console.log("singlePost", singlePost)

  return (
    <>
        <h2>{heading ? heading : "Recent Blogs"}</h2>
        <div className='posts'>
            {favPostData? (favPostData.map((item)=> (
                <Post img ={item.image} title= {item.title} author={item.author} date= {item.date} blog_post={item.blog_post} blog_id={item.blog_id} onClick={()=> handleClick(item)}/>
            ))):
            (blogsData.map((item)=> (
                <Post img ={item.image} title= {item.title} author={item.author} date= {item.date} blog_post={item.blog_post} blog_id={item.blog_id} onClick={()=> handleClick(item)}/>
            )) )
             }
        
        
        </div>
     </>
  )
}

export default Posts