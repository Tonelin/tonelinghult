import React from 'react';
import Background from "./Background.jsx"
import BaseComponent from './BaseComponent.jsx';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'


export default class About extends BaseComponent {
  constructor() {
    super("About")
    this.state = {
      textContent: []
    }
  }

  render () {
    let projects = document.store && document.store.textContent ? document.store.textContent.projects : [];
    const featured = projects.slice(0,4) || []
    projects = projects.slice(4)
    
    console.log(featured, projects)
    return (
        <div className="col text-center">
          <div className="row">
            <div className="col-md-6 project-preview">
              <img className="img img-fluid" src={featured[0] ? featured[0].images[0] : ""} alt=""/>
            </div>
            <div className="col-md-6 project-preview">
              <div className="row">
                <div className="col-md-12 featured-small">
                  <img style={{maxHeight: "300px", width: "100%"}} className="img img-fluid" src={featured[1] ? featured[1].images[0] : ""} alt=""/>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 featured-small">
                  <img style={{maxHeight: "200px", width: "100%"}} className="img img-fluid" src={featured[2] ? featured[2].images[0] : ""} alt=""/>
                </div>
                <div className="col-md-6 featured-small">
                  <img style={{maxHeight: "200px", width: "100%"}} className="img img-fluid" src={featured[3] ? featured[3].images[0] : ""} alt=""/>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {projects.map((item, index) => {
              return (
                <div className="col-md-4 project-preview">
                  <img className="img img-fluid" src={item.images[0]} alt=""/>
                </div>
              )
            })}
          </div>
          {this.getBackGround()}
        </div>
    )
  }
}
