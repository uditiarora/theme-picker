import React from 'react';
import '../css/ThemePicker.css';
import ColorPicker from './ColorPicker';
import ColorPalette from './ColorPalette';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
function ThemePicker() {
   function handleSetActive(to) {
        console.log(to);
    };
    return(
        <div>
            <div className = "main ">
            <div className = "container-fluid">
                <div>
                    <p className="text1 script"><span>Theme Picker</span></p>
                    <p className="script"><span>5 colors are all you need !</span></p>
                </div>
                <br></br>
                <div className="row row-flex">
                        <ColorPicker />
                        <ColorPicker />
                        <ColorPicker />
                        <ColorPicker />
                        <ColorPicker />
                </div>
                <div>
                    <p className="script"><span>Scroll down to see some of our themes</span></p>   
                    <Link activeClass="active" to="test1" spy={true} smooth={true} offset={50} duration={500} onSetActive={handleSetActive}>
                        <div  className="scroll-down"><ExpandMoreIcon className = "my_icon" style={{ fontSize: 80 }}/> </div>
                    </Link>
                    
                </div>    
            </div>            
            </div>
            <div>
            <Element name="test1" >
                <div className="main2" > 
                   <div className="container"><ColorPalette /> </div>
                </div>
            </Element>
            </div>
        </div>
            
    );
}
export default ThemePicker;