import React, { Component } from 'react';
import logo from './logo.svg';
import './bootstrap-4.1.3-dist/css/bootstrap.min.css';
import './W3s.css';
import './Overrides.css';
import "animate.css/animate.min.css";
import LazyLoad from 'react-lazyload';
import ScrollAnimation from 'react-animate-on-scroll';
import posed from 'react-pose';
import Anime from 'react-anime';
import {BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import ThesisBody, {UdBody, OmaBody, IllustrationsBody, SkjnBody, 
  HousingBody, DfhBody, NgBody, BitsBody, AiBody} from './PageContent';

import img from './images';
import Cover from './Cover';


class Page extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact  render={
            ()=>{
              return (<HomePage/>);
            }
            }/>
            <Route path="/About" exact strict render={
            ()=>{
              return (<AboutPage/>);
            }
            }/>
            <Route path="/Resume" exact strict render={
            ()=>{
              return (img[48]);
            }
            }/>
            <Route path="/Thesis" exact strict render={
            ()=>{
              return (<ThesisPage/>);
            }
            }/>
            <Route path="/UD" exact strict render={
            ()=>{
              return (<UdPage/>);
            }
            }/>
            <Route path="/OMA" exact strict render={
            ()=>{
              return (<OmaPage/>);
            }
            }/>
            <Route path="/BITS" exact strict render={
            ()=>{
              return (<BitsPage/>);
            }
            }/>
            <Route path="/NG" exact strict render={
            ()=>{
              return (<NgPage/>);
            }
            }/>
            <Route path="/Illustrations" exact strict render={
            ()=>{
              return (<IllustrationsPage/>);
            }
            }/>
            <Route path="/Housing" exact strict render={
            ()=>{
              return (<HousingPage/>);
            }
            }/>
            <Route path="/Dfh" exact strict render={
            ()=>{
              return (<DfhPage/>);
            }
            }/>
            <Route path="/Skjn" exact strict render={
            ()=>{
              return (<SkjnPage/>);
            }
            }/>
             <Route path="/AgricultureIntelligence" exact strict render={
            ()=>{
              return (<AiPage/>);
            }
            }/>
        </div>  
      </Router>
    );
  }
}


// Display Page code compilations

class HomePage extends Component {
  render() {
    return (
    <div className="container">
       
       <Cover/>
       <Navbar />
       <Projects/>
       <hr/>
       <Skills/>
       <Footer/>
       </div>
    );
  }
}

class AboutPage extends Component {
  render() {
    return (
  <div className="container">
         <Navbar2 />
         <AboutMe/>
         <hr className="mb-5 mt-5"/>
         <Education/>
         <hr className="mb-5 mt-5"/>
         <Experience/>
         <Footer />
  </div>
    );
  }
}

class ThesisPage extends Component {
  render() {
    return (
    <div className="container">
      <Navbar3 />
      <ThesisBody/>
      <Footer/>
    </div>
    );
  }
}

class OmaPage extends Component {
  render() {
    return (
    <div className="container">
      <Navbar3 />
      <OmaBody/>
      <Footer/>
    </div>
    );
  }
}

class AiPage extends Component {
  render() {
    return (
    <div className="container">
      <Navbar3 />
      <AiBody/>
      <Footer/>
    </div>
    );
  }
}

class HousingPage extends Component {
  render() {
    return (
    <div className="container">
      <Navbar3 />
      <HousingBody/>
      <Footer/>
    </div>
    );
  }
}

class UdPage extends Component {
  render() {
    return (
    <div className="container">
      <Navbar3 />
      <UdBody/>
      <Footer/>
    </div>
    );
  }
}

class BitsPage extends Component {
  render() {
    return (
    <div className="container">
      <Navbar3 />
      <BitsBody/>
      <Footer/>
    </div>
    );
  }
}

class IllustrationsPage extends Component {
  render() {
    return (
    <div className="container">
      <Navbar3 />
      <IllustrationsBody/>
      <Footer/>
    </div>
    );
  }
}

class NgPage extends Component {
  render() {
    return (
    <div className="container">
      <Navbar3 />
      <NgBody/>
      <Footer/>
    </div>
    );
  }
}

