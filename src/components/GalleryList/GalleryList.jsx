import React from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';



 function GalleryList(props){
 

     return(
         <div>
             
             {props.items.map(item =>(<GalleryItem item={item}/>))}
        
         </div>
     );
 }
 export default GalleryList; 