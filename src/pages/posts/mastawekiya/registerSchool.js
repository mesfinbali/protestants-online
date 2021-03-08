 
  import React from 'react';
  import { BrowserRouter as Router } from 'react-router-dom';
  import {
    MDBMask,
    MDBRow,
    MDBCol,
    MDBBtn,MDBModal,MDBModalBody,MDBModalHeader,
    MDBView,
    MDBContainer,
    MDBIcon
  } from 'mdbreact';
  import './registerSchool.css';
// import RegisterForm from './registerForm';
import ContactForm from '../../contact/contactForm';
import RegisterForm from '../../filmschool/registerForm';
// import ContactForm from '../contact/contactForm';
  
  class MastawekiyaSingle extends React.Component {
    
    constructor(props){
      super(props);
     
      let search =  this.props.advertisement 
      console.log("advertisement")
      console.log(search)
      this.state = {
         search:search,
      collapsed: false ,
      modal: false,
      modalSelected:1
    };
  
     }
    toggle = () => {
      this.setState({
        modal: !this.state.modal
      });
    }
    handleTogglerClick = () => {
      const { collapsed } = this.state;
      this.setState({
        collapsed: !collapsed
      });
    };
  
    componentDidMount() {
    }
  
    componentWillUnmount() {
    }
  
    render() {
   
      return (
        <div id='caltoaction'>
          <MDBView className="mdbparallaxHeader "  fixed src='https://2.bp.blogspot.com/-rVIH7_G7SP4/UDTAnop_XOI/AAAAAAAACUM/xUC7SAmby9k/s1600/light_background_for_blog_or_site.jpg'>
            <MDBMask className='rgba-purple-slight ' />
            <MDBContainer
              className='d-flex justify-content-center mt-3 align-items-center'
            >
              <MDBRow>
                <MDBCol md='12' className='mb-4 text-center'>
                    
                  <h1 className='display-4 font-weight-bold '>
                  {this.state.search.headline1}
                  </h1> 
                  
                  <h3 className=' font-weight-bold mb-0 pt-2'>
                   
                  {this.state.search.headline2}

                  </h3>
                  <h2 className='display-5 font-weight-bold '>
                  
                  {this.state.search.headline3}
                  </h2>
                  <h5 className="font-weight-bold"> 
                  
                  {this.state.search.message}
                   </h5> 

                   {/* <MDBBtn rounded className='btn-purple'  onClick={ ()=>{ this.setState({modalSelected:1, modal: !this.state.modal})}}> */}
                  {(this.state.search.action)&& 
                  <MDBBtn rounded className='btn-purple' 
                   onClick={ ()=>{
                     window.location.assign((this.state.search.action.isInsideForm)?"/form?formid="+this.state.search.action.link: this.state.search.action.link
                       )}
                   }>  {this.state.search.action.name}
                  </MDBBtn> }
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBView>


          <MDBModal isOpen={this.state.modal} toggle={this.toggle}      size="lg"  >
          <MDBModalHeader toggle={this.toggle}>
         {(this.state.modalSelected===1) && <h4> Register Your Talent</h4>} 
         {(this.state.modalSelected===2) && <h4> Contact Us</h4>}
           
            
            </MDBModalHeader>
          {/* <MDBModalBody> */}
         {(this.state.modalSelected===1) &&<RegisterForm></RegisterForm>} 
         {(this.state.modalSelected===2) &&<ContactForm></ContactForm>}
           
         {/* </MDBModalBody> */}
        </MDBModal>

        </div>
      );
    }
  }
  
  export default MastawekiyaSingle;