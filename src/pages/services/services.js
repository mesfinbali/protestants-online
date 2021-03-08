
import React, { Component } from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBView,
  MDBMask
} from 'mdbreact';
import "./services.css"
import Service2Page from "./service2.js"
import WhatWeDoComponent from './whatWeDo';
import ProjectCarousel from '../projects/ProjectCarousel';

class ServicesPage extends Component {
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
          // src={'https://mdbootstrap.com/img/Photos/Others/images/76.jpg'}
          src={"https://mdbootstrap.com/img/Photos/Slides/img%20(142).jpg"}

          fixed
         
        >
          <MDBMask className='rgba-black-light '/>
          {/* <MDBMask className='d-flex justify-content-center align-items-center gradient' /> */}
        
        
          <MDBContainer
            className='d-flex justify-content-center align-items-center'
            style={{ height: '80%', width: '100%', paddingTop: '5rem' }}
          >
            <MDBRow>
              <MDBCol md='12' className='mb-4 white-text text-center'>
             
                <h1 className='display-3 mb-0 pt-md-2 pt-2 white-text font-weight-bold'>
                  Services 
                  <span className='indigo-text font-weight-bold'> We Offer</span>
                </h1>
                <hr className='hr-light my-2' />
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBView>
        
        
        </div>
       
<WhatWeDoComponent></WhatWeDoComponent> 
   


<div id='parallaxintro'
      >
        
        <MDBView className='mdbparallaxHeader view' 
          src={'https://scontent.fmba5-1.fna.fbcdn.net/v/t1.0-9/122553665_204316487756532_9195433510431730210_o.jpg?_nc_cat=107&ccb=2&_nc_sid=8bfeb9&_nc_ohc=noarbpFH5dQAX8leccf&_nc_ht=scontent.fmba5-1.fna&oh=4a3c9330f5a749b330bc7fa01e02c13c&oe=5FD7F605'}
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


<Service2Page></Service2Page>  

<ProjectCarousel></ProjectCarousel>

    </>);
  }
}

export default ServicesPage;
