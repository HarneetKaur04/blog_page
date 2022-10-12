import React, {useEffect, useState} from 'react'
import Post from './post'

const Posts = () => {
    const [blogsData, setBlogsData] = useState([])

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



  return (
    <>
        <h2>Recent Blogs</h2>
        <div className='posts'>
        {blogsData.map((item)=> (
            <Post img ={item.image} title= {item.title} author={item.author} date= {item.date} blog_post={item.blog_post}/>
        ))}  
        </div>
     </>
  )
}

export default Posts