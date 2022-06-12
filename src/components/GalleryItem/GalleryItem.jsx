//import axios from 'axios';
import React from 'react';
//import ReactDOM from 'react-dom';
import {useState} from 'react'; 
import './GalleryItem.css';

function GalleryItem(props){
    const [show, setShow] = useState(true);
    
    const toggleShow = ()=>{
    setShow(!show);
    }
    const [clicks, setClicks] = useState (0);//use state set ups the hook and & intial value 
    
    const handleLikeClick =()=>{     
        setClicks(clicks +1); 
    }

    //     axios.put(`/gallery/like/id}`).then((response)=>{
    //         console.log(response.data); 
    //     }).catch((err) =>{
    //         console.log(err);
    //         alert('error adding like)'); 
    //     });
    // }
 


return(
    <ul className="item">
        <div onClick={toggleShow} > 
        {
            show? 
            <img src={props.item.path}/>
            :
            <p className='pictureDesription'>{props.item.description}</p>
}       
        </div>
        <p><button onClick={handleLikeClick}>Like</button> Likes: {clicks}</p>
    </ul>
        
    )
}
 export default GalleryItem; 