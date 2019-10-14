import React, { Component } from 'react';
import CatComponent from "./CatComponent.js";



class CatComponent extends Component {
  render() {
    return (
      <div className="bar" id="cat">
        <img src="/cat.gif" />
      </div>
    );
  }
}
export default CatComponent;
