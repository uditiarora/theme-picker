import React from 'react';
import '../css/ThemePicker.css';
import ColorPicker from './ColorPicker';
function ThemePicker() {
    return(
        <div className = "main ">
           <div className = "container-fluid">
            <div>
                <p class="text1 script"><span>Theme Picker</span></p>
                <p class="script"><span>5 colors are all you need!</span></p>
            </div>
            <div className="row row-flex">
                    <ColorPicker />
                    <ColorPicker />
                    <ColorPicker />
                    <ColorPicker />
                    <ColorPicker />
               </div>
                
           </div>            
        </div>
    );
}
export default ThemePicker;