class DfhPage extends Component {
  render() {
    return (
    <div className="container">
      <Navbar3 />
      <DfhBody/>
      <Footer/>
    </div>
    );
  }
}

class SkjnPage extends Component {
  render() {
    return (
    <div className="container">
      <Navbar3 />
      <SkjnBody/>
      <Footer/>
    </div>
    );
  }
}



// Components - Reusable

/*class Navbar extends Component {
  render(){  
  return(
    <nav className="navbar sticky-top">
    <div className="container">
    <div clasName="navbar-right">
      <ul className="nav nav-tabs mx-auto text-center">
    <li className="nav-item">
      <a className="nav-link text-secondary" href="/">Portfolio</a>
    </li>
    <li className="nav-item">
      <a className="nav-link text-secondary" href="Writing">Blog</a>
    </li>
    <li className="nav-item">
      <a className="nav-link text-secondary" href="About">About</a>
    </li>
    <li className="nav-item">
      <a className="nav-link text-secondary" href={img[48]} target="_blank">Resume</a>
    </li>
    </ul>
    </div>
    </div>
    </nav> 
    )
  }
}*/

class Navbar extends Component {
  render(){  
  return(
    <nav className="navbar fixed-top shadow-sm">
    <div className="container">
    <a id="navImage" href="/">
    <img className="nav-brand" src = {img[42]} alt= "logo" style={{maxWidth: "8%"}}></img>
    </a>
    <div clasName="navbar-nav">
     <h5> <ul className="nav nav-tabs mx-auto text-center">
    <li className="nav-item">
      <a className="nav-link text-danger" href="/">Portfolio</a>
    </li>
    <li className="nav-item">
     <a className="nav-link text-dark" href="https://medium.com/@shashankjain_61975" target="_blank">Blog</a>
    </li>
    <li className="nav-item">
      <a  className="nav-link text-dark" data-toggle="modal" data-target="#myModal" href="About">About</a>
    </li>
    <li className="nav-item">
      <a className="nav-link text-dark" href={img[48]} target="_blank">Resume</a>
    </li>
    </ul>
    </h5>
    </div>
    </div>
    </nav> 
    )
  }
}


class Navbar2 extends Component {
  render(){  
  return(
    <nav className="navbar fixed-top shadow-sm">
    <div className="container">
    <a id="navImage" href="/">
    <img className="nav-brand" src = {img[42]} alt= "logo" style={{maxWidth: "8%"}}></img>
    </a>
    <div clasName="navbar-nav">
     <h5> <ul className="nav nav-tabs mx-auto text-center">
    <li className="nav-item">
      <a className="nav-link text-dark" href="/">Portfolio</a>
    </li>
    <li className="nav-item">
      <a className="nav-link text-dark" href="https://medium.com/@shashankjain_61975" target="_blank">Blog</a>
    </li>
    <li className="nav-item">
      <a  className="nav-link text-danger" data-toggle="modal" data-target="#myModal" href="About">About</a>
    </li>
    <li className="nav-item">
      <a className="nav-link text-dark" href={img[48]} target="_blank">Resume</a>
    </li>
    </ul>
    </h5>
    </div>
    </div>
    </nav> 
    )
  }
}

class Navbar3 extends Component {
  render(){  
  return(
    <nav className="navbar fixed-top shadow-sm">
    <div className="container">
    <a id="navImage" href="/">
    <img className="nav-brand" src = {img[42]} alt= "logo" style={{maxWidth: "7%"}}></img>
    </a>
    <div clasName="navbar-nav">
    <ul className="nav nav-tabs mx-auto text-center">
    <li className="nav-item">
      <a className="nav-link text-dark" href="/">Portfolio</a>
    </li>
    <li className="nav-item">
      <a className="nav-link text-dark" href="https://medium.com/@shashankjain_61975" target="_blank">Blog</a>
    </li>
    <li className="nav-item">
      <a  className="nav-link text-dark" data-toggle="modal" data-target="#myModal" href="About">About</a>
    </li>
    <li className="nav-item">
      <a className="nav-link text-dark" href={img[48]} target="_blank">Resume</a>
    </li>
    </ul>
    </div>
    </div>
    </nav> 
    )
  }
}



