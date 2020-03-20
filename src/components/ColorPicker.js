import React, {Component} from 'react';
import {SketchPicker} from 'react-color';
import '../css/ColorPicker.css';
class ColorPicker extends Component{
    state = {
        tab_color: '#fff'
    };
    handleColorChange = (color) => {
        this.setState({tab_color: color.hex});
    };
    render(){
        return(
            <div className="col-sm">
                <SketchPicker className="col-sm-12"
                    color = {this.state.tab_color}
                    onChangeComplete = {this.handleColorChange}

                />
                <br>
                </br>
                <div className="col-sm-10 shadow"style = {{
                        background: this.state.tab_color,
                        height: 75
                    }}
                >
                </div>
            </div>
        );
    }
}
export default ColorPicker;