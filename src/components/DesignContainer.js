import React from "react";
import "./DesingContainer.css";
import PadInput from "./PadInput";
import DesignBoard from "./DesignBoard";

class DesingPad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      desactivate: true,
      buttonColor: ""
    };

    this.updateColor = this.updateColor.bind(this);
  }

  updateButton = () => {
    this.setState(prevProps => ({ desactivate: !prevProps.desactivate }));
  };

  updateColor = buttonColor => {
    this.setState({ buttonColor });
  };

  render() {
    const desactivate = this.state.desactivate;

    return (
      <div className="pad">
        <h1 className="primary,">Color Board Simulator</h1>
        <button id="edit_btn" className="pad-edit" onClick={this.updateButton}>
          Edit
        </button>
        {desactivate === false ? "" : <DesignBoard />}
        <PadInput />
      </div>
    );
  }
}

export default DesingPad;
