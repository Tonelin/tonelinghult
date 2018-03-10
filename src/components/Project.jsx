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
    const id = this.props.match.params.id;
    const content = document.store.textContent ? document.store.textContent.projects.filter((item) => {
      return item.href === id;
    })[0] : {
      images: [],
      videos: []
    };
    console.log("content", content)
    return (
        <div className="col text-center">
          {this.getBackGround()}
          <div className="project-wrapper">
            <h2>{content.title}</h2>
            <div className="col-md-12">
              {content.images.map((item, index) => {
                return (
                <div className="col-md-4">
                  <img className="img img-fluid" src={item} alt=""/>
                </div>
                )
              })}
            </div>
            <div className="col-md-12">
              {content.videos.map((item, index) => {
                return (
                <div className="col-md-8">
                  <video controls className="img img-fluid" src={item} alt=""/>
                </div>
                )
              })}
            </div>
          </div>
        </div>
    )
  }
}