/*function Cover() {
    return (  
      <div>
        <br/><br/><br/>
    <div className = "container text-center mt-5">
      <img src = {img[42]} alt= "logo" className="text-center mb-3" style={{maxWidth: "20%"}}/>
      <br/>
            <h3 className="pt-0 mt-0 text-muted">Hello ! I am <strong style={{color:"#ed4964"}}>Shashank</strong></h3>
            <h5 className="text-muted mb-5">A User Experience Designer & Developer</h5>
        </div>
        <div>
    </div>
    </div>
    )
  }
  */

function AboutMe (){
  return(
    <div className="container mt-5">
    <br/><br/><br/>
      <div className="row">
        <div className="col-lg-4 col-sm-12 text-center">
          <div className = "shadow p-3 mb-5 bg-white rounded">
          <img src={img[99]} className="rounded-circle border" style={{maxWidth: "100%"}} alt="Display" />  
          </div>
          <h3>Hello, nice to meet you.</h3>
          <p>I am Shashank, and I design experiences.</p>
          <a className="text-secondary" href={img[48]} target="_blank">Download Resume</a>
        </div>
        <div className="col-lg-1 col-md-0"></div>
        <div className="col-lg-7 col-sm-12">
          <p className="text-justify">Architect turned UX designer, I have worked across multiple design fields. 
          Being passionate about design, I have been designing physical and virtual experiences for 
          people for last 7 years . It has helped me understand how people respond to forms, colors, 
          shapes and other intangible aspects. Apart from design, I like to indulge in learning new things, photography, reading, playing basketball, hiking, and innovating. 
          Cooking is reserved for lazy days with heavy rains. <br/><br/><br/>
           </p>
             <p className="text-justify"><strong>"God lies in the Details".</strong> <br/><br/> With an understanding that each small component is equally inportant as the whole itself, I strive 
             to refine each component to its last detail. This refinement often always calls for multiple design iterations, backed by user research, which I feel is extremely important part of any design process.
              My interests lie in the field of designing interfaces and interactions for education and learning 
          technologies, developing online collaborative work environments and productivity softwares. I am also 
          interested in designing products and experiences for upcoming technologies like VR and AR, that have the potential to increase the immersive experiences, and opens new forms of interaction. </p>
        </div>
      </div>
    </div>
  )
}

function Education(){
  return(
    <div className="container">
      <div className="row">
        <div className="col-4 text-center mr-5">
          <h4>Education</h4>
        </div>
        <div className="col-lg-6 col-sm-12 ml-5">
          <h5>MS in Information Studies - HCI and UX design</h5>
          <p className="text-secondary"><i> School of Information, University of Texas at Austin 
            <br/>2018 - 2020 <br/> GPA : 4.0</i></p>
              <br/> <br/>
          <h5>Bachelor of Architecture </h5>
          <p className="text-secondary"> <i>School of Planning and Architecture, Delhi 
            <br/>2011 - 2016 <br/> GPA : 4.0</i></p>
        </div>
      </div>
    </div>
  )
}

