
import React, { Component } from 'react';
import {
  
  MDBRow,MDBAlert,
  MDBCol,MDBTabContent,
  MDBInput,
  MDBBtn,MDBAnimation,
  MDBIcon,MDBTabPane,MDBNav,
  MDBCardBody,MDBView,MDBNavLink,
  MDBMask,MDBNavItem
} from 'mdbreact';
import SectionContainer from '../../components/sectionContainer';
import "./contact.css"
import firebase from "../../firebase";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

class ContactForm extends Component {

  state = {
    IframeWidth:isMobile?"320":"700",
    validated: false,
    isLoading: false,
    validateResultText:null,
    name: null,
    emailOrPhone: null,
    subject: null,
    message: null,
    modal: false,
    activeItemOuterTabs: "1",
    activeItemInnerPills: "1",
  };

  toggle = () => {
    const { modal } = this.state;
    this.setState({
      modal: !modal
    });
  };
 
      submitContact = async () => {
   let newMessage ={ 
     name: this.state.name,
    emailOrPhone: this.state.emailOrPhone,
    subject: this.state.subject,
    message: this.state.message,
    }
    this.setState({isLoading:true});
    if(this.state.emailOrPhone&&this.state.message){
 
      const db = firebase.firestore();
      const data = await  db.collection("ContactUs").doc("Messages").update({
        messages:   firebase.firestore.FieldValue.arrayUnion(newMessage)
    })
    .then(function( data) {
        // console.log("Document successfully written!" ); 
    })
    .catch(function(error) {
        // console.error("Error writing document: ", error);
    }); 
      this.setState(
        {isLoading:false,
           validateResultText:"you have successfully sent the message, we will cantact you in your address",
          //  emailOrPhone: null,
          //  subject:null,
          //  message:null,
          //  name:null
        })
    }
else{
  this.setState({isLoading:false,validateResultText:"Please enter Email or Message inputs properly!"})

}
  } 

  toggleOuterTabs = tab => e => {
    if (this.state.activeItemOuterTabs2 !== tab) {
      this.setState({
        activeItemOuterTabs: tab
      });
    }
  };

  toggleInnerPills = tab => e => {
    if (this.state.activeItemInnerPills !== tab) {
      this.setState({
        activeItemInnerPills: tab
      });
    }
  };

