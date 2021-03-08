
import {
  MDBCol, MDBContainer,






  MDBMask, MDBRow,




  MDBView
} from 'mdbreact';
import React, { Component } from 'react';
import "./contact.css";
import OurWorks from './ourWorks.js';
import "./testimonials.js";
import Testimonials from './testimonials.js';


class ProjectsPage extends Component {
  state = {
    modal: false
  };

  componentDidMount() {
    window.scrollTo({ top: 0, behavior: "smooth" });

  }
  toggle = () => {
    const { modal } = this.state;
    this.setState({
      modal: !modal
    });
  };

  render() {
    const { modal } = this.state;

    return (
       
       <>
<div id='parallaxintro'>
        
       <MDBView className='mdbparallaxHeader'
          src={'https://mdbootstrap.com/img/Photos/Others/images/76.jpg'}
          fixed
         
        >
          < MDBContainer
            className='  p-5'>
          <MDBMask className='rgba-black-light '/> 
        
        
          <MDBContainer
            className='d-flex justify-content-center align-items-center p-5'
            style={{ height: '10%', width: '100%', paddingTop: '5rem' }}
          >
            <MDBRow>
              <MDBCol md='12' className='mb-4 white-text text-center'>
             
                <h1 className='display-3 mb-0 pt-md-2 pt-2 white-text font-weight-bold'>
                Projects 
                  {/* <span className='indigo-text  '> Testimonials</span> */}
                </h1>
                <hr className='hr-light my-2' />
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          </MDBContainer>
        </MDBView>  
        
        </div>
        
     <OurWorks></OurWorks>



     <div id='parallaxintro'
      >
        
        <MDBView className='mdbparallaxHeader view' 
          src={'https://scontent.fmba5-1.fna.fbcdn.net/v/t1.0-9/122740465_204592281062286_2814527141280382277_o.jpg?_nc_cat=109&cb=846ca55b-311e05c7&ccb=2&_nc_sid=8bfeb9&_nc_ohc=ZPaNChrlXnsAX8gmftv&_nc_ht=scontent.fmba5-1.fna&oh=45514cb2dd8b602418b4c940b42f8bbf&oe=5FD98996'}
          fixed
         
        >
          {/* <MDBMask className='rgba-black-light '/> */}
          <MDBMask className='d-flex justify-content-center align-items-center gradient' />
          
          <MDBContainer
            className='d-flex justify-content-center align-items-center'
            style={{  width: '100%', paddingTop: '5rem' }}
          ></MDBContainer>
          
          <MDBContainer
            className='d-flex justify-content-center align-items-center'
            style={{  width: '100%', paddingTop: '5rem' }}
          ></MDBContainer>
          
          <MDBContainer
            className='d-flex justify-content-center align-items-center'
            style={{  width: '100%', paddingTop: '5rem' }}
          ></MDBContainer>
        </MDBView>
</div>


         <Testimonials></Testimonials>
         
         
    </>);
  }
}

export default ProjectsPage;