function Experience(){
  return(
    <div className="container">
      <div className="row">
        <div className="col-4 text-center mr-5">
          <h4>Experience</h4>
        </div>
        <div className="col-lg-6 col-sm-12 ml-5">
        <div>
          <h5>Graduate Research Assistant | University of Texas, Austin</h5>
          <p className="text-secondary"><i>January 2019 - Present</i></p>
          <div className="text-secondary">
          <p><i><strong>Projects :</strong> Developing voice interface based educational applications for children for Amazon Alexa using Node.js</i></p>
          <p><i><strong>Roles :</strong> UX designer and developer</i></p>
        </div>
        </div>
        <br/><br/>
        <div>
          <h5>Graduate Research Assistant | University of Texas, Austin</h5>
          <p className="text-secondary"><i>January 2019 - Present</i></p>
          <div className="text-secondary">
          <p><i><strong>Projects :</strong> Volunteer research assistant at Image and Video Computing Lab at UT Austin. Developing web-based tools to support the creation of technologies for Artificial Intelligence and Accessibility.</i></p>
          <p><i><strong>Roles :</strong> UX designer and developer </i></p>
        </div>
        </div>
        <br/><br/>
        <div>
          <h5>Graduate Assistant | University of Texas, Austin</h5>
          <p className="text-secondary"><i>November 2018 - January 2019</i></p>
          <div className="text-secondary">
          <p><i><strong>Projects :</strong> Generated metadata for a large collection of image files ( tiff format ), and maintained an online database of these images for search, preservation, and access using Archivematica </i></p>
          <p><i><strong>Roles :</strong> UX designer and developer</i></p>
        </div>
        </div>
        <br/><br/>
        <div>
          <h5>Architect | WAL+L Architects, New Delhi</h5>
          <p className="text-secondary"><i>January 2018 - April 2018</i></p>
          <div className="text-secondary">
          <p><i><strong>Projects :</strong> Affordable Housing Design | Skill Development Center</i></p>
          <p><i><strong>Roles :</strong> Concept Design, Graphic Design, Client Presentations, 3D Modelling</i></p>
        </div>
        </div>
        <br/><br/>
        <div>
          <h5>Architect | Morphogenesis, New Delhi</h5>
          <p className="text-secondary"><i>July 2016 - August 2017</i></p>
          <div className="text-secondary">
          <p><i><strong>Projects :</strong> Riverfront Ghat Development | Highrise Tower</i></p>
          <p><i><strong>Roles :</strong> Architectural Design, 3D Modelling, Presentations, Site supervision, MEP Consultant Cordination, Preparing Working Drawings</i></p>
        </div>
        </div>
        <br/><br/>
        <div>
          <h5>Architectural Intern | Hexagramm Designs, New Delhi</h5>
          <p className="text-secondary"><i>January 2015 - July 2015</i></p>
          <div className="text-secondary">
          <p><i><strong>Projects :</strong> Urban Landscape Design | Origami Installations and interior Design | Hotel Design</i></p>
          <p><i><strong>Roles :</strong> Architectural Design, Landscape design, Interior Design, Furn1ture Design, 3D Modelling, Presentations</i></p>
        </div>
        </div>
        <br/><br/>
        <div>
          <h5>Architectural Intern | School of Planning and Architecture</h5>
          <p className="text-secondary"><i>April 2014 - July 2014</i></p>
          <div className="text-secondary">
          <p><i><strong>Projects :</strong> Space Audit and Optimization for Ministry of Human Resource Development, Govt. of India</i></p>
          <p><i><strong>Roles :</strong> Measured Drawing, Space and Work-Flow Optimization, Presentation</i></p>
        </div>
        </div>
        </div>
      </div>
    </div>
  )
}

function Skills(){
  return(
    <div className="container">
    
      <h4 className="text-center mb-5 mt-5 text-dark">Skills</h4>
      <div className="row text-center">
        <div className="col-sm-12 col-md-6 col-lg-4 text-center">
        <div className="shadow p-3 mb-5 bg-white rounded">
          <h5 className= "text-dark"> Design<strong style={{color:"red"}}>.</strong> </h5> 
          <p className="text-muted"> User Research | Rapid Prototyping | WireFraming | User Persona | 
          Usability Testing | Story Boarding | Illustration Design | Graphic Design</p>
            </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 text-center">
        <div className="shadow p-3 mb-5 bg-white rounded">
          <h5 className= "text-dark"> Tools<strong style={{color:"red"}}>.</strong> </h5> 
            <p className="text-muted">Sketch | Invision | Figma | Photoshop | Illustrator | Indesign | Animate | Adobe XD | AutoCAD | Sketchup</p>
            <br/>
            </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 text-center">
        <div className="shadow p-3 mb-5 bg-white rounded">
          <h5 className= "text-dark"> Development<strong style={{color:"red"}}>.</strong> </h5> 
          <p className= "text-muted">React.js | Javascript | HTML | CSS | Bootstrap </p>
              <br/><br/><br/>
            </div>
        </div>
    </div>
  
    </div>
  )
}

