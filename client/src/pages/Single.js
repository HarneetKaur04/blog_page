import React, {useState, } from 'react'
import { useLocation } from 'react-router-dom';
import Sidebar from '../components/sidebar'
import SingleBlog from '../components/singleBlog'

const Single = () => {
    const [clicked, setClicked] = useState(true)


    // const handlePostClick = (display) => {
    //     console.log("display", display)
    //     setClicked(display)
    // }

  return (
    <div>
        <SingleBlog />
        <Sidebar/>

    </div>
  )
}

export default Single