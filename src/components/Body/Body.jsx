import React, {useState, useEffect} from 'react'; 
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
            alert('error getting items'); 
        });
 
    }
    return(
        <div>
            
            <GalleryList items={items}/> 
    
      </div>
      );
}
export default Body; 

