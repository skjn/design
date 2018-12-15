import ReactDOM from 'react-dom';
import React, { Component } from 'react';
//import './Page.css';
import './bootstrap-4.1.3-dist/css/bootstrap.min.css';

import img from './images'
import ReactPlayer from 'react-player'



function ThesisBody() {
  return (
    <div className="container mt-5">
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
          <p className="text-justify">Managing professional work can get tough. Specially when there are a lot of tasks to do, meeting to attend, and a team to coordinate with. To make these things easier, an idea is developed
            for a mobile application that lets you do everything, manage everything, and stay updated from anywhere, with a click of a button.</p>
          <p className="text-justify">Few features of the app includes a work based discussion platform, team chats, coordinated tasks and project lists, meeting rooms information booking access, food information in office cafetarias,
            , and other colleague information to coordinate carpooling, projects, and plans.  </p>
        </div>
        <div className="container">
          <hr className="mb-3" />
          <h4>Development</h4>
          <div className="row">
            <div className="col-12 mb-3"><img src={img[43]} style={{ maxWidth: "100%" }} /></div>
            <div className="col-12 mb-3"><img src={img[44]} style={{ maxWidth: "100%" }} /></div>
            <div className="col-12 mb-3"><img src={img[45]} style={{ maxWidth: "100%" }} /></div>
          </div>
        </div>
      </div>
    </div>
  )
}

function BitsBody() {
  return (
    <div className="container mt-5">
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

function DfhBody() {
  return (
    <div className="container mt-5">
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
  }

  function SkjnBody(){
    return (
      <div className="container mt-5">
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
      export default ThesisBody;
