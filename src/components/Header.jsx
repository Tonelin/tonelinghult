import React from 'react';


export default class Header extends React.Component {
  constructor() {
    super()
  }

  render () {
    const props = document.store;
    const backgroundColor = this.props.props ? this.props.props.backgroundColor : "none";
    const items = this.props.items || [];
    const headerClass = this.props.props ? this.props.props.alignment : "left";
    const title = this.props.props ? this.props.props.title : "";
    // console.log("header", this.props)
    return (
      <div className="tone-header">
        <h2>{title}</h2>
        <ul>
          {items.map((navItem, index) => {
              if(navItem.displayName){
                return (
                  <li key={index} className="">
                    <a className="nav-link" href={"/#/" + navItem.href}>{navItem.displayName}</a>
                  </li>    
                )
              }
            })}
          </ul>
      </div>
          
    );
  }
}
