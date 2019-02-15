import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Overrides.css';




class Cover extends Component{
    constructor(props) {
      super(props)

      this.changeCover = this.changeCover.bind(this)

const image1 = require ('./images/Display2.png')
const image2 = require ('./images/Display3.png')
const image3 = require ('./images/Display4.png')
const image4 = require ('./images/Display5.png')
const image5 = require ('./images/Display6.png')

this.state = {
    index:0,
    imgList: [ image1, image2, image3, image4, image5]
}
    }

changeCover(){
    if (this.state.index +1 === this.state.imgList.length){
        this.setState({
            index:0
        })
    } else {
    this.setState({
        index: this.state.index+1
    })
}}

render(){

    return (  
      <div>
        <br/><br/><br/>
    <div className = "container text-center mt-5 mb-3">
      <img onClick= {this.changeCover} src = {this.state.imgList[this.state.index]} alt= "logo" className="text-center" style={{maxWidth: "50%"}}/>
      <br/>
            <h3 className="pt-0 mt-0 text-muted">Hello ! I am <strong style={{color:"#ed4964"}}>Shashank</strong></h3>
            <h5 className="text-muted mb-5">A User Experience Designer & Developer</h5>
        </div>
    </div>
    );
}
}

export default Cover;