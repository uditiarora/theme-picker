import React from 'react';
import '../css/ColorPaletteSingle.css';

function ColorPaletteSingle(props){
    return(
        <div className="paletteContainer">
            <div className="palette" style = {{
            background: props.colors["1"],
            color: props.colors["textColor"]
            }} > {props.colors["1"]} </div>
            <div className="palette" style = {{
            background: props.colors["2"],
            color: props.colors["textColor"]
            }} > {props.colors["2"]} </div>
            <div className="palette" style = {{
            background: props.colors["3"],
            color: props.colors["textColor"]
            }} > {props.colors["3"]} </div>
            <div className="palette" style = {{
            background: props.colors["4"],
            color: props.colors["textColor"]
            }} > {props.colors["4"]} </div>
            <div className="palette" style = {{
            background: props.colors["5"],
            color: props.colors["textColor"]
            }} > {props.colors["5"]} </div>

        </div>
        
    )
}
export default ColorPaletteSingle;