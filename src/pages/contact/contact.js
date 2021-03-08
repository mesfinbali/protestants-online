
import React, { Component } from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBFreeBird,
  MDBView,
  MDBMask
} from 'mdbreact';
import "./contact.css"
import ContactForm from './contactForm';

class ContactsPage extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    const { modal } = this.state;
    this.setState({
      modal: !modal
    });
  };

  componentDidMount() {
    window.scrollTo({ top: 0, behavior: "smooth" });

  }

  render() {
    const { modal } = this.state;

    return (
       
       <>
<div id='parallaxintro'>
        
        <MDBView className='mdbparallaxHeader'
          src={'https://scontent.fmba5-1.fna.fbcdn.net/v/t1.0-9/125813958_209978237190357_2879734405367801973_o.jpg?_nc_cat=101&ccb=2&_nc_sid=cdbe9c&_nc_ohc=ztJr16oqnQoAX_v6gsN&_nc_ht=scontent.fmba5-1.fna&oh=4890fd374647a46378807a067c1689d2&oe=5FD7179E'}
          fixed
         
        >
          <MDBMask className='rgba-black-light '/>
          {/* <MDBMask className='d-flex justify-content-center align-items-center gradient' /> */}
        
        
          <MDBContainer
            className='d-flex justify-content-center align-items-center'
            style={{ height: '10%', width: '100%', paddingTop: '5rem' }}
          >
            <MDBRow>
              <MDBCol md='12' className='mb-4 white-text text-center'>
             
                <h1 className='display-3 mb-0 pt-md-2 pt-2 white-text font-weight-bold'>
                  Contact 
                  <span className='indigo-text font-weight-bold'> Us</span>
                </h1>
                <hr className='hr-light my-2' />
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBView>
        
        
        </div>
     
<div id='parallaxintro'
      >
        
        <MDBView className='mdbparallaxHeader view' 
          src={'https://scontent.fmba5-1.fna.fbcdn.net/v/t1.0-9/125813958_209978237190357_2879734405367801973_o.jpg?_nc_cat=101&ccb=2&_nc_sid=cdbe9c&_nc_ohc=ztJr16oqnQoAX_v6gsN&_nc_ht=scontent.fmba5-1.fna&oh=4890fd374647a46378807a067c1689d2&oe=5FD7179E'}
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
          
          <MDBContainer
            className='d-flex justify-content-center align-items-center'
            style={{  width: '100%', paddingTop: '5rem' }}
          ></MDBContainer>
        </MDBView>
</div>   
      
        <MDBFreeBird>
      <ContactForm></ContactForm>
          </MDBFreeBird>
     
<h2 className="h1-responsive font-weight-bold text-center my-5">
        Addis Abeba Branch
        </h2>
       
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31526.477389940384!2d38.77550083955079!3d8.989654100000017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b84e47541cbc9%3A0xcb617cd5a8b267b2!2sBole%20International%20Hotel!5e0!3m2!1sen!2set!4v1602361305841!5m2!1sen!2set"  frameborder="0" height= '350' width= '100%' style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>




          <div id='parallaxintro'
      >
        
        <MDBView className='mdbparallaxHeader view' 
          src={'https://scontent.fmba5-1.fna.fbcdn.net/v/t1.0-9/125813958_209978237190357_2879734405367801973_o.jpg?_nc_cat=101&ccb=2&_nc_sid=cdbe9c&_nc_ohc=ztJr16oqnQoAX_v6gsN&_nc_ht=scontent.fmba5-1.fna&oh=4890fd374647a46378807a067c1689d2&oe=5FD7179E'}
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
          
          <MDBContainer
            className='d-flex justify-content-center align-items-center'
            style={{  width: '100%', paddingTop: '5rem' }}
          ></MDBContainer>
        </MDBView>
</div>

<h2 className="h1-responsive font-weight-bold text-center my-5">
        Dilla Branch
        </h2>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10107.00937280942!2d38.300717857285704!3d6.416324605054806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17b0eaa3a8b4c665%3A0xa5215582bbbb0534!2sDelight%20International%20Hotel!5e0!3m2!1sen!2set!4v1602367014403!5m2!1sen!2set" width="100%" height="350" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
     
    
    </>);
  }
}

export default ContactsPage;
