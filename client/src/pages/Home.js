import React from 'react'
import Header from '../components/header'
import Posts from '../components/posts'
import Sidebar from '../components/sidebar'

const Home = () => {
  return (
    <>
        <Header/>
      <div className='home'>
        <Posts/>
        <Sidebar/>
      </div>
    </>
  )
}

export default Home