import React from 'react';

 function Cards(props)
 {
     return(  
         <>
       <div className="cards"> 
       <div className="card"> 
             <img src={props.imgsrc} alt= "netflix series  baner"  className="card_img"/>
             <div className="card_info">
               <span className="card_category">{props.title}</span>  
              <h3 className="card_title">{props.seriesname}</h3>
              <a href={props.watch_btn_link} target="blank">
                  <button className="watch_button">Watch Now</button>
              </a>            
             </div>
            </div>
           </div>

         </>
     );
}
 export default Cards;