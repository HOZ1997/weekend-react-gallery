import React, {useState, useEffect} from 'react'; //{useState, useEffect}
import axios from 'axios'; 
import GalleryList from '../GalleryList/GalleryList'; 


function Body(props){
    const [items, setItems] = useState ([]); 
    useEffect(()=>{
       getItems();
    },[]);//empty array tells to only run once

    const getItems=()=>{
        axios.get('/gallery').then((response)=>{
            setItems(response.data); 
        }).catch((err) =>{
            console.log(err);
            alert('error getting items)'); 
        });
        setItems([{
            path: 'imagePath',
            description: 'description',
            likes: 'likes'

        }]);
    }
    return(
        <div>
            <h2>Body</h2> 
            <GalleryList itemArray={items}/> 
        
      </div>
      );
}
export default Body; 

