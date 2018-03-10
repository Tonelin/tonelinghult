import React from 'react';
import Background from "./Background.jsx"
import BaseComponent from './BaseComponent.jsx';


export default class Test extends BaseComponent {
  constructor() {
    super("Index")
    this.state = {
      textContent: []
    }
  }

  render () {
    const projects = this.state.textContent.projects ? this.state.textContent.projects : [];
    return (
        <div className="col text-center">
          {this.getBackGround()}
          <h1 id="main-page-title">Test</h1>
        </div>
    )
  }
}
