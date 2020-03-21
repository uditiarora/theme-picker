import React from 'react';
import data from '../data/data.json';
import ColorPaletteSingle from './ColorPaletteSingle';
function ColorPalette(){
    
    return(
        <div className="row">
            {data.map((data_items) => {
                return <div className="col-sm-3"><ColorPaletteSingle colors={data_items} key={data_items["id"]}/></div>
            })}
        </div>
        
    );
}
export default ColorPalette;