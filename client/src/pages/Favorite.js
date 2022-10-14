import React, {useState, useEffect} from 'react'
import Post from '../components/post'
import Posts from '../components/posts'
import Sidebar from '../components/sidebar'

const Favorite = () => {
    const [favoriteData, setFavoriteData] = useState([])

    useEffect(() => {
        const blogsFavDisplay = async () => {
          fetch("http://localhost:5000/favorites")
            .then((response) => response.json())
            .then((data) => {
                setFavoriteData(data);
                });
              }
              blogsFavDisplay()
        }, []);

        console.log("favoriteDataDisplay", favoriteData)

        // const handleClick = (itemDetails) => {
        //     console.log("Post selected", itemDetails)
        //     setSinglePost(itemDetails);  
        //     navigate('/post', { state:itemDetails}) 
        //        }

  return (
    <>
        <Posts heading="My Favorites" favPostData={favoriteData}/>
        <Sidebar/>
    </>
    
    // </>
  )
}

export default Favorite