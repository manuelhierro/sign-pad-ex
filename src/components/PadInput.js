import React from 'react';
import './DesingContainer.css';

const onDrop = (ev, a) => {
 const back_color = a;
 document.getElementById(ev.target.id).style.backgroundColor = back_color;
}

const PadInput = props => {
    return(
         <div className='pad-middle'>
            <h5>Drag and Drop colors:</h5>
                
                <div
                    id = 'mid1' 
                    onDragOver={e=> {
                        onDrop(e, props)}}
                        className='mid-pad-circle1'>
                </div>

                <div 
                    id = 'mid2'
                    onDragOver={e=> {
                    onDrop(e, props)}}
                    className='mid-pad-circle2'>
                </div>

                <div
                    id = 'mid3' 
                    onDragOver={e=> {
                        onDrop(e, props)}}
                        className = 'mid-pad-circle3'>
                </div>

                

         </div>
    );                    
}

export default PadInput;
