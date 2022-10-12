import React from 'react'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://media-exp1.licdn.com/dms/image/C5603AQGX50b82Rl71Q/profile-displayphoto-shrink_200_200/0/1653429597671?e=1671062400&v=beta&t=dfsPxac6BfBPksQz54Ic5u0Zl4P_5xQkjWpQoW_chIA"
          alt=""
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
              Acylic
          </li>
          <li className="sidebarListItem">
              Procreate
          </li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
            <i className="topIcon fab fa-facebook-square"></i>
            <i className="topIcon fab fa-instagram-square"></i>
            <i className="topIcon fa-brands fa-linkedin"></i>
            <i className="topIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  )
}

export default Sidebar