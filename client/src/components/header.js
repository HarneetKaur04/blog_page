import React from 'react'

const Header = () => {
  return (
    <div className="header">
    <div className="headerTitles">
      <img className ="headerTitleSm" src= "https://media-cdn.tripadvisor.com/media/photo-s/16/da/cf/6b/art-bar-logo.jpg"></img>
      <span className="headerTitleLg">BLOG</span>
    </div>
    <img
      className="headerImg"
      src="/eyes.jpg"
      alt="eye image"
    />
  </div>
  )
}

export default Header