  render() {
    const { modal } = this.state;

    return (
       
            <MDBRow  className='p-2' >       
            
          <MDBCol md='12' sm="12" lg='7' >
          <MDBAnimation type='zoomIn' duration='500ms'>
     
            <SectionContainer className='z-depth-2  white '>
            <p className='h5 text-center mb-4'>Write to us
                We can’t wait to hear your ideas. Fill in the form below. We will be in touch within 24 hours to discuss your next project.
                 </p>
                 <MDBNav id="tabnav" tabs className="nav-justified rounded p-2 mb-2 tabnav"  
             color="success-color-dark darken-4">
            <MDBNavItem >
              <MDBNavLink className="navItem " link to="#" active={this.state.activeItemOuterTabs === "1"} onClick={this.toggleOuterTabs("1")} role="tab" >
                <MDBIcon icon="envelope" /> contact
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem >
              <MDBNavLink className="navItem " link to="#" active={this.state.activeItemOuterTabs === "2"} onClick={this.toggleOuterTabs("2")} role="tab" >
              <MDBIcon icon="envelope" />  Facebook
              </MDBNavLink>
            </MDBNavItem>
          </MDBNav>
                 <MDBTabContent
            className="card mb-5"
            activeItem={this.state.activeItemOuterTabs}
          >
            <MDBTabPane tabId="1" role="tabpanel" className="p-3">
            
          <form>
              
              <div className='grey-text'>
                <MDBInput md='6'
                  label='Full name'
                  icon='user'
                  group
                  value={this.state.name}
                  onChange={(value)=>{this.setState({name:value.target.value})}}
                  type='text'
                  validate
                  error='wrong'
                  success='right'
                />
                <MDBInput md='6'
                  value={this.state.emailOrPhone}
                  onChange={(value)=>{this.setState({emailOrPhone:value.target.value})}}
                  label=' Email or Phone'
                  icon='envelope'
                  group
                  type='email'
                  validate
                  error='wrong'
                  success='right'
                />
                <MDBInput
                  value={this.state.subject}
                  onChange={(value)=>{this.setState({subject:value.target.value})}}
                  label='Subject'
                  icon='tag'
                  group
                  type='text'
                  validate
                  error='wrong'
                  success='right'
                />
                <MDBInput
                  value={this.state.message}
                  onChange={(value)=>{this.setState({message:value.target.value})}}
                  type='textarea'
                  rows='2'
                  label='Your message'
                  icon='pencil-alt'
                />
              </div>

 {((this.state.validateResultText) && (this.state.isLoading === false)) &&
                           <MDBAlert color="danger" >
                         {this.state.validateResultText}
                         </MDBAlert>
                         
                  }


                          {this.state.isLoading &&

<div className='text-center'>
<MDBBtn outline color='secondary' disabled>
                                  <div className="spinner-grow spinner-grow-sm text-success" role="status">
      <span className="sr-only">Loading...</span>
    </div>
    
                              Submiting...
                              </MDBBtn>
 </div>
 }

                          {(this.state.isLoading === false) &&
                            
              <div className='text-center'>
                <MDBBtn outline color='secondary' onClick={()=>{this.submitContact()}}>
                Send <MDBIcon icon='paper-plane' className='ml-1' />
              </MDBBtn>
              </div>
                          }

            </form>

            </MDBTabPane>
            <MDBTabPane tabId="2" role="tabpanel">
            <iframe src={"https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F100180088170173&tabs=messages&width=" + this.state.IframeWidth +"&height=400&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId=685600122066611"} width={this.state.IframeWidth } height="400" style={{border:"none",overflow:"hidden", fontWeight:"400"}} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>

            </MDBTabPane>
          </MDBTabContent>
        
    
    
   
            </SectionContainer>
     </MDBAnimation>
          </MDBCol>
     
          <MDBCol md="12"  sm="12" lg='5' >
          <MDBAnimation type='zoomIn' duration='500ms'>
     
         < MDBView className='mdbparallaxContact'
          src={'https://mdbootstrap.com/img/Photos/Others/images/91.jpg'}
         fixed  
         
        >
            
          <MDBMask className='rgba-black-light '/>
            <MDBCardBody className="contact text-center h-100 text-white">
              {/* <h3 className="my-2 pb-2">Contact information</h3> */}
              <h4>Head Office</h4>
              <h4>Addis Ababa</h4>
              <hr className="hr-light my-4" />
          
              <ul className="text-lg-left list-unstyled ml-4">
                <li>
                  <p>
                    <MDBIcon icon="phone" className="pr-2" />+251 9 60371120
                  </p>
               
               
                </li>
                <li>
                <p>
                    <MDBIcon icon="phone" className="pr-2" />+251 9 42424293
                  </p>
               
                </li>
                <li>
                  
                <p>
                    <MDBIcon icon="phone" className="pr-2" />+251 9 42632262
                  </p>
                </li>
                
                <li>
                  <p>
                    <MDBIcon icon="envelope" className="pr-2" />
                    BfamilyFilmschool@gmail.com
                  </p>
                </li>
              </ul>
              <hr className="hr-light my-4" />
           
              <h4>Active branchs</h4>
              <ul className="text-lg-left list-unstyled ml-4" >
                <li> 
              <h6> <MDBIcon icon="check" className="pr-2" /> Addis Abeba</h6>
                </li>
                <li> 
              <h6> <MDBIcon icon="check" className="pr-2" /> Adama</h6>
                </li>
                <li> 
              <h6> <MDBIcon icon="check" className="pr-2" /> Bishoftu</h6>
                </li>
                <li> 
              <h6> <MDBIcon icon="check" className="pr-2" /> Dilla</h6>
                </li>
                <li> 
              <h6> <MDBIcon icon="check" className="pr-2" /> Hawasa</h6>
                </li>
                </ul>
            
           
            </MDBCardBody>
        
        </ MDBView>
        </MDBAnimation>
          </MDBCol>

                  </MDBRow>    
             
                  
     );
  }
}

export default ContactForm;
