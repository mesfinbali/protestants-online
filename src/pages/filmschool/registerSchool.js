 
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
import RegisterForm from './registerForm';
import ContactForm from '../contact/contactForm';
  
  class RegisterSchool extends React.Component {
    state = {
      collapsed: false ,
      modal: false,
      modalSelected:1
    };
  
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
                  Good News አስደሳች ዜና
                  </h1>
                  
                  <h3 className=' font-weight-bold mb-0 pt-2'>
                    ለዞናችን ወጣቶች በሙሉ 

                  </h3>
                  <h2 className='display-5 font-weight-bold '>
                    ከB-Family Promotion
                  </h2>
                  <h5 className="font-weight-bold">በዞናችን የምትገኙ የተለላዩ ችሎታዎች ባለቤት የሆናችሁ በሙሉ እንኳን ደስ አላችሁ፤ B-Family Promotion የተለያዩ ታለንት ያላቸውን ወጣቶች 
                  በማሰባሰብ ዞናችንን ከሌሎች የላቀ የጥበብ ማዕክል ለማድረግ ከብዙ ታዋቂ እና አንጋፋ የጥበብ ሰዎች ጋር በመስራት ላይ ይገኛል፤ ስለሆነም ከታች በተዘርዘሩ ታለንቶች 
                  ላይ ችሎታው ወይም ፍላጎቱ ያላችሁ ወጣቶች በፍጥነት "REGISTER" የሚለውን በመንካት ይመዝገቡ፡፡ ይህ ትልቅ እድል እንዳያመልጦት!! </h5>

                  <h6  className="font-weight-bold">
                    የትወና,
 
የሙዚቃ,
የሞዴሊንግ,

{/* Directing, */}
Short movie ጽሁፍ,
Documentery ጽሁፍ,
Drama ጽሁፍ,
vocal,

scirpt writing,
screen play,
እና ሌሎች የጥበብ ሙያዎችን 

ያላችሁ በሙሉ ክታች ያለውን Form ሞልተው ቶሎ ይመዝገቡ</h6>
                   {/* <MDBBtn rounded className='btn-purple'  onClick={ ()=>{ this.setState({modalSelected:1, modal: !this.state.modal})}}> */}
                   <MDBBtn rounded className='btn-purple'  onClick={ ()=>{window.location.assign("/register")}}>
                    <MDBIcon icon='user' className='mr-2' /> Register
                  </MDBBtn>
                  <MDBBtn rounded outline color='purple'  onClick={ ()=>{ this.setState({modalSelected:2, modal: !this.state.modal})}} >
                    <MDBIcon icon='book' className='mr-2' /> Contact Us
                  </MDBBtn>
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
  
  export default RegisterSchool;