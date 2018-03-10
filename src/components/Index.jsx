import React from 'react';
import Background from "./Background.jsx"
import BaseComponent from './BaseComponent.jsx';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'


export default class Index extends BaseComponent {
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
        </div>
    )
  }
}
