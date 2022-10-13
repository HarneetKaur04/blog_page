import React, {useState} from 'react'
import Header from '../components/header'
import Posts from '../components/posts'
import Sidebar from '../components/sidebar'
import SingleBlog from '../components/singleBlog'

const Home = () => {

  const [postClicked, setPostClicked] = useState(false)


  const displaySinglePostOrNot = async (answer) => {
      console.log("answer", answer)
      setPostClicked(answer)
      
  }
  
  return (
    <>
        <Header/>
      <div className='home'>
      <Posts />
        <Sidebar/>
      </div>
    </>
  )
}

export default Home