import React, {useState} from 'react'
import Posts from '../components/posts'
import Sidebar from '../components/sidebar'
import SingleBlog from '../components/singleBlog'

const Blogs = () => {

  return (
        <div className='singleBlogPost'>
        <Posts />
        <Sidebar/>
        </div>
  )
}

export default Blogs