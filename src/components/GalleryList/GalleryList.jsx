import React from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';



const GalleryList=(props)=>{
 

     return(
         <div className= "GalleryList">
        <ul>
             {props.items.map(thisItem =>(<GalleryItem items={thisItem} getItems={props.getItems}/>))}
        </ul>
         </div>
     );
 }
 export default GalleryList; 