function Tile (props) {
  return(
  <a className="col-sm-12 col-md-6 col-lg-4 w3-hover-opacity" style={{textDecoration : "none"}} href={props.link}>
    
   <div className = "shadow p-3 mb-5 bg-white rounded">
    <section className="card mx-auto">
      <img className="card-img-top" src={props.image}></img>
      <div className="card-body">
        <h4 className="card-title text-main text-dark">{props.title}</h4>
        <p className="card-text text-muted"> {props.description} </p>
        <h6 className="card-link text-secondary"> {props.fields} </h6>
      </div>
      </section>
    </div>
    </a>

  )
}



class Projects extends Component{
  constructor(props) {
    super(props)
    this.state = {
        projects : [
          
          {
            id : 9,
            link : "/Dfh",
            image : img[7],
            title: "Sense.i",
            description: "Technology and Design to improve mental healthcare for patients.",
            fields: "UX Design | Health Informatics"
          },
          {
            id : 4,
            link : "/OMA",
            image : img[3],
            title: "OMA",
            description: "Handy app to stay connected with your team, and manage your workplace.",
            fields: "UX Design | Research "
          },
          {
            id : 2,
            link : "/AgricultureIntelligence",
            image : img[5],
            title: "Agriculture Intelligence(AI)",
            description: "Artificial Intelligence to assist Urban Farming and Home Gardens ",
            fields: "Product | Design "
          },
          {
            id : 7,
            link : "/Skjn",
            image : img[2],
            title: "Portfolio Website",
            description: "Personal portfolio website. Grounds to experiment and test new code.",
            fields: "Development | React"
          },
          {
            id : 5,
            link : "/BITS",
            image : img[8],
            title: "BITS",
            description: "Compete with your friends in an engaging quiz game in a battle of wits.",
            fields: "UX Design | Game Design "
          },
          
          {
            id : 1,
            link : "/Thesis",
            image : img[0],
            title: "Residential School",
            description: "Smart school based on  new technology and teaching methods. ",
            fields: "Architecture | User Research "
          },
          {
            id : 6,
            link : "/NG",
            image : img[4],
            title: "Namami Gange",
            description: "Riverfront Redevlopment along the river Ganges.",
            fields: "Urban Design | User Research "
          },
          {
            id : 3,
            link : "/UD",
            image : img[1],
            title: "Urban Design",
            description: "International Work Center, consisting of Offices, Mall, and Hotel.",
            fields: "Architecture | Design "
          },
          {
            id : 2,
            link : "/Housing",
            image : img[6],
            title: "Housing",
            description: "Inclusive, healthy, and sustainable housing community. ",
            fields: "Architecture | Design "
          }
        ]
    }
  }



render() {
  return (
       <div className="row">
          {this.state.projects.map(Tile)}
          </div>
  )
}
} 


class Footer extends Component{
  render(){
    return(
      
      <div className="container" id="Footer">
      <hr className="mb-3"/>
        <div className="row">
          <div className="col-12 text-center">
          <h4 className="mb-4 text-dark">Connect</h4>
          </div>
        </div>
        <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-4 text-left"> 
            <p className="text-secondary">+1-201-884-0830</p>
            <p className="ml-3 text-secondary mb-5">Austin, Texas</p>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 text-center"> 
            <p className="text-secondary">sjain@utexas.edu</p>
            <p className="text-center text-secondary"><p>
            <a href="https://www.linkedin.com/in/shashank-jain93/" target="_blank">LinkedIn </a>  |  <a href="https://medium.com/@shashankjain_61975" target="_blank">Medium</a>  |  <a href="https://www.instagram.com/shashank.jain93/" target="_blank">Instagram</a>  |  <a href="https://www.facebook.com/shashank.jain93" target="_blank">Facebook</a></p></p>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 text-right"> 
            <a className="text-secondary" href={img[48]} target="_blank">
               Download Resume
            </a>
        </div>
        </div>
        <div className="col text-center text-secondary mb-3">
        Design & Code by Shashank Jain | Last update: March 18, 2019
        </div>
      </div>
    );
  }
}




export default Page;

