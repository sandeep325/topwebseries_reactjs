import React from 'react';
import ReactDOM from 'react-dom';
import cards_data from './cards_data';
import './index.css';
import Cards from './Cards';


function ncard_fun(val)
{
   return(
      <Cards imgsrc= {val.imgsrc}
             title={val.title}
             seriesname= {val.seriesname}
           watch_btn_link={val.watch_btn_link}
         />

   );
}
ReactDOM.render(<>    <h2 className="heading_style">TOP 6 NETFLIX SERIES</h2>
                             {cards_data.map(ncard_fun)}
        {/* <Cards imgsrc= {cards_data[0].imgsrc} title={cards_data[0].title}
                      seriesname= {cards_data[0].seriesname}
                       watch_btn_link={cards_data[0].watch_btn_link}/>

                   <Cards imgsrc= {cards_data[1].imgsrc} title={cards_data[1].title}
                      seriesname= {cards_data[1].seriesname}
                       watch_btn_link={cards_data[1].watch_btn_link}/>

                        <Cards imgsrc= {cards_data[2].imgsrc} title={cards_data[2].title}
                      seriesname= {cards_data[2].seriesname}
                       watch_btn_link={cards_data[2].watch_btn_link}/>

                       <Cards imgsrc= {cards_data[3].imgsrc} title={cards_data[3].title}
                      seriesname= {cards_data[3].seriesname}
                       watch_btn_link={cards_data[3].watch_btn_link}/> 

                       
                       <Cards imgsrc= {cards_data[4].imgsrc} title={cards_data[4].title}
                      seriesname= {cards_data[4].seriesname}
                       watch_btn_link={cards_data[4].watch_btn_link}/>   */}
                  
                       </>,document.getElementById('root'));
                       