import ReactDOM from 'react-dom';
import React, { Component } from 'react';
//import './Page.css';
import './bootstrap-4.1.3-dist/css/bootstrap.min.css';

import img from './images'
import ReactPlayer from 'react-player'
import ModalImage from 'react-modal-image'


function ThesisBody() {
  return (
    <div className="container mt-5">
    <br/><br/><br/>
      <h2 className="text-center">Smart Residential School</h2>
      <p className="text-center text-secondary mb-5">Architecture | Undergraduate Thesis | Academic | Individual</p>
      <div className="row border border-muted mx-auto text-muted">
        <div className="col-sm-12 col-md-6 col-lg-3 mt-3 text-center">
          <p classname="mb-0"><strong>Program</strong> : Institutional</p>
          <p classname="mb-0"><strong>Site Area</strong> : 376,736 SQF</p>
          <p classname="mb-0"><strong>Total Built Area</strong> : 387,500 SQF</p>
          <p classname="mb-0"><strong>Location</strong> : Dwarka, NCR, India</p>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3 mt-3 text-center ">
          <p classname="mb-0"><strong>Key research Areas</strong></p>
          <ul className="list-unstyled">
            <li>Inclusivity</li>
            <li>Sustainability</li>
            <li>Technology</li>
            <li>Healthy Living</li>
          </ul>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3 mt-3 text-center">
          <p classname="mb-0"><strong>Skills</strong></p>
          <ul className="list-unstyled">
            <li>User Research</li>
            <li>Human Centred Design</li>
            <li>Story Mapping</li>
            <li>Visualization</li>
          </ul>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3 mt-3 text-center">
          <p classname="mb-0"><strong>Tools</strong></p>
          <ul className="list-unstyled">
            <li>AutoCAD</li>
            <li>Photoshop</li>
            <li>Sketchup</li>
            <li>Revit</li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="ml-3 mr-3">
          <h4>Design Brief</h4>
          <p className="text-justify">Education plays a vital role in development of a human being and the society as a whole. <i>Technological advancements </i>cause a major impact on teaching
            methodologies worldwide and through this thesis an attempt has been made to understand how <i>architecture can respond
            to the needs of these modern teaching methodologies.</i></p>
          <p className="text-justify">The built components include an <i>academic block, auditorium, faculty housing, student hostels and associated facilities.</i>
            An <i>elevated walkway</i>, an activity podium of sorts, is introduced, which <i>connects all the built components and provides covered and shaded linkages.</i> With an exploration
            into designing <i>inspirational and healthy spaces </i>for children, the thesis aims to create a school environment <i>conducive to learning and holistic development of children.</i></p>
        </div>
        <div className="container">
          <hr className="mb-3" />
          <h4>Site</h4>
          <div className="row">
            <div className="col-12 text-center mb-5 "><img src={img[10]} style={{ maxWidth: "450px" }} /></div>
            <div className="col-8-md-8-sm-12 ml-3 mr-3">
              <p className="text-justify ">The selected site is in Dwarka, an upcoming residential neighbourhood in NCR. Being a corner plot, having 2 sides open allows for flexibility in design.
                 The surroundings are planned as residential developments. <br /><br />A commerical complex is planned on the other side of the road, due to which a special attention
                needs to be paid to vehicular circulation to prevent traffic congestion.A water canal with protected greens, adjacent to the site provides an open character
                 to the school campus. <br /><br />The greens, apart from livening up the view from classrooms, can act as extended green spaces for class outings/ play sessions.</p>
            </div>
          </div>
        </div>
        <div className="container">
          <hr className="mb-3" />
          <h4>Floor Plans</h4>
          <div className="row">
            <div className="col-12">
              <p className="text-justify">Recessive stacking and internal courtyards have been used to change built mass scale, increase natural light and ventilation, and provide open terraces at various levels </p>
            </div>
            <div className="col-12 text-center"><img src={img[11]} style={{ maxWidth: "80%" }} /></div>
          </div>
        </div>
        <div className="container">
          <hr className="mb-3" />
          <h4>Conceptual Model</h4>
          <div className="row">
            <div className="col-12 text-center"><img src={img[12]} style={{ maxWidth: "60%" }} /></div>
            <div className="col-12 ml mr-3">
              <p><strong>1. Academic Block</strong></p>
              <p> Interconnected courts catering to different age groups maintain a continuity in opennes. Courts and Spaces of varying sizes and experiential quality cater to different needs. </p>
              <p><strong>2. Open Air Theatre</strong></p>
              <p> A huge OAT in the central court acts as the central hub for the school. All other spaces flow into this. </p>
              <p><strong>3. Hostels</strong></p>
              <p>Local open spaces merge into the larger field, providing varying degree of introvertness. Climatically oriented rooms end into stepped terrace gardens acting as breakout spaces overlooking the field. </p>
              <p><strong>4. Elevated Walkway</strong></p>
              <p>Naturally shaded elevated walkway connects the build mass, acting as an activity hub in itself. The walkway also provides a shaded path between the built masses to counter the unfavourable climatic conditions. </p>
              <p><strong>5. Faculty Housing</strong></p>
              <p>Centrally positioned faculty housing helps ensure the safety of students at all times.</p>
              <p><strong>6. Auditorium and Multipurpose Hall</strong></p>
              <p>The auditorium & multipurpose hall , although connected to the main academic block, can be operated seperately for events, without disturbing the rest of the school activities. </p>
            </div>
          </div>
        </div>
        <div className="container">
          <hr className="mb-3" />
          <h4>Site Plan</h4>
          <div className="row">
            <div className="col-12 text-center mb-3"><img src={img[13]} style={{ maxWidth: "50%" }} /></div>
            <div className="col-12">
              <p className="text-justify">An attempt has been made to utilise as much natural light and ventilation as possible through internal courts and proper orientation. Natural courtyard effect and passive cooling technologies with a few water
                bodies reduce the energy consumption for airconditioning. Stacking and terraces facing towards the field provide a sense of connection by increasing visibility of the complex from different parts. Primary
                wing gas been provided a seperate zone to allow it to function independently as required</p>
            </div>
          </div>
        </div>
        <div className="container">
          <hr className="mb-3" />
          <h4>Sections</h4>
          <div className="row ml-1">
            <div className="col-12 text-center mb-3"><img src={img[14]} style={{ maxWidth: "80%" }} /></div>
            <p ><strong>Section XX'</strong></p>
            <p>Naturally shaded walkway, which connects the academic block and the hostels, acts as an acitivity space in itself. It acts as the hub of connectivity and congregation, and the backbone of efficient uninterrrupted circulation. </p>
            <div className="col-12 text-center mb-3"><img src={img[15]} style={{ maxWidth: "80%" }} /></div>
            <p className=""><strong>Section YY'</strong></p>
            <p>Built mass of the academic block is broken by internal courts, which provide natural light and ventilation, and as small spillouts to break the monotony of the built. They act as breathing spaces for the building. </p>
            <div className="col-12 text-center mb-3"><img src={img[16]} style={{ maxWidth: "80%" }} /></div>
            <p><strong>Section ZZ'</strong></p>
            <p>Apart from the common football field, seperate smaller open greens are provided for different age groups, with a central sunken open air theatre acting as the hub for common activities.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function UdBody() {
  return (
    <div className="container mt-5">
    <br/><br/><br/>
      <h2 className="text-center">International Work Center</h2>
      <p className="text-center text-secondary mb-5">Urban Design | Academic | Team of 4</p>
      <div className="row border border-muted mx-auto text-muted">
        <div className="col-sm-12 col-md-6 col-lg-3 mt-3 text-center">
          <p classname="mb-0"><strong>Program</strong> : Commercial</p>
          <p classname="mb-0"><strong>Site Area</strong> : 1,076,391 SQF</p>
          <p classname="mb-0"><strong>Total Built Area</strong> : 2,305,930 SQF</p>
          <p classname="mb-0"><strong>Location</strong> : Dwarka, NCR, India</p>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3 mt-3 text-center ">
          <p classname="mb-0"><strong>Key research Areas</strong></p>
          <ul className="list-unstyled">
            <li>Open Planning</li>
            <li>Interconnectivity</li>
            <li>Transient Spaces</li>
            <li>Integration of Greens</li>
          </ul>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3 mt-3 text-center">
          <p classname="mb-0"><strong>Skills</strong></p>
          <ul className="list-unstyled">
            <li>User Research</li>
            <li>Journey Maps</li>
            <li>Human Centred Design</li>
            <li>Connectivity Diagrams</li>
          </ul>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3 mt-3 text-center">
          <p classname="mb-0"><strong>Tools</strong></p>
          <ul className="list-unstyled">
            <li>AutoCAD</li>
            <li>Photoshop</li>
            <li>Sketchup</li>
            <li>Revit</li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="">
          <div className="col-12">
            <h4>Design Brief</h4>

            <p className="text-justify">The brief called for the design of a work centre with added complexes including a mall, a hotel, and service apartements. An attempt was made to zone the complex
              in a manner that functioning of each building does not affect the other programmes negatively, but at the same time, making the built mass interact in such a manner
              that the whole complex reads as a single unit. </p>
            <p className="text-justify">An elevated walkway was proposed that would connect walkways outside the site to office and mall directly at various levels. This was done to ensure a continous and uninterrupted
              pedestrian movement. Vehicular penetration into the site was kept to a minimum. Vehicles had the option of parking on
              the periphery, or going to the basement level.The mall was placed at the busiest part of the site, to create an image, and to attract footfall for the complex, whereas the
              office complex and the hotel were placed at relatively intimate portions of the site, to give them the privacy they needed to function.</p>
          </div>
          <div className="col-12"><img src={img[23]} style={{ maxWidth: "100%" }} /></div>
        </div>
        <div className="container">
          <hr className="mb-3" />
          <h4>Area Programme</h4>
          <div className="row mt-5">
            <div className="col-12 text-center"><img src={img[24]} style={{ maxWidth: "100%" }} /></div>
          </div>
        </div>
        <div className="container">
          <hr className="mb-3" />
          <h4 className="mb-5">Design Directives</h4>
          <div className="row">
            <div className="col-lg-4 md-6 sm-12 text-center">
              <p className="text-center"><strong>Courtyard Spaces</strong></p>
              <img src={img[27]} style={{ maxWidth: "50%" }} />
              <p className="text-justify"> Different types of introverted and extroverted courts are created to generate different user experiences and serve different functions in the various
              typologies of buildings. The massing on the front of the site attempts to provide seclusion to internal spaces from heavy traffic, and create a bold visual image for the development as a whole.</p>
              <br />
              <img className="justify-content-center" src={img[26]} style={{ maxWidth: "80%" }} />
            </div>
            <div className="col-lg-4 md-6 sm-12 text-center">
              <p className="text-center"><strong>Interfaces</strong></p>
              <img src={img[29]} style={{ maxWidth: "50%" }} />
              <p className="text-justify"> The zoning both internal and external has been designed in a manner that gives priority to the concept of ‘Street’ as a public space. Public functions of every
            building spills over the connecting pathways and this interaction is equally responded to by the facing buildings. This creates synergy between different components of the site, generating an integrated user experience as a whole. </p>
              <img className="justify-content-center" src={img[28]} style={{ maxWidth: "80%" }} />
            </div>
            <div className="col-lg-4 md-6 sm-12 text-center">
              <p className="text-center"><strong>Paths</strong></p>
              <img src={img[31]} style={{ maxWidth: "50%" }} />
              <p className="text-justify"> Axes in form of streets is used as activity spaces at interfaces between different components of the site. The paths in two directions act as major axis for activity and movement within the site.
                The staggered axis is maintained to instill a sense of curiosity in the viewer by hiding a small portion of what lies ahead. Intermittent plazas creates nodes and breaks the linearity of the axis.
</p>
              <img className="justify-content-center" src={img[30]} style={{ maxWidth: "80%" }} />
            </div>
          </div>
        </div>
        <div className="container">
          <hr className="mb-3" />
          <h4>Site Plan</h4>
          <div className="row">
            <div className="col-12 text-center"><img src={img[32]} style={{ maxWidth: "100%" }} /></div>
          </div>
        </div>
        <div className="container">
          <hr className="mb-3" />
          <h4>Pedestrian Movement</h4>
          <div className="row">
            <div className="col-12 text-center"><img src={img[33]} style={{ maxWidth: "100%" }} /></div>
          </div>
        </div>
        <div className="container">
          <hr className="mb-3" />
          <h4>Elevations and Sections</h4>
          <div className="row">
            <div className="col-12 text-center"><img src={img[34]} style={{ maxWidth: "100%" }} /></div>
          </div>
        </div>
        <div className="container">
          <hr className="mb-3" />
          <h4>Physical and Digital Models</h4>
          <div className="row">
            <div className="col-12 text-center"><img src={img[35]} style={{ maxWidth: "100%" }} /></div>
          </div>
        </div>
      </div>
    </div>
  )
}

function OmaBody() {
  return (
    <div className="container mt-5">
    <br/><br/><br/>
      <h2 className="text-center">OMA - Office Management Application</h2>
      <p className="text-center text-secondary mb-5">UX Design | Freelance | Individual</p>
      <div className="row border border-muted mx-auto text-muted">
        <div className="col-sm-12 col-md-6 col-lg-3 mt-3 text-center">
          <p classname="mb-0"><strong>Program</strong> : Web and Mobile App</p>
          <p classname="mb-0"><strong>Client</strong> : Freelance</p>
          <p classname="mb-0"><strong>Team </strong> : Individual</p>
          <p classname="mb-0"><strong>Date</strong> : September 2017</p>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3 mt-3 text-center ">
          <p classname="mb-0"><strong>Key research Areas</strong></p>
          <ul className="list-unstyled">
            <li>Workplace Interactions</li>
            <li>Colleague Interactions</li>
            <li>Task Coordination</li>
            <li>Discussion Platforms</li>
          </ul>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3 mt-3 text-center">
          <p classname="mb-0"><strong>Skills</strong></p>
          <ul className="list-unstyled">
            <li>User Research</li>
            <li>Rapid Prototyping</li>
            <li>Affinity Diagrams</li>
            <li>User Personas</li>
          </ul>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3 mt-3 text-center">
          <p classname="mb-0"><strong>Tools</strong></p>
          <ul className="list-unstyled">
            <li>Principle</li>
            <li>Sketch</li>
            <li>Photoshop</li>
            <li>Sketching</li>
          </ul>
        </div>
        <div className="col-6 col-sm-12 mb-3 text-center">
                <img src={img[107]} style={{ maxWidth: "100%" }} />
                </div>
      </div>
      <hr />
      <div className="row">
        <div className="ml-3">
        <h2 id="heading" className="mb-5 text-center"> Design Brief</h2>
        <h4>Concept</h4>
          <p className="text-justify">Managing professional work can get tough. Specially when there are a lot of tasks to do, meeting to attend, and a team to coordinate with. To make these things easier, an idea is developed
            for a mobile application that lets you do everything, manage everything, and stay updated from anywhere, with a click of a button.</p>
          <p className="text-justify">Few features of the app includes a work based discussion platform, team chats, coordinated tasks and project lists, meeting rooms information booking access, food information in office cafetarias,
            , and other colleague information to coordinate carpooling, projects, and plans.  </p>
        </div>
        
        <div className="container">
          <hr className="mb-3" />
          <h4>Features</h4>
          <div className="row">
            <div className="col-12 mb-3"><img src={img[100]} style={{ maxWidth: "100%" }} /></div>
          </div>
        </div>
        <div className="container">
              <hr className="mb-3" />
              <h2 id="heading" className="mb-5 text-center"> Final Prototype</h2>
              <div className="row">
              <div className="col-4 mt-5 text-left align-middle"><h3 style={{color:"#FFC500"}}><strong>Making daily work easier with schedule, notes, live team chat and automatic 
                notifications</strong></h3><br/>Switch seamlessly between 2 cards on the homepage, one that tracks your days targets, and other your team's chat group. 
                Also add tasks and meetings, assign tasks to people, and check updates through ease.</div>
                <div className="col-8 text-right mt-3">
                <img className="mb-5 ml-5 mr-5" src={require('./images/OMA/gif3.gif')} style={{ maxWidth: "39%" }} />
                </div>
                </div>
                <div className="row">
                <div className="col-8 text-left mt-3">
                <img className="mb-5 ml-5 mr-5" src={require('./images/OMA/gif2.gif')} style={{ maxWidth: "40%" }} />
                </div>
              <div className="col-4 mt-5 text-left align-middle"><h3 style={{color:"#FFC500"}}><strong>Book Meeting Rooms with ease</strong></h3><br/>Never go searching for an empty room when the client has arrived. OMA provides an updated schedule of meeting rooms, with the facilties in each, so that you can book
              one as and when you want beforehand.</div>
                
                </div>
                <div className="row">
              <div className="col-4 mt-5 text-left align-middle"><h3 style={{color:"#FFC500"}}><strong>Stay updated with office news and participate in discussions</strong></h3><br/>Stay updated with ongoing discussions on important work place topics, and participate 
              to make a difference in decisions with ease and on the go.</div>
                <div className="col-8 text-right mt-3">
                <img className="mb-5 ml-5 mr-5" src={require('./images/OMA/gif1.gif')} style={{ maxWidth: "40%" }} />
                </div>
                </div>
                <div className="col-12 text-center">
              <img className="justify-content-center mt-5" src={img[105]} style={{ maxWidth: "100%" }} />
            </div>
                </div>
        <div className="container">
        <hr/>
        <h2 id="heading" className="mb-5 text-center"> Research</h2>
          <div className="row">
          <p className="col-12 text-justify"><strong>Why the need ?</strong><br/> The idea originated from my experience while working as an architect. I faced the problems of managing multiple platforms and 
          lack of interaction opportunties, which led to my initiative to make an attempt to solve this issue. To gain further feedback, I conducted interviews amongst my colleagues, and found they 
          feel that the problem exists, which they attributed to general corporate culture.</p>
          <div className="col-12 mb-3"><img src={img[101]} style={{ maxWidth: "100%" }} /></div>
          </div>
          </div>
          <div className="container">
          <hr className="mb-3" />
          <h4>Key Insights</h4>
          <div className="row">
          <p className="col-12 text-justify">After interviewing 20 people from various levels in the company, and few contacts from other companies, I derived a few key Insights
          that were common to all. These issues fitted in 3 broad categories. </p>
            <div className="col-xs-1 mb-3 text-center"><img src={img[102]} style={{ maxWidth: "80%" }} /></div>
          </div>
        </div>
          <div className="container">
        <hr/>
        <h5 className="mb-5">User Personas</h5>
        <div className="row">
              <div className="col-xs-1 text-center"><p></p></div>
                <div className="row">
                <div className="col-12 text-center"><ModalImage className="shadow" small={img[103]} large={img[103]} /></div>
                </div>
              </div>
          </div>
          <div className="container">
        <hr/>
        <h5 className="mb-5">Ideation</h5>
        <div className="row">
              <div className="col-12 mb-5"><p>After understanding the problem space and the target user to a certain depth, I created mind maps and diagrams to brainstorm ideas that 
                could help target the problem.</p></div>
                <div className="row">
                <div className="col-12 text-center"><ModalImage className="" small={img[104]} large={img[104]} /></div>
                </div>
              </div>
          </div>
          <div className="container">
          <hr className="mb-3" />
          <h4>First Iteration</h4>
          <div className="row">
          <div className="col-12 mb-5"><p>After getting my ideas down on paper, and creating a flow for important primary and secondary features, I created 
            wireframes to visualize my ideas, and translated them to low fidelity diagrams for usability testing.</p></div>
            <div className="col-12 mb-3"><img src={img[43]} style={{ maxWidth: "100%" }} /></div>
            <div className="col-12 mb-3"><img src={img[44]} style={{ maxWidth: "100%" }} /></div>
            <div className="col-12 mb-3"><img src={img[45]} style={{ maxWidth: "100%" }} /></div>
          </div>
        </div>
        
        <div className="container">
              <hr className="mb-3" />
              <h5>User Testing and Iterations</h5>
              <div className="row">
              <div className="col-12 "><p>I put usability testing after low fidelity designs on colleagues, and realized there were major design problems regarding the primary features and information flow.
              </p>
              </div>
             
             <p> <ul className="mt-2">
                      <li>
                    Landing page needs to be redesigned for current tasks, meeting and work status. Social platform is a secondary feature, and need not be given so much importance.
                      </li>
                      <li>
                     Not every employee wants a public employee profile, and carpooling functionality. It should be on voluntary opt-in basis.
                      </li>
                      <li>
                      The User Interface design and visual design was unimpressive, and not appealing. The clutter needs to be reduced to enhance clarity and appeal.
                      </li>
                      <li>
                      Icons need to be reselected for more recognizability. Recognition is faster than recall.
                      </li>
                    </ul>
                    </p>

                    <div className="col-12">
                  <p className="text-justify mt-5 mb-5"><strong>Reflections</strong> <br/>The design journey with my teammates and Prof. Fleming was a rewarding and enriching experience. We gained indepth knowledge about the 
                  design process, and learned how to overcome problems by research, design and iteration.
                    <ul className="mt-2">
                      <li>
                        <h6 style={{color:"#ffc500"}}><strong>User research is more than just a first step.</strong></h6> 
                        User research is alot more than a first step. It is the backbone of every design decision you make in your journey. I initially was content with some user research, but 
                        durign various stages, I found myself conducting more research in search of information to make informed decisions in design.   
                      </li>
                      <li>
                        <h6 style={{color:"#ffc500"}}><strong>First design is almost always never a perfect solution. Iteration helps, and is essential.</strong></h6> 
                        It is hard to let go of first designs, but keeping them intact is a sure shot failure. Explorations and re-iterations based and research and user testing is what plays a crucial part in determining how well 
                        the product would serve its users. Working and changing design direction is better than letting the process stagnate.  
                      </li>
                      <li>
                        <h6 style={{color:"#ffc500"}}><strong>Understand the problem and goal of each step before jumping in action.</strong></h6> 
                        Many a times, I found myself to eager to start working on the solution, but through the journey, realized that each stage and process has a different aim. 
                        Design solution is the last stage, and an important but end stage of the process. Outcomes from each stage are different, and focusing and acheiving those targets 
                        defines a successful stage completion.
                      </li>
                    
                    </ul>
                   </p>
                   </div>
          </div>
          </div>
      </div>
    </div>
  )
}

function AiBody() {
  return (
    <div className="container mt-5">
    <br/><br/><br/>
      <h2 className="text-center">Agriculture Intelligence</h2>
      <p className="text-center text-secondary mb-5">UX Design | AI in Agriculture | Academic | Individual</p>
      <div className="row border border-muted mx-auto text-muted">
        <div className="col-sm-12 col-md-6 col-lg-3 mt-3 text-center">
          <p classname="mb-0"><strong>Course</strong> : Advanced Design for AI</p>
          <p classname="mb-0"><strong>Field</strong> : Urban Farming</p>
          <p classname="mb-0"><strong>Semester </strong> : Spring 2019</p>
          <p classname="mb-0"><strong>Type</strong> : Academic Project</p>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3 mt-3 text-center ">
          <p classname="mb-0"><strong>Key research Areas</strong></p>
          <ul className="list-unstyled">
            <li>Urban Organic Farming</li>
            <li>Farm Management</li>
            <li>Food Consumption Habits</li>
            <li>Community Integration</li>
          </ul>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3 mt-3 text-center">
          <p classname="mb-0"><strong>Skills</strong></p>
          <ul className="list-unstyled">
            <li>User Research</li>
            <li>Journey Maps</li>
            <li>Affinity Diagrams</li>
            <li>User Personas</li>
          </ul>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3 mt-3 text-center">
          <p classname="mb-0"><strong>Tools</strong></p>
          <ul className="list-unstyled">
            <li>User Research</li>
            <li>Sketch</li>
            <li>Photoshop</li>
            <li>Sketching</li>
          </ul>
        </div>
        <div className="col-6 col-sm-12 mb-3 text-center">
                <img src={img[113]} style={{ maxWidth: "100%" }} />
                </div>
      </div>
      <hr />
      <div className="row">
        <div className="ml-3">
        <h2 id="heading" className="mb-5 text-center"> Design Brief</h2>
        <h4>Concept</h4>
        <p className="text-justify">With an initial idea of using Artificial Intelligence to aid urban farming, this project explores the various aspects and roles
        involved in the farming process. The initial aim we started with is to increase community involvement in urban farming, and make the process easier and adoptable. All the stakeholders are interviewed to understand their goals, motivations, approach and outlook on urban farming.
         From the intensive research, journey maps for 2 stakeholders is created, followed by extraction of indights and pain points. This allows us to find the avenue to make 
         a design solution to elevate those pain point in the process.   </p>
            <p><strong>Team</strong> : Shashank Jain   |   Jingyi Cheng   |   Elizabeth Moore | Harika Bommu | Ting Pan</p>
            <p><strong>My Role </strong>: UX Research   |   UX Design  |  Visual Design</p>
            <p><strong>Duration</strong> : 3 months [ in progress ]</p>
        </div>
        
        <div className="container">
          <hr className="mb-3" />
          <h4>Original Elevator Pitch</h4>
          <div className="row">
          <div className="col-12">
          <p className="text-justify">We brainstormed and discussed to create an initial elevator pitch for our design solution. This is meant to give a hint towards our research direction,
          and keep us on track with our goals always in place to allow for a focused approach.</p>
            </div>
            <div className="col-12 mb-3"><img src={img[114]} style={{ maxWidth: "100%" }} /></div>
          </div>
        </div>
        <div className="container">
          <hr className="mb-3" />
          <h4>Original Solution</h4>
          <div className="row">
          <div className="col-12">
          <p className="text-justify">Through basic internet research, we identified areas where we can make an impact, and ease the process through design intervention. These are
          divided in 4 categories as follows.</p>
            </div>
            <div className="col-12 mb-3"><img src={img[115]} style={{ maxWidth: "100%" }} /></div>
            <div className="col-12">
            <p className="text-justify  mb-5">We also listed down ideas/features that we can implement to achieve the goal.
                    <ul className="mt-2">
                      <li>
                      Analyze soil condition
                      </li>
                      <li>
                      Suggest suitable plants and their placement based on the soil composition
                      </li>
                      <li>
                      Aid in crop management and protection
                      </li>
                      <li>
                      Gamifying the process
                      </li>
                      <li>
                      AR experience during the plant growth
                      </li>
                      <li>
                      Timely, propitious alerts for crop harvesting
                      </li>
                      <li>
                      Smart distribution of food to the community
                      </li>
                    </ul>
                   </p>
            </div>
          </div>
        </div>
        <div className="container">
              <hr className="mb-3" />
              <h2 id="heading" className="mb-5 text-center"> Initial Objectives </h2>
              <div className="row">
              <div className="col-4 mt-5 text-left align-middle"><h3 style={{color:"#98d35a"}}><strong>User Frame </strong></h3>
              <br/>We created a matrix to understand different user groups our product could cater to, and in what areas, and marked the ones that we were going to focus on. This helped 
              guide research direction, interview recruitment, and interview script preparation.</div>
                <div className="col-8 text-right mt-3">
                <ModalImage className="mb-5 ml-5 mr-5" small={img[125]} large={img[125]} alt="Research Compilation"/>
                </div>
                </div>
                <div className="row">
                <div className="col-8 text-left align-left mt-3">
                <ModalImage className="mb-5 mr-5 text-left align-left" small={img[126]} large={img[126]} alt="Research Compilation"/>

                </div>
              <div className="col-4 mt-5 text-right align-middle"><h3 style={{color:"#98d35a"}}><strong>Business Frame.</strong></h3>
              <br/>To get an initial idea on the scope of our intervention, we marked the scale of the solution we were looking at. These frames were for initial ideas, and 
              would evolve as per research. </div>
                
                </div>
                <div className="row">
              <div className="col-4 mt-5 text-left align-middle"><h3 style={{color:"#98d35a"}}><strong>Problem Frame</strong></h3>
              <br/>Problem frame helped us pin point individual groups we were going to target , and the features our solution could help in. Giving the solution an
               initial name helped understand it better.</div>
                <div className="col-8 text-right mt-3">
                <ModalImage className="mb-5 ml-5 mr-5" small={img[129]} large={img[129]} alt="Research Compilation"/>
                </div>
                </div>
                <div className="col-12 text-center">
              <img className="justify-content-center mt-5" src={img[116]} style={{ maxWidth: "100%" }} />
            </div>
                </div>
        <div className="container">
        <hr/>
        <h2 id="heading" className="mb-5 text-center"> Research</h2>
          <div className="row">
          <p className="col-12 text-justify"><strong>Focusing research to understand need</strong><br/> To focus our research, we divided the stakeholders in three categories, from which we would interview individuals to 
          understand their journey and perceptions towards urban farming. This was done to get a holistic perspective of the problem space, and pin point real problems in the domain.</p>
          <div className="col-12 mb-3"><img src={img[117]} style={{ maxWidth: "100%" }} /></div>
          </div>
          <div className="row">
          <p className="col-12 text-justify"><strong>Research Plan</strong><br/> We created a research plan to stay on track, and make sure every aspect of the problem space is covered. The plan also helped us 
          distribute work, connect data, and make sure everything got covered.</p>
          <div className="col-12 mb-3 text-center"><img src={img[118]} style={{ maxWidth: "80%" }} /></div>
          </div>
          </div>
          <div className="container">
          <hr className="mb-3" />
          <h4>Literature Review</h4>
          <div className="row">
          <p className="col-12 text-justify">We conducted indepth literature review on capabilities of artificial intelligence, and its application in the field of agriculture. 
          To consolidate the data, we listed possibilities where AI can help. We found that AI can help in almost all stages of farming in one way or another, and 
          how we use it to develop our product would depend on further research. </p>
            <div className="col-xs-1 mb-3 text-center"><img src={img[119]} style={{ maxWidth: "80%" }} /></div>
          </div>
        </div>
        <div className="container">
          <hr className="mb-3" />
          <h4>Competitive Analysis</h4>
          <div className="row">
          <p className="col-12 text-justify">We also analysed features and capabilties of other apps and products working in the same field. This helped us 
          learn exisiting applications, and methods and problems of each approach. </p>
          <div className="row text-center justify-content-center">
                <div className="col-lg-10 md-8 sm-12 mt-5 mb-5 "><ModalImage className="shadow rounded" small={img[127]} large={img[127]} /></div>
                </div>
          </div>
          <div className="row">
          <p className="col-12 text-justify">We categorised the strengths and weaknesses of each app on a 5 point scale, to help compare them. This would laso help us later 
          to understand our product better, and what problem space we want it to cater. </p>
          <div className="row text-center justify-content-center">
                <div className="col-lg-10 md-8 sm-12 mt-5 mb-5 "><ModalImage className="" small={img[128]} large={img[128]} /></div>
                </div>
          </div>
        </div>
        <div className="container">
          <hr className="mb-3" />
          <h4>Primary Research</h4>
          <div className="row">
          <p className="col-12 text-justify mt-3"><strong>On Site Studies</strong>
          <br/>After literature review, we conducted onsite studies and interviews to understand in depth the process of urban farming and all its aspects, including how technology is being currently used.
          This helped us gain kn owledge about the real world execution and problems faced in the process. We went to participate and interview 3 urban farms around austin, including
          University of Texas's own student run micro-farm. We also interviewed the sustainability coordinater at UT for his perspective. </p>
            <div className="col-xs-1 mb-3 text-center"><img src={img[120]} style={{ maxWidth: "90%" }} /></div>
          </div>
          <div className="row">
          <p className="col-12 text-justify"><strong>Work Artifacts</strong><br/> An important part of understanding the process was understanding the tools used. From digital tools
          used in planning and maintaining inventory, to paper sheets to check plant viability, weather, and planting seasons, to physical tools like spade and rake.</p>
          <div className="col-12 mb-3 text-center"><img src={img[121]} style={{ maxWidth: "90%" }} /></div>
          </div>
          <div className="row">
          <p className="col-12 text-justify mb-5"><strong>Journey Map Co-creation</strong><br/> Once we interviewed the people involved, we co-created three journey maps with different 
          stakeholders to understand the pain points in their journey from their perspective. The journey maps were co-created with the farm volunteers, farm manager, and UT's sustainability coordinator  </p>
              <div className="col-lg-4 md-6 sm-12 text-center mb-5">
            <ModalImage className="justify-content-center shadow rounded " small={img[122]} large={img[122]} alt="Research Compilation"/>
            </div>
            <div className="col-lg-4 md-6 sm-12 text-center mb-5">
            <ModalImage className="justify-content-center shadow rounded " small={img[123]} large={img[123]} alt="Research Compilation"/>
            </div>
            <div className="col-lg-4 md-6 sm-12 text-center mb-5">
            <ModalImage className="justify-content-center shadow rounded " small={img[124]} large={img[124]} alt="Research Compilation"/>
            </div>
          </div>
        </div>
      
     
  
          <div className="container">
        <hr/>
        <h5 className="mb-5">User Personas</h5>
        <p>We created 3 user personas from different stakeholder groups to understand them better, and to consolidate user data into archetypes. </p>
        <div className="row">
              <div className="col-4 mt-5 text-left align-middle"><h3 style={{color:"#98d35a"}}><strong>Neil Kaufman, Community Urban Farm Manager</strong></h3><br/></div>
                <div className="col-8 text-right mt-3">
                <ModalImage className="mb-5 ml-5 mr-5" small={img[130]} large={img[130]} alt="Research Compilation"/>
                </div>
                </div>
                <div className="row">
                <div className="col-8 text-left align-left mt-3">
                <ModalImage className="mb-5 mr-5 text-left align-left" small={img[131]} large={img[131]} alt="Research Compilation"/>

                </div>
              <div className="col-4 mt-5 text-right align-middle"><h3 style={{color:"#98d35a"}}><strong>Jill ANderson, Volunteer at Urban Farms</strong></h3><br/></div>
                
                </div>
                <div className="row">
              <div className="col-4 mt-5 text-left align-middle"><h3 style={{color:"#98d35a"}}><strong>Tanya Cooper, Interested Uninvolved Individual</strong></h3><br/></div>
                <div className="col-8 text-right mt-3">
                <ModalImage className="mb-5 ml-5 mr-5" small={img[132]} large={img[132]} alt="Research Compilation"/>
                </div>
                </div>
          </div>
          <div className="container">
          <hr className="mb-3" />
          <h4>Externalizing Data</h4>
          <div className="row">
          <p className="col-12 text-justify">To consolidate and synthesize data, we used Mural to list down journey stages. Below that, we created 4 sections of Steps, Tools, Pain Points, and Opportunities to sort data and connect information. In the opportunitied 
          section, we brainstormed and listed areas or methods of intervention that would help make the farming journey more enjoyable.</p>
          <div className="row text-center justify-content-center">
                <div className="col-lg-10 md-8 sm-12 mt-5 mb-5 "><ModalImage className="shadow rounded" small={img[138]} large={img[138]} /></div>
                </div>
          </div>
        </div>
          <div className="container">
          <hr className="mb-3" />
          <h4>User Journey Maps</h4>
          <div className="row">
          <p className="col-12 text-justify">We also created journey maps for urban farm managers and volunteers to understand their journey, pain points, and emotions during the whole process better. </p>
          <div className="row text-center justify-content-center">
                <div className="col-lg-10 md-8 sm-12 mt-5 mb-5 "><ModalImage className="shadow rounded" small={img[136]} large={img[136]} /></div>
                </div>
          </div>
          <div className="row">
          <div className="row text-center justify-content-center">
                <div className="col-lg-10 md-8 sm-12 mt-5 mb-5 "><ModalImage className="shadow rounded" small={img[137]} large={img[137]} /></div>
                </div>
          </div>
        </div>
          <div className="container">
          <hr className="mb-3" />
          <h4>Key Insights</h4>
          <div className="row">
          <p className="col-12 text-justify">After analysing all the data we had collected during the research phase, we generated 5 insights that related to people's expectation and needs from the urban farming 
          process. These insights would help us guide and brainstorm in a direction that would cater to real problems in this problem space. </p>
            <div className="col-xs-1 mb-3 text-center"><img src={img[135]} style={{ maxWidth: "100%" }} /></div>
          </div>
        </div>
        <div className="container">
          <hr className="mb-3" />
          <h4>Revised Elevator Pitch</h4>
          <div className="row">
          <p className="col-12 text-justify">After understanding the process first hand and talking to people involved, many of our assumptions were proved wrong, while genrating 
          new insights that we could work on. This led us to revise our elevator pitch to match the needs of the user groups more.</p>
            <div className="col-xs-1 mb-3 text-center"><img src={img[133]} style={{ maxWidth: "100%" }} /></div>
          </div>
        </div>
          <div className="container">
        <hr/>
        <h5 className="mb-5">Future Steps</h5>
        <div className="row">
                <div className="row">
                <div className="col-12 text-center"><ModalImage className="" small={img[134]} large={img[134]} /></div>
                </div>
              </div>
          </div>
      </div>
    </div>
  )
}

function BitsBody() {
  return (
    <div className="container mt-5">
    <br/><br/><br/>
      <h2 className="text-center">BITS - Battle of the Wits</h2>
      <p className="text-center text-secondary mb-5">UX Design | Game Design | Freelance | Individual</p>
      <div className="row border border-muted mx-auto text-muted">
        <div className="col-sm-12 col-md-6 col-lg-3 mt-3 text-center">
          <p classname="mb-0"><strong>Program</strong> : Mobile Game</p>
          <p classname="mb-0"><strong>Client</strong> : Freelance</p>
          <p classname="mb-0"><strong>Team</strong> : Individual</p>
          <p classname="mb-0"><strong>Date</strong> : November 2017</p>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3 mt-3 text-center ">
          <p classname="mb-0"><strong>Key research Areas</strong></p>
          <ul className="list-unstyled">
            <li>Design for Children</li>
            <li>Gamification</li>
            <li>Intutive UI</li>
            <li>Reward Systems</li>
          </ul>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3 mt-3 text-center">
          <p classname="mb-0"><strong>Skills</strong></p>
          <ul className="list-unstyled">
            <li>User Research</li>
            <li>Rapid Prototyping</li>
            <li>Affinity Diagrams</li>
            <li>User Personas</li>
          </ul>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3 mt-3 text-center">
          <p classname="mb-0"><strong>Tools</strong></p>
          <ul className="list-unstyled">
            <li>Paper Sketching</li>
            <li>AdobeXD</li>
            <li>Photoshop</li>
            <li>Illustrator</li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="ml-3">
          <h4>Design Brief</h4>
          <p className="text-justify">Education is important, but so is fun. Building on this notion, an attempt has been made to merge the two, by developing an addicitve, engaging game, that secretly teaches children new things.
          Basic notion of a quiz, where children answer academic subject related questions have been gamified, and many progress, power ups and reward systems have been added to make answering questions engaging. The main idea is the
            association of each subject with a personal digital pet. This acts as an incentive to play more and learn more, as each pet evolves as you score higher. </p>
        </div>
        <div className="container">
          <hr className="mb-3" />
          <h4>Site</h4>
          <div className="row">
            <div className="col-12 mb-3"><img src={img[46]} style={{ maxWidth: "100%" }} /></div>
            <div className="col-12 mb-3"><img src={img[47]} style={{ maxWidth: "100%" }} /></div>
          </div>
        </div>
      </div>
    </div>
  )
}

function IllustrationsBody() {
  return (
    <div>
      hi Illustrations
      </div>
  )
}

function HousingBody() {
  return (
    <div className="container mt-5">
    <br/><br/><br/>
      <h2 className="text-center">Inclusive Housing</h2>
      <p className="text-center text-secondary mb-5">Architecture | Housing | Academic | Team of 3</p>
      <div className="row border border-muted mx-auto text-muted">
        <div className="col-sm-12 col-md-6 col-lg-3 mt-3 text-center">
          <p classname="mb-0"><strong>Program</strong> : Residential</p>
          <p classname="mb-0"><strong>Site Area</strong> : 115 Hectares</p>
          <p classname="mb-0"><strong>No. of Houses</strong> : 5000</p>
          <p classname="mb-0"><strong>Location</strong> : Dwarka, NCR, India</p>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3 mt-3 text-center ">
          <p classname="mb-0"><strong>Key research Areas</strong></p>
          <ul className="list-unstyled">
            <li>Planning Principles</li>
            <li>Sustainability</li>
            <li>Connected Greens</li>
            <li>Healthy Living</li>
          </ul>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3 mt-3 text-center">
          <p classname="mb-0"><strong>Skills</strong></p>
          <ul className="list-unstyled">
            <li>User Research</li>
            <li>Human Centred Design</li>
            <li>Story Mapping</li>
            <li>Connectivity Diagrams</li>
          </ul>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3 mt-3 text-center">
          <p classname="mb-0"><strong>Tools</strong></p>
          <ul className="list-unstyled">
            <li>AutoCAD</li>
            <li>Photoshop</li>
            <li>Sketchup</li>
            <li>Revit</li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="ml-3">
          <h4>Design Brief</h4>
          <div className="col-lg-8-md-12-sm-12 ">
            <p className="text-justify">

              The brief was to design a community for 5000 families (units), catering to all the sections of the society.

              Percentage of housing alloted to each economic group was :
                <i>
                Economically Weaker Section - 50%
                Low Income Group - 35%
                Middle Income Group - 10%
                High Income Group - 5%.
                </i>
              Due to the size of the site, it was divided into sectors, with each housing sector having housing for 3 income groups. HIG were alloted seperate zone for luxurious highrise towers </p>
            <p className="text-justify">The sectors had minimum vehicular penetration, and each sector was self sufficient in terms of   facilities and community greens.

                A Pedestrian pathway through the centre of the site was proposed, with housing sectors on either side of the pathway. The pathway acted as a    spillout for sectors to indulge in various daily and community activties. Shops/small scale  commercial facilities were porposed along the pathway to ensure that it remained active and lively.

                The monotony of the pathway was broken by larger openings called “Chowks” at regular intervals, which acted as places of rest and interaction along the long stretch.

                </p>
          </div>
          <div className="col-lg-4-md-12-sm-12"><img src={img[36]} style={{ maxWidth: "100%" }} /></div>
        </div>
        <div className="container">
          <hr className="mb-3" />
          <h4>Design Directives: Site Plan</h4>
          <p> <strong>Blocking Glare : Tilting the site</strong></p>
          <div className="row">
            <div className="col-lg-6 col-sm-12 mb-3"><img src={img[37]} style={{ maxWidth: "100%" }} /></div>
            <div className="col-lg-6 col-sm-12 mb-3"><img src={img[38]} style={{ maxWidth: "100%" }} /></div>
          </div>
          <div className="row ml-1">
            <p className="text-justify">The movement grid is tilted by 15 degrees to cut glare on most pedestrian and vehicular paths and maximize on south sun.
              The shadow analysis of the pedestrian spine shows how a simple tilt can help in shading the avenue and making walking a more pleasant activity.</p>
          </div>

          <div className="row ml-1">
            <p> <strong>Walkability : Restricting settlement width & controlling vehicular penetration</strong></p>
            <div className="row">
              <div className="col-6  mb-3">
                <img src={img[39]} style={{ maxWidth: "100%" }} />
                <p className="text-justify mt-5">The maximum perpendicular distance from the pedestrian spine is limited to 230 metres to create a transit oriented , walkable setllement.
                The major central pedestrian spine & 2 minor pedestrian paths on the edges are connected at multiple locations and shaded for pedestrians.</p>
              </div>
              <div className="col-6 mb-3"><img src={img[40]} style={{ maxWidth: "100%" }} />
                <p className="text-justify mt-5">Major vehicular circulation has been kept on the edges of the settlement, which are connected through underground tunnels below chowks.
  
                    This creates a friendly pedestrian environment, and seperates & protects the pedestrian activities from vehicular traffic.
  
                  Parking has been provided on the edges of the sectors</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <hr className="mb-3" />
          <h4>Design Directives: Sector Plan</h4>

          <div className="mb-3"><img src={img[41]} style={{ maxWidth: "100%" }} /></div>
          <div>
            <p><strong>1. EWS Housing</strong></p>
            <p> EWS housing has a clustered arrangement, to enhance community feeling and generate common active courtyards. </p>
            <p><strong>2. LIG Housing</strong></p>
            <p> also enjoy connected greens, with a central park predomanantly catering to a cluster.<br />
              A variation of LIG housing is proposed along the pedestrian axis. These houses are designed to have a shop on the ground floor, which directly adds to the experience along the pedestrian axis.
              </p>
            <p><strong>3. MIG Housing</strong></p>
            <p>Stacked as G+3 towers, MIG enjoys connected open greens of varying scales.</p>
            <p><strong>4. Pedestrian Axis</strong></p>
            <p>out the setlement, acts as a hub of activities and events. It serves various functions like toddler parks, jogging & cycling tracks, shops and eating outlets, catering to every age group. </p>
            <p><strong>5. Organization of Greens</strong></p>
            <p>Careful attention has been given to structuring and flow of green spaces in each sector. An attempt has been made to ensure that each dwelling unit has proximity to lively open space
                  Common greens have community services which cater to all the economic groups.Hierarchy of greens is maintained so that various functions can be catered to. Use of well defined pathways and open spaces ensure a holistic and integrated community experience.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function NgBody() {
  return (
    <div className="container mt-5">
    <br/><br/><br/>
      <h2 className="text-center">Namami Gange</h2>
      <p className="text-center text-secondary mb-5">Urban Design | Morphogenesis | Professional | Morphogenesis Team</p>
      <div className="row border border-muted mx-auto text-muted">
        <div className="col-sm-12 col-md-6 col-lg-3 mt-3 text-center">
          <p classname="mb-0"><strong>Program</strong> : Institutional</p>
          <p classname="mb-0"><strong>Site Area</strong> : Not Applicable</p>
          <p classname="mb-0"><strong>Total Built Area</strong> : Not Applicable</p>
          <p classname="mb-0"><strong>Location</strong> : Ghats Along Ganga</p>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3 mt-3 text-center ">
          <p classname="mb-0"><strong>Key research Areas</strong></p>
          <ul className="list-unstyled">
            <li>Inclusivity</li>
            <li>Scalability</li>
            <li>Sustainability</li>
            <li>Public Spaces</li>
          </ul>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3 mt-3 text-center">
          <p classname="mb-0"><strong>Skills</strong></p>
          <ul className="list-unstyled">
            <li>User Research</li>
            <li>Human Centred Design</li>
            <li>Story Mapping</li>
            <li>Use Cases</li>
          </ul>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3 mt-3 text-center">
          <p classname="mb-0"><strong>Tools</strong></p>
          <ul className="list-unstyled">
            <li>AutoCAD</li>
            <li>Photoshop</li>
            <li>Illustrator</li>
            <li>Sketchup</li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="ml-3">
          <h4>Design Brief</h4>
          <div className="mb-3 text-center"><img src={img[18]} style={{ maxWidth: "100%" }} /></div>
          <p className="text-justify">The brief included redevelopment of Ghats and Crematoriums along the Ganges, between Allahabad and Varanasi. The aim was to improve the condition of the river and
            control pollution. A large part of Indian population depends on the Ganges for their daily activities and livelihood.</p>
          <p className="text-justify">One major source of pollution identified was the traditional cremations along the river. The redevelopment also included
            building efficient and cleaner cremation systems, apart from redeveloping eroded and de-funct ghats with better construction techniques
            and providing community spaces along the river with infrastructure for public facilities. Large data sets of usage patterns and footfall
            along various ghats were studied to come up with optimal modular designs.</p>
        </div>
        <div className="container">
          <hr className="mb-3" />
          <h4>Understanding the Scope</h4>
          <div className="row">
            <div className="col-12 mb-5 text-center"><img src={img[19]} style={{ maxWidth: "100%" }} /></div>
            <div className="col-12">
              <p className="text-justify">A total of 33 major ghats and 20 major crematoriums were selected to redevelop, over a stretch of 210 KM along the Ganges.
                The scale of the selected ghats varied from the Kumbh Mela to 4-5 visitors per day. Kumbh Mela -“World's largest congregation of religious pilgrims“
                An estimated 120 million people visited Maha Kumbh Mela in 2013 in Allahabad over a two-month period.
              An estimated 30 million visited in a single day on the occasion of Mauni Amavasya.</p>
            </div>
          </div>
        </div>
        <div className="container">
          <hr className="mb-3" />
          <h4>Goals</h4>
          <div className="row">
            <div className="col-12 text-center"><img src={img[20]} style={{ maxWidth: "100%" }} /></div>
          </div>
        </div>
        <div className="container">
          <hr className="mb-3" />
          <h4>General Strategies</h4>
          <div className="row">
            <div className="col-12 text-center mt-5"><img src={img[21]} style={{ maxWidth: "100%" }} /></div>
          </div>
        </div>
        <div className="container">
          <hr className="mb-3" />
          <h4>Modular Layout of Ghats</h4>
          <div className="row">
            <div className="col-12 text-center mb-5 mt-5"><img src={img[22]} style={{ maxWidth: "100%" }} /></div>
          </div>
        </div>
      </div>
    </div>
  )
}


/*function DfhBody() {
  return (
    <div className="container mt-5">
    <br/><br/><br/>
      <h2 className="text-center">Sense.i</h2>
      <p className="text-center text-secondary mb-5">UX Design | Health Informatics | Academic | Team of 3</p>
      <div className="row border border-muted mx-auto text-muted">
        <div className="col-sm-12 col-md-6 col-lg-3 mt-3 text-center">
          <p classname="mb-0"><strong>Course</strong> : Interaction Design</p>
          <p classname="mb-0"><strong>Field</strong> : Health Informatics</p>
          <p classname="mb-0"><strong>Semester</strong> : Fall 2018</p>
          <p classname="mb-0"><strong>Type</strong> : Academic Project</p>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3 mt-3 text-center ">
          <p classname="mb-0"><strong>Key research Areas</strong></p>
          <ul className="list-unstyled">
            <li>Mental Disorders</li>
            <li>Health Informatics</li>
            <li>Technology</li>
            <li>Cognitive Behavior Therapy</li>
          </ul>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3 mt-3 text-center">
          <p classname="mb-0"><strong>Skills</strong></p>
          <ul className="list-unstyled">
            <li>User Research</li>
            <li>Human Centred Design</li>
            <li>Rapid Prototyping</li>
            <li>UX Design</li>
          </ul>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3 mt-3 text-center">
          <p classname="mb-0"><strong>Tools</strong></p>
          <ul className="list-unstyled">
            <li>Sketch</li>
            <li>Invision</li>
            <li>Photoshop</li>
            <li>After Effects</li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="ml-3 mr-3">
          <h4>Design Brief</h4>
          <p className="text-justify">With an initial idea of helping people with mental disorders get better treatment, this project explores all the aspects related to mental disorders. 
          Starting from basics of understanding mental disorders, focusing on Anxiety, the research delves into treatment and technology used in the healthcare industry. Apart from literature survey, 
          input from psychologists is taken to strengthen the research, and develop a strong design direction based on the need of the industry.</p>
          <p className="text-justify">Once direction is finalized, an intensive design process is followed to explore as many aspects and approaches possible to the problem. This ensures a an outcome 
          that does justice to the initial problem, and caters to the requirements in a way that is accurate, aesthetic, and efficient.</p>
          <p>The final product evolves as a therapy management application that streamlines the process of therapy, and making it easier for both therapist and user.</p>
        </div>
        <div className="container d-flex justify-content-center mb-5">
          <ReactPlayer url='https://player.vimeo.com/video/305797072' />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-lg-6 text-center"> 
              <p className="text-center text-secondary">
                <a href="https://projects.invisionapp.com/prototype/cjpbtdplu00gc6j013huy1030/play" target="_blank">Click Here for Final Prototype</a> </p>
                <p className="text-secondary">or copy the link below </p>
                <p className="text-secondary">https://projects.invisionapp.com/prototype/Sense-i-cjpbtdplu00gc6j013huy1030/play/86d29fe7 </p>
            </div>
            <div className="col-sm-12 col-lg-6 text-center"> 
              <p className="text-center text-secondary">
                <a href={img[54]} target="_blank">Click Here for Project Journey Document</a> </p>
            </div>
          </div>
          </div>
          <div className="container">
          <hr className="mb-3" />
          <h4 className="mb-5">Team</h4>
          <div className="row">
            <div className="col-lg-4 md-6 sm-12 text-center">
              <p className="text-center"><strong>Jingyi Cheng</strong></p>
              <img src={img[67]} style={{ maxWidth: "50%" }} />
              <p className="text-center"> Masters of Science in Information Studies<br/>School of Information<br/> University of Texas, Austin</p>
              <br />
            </div>
            <div className="col-lg-4 md-6 sm-12 text-center">
              <p className="text-center"><strong>Shashank Jain</strong></p>
              <img src={img[68]} style={{ maxWidth: "50%" }} />
              <p className="text-center"> Masters of Science in Information Studies<br/>School of Information<br/> University of Texas, Austin</p>
              <br />
            </div>
            <div className="col-lg-4 md-6 sm-12 text-center">
              <p className="text-center"><strong>Yuqing Chen</strong></p>
              <img src={img[69]} style={{ maxWidth: "50%" }} />
              <p className="text-center"> Masters of Science in Information Studies<br/>School of Information<br/> University of Texas, Austin</p>
              <br />
            </div>
           
          
          </div>
        </div>

          <div className="container">
            <hr className="mb-3" />
            <h4>Research</h4>
            <div className="row">
              <div className="col-12 text-center mb-5 "><img src={img[53]} style={{ maxWidth: "750px" }} /></div>
              <div className="col-8-md-8-sm-12 ml-3 mr-3">
                <p className="text-justify ">We targeted at using technology to detect mental illnesses before hand, and design a response system for that, to provide better medical care to the people in need.
                <br /><br />A research plan was develped. To focus our approach, and arrive at a target problem in the area of mental health, we decided to focus on Anxiety during our research. An intensive literature review
                was conducted to understand the problem in depth. Apart from that, interviews with 2 psychologists, and 1 technologists specialising in bio-integrated tattoos from UT Austin were interviewed 
                to gain a deeper real world understanding of the topics. Details of research can be found in the <a href={img[54]} target="_blank"><b>Project Journey Document</b></a></p>
              </div>
            </div>
          </div>
          <div className="container">
            <hr className="mb-3" />
            <h4>Main Findings</h4>
            <div className="row">
              <div className="col-12 text-center mt-5"><img src={img[62]} style={{ maxWidth: "80%" }} /></div>
            </div>
          </div>
          <div className="container">
            <hr className="mb-3" />
            <h4>Direction</h4>
            <div className="row">
              <div className="col-12">
                <p className="text-justify">After analyzing the information from the literature and interviews, we were faced with a huge decision. We could either design for people with sub-clinical anxiety, which had a 
                bigger user base but quite alot of applications as competitors, or design for people with clinical anxiety, and undergoing treatment. Through the interviews, we could see a huge gap in the professional mental 
                health treatment, which our product could cater too. The challenge was that it would require extensive research, and very few products could be used to learn from for competitive analysis. We decided to go with
                 2nd option, and design for clinical treatment.</p>
              </div>
            </div>
          </div>
          <div className="container">
            <hr className="mb-3" />
            <h4>User Journey & Pain Points</h4>
            <div className="row">
              <div className="col-12">
                <p className="text-justify">The CBT treatment journey has been summarised in 8 steps below. Actual journey is much longer, and personalized. </p>
              </div>
              <div className="col-12 text-center mb-5"><img src={img[56]} style={{ maxWidth: "80%" }} /></div>
              <div className="col-12 text-center"><img src={img[55]} style={{ maxWidth: "80%" }} /></div>
              <div className="col-12">
                <p className="text-justify mt-5 mb-5">Below the journey map, we charted out the common issues patients face with completing the assignments given to them during CBT. Common reasons that therapists hear from patients 
                for not completing home assignments and other problems they face are :
                  <ul className="mt-2">
                    <li>
                    Patients think assignments are arbitrary
                    </li>
                    <li>
                    atients try hard to give “correct” answer over real answer
                    </li>
                    <li>
                    Inability to do daily tasks and assignments due to unforeseen events like relatives coming over, office dinner, visit to parents house e.t.c.
                    </li>
                    <li>
                    Patients tend to forget the steps to complete a task, and complete half or not complete at all.
                    </li>
                    <li>
                    Have a bad association with the word “homework”
                    </li>
                    <li>
                    Patient does not like reading (for reading based assignments )
                    </li>
                  </ul>
                 </p>
                 <p className="text-justify mt-5 mb-5">We also identified Pain Points - problems that Therapists face during the treatment process, which our product can target, and streamline the process making therapy more effective.
                  <ul className="mt-2">
                    <li>
                    One size does not fit all - Modification of assignments for different patients
                    </li>
                    <li>
                    Burden of getting the homework done falls on the therapist.
                    </li>
                    <li>
                    Delay in feedback on assignment/homework queries, slowing the treatment process.
                    </li>
                    <li>
                    Difficulty in tracking patient homework.
                    </li>
                    <li>
                    Thought record by patients is mostly based on recollection through memory, which is not very accurate.
                    </li>
                  </ul>
                 </p>
              </div>
            </div>
          </div>
          <div className="container">
            <hr className="mb-3" />
            <h4>Competitive Analysis</h4>
            <div className="row">
              <div className="col-12 text-center"><img src={img[57]} style={{ maxWidth: "60%" }} /></div>
            </div>
          </div>
          <div className="container">
            <hr className="mb-3" />
            <h4>Ideation & User Testing</h4>
            <div className="row">
              
              <div className="container mt-3">
              <div className="row">
              <div className="col-6 col-sm-12 text-center"><img src={img[58]} style={{ maxWidth: "50%" }} />
              <img src={img[59]} style={{ maxWidth: "45%" }} />
              </div>
              
              <div className="col-6 col-sm-12 text-center mt-5"><img src={img[60]} style={{ maxWidth: "50%" }} />
              <img src={img[61]} style={{ maxWidth: "50%" }} />
              </div>
            </div>
            </div>
            </div>
          </div>
          <div className="container">
            <hr className="mb-3" />
            <h4>Final Prototype</h4>
            <div className="row">
  
              <div className="col-6 col-sm-12 text-center mt-3"><img className="mb-5" src={img[63]} style={{ maxWidth: "80%" }} />
              <img className="mb-5" src={img[64]} style={{ maxWidth: "80%" }} />
              <img className="mb-5" src={img[65]} style={{ maxWidth: "80%" }} />
              <img className="mb-5" src={img[66]} style={{ maxWidth: "80%" }} />
              </div>
              <div className="container">
          <div className="row">
            <div className="col-sm-12 col-lg-6 text-center"> 
              <p className="text-center text-secondary">
                <a href="https://projects.invisionapp.com/prototype/cjpbtdplu00gc6j013huy1030/play" target="_blank">Click Here for Final Prototype</a> </p>
                <p className="text-secondary">or copy the link below </p>
                <p className="text-secondary">https://projects.invisionapp.com/prototype/Sense-i-cjpbtdplu00gc6j013huy1030/play/86d29fe7 </p>
            </div>
            <div className="col-sm-12 col-lg-6 text-center"> 
              <p className="text-center text-secondary">
                <a href={img[54]} target="_blank">Click Here for Project Journey Document</a> </p>
            </div>
          </div>
          </div>
            </div>
          </div>
        
          
        </div>
      </div>
      )
  }*/

  function DfhBody() {
    return (
      <div className="container mt-5">
      <br/><br/><br/>
        <h2 className="text-center"><strong>Sense.i</strong></h2>
        <p className="text-center text-secondary mb-5">UX Design | Health Informatics | Academic | Team of 3</p>
        <div className="row border border-muted mx-auto text-muted">
          <div className="col-sm-12 col-md-6 col-lg-3 mt-3 text-center">
            <p classname="mb-0"><strong>Course</strong> : Interaction Design</p>
            <p classname="mb-0"><strong>Field</strong> : Health Informatics</p>
            <p classname="mb-0"><strong>Semester</strong> : Fall 2018</p>
            <p classname="mb-0"><strong>Type</strong> : Academic Project</p>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 mt-3 text-center ">
            <p classname="mb-0"><strong>Key research Areas</strong></p>
            <ul className="list-unstyled">
              <li>Mental Disorders</li>
              <li>Health Informatics</li>
              <li>Technology</li>
              <li>Cognitive Behavior Therapy</li>
            </ul>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 mt-3 text-center">
            <p classname="mb-0"><strong>Skills</strong></p>
            <ul className="list-unstyled">
              <li>User Research</li>
              <li>Human Centred Design</li>
              <li>Rapid Prototyping</li>
              <li>UX Design</li>
            </ul>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 mt-3 text-center">
            <p classname="mb-0"><strong>Tools</strong></p>
            <ul className="list-unstyled">
              <li>Sketch</li>
              <li>Invision</li>
              <li>Photoshop</li>
              <li>After Effects</li>
            </ul>
          </div>
          <div className="col-6 col-sm-12 mb-3 text-center">
                <img src={img[106]} style={{ maxWidth: "100%" }} />
                </div>
        </div>
        <div className="row">
          <div className="ml-3 mr-3">
            <h2 id="heading" className="mb-5 mt-3 text-center">Design Brief</h2>
            <h5><strong>Project Brief</strong></h5>
            <p className="text-justify">With an initial idea of helping people with mental disorders get better treatment, this project explores all the aspects related to mental disorders. 
            Starting from basics of understanding mental disorders, focusing on Anxiety, the research delves into treatment and technology used in the healthcare industry. Apart from literature survey, 
            input from psychologists is taken to strengthen the research, and develop a strong design direction based on the need of the industry.</p>
            <p><strong>Team</strong> : Shashank Jain   |   Jingyi Cheng   |   Yuqing Chen</p>
            <p><strong>My Role </strong>: UX Research   |   UX Design  |  Visual Design</p>
            <p><strong>Duration</strong> : 3 months</p>
            <div className="col-6 col-sm-12 text-center">
                <img src={img[94]} style={{ maxWidth: "80%" }} />
                </div>
            <div className="ml-5 mr-5">
            </div>
          </div>
          <div className="container d-flex justify-content-center mt-5 mb-5">
            <ReactPlayer className="shadow" url='https://player.vimeo.com/video/305797072'/>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-lg-6 text-center"> 
                <p className="text-center text-secondary">
                  <a  href="https://projects.invisionapp.com/prototype/cjpbtdplu00gc6j013huy1030/play" target="_blank" style={{color:"#5885F7"}}><strong>Click Here for Final Prototype</strong></a> </p>
              </div>
              <div className="col-sm-12 col-lg-6 text-center"> 
                <p className="text-center text-secondary">
                  <a href={img[54]} target="_blank" style={{color:"#5885F7"}}><strong>Click Here for Project Journey Document</strong></a> </p>
              </div>
            </div>
            </div>
            <div className="container">
              <hr className="mb-3" />
              <h5><strong>Problem Definition</strong></h5>
              <div className="row">
              <div className="col">
              <p className="text-justify">Mental illness is a big issue for modern people and it is hard to manage and improve it. Hence, we wanted to create a solution to help people who're in need of relieving such mental burden and bring happiness to people's life. 
                As we researched, the depth of the problem kept getting vast. We focused on <strong>Anxiety</strong>
                 to narrow our scope.</p>
                 <div className="col-12 text-center mt-5">
                 <img  src={img[92]} style={{ maxWidth: "50%" }} />
                 </div>
                 <div className="col-6 col-sm-12 text-center">
                <img src={img[95]} style={{ maxWidth: "80%" }} />
                </div>
            
          <hr className="mb-3" />
          <h5 className="mb-5"><strong>Initial Ideas</strong></h5>
          <div className="row">
            <div className="col-lg-4 md-6 sm-12 text-center">
              <p className="text-center"><strong>Real time Data Based</strong></p>
              <img  className="mb-5" src={img[72]} style={{ maxWidth: "50%" }} />
              <p className="text-justify"> Detect emotional and anxiety status using body and voice sensors, wearable tattoos, or watches to provide personalized feedback</p>
              <br />
            </div>
            <div className="col-lg-4 md-6 sm-12 text-center">
              <p className="text-center"><strong>Emotional Granularity</strong></p>
              <img className="mb-5" src={img[70]} style={{ maxWidth: "50%" }} />
              <p className="text-justify"> Use indivudals past achievements and experiences to help build mental strength, and understand emotions better. </p>
            </div>
            <div className="col-lg-4 md-6 sm-12 text-center">
              <p className="text-center"><strong>Gamification</strong></p>
              <img src={img[71]} style={{ maxWidth: "50%" }} className="mb-5" />
              <p className="text-justify">Make the process interesting, to engage the indivudal in the process, making the product treatment more effective.</p>
            </div>
          </div>
       
              </div>
            </div>
            </div>
            <div className="container" >
              <hr className="mb-3" />
              <h2 id="heading" className="mb-5 text-center"> Research</h2>
              <h5><strong>Literature Survey</strong></h5>
              <div className="row">
                <div className="col-12">
                  <p className="text-justify">In order to get an effective approach to empower the therapy process, our research included understanding anxiety and the existing treatment including technology 
                      approaches to provide support. We used different research methods including literature review, competitive analysis and user interview to gain a comprehensive and deep understanding of our problem space. </p>
                </div>
              </div>
              <div className="row">
              <div className="col-12 text-center mb-5 "><img src={img[53]} style={{ maxWidth: "750px" }} /></div>
              <div className="col-12 mb-5"><p>An intensive literature review was conducted to understand the problem in depth. We looked into academic papers and official websites such as ADAA (Anxiety and Depression Association of  America) 
              and the website of counseling and mental health center provided by UT Austin.</p></div>
          
          </div>
            </div>
            <div className="container">
              <hr className="mb-3" />
              <h5><strong>Interviews</strong></h5>
              <div className="row">
              <div className="col-12 mb-5"><p>As for interviews, We had the chance of speaking to 1 technologist from the Texas material institute at UT Austin who's focusing on bio-integrated tattoos and 2 clinical professionals from Anxiety and Health Behaviors 
              lab at UT.  Apart from that, we interviewed 6 subclinical people who have anxiety problems.</p></div>
            <div className="col-lg-4 md-6 sm-12 text-center">
            <ModalImage className="justify-content-center shadow rounded " small={img[76]} large={img[76]} alt="Research Compilation" style={{ maxWidth: "100%" }}/>
            </div>
            <div className="col-lg-4 md-6 sm-12 text-center">
            <ModalImage className="justify-content-center shadow rounded " small={img[77]} large={img[77]} alt="Research Compilation" style={{ maxWidth: "100%" }}/>
            </div>
            <div className="col-lg-4 md-6 sm-12 text-center">
            <ModalImage className="justify-content-center shadow rounded " small={img[78]} large={img[78]} alt="Research Compilation" style={{ maxWidth: "100%" }}/>
            </div>
          </div>
          </div>
            <div className="container">
              <hr className=" mt-5" />
              <h5><strong>Research Synthesis</strong></h5>
              <div className="row">
              <div className="col-12 "><p>Once we had collected all the data through primary and secondary research, we externalized it on whiteboard to get a holistic picture,
                and make meaningful analysis. This process of viewing all information at one glance helped us connect research and derive research based product direction. </p></div>
              <div className="col-lg-4 md-6 sm-12 text-center">
            <ModalImage className="justify-content-center shadow rounded " small={img[73]} large={img[73]} alt="Research Compilation"/>
            </div>
            <div className="col-lg-4 md-6 sm-12 text-center">
            <ModalImage className="justify-content-center shadow rounded " small={img[74]} large={img[74]} alt="Research Compilation"/>
            </div>
            <div className="col-lg-4 md-6 sm-12 text-center">
            <ModalImage className="justify-content-center shadow rounded " small={img[75]} large={img[75]} alt="Research Compilation"/>
            </div>
          </div>
          </div>
            <div className="container">
              <hr className="mb-3 mt-5" />
              <h5><strong>Initital Research Findings</strong></h5>
              <div className="row">
                <div className="col-12">
                
                  <p className="text-justify">After finishing all the research phases, we collected all the raw data. We organized and analyzed the research results and developed the following key takeaways. The results were actually very different from what we thought before. </p>
                </div>
                <div className="col-12 text-center mt-5"><img src={img[96]} style={{ maxWidth: "80%" }} /></div>
              </div>
            </div>
            <div className="container">
              <hr className="mb-3" />
              <h5><strong>Product Redirection</strong></h5>
              <div className="row">
                <div className="col-12">
                
                  <p className="text-justify">After analyzing the information from the literature and interviews, we were faced with a huge decision. We could either design for people with sub-clinical anxiety, which had a 
                  bigger user base but quite alot of applications as competitors, or design for people with clinical anxiety, and undergoing treatment. Through the interviews, we could see a huge gap in the professional mental 
                  health treatment, which our product could cater too. The challenge was that it would require extensive research, and very few products could be used to learn from for competitive analysis. We decided to go with
                   2nd option, and design for clinical treatment.</p>
                </div>
                <div className="col-12 text-center mt-5"><img src={img[108]} style={{ maxWidth: "80%" }} /></div>
              </div>
            </div>
            <div className="container">
              <hr className="mb-3" />
              <h5><strong>Follow up Research</strong></h5>
              <div className="row">
                <div className="col-12">
                
                  <p className="text-justify">After we decided our product direction, we conducted one more round of interviews and literature review to delve deeper in the treatment process for Anxiety Disorder. 
                  Our target is to find out more painpoints that both therapy and patient are face during the treatment process.</p>
                </div>
                <div className="col-12 text-center mt-5"><img src={img[56]} style={{ maxWidth: "80%" }} /></div>
              </div>
            </div>
          
            <div className="container">
              <hr className="mb-3" />
              <h2 id="heading" className="mb-5 text-center"> Design Process</h2>

              <h5><strong>User Journey Map & Pain Points</strong></h5>
              <div className="row">
                <div className="col-12">
                  <p className="text-justify">The CBT treatment journey has been summarised in 8 steps below. Actual journey is much longer, and personalized. </p>
                </div>
                
                <div className="col-12 text-center"><ModalImage  small={img[55]} large={img[55]} style={{ maxWidth: "40%" }}  alt="Research Compilation"/></div>
                <div className="col-12">
                  <p className="text-justify mt-5 mb-5">Below the journey map, we charted out the common issues patients face with completing the assignments given to them during CBT. Common reasons that therapists hear from patients 
                  for not completing home assignments and other problems they face are :
                    <ul className="mt-2">
                      <li>
                      Patients think assignments are arbitrary
                      </li>
                      <li>
                      Patients try hard to give “correct” answer over real answer
                      </li>
                      <li>
                      Inability to do daily tasks and assignments due to unforeseen events like relatives coming over, office dinner, visit to parents house e.t.c.
                      </li>
                      <li>
                      Patients tend to forget the steps to complete a task, and complete half or not complete at all.
                      </li>
                      <li>
                      Have a bad association with the word “homework”
                      </li>
                      <li>
                      Patient does not like reading (for reading based assignments )
                      </li>
                    </ul>
                   </p>
                   <p className="text-justify mt-5 mb-5">We also identified Pain Points - problems that Therapists face during the treatment process, which our product can target, and streamline the process making therapy more effective.
                    <ul className="mt-2">
                      <li>
                      One size does not fit all - Modification of assignments for different patients
                      </li>
                      <li>
                      Burden of getting the homework done falls on the therapist.
                      </li>
                      <li>
                      Delay in feedback on assignment/homework queries, slowing the treatment process.
                      </li>
                      <li>
                      Difficulty in tracking patient homework.
                      </li>
                      <li>
                      Thought record by patients is mostly based on recollection through memory, which is not very accurate.
                      </li>
                    </ul>
                   </p>
                   
                </div>
              </div>
            </div>
            <div className="container">
              <hr className="mb-3" />
              <h5><strong>User Personas</strong></h5>
              <div className="row">
              <div className="col-12 mb-5"><p>Based on the information that we gathered from interviews, we created two personas for both therapists and patients.</p></div>
                <div className="row">
                <div className="col-6 text-center">
                <ModalImage className="shadow " small={img[79]} large={img[79]} alt="Research Compilation" style={{ maxWidth: "100%" }}/>
                </div>
                <div className="col-6 text-center">
                <ModalImage className="shadow " small={img[80]} large={img[80]} alt="Research Compilation" style={{ maxWidth: "85%" }}/>
                </div>
                </div>
              </div>
            </div>
            <div className="container">
              <hr className="mb-3" />
              <h5><strong>Key Insights</strong></h5>
              <div className="row">
                <div className="col-12">
                
                  <p className="text-justify">Our synthesis and analysis based on the research material helped us identify problems that patients and therapists face during the treatment process, which our product can target to streamline the process, making therapy more effective.​</p>
                </div>
                <div className="col-12 text-center mt-5"><img src={img[97]} style={{ maxWidth: "80%" }} /></div>
              </div>
            </div>
          
            <div className="container">
              <hr className="mb-3" />
              <h4><strong>Competitive Analysis</strong></h4>
              <div className="row">
              <div className="col-12"><p>For further product idea, we did competitieve analysis on the similar products that help therapists managing their work on the market.</p></div>
                <div className="col-12 text-center mt-3"><img className="shadow" src={img[57]} style={{ maxWidth: "80%" }} /></div>
              </div>
            </div>
            
            <div className="container">
              <hr className="mt-5" />
              <h5><strong>Ideation & Information Architecture</strong></h5>
              <div className="row">
              <div className="col-12"><p>After fully understanding the problem are we were working for, and having a general idea in the direction of the solution, we brainstormed the features that we like to achieve for users. ​
              Since we decided to first design a product on the therapist side, we chose a computer system to work on.</p></div>
                <div className="container mt-3">
                <div className="row">
                <div className="col-6 col-sm-12 text-center mt-5 mb-5"><img src={img[91]} style={{ maxWidth: "70%" }} />
                <div className="col-12 mt-5">After our brainstorming session, we segregated the features on basis of importance and use, and created an information flow structure for the product.</div>
                <div className="col-6 col-sm-12 text-center mt-5 mb-5"><img src={img[81]} style={{ maxWidth: "100%" }} />
                </div>
                
              </div>
              </div>
              </div>
            </div>
            <div className="container">
              <hr className="mb-3" />
              <h5><strong>Wireframes</strong></h5>
              <div className="row">
              <div className="col-12"><p>We tried different styles of layouts and discussed each other's idea. Our goal was to find out the optimal design solution to help therapists to better manage their work. </p></div>
                <div className="container mt-3">
                <div className="row">
                <div className="col-6 text-center">
                <ModalImage className="shadow " small={img[58]} large={img[58]} alt="Research Compilation" style={{ maxWidth: "50%" }}/>
                
                </div>
                <div className="col-6 text-center">
                <ModalImage className="shadow " small={img[59]} large={img[59]} alt="Research Compilation" style={{ maxWidth: "40%" }}/>
                
                </div>
                <div className="col-12 mt-5"><p>After we sketched ideas for how we were visualizing the ideas in our head. We discussed them all, explaining the pros and cons of each. Even with different people’s multiple ideas, a pattern started to emerge, and further refinement led to our initial specific approach.</p></div>
                <div className="col-12 text-center mt-3"><img src={img[98]} style={{ maxWidth: "80%" }} /></div>
                </div>
                
              </div>
              </div>
              </div>
              <div className="row">
              <div className="col-12 mt-5"><h5><strong>Iterative Development</strong></h5></div>
              <div className="col-12"><p>We converted that information flow into low fidelity screens, and kept iterating with feedbacks and critiques.</p></div>
                <div className="container mt-3">
                <div className="row mb-5">
                <div className="col-6 text-center mb-5">
                <ModalImage className="shadow " small={img[60]} large={img[60]} alt="Research Compilation" style={{ maxWidth: "50%" }}/>
                
                </div>
                <div className="col-6 text-center mb-5">
                <ModalImage className="shadow " small={img[61]} large={img[61]} alt="Research Compilation" style={{ maxWidth: "40%" }}/>
                
                </div>
                <div className="col-6 col-sm-12 text-center"><img className="mr-5 shadow"  src={img[109]} style={{ maxWidth: "45%" }} />
                <img className="shadow" src={img[110]} style={{ maxWidth: "45%" }} />
                </div>
                <div className="col-6 col-sm-12 text-center mt-5"><img  className="mr-5 shadow" src={img[111]} style={{ maxWidth: "45%" }} />
                <img className="shadow" src={img[112]} style={{ maxWidth: "45%" }} />
                </div>
              </div>
              </div>
              </div>
            </div>
            <div className="container">
              <hr className="mb-3" />
              <h5><strong>User Testing and Iterations</strong></h5>
              <div className="row">
              <div className="col-12 mb-5"><p>We conducted usability testing after our mid-fidelity designs. We tested on the two therapists that we interviewed and also sent out to 12 real therapists through usability testing website. 
              From the feedback and suggestions that we gathered from all the tests, we further made more changes and confirmed the final design.  </p></div>
            
            <div className="col-lg-4 md-6 sm-12 text-center">
              <img className="justify-content-center shadow rounded" src={img[86]} style={{ maxWidth: "100%" }} />
            </div>
            <div className="col-lg-4 md-6 sm-12 text-center">
              <img className="justify-content-center shadow rounded" src={img[87]} style={{ maxWidth: "100%" }} />
            </div>
            <div className="col-lg-4 md-6 sm-12 text-center">
              <img className="justify-content-center shadow rounded" src={img[90]} style={{ maxWidth: "100%" }} />
            </div>
          </div>
          
          <div className="col-12">
                  <p className="text-justify mt-5 mb-5"><strong>Feedback</strong> <br/>We got a lot of valuable feedback from our three rounds user testing.
                    <ul className="mt-2">
                      <li>
                     Homework editing needs to be improved.
                      </li>
                      <li>
                      Homework data analysis mapped on anxiety data would be very useful.
                      </li>
                      <li>
                      Physical data should be highlighted to show the anxiety period
                      </li>
                      <li>
                      Documents would be better if categorized by domain
                      </li>
                      <li>
                      Patients details and access need to adhere to HIPAA to protect privacy
                      </li>
                      <li>
                      Content on the homepage is a little bit overwhelmed 
                      </li>
                      <li>
                      Access to patient profile page should be allowed from therapy schedule in the homepage
                      </li>
                      <li>
                      Colors used for status measurement should be more careful
                      </li>
                    </ul>
                   </p>
                   </div>
                   <div className="col-6 col-sm-12 text-center"><img className="mr-5 shadow"  src={img[85]} style={{ maxWidth: "45%" }} />
                <img className="shadow" src={img[84]} style={{ maxWidth: "45%" }} />
                </div>
                <div className="col-6 col-sm-12 text-center mt-5"><img  className="mr-5 shadow" src={img[82]} style={{ maxWidth: "45%" }} />
                <img className="shadow" src={img[83]} style={{ maxWidth: "45%" }} />
                </div>
          </div>
            <div className="container">
              <hr className="mb-3" />
              <h2 id="heading" className="mb-5 text-center"> Final Prototype</h2>
              <div className="row">
              <div className="col-4 mt-5 text-left align-middle"><h3 style={{color:"#5885F7"}}><strong>Making daily work easier with schedule, notes and automatic 
                notifications</strong></h3><br/>For everyday work, Sense.i provide therapy with timely-arranged appointments, schedule, work notes 
                and notifications to help therapist start with everything he needs on a quick glance</div>
                <div className="col-8 text-right mt-3">
                <img className="mb-5 ml-5" src={require('./images/DFH/home.gif')} style={{ maxWidth: "100%" }} />
                </div>
                </div>
                <div className="row">
              <div className="col-4 mt-5 text-left align-middle"><h3 style={{color:"#5885F7"}}><strong>Patient profile with data analysis and progress status</strong></h3><br/>Sense.i strictly follows the HIPAA policy to protect all patients information.

It provides detailed information and data analysis of each patient after authorized login so that therapy can easily manage the progress of each patient.</div>
                <div className="col-8 text-right mt-3">
                <img className="mb-5 ml-5" src={require('./images/DFH/pat.gif')} style={{ maxWidth: "100%" }} />
                </div>
                </div>
                <div className="row">
              <div className="col-4 mt-5 text-left align-middle"><h3 style={{color:"#5885F7"}}><strong>File management to streamline therapy's work</strong></h3>
              <br/>By giving therapy all the homework templates in an editable format, Sense.i makes it a lot more convenient for the therapist to manage all their files. 
                    With just a click he can send the homework to the patient with a various instrucions, time-based deadlines and repetitions.</div>
                <div className="col-8 text-right mt-3">
                <img className="mb-5 ml-5" src={require('./images/DFH/file.gif')} style={{ maxWidth: "100%" }} />
                </div>
                </div>
                <div className="row">
              <div className="col-4 mt-5 text-left align-middle"><h3 style={{color:"#5885F7"}}><strong>Contact and send files to patients easily</strong></h3><br/>Patient and therapy can contact each other more easily through Sense.i. If it's in an emergency, patients can talk to their therapist directly.

Having access to all files and patient status from a single location, Therapist can guide patients and send materials with ease. </div>
                <div className="col-8 text-right mt-3">
                <img className="mb-5 ml-5" src={require('./images/DFH/message.gif')} style={{ maxWidth: "100%" }} />
                </div>
                </div>
                <div className="row">
              <div className="col-4 mt-5 text-left align-middle"><h3 style={{color:"#5885F7"}}><strong>Easy management of all the treatment progress for patient's side</strong></h3><br/>Sense.i also personalizes a platform just for patients. Patients can monitor their physical data collected by bio-integrated tattoo.

Homeworks have better explanations and instructions, so you never feel lost at any point. 
</div>
                <div className="col-8 text-right mt-3">
                <img className="mb-5 ml-5" src={require('./images/DFH/patient.gif')} style={{ maxWidth: "100%" }} />
                </div>
                </div>
                <div className="container">
              <hr className="mb-3" />
              <h2 id="heading" className="mb-5 text-center"> Future Steps and Reflections</h2>
              <div className="row">
              <div className="col-12 mb-5">We gained a lot of promising feedback from professional therapists, and one that we consultant throughout our project is very interested in taking it further. 
              And we will collaborate with therapists in Anxiety and Stress Clinic at UT Austin to continue pursuing our product. </div>
            <div className="col-12 text-center">
              <img className="justify-content-center" src={img[89]} style={{ maxWidth: "100%" }} />
            </div>
          </div>
          <div className="col-12">
                  <p className="text-justify mt-5 mb-5"><strong>Reflections</strong> <br/>The design journey with my teammates and Prof. Fleming was a rewarding and enriching experience. We gained indepth knowledge about the 
                  design process, and learned how to overcome problems by research, design and iteration.
                    <ul className="mt-2">
                      <li>
                        <h6 style={{color:"#5885F7"}}><strong>User research forms the backbone of good design.</strong></h6> 
                        Every design has a purpose and that is to reach the intended audience effectively. We spent alot of time doing extensive research and understanding
                        our users and the process in depth. The knwoledge base we created proved to be extremely useful throughout the design journey, allowing us to take 
                        informed design decisions at each step.   
                      </li>
                      <li>
                        <h6 style={{color:"#5885F7"}}><strong>First design is almost always never a perfect solution. Iteration helps, and is essential.</strong></h6> 
                        Explorations and re-iterations based and research and user testing is what plays a crucial part in determining how well 
                        the product would serve its users. Working and changing design direction is better than letting the process stagnate.  
                      </li>
                      <li>
                        <h6 style={{color:"#5885F7"}}><strong>Design is at its best when ideas are discussed freely.</strong></h6> 
                        While working in a team, creating a productive and idea-oriented environment is crucial. It is important to be sympathetic and take constructive critique on all ideas, even if it is yours. 
                        When individuals are free to express, the ideas that sprout from the smallest of comments can make a huge impact on the product. 
                      </li>
                      <li>
                        <h6 style={{color:"#5885F7"}}><strong>Defining the problem, documenting, and having clear goals matter.</strong></h6> 
                        While working on a time bound problem, and that is always, it is useful to have a idea of project timeline. Timeline updates according to product evolution, but having an overview in mind gives context to each step.
                        Documenting design decisions help maintain an progressive flow, and hourney effcient and fruitful.
                      </li>
                    
                    </ul>
                   </p>
                   </div>
          </div>
                
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-lg-6 text-center"> 
                <p className="text-center text-secondary">
                  <a  href="https://projects.invisionapp.com/prototype/cjpbtdplu00gc6j013huy1030/play" target="_blank" style={{color:"#5885F7"}}><strong>Click Here for Final Prototype</strong></a> </p>
                  </div>
              <div className="col-sm-12 col-lg-6 text-center"> 
                <p className="text-center text-secondary">
                  <a href={img[54]} target="_blank" style={{color:"#5885F7"}}><strong>Click Here for Project Journey Document</strong></a> </p>
              </div>
            </div>
            </div>
            </div>
            
          </div>
        </div>
        )
    }

  function SkjnBody(){
    return (
      <div className="container mt-5">
      <br/><br/><br/>
        <h2 className="text-center">Portfolio Website</h2>
        <p className="text-center text-secondary mb-5">UX + UI Design | Web Development | Individual</p>
        <div className="row border border-muted mx-auto text-muted">
          <div className="col-sm-12 col-md-6 col-lg-3 mt-3 text-center">
            <p classname="mb-0"><strong>Program</strong> : Institutional</p>
            <p classname="mb-0"><strong>Client</strong> : Self</p>
            <p classname="mb-0"><strong>Team</strong> : Individual</p>
            <p classname="mb-0"><strong>Date</strong> : Last Update - 5th Nov</p>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 mt-3 text-center ">
            <p classname="mb-0"><strong>Key research Areas</strong></p>
            <ul className="list-unstyled">
              <li>Modularity</li>
              <li>Clean Design</li>
              <li>Web Accessibility</li>
              <li>Color Theory</li>
            </ul>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 mt-3 text-center">
            <p classname="mb-0"><strong>Skills</strong></p>
            <ul className="list-unstyled">
              <li>Graphic Design</li>
              <li>Illustration Design</li>
              <li>Visualization</li>
              <li>Information Architecture</li>
            </ul>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 mt-3 text-center">
            <p classname="mb-0"><strong>Tools</strong></p>
            <ul className="list-unstyled">
              <li>Sketch</li>
              <li>Illustrator</li>
              <li>Bootstrap</li>
              <li>React</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="">
            <div className="col-12">
              <h4>Design Brief</h4>

              <p className="text-justify">Online presence and quick access has become extremely important in todays world. This translates into a need for personal portfolio websites, specially for creative fields.
                  This site is an attempt to achieve the same, and learn new skills in the process. This site has been envisioned as grounds for learning and experimentation with web technologies and programming languages.
                  The main languages that have been learned and used in the process are HTML, CSS, Javascript, React, and Github. Learning how to learn development hurdles has been one of the major learnings, followed by
                use of CSS libraries, refactoring of code, clean coding practices, and importance of commented code. </p>
            </div>
          </div>
          <div className="container">
            <hr className="mb-3" />
            <h4>Mapping function of State data</h4>
            <div className="row mt-5">
              <div className="col-12 text-center"><img src={img[49]} style={{ maxWidth: "100%" }} /></div>
              <div className="col-12 text-justify mt-5">
                <p>A function "Tile" is created, which is programmed to return a tile with project data that is passed into it. A Class "Projects" is created, where all project data is stored in state.
                  The function "Tile" is mapped over state data of Projects, which render a page with individual tiles for every project. This significantly reduces the amount of code for any number of projects. Any modification
                  or styling that needs to be made can be done to the "Tile" function, which will update the complete page automatically.
                </p>
              </div>
            </div>
          </div>
          <div className="container">
            <hr className="mb-3" />
            <h4>Modular Page Components</h4>
            <div className="row mt-5">
              <div className="col-12 text-center"><img src={img[50]} style={{ maxWidth: "100%" }} /></div>
              <div className="col-12 text-justify mt-5">
                <p>Seperate individual functions are created for all page components, that can be combined, re-ordered and re-arranged as needed to generate page views. </p>
              </div>
            </div>
          </div>
          <div className="container">
            <hr className="mb-3" />
            <h4>Modular page Components 2 </h4>
            <div className="row mt-5">
              <div className="col-12 text-center"><img src={img[51]} style={{ maxWidth: "100%" }} /></div>
              <div className="col-12 text-justify mt-5">
                <p>PSeperate individual functions are created for all page components, that can be combined, re-ordered and re-arranged as needed to generate page views. Components like Navbar and Footer are created once, and used on every page by just calling the function in React JSX.</p>
              </div>
            </div>
          </div>
          <div className="container">
            <hr className="mb-3" />
            <h4>Page Composition and Routing </h4>
            <div className="row mt-5">
              <div className="col-12 text-center"><img src={img[52]} style={{ maxWidth: "100%" }} /></div>
              <div className="col-12 text-justify mt-5">
                <p>Pages are composed with pre-specified functions, which makes modification extremely easy. React Router DOM is used to render different pages as per the URL in the navigation bar.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      )
    }
  export {OmaBody};
  export {UdBody};
  export {HousingBody};
  export {IllustrationsBody};
  export {SkjnBody};
  export {DfhBody};
  export {NgBody};
  export {BitsBody};
  export {AiBody};
      export default ThesisBody;
