import React from 'react';
import Background from "./Background.jsx"
import BaseComponent from './BaseComponent.jsx';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'


export default class Project extends BaseComponent {
  constructor() {
    super("About")
    this.state = {
      textContent: []
    }
  }

  render () {
    const title = this.props.match.params.id;
    return (
        <div className="col text-center">
          {this.getBackGround()}
          <h1 id="main-page-title">{title}</h1>
        </div>
    )
  }
}
