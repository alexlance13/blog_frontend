import React, { Component } from "react";

class EditorComponent extends Component {
  constructor() {
    super();

    this.state = {
      model: "Example text"
    };
  }

  handleModelChange = model => {
    this.setState({
      model
    });
  };

  render() {
    return <FroalaEditor model={this.state.model} onModelChange={this.handleModelChange} />;
  }
}

export default EditorComponent;
