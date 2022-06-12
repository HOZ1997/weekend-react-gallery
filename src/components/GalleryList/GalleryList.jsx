import React, {useState} from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';



 function GalleryList(props){
 

     return(
         <div>
             <h2>GalleryList</h2>
            {props.itemArray.map(item =>(<GalleryItem item={item}/>))}
            
         </div>
     );
 }
 export default GalleryList; 