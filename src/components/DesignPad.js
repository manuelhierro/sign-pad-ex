import React from 'react';
import './DesingContainer.css';
import DesignBoard from'./DesignBoard'; 
import PadInput from './PadInput';

class DesingPad extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            desactivate: true,
            buttonColor: ''
        };

        this.updateColor = this.updateColor.bind(this);
    }

    updateButton = ev => {
        const {desactivate} = this.state;
        if(desactivate === true){
            this.setState({ desactivate: true});
    
        }else {
            this.setState({ desactivate: false});
        }
    };

    updateColor = buttonColor => {
        this.setState({ buttonColor});
    }

    render(){
        const desactivate = this.state;
        const buttonColor = this.state;
        const updateButton = this;
        const updateColor = this;
        return(
            <div className= 'pad'>
                <h1 className='primary,'>Color Board Simulator</h1>
                <button
                    id='edit_btn'
                    className='pad-edit'
                    onClick={updateButton}
                 >
                    Edit
                </button>
                {desactivate === false ? ( '' ) : (

                <PadInput 
                    updateColor={updateColor}
                />
                )}
                <DesignBoard 
                color={buttonColor}
                />
            </div>
        )
    }
}

export default DesingPad;