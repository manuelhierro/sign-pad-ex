import React from 'react';
import './DesingContainer.css';

const handleDragStart = (ev, props) => {
    const color = ev.target.value;
      props.updateColor(color);
};

const DesignBoard = props => {
    return(
        <div 
            id = 'colorbox'
            className='pad-left'>

            <button 
                id='bt1'
                className='left-bt-color1'
                value = 'blue'
                draggable = 'true'
                onDragStart={(ev) => {
                    handleDragStart(ev, props);
                }}>
                    
                    Blue
            </button>
            
            <button 
                id='bt2'
                className='left-bt-color1'
                value = 'red'
                draggable = 'true'
                onDragStart={(ev) => {
                    handleDragStart(ev, props);
                }}>
                    
                    Red
            </button>
            
            <button 
                id='bt3'
                className='left-bt-color1'
                value = 'yellow'
                draggable = 'true'
                onDragStart={(ev) => {
                    handleDragStart(ev, props);
                }}>
                    
                    Yellow
            </button>
            <br />
        </div>

    );

}
export default DesignBoard;