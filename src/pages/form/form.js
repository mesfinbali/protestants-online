
import React, { Component } from 'react';
import {
  
   MDBAlert, 
  MDBInput,MDBView,
  MDBBtn,MDBAnimation,MDBRow,
  MDBIcon,MDBMask,MDBCol,
  MDBContainer,
  MDBCard, 
} from 'mdbreact';
import SectionContainer from '../../components/sectionContainer';
import "./form.css"
import firebase from "../../firebase";
import queryString from "query-string";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

class NewForm extends Component { 
        constructor(props){
         super(props);
        
         let search = queryString.parse(this.props.location.search);
         this.state = {  
             search:search,}
        }
 
   
  render() { 
    return (
   <>   
<div id='parallaxintro'>
        
        <MDBView className='mdbparallaxHeader'
          src={'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fget.wallhere.com%2Fphoto%2Fpattern-texture-background-colorful-1046774.jpg&f=1&nofb=1'}
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
             
                <h3 className='display-4 mb-0 pt-md-2 pt-2 white-text font-weight-bold'>
                  Form 
                  {/* <span className='indigo-text font-weight-bold'> Your Talent</span> */}
                </h3>
                <hr className='hr-light my-2' />
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBView>
        
        
        </div>
           
             
          <MDBAnimation type='zoomIn' duration='500ms' id="registernow">
       <MDBContainer>
     
{/* <MDBCard className="text-center">
  <h6  className="font-weight-bold m-2 grey-text">
  የትወና,
የሙዚቃ,
የሞዴሊንግ,
Directing,
Short movie ጽሁፍ,
Documentery ጽሁፍ,
Drama ጽሁፍ,
vocal,
scirpt writing,
screen play,
እና ሌሎች የጥበብ ሙያዎችን 

ያላችሁ በሙሉ ክታች ያለውን Form ሞልተው ቶሎ ይመዝገቡ</h6>

</MDBCard> */}
       {this.state.search.formid&&
            <SectionContainer className='z-depth-2  mt-5 text-center'>
              

       <p className='h5 text-center mb-2'>Fill the below form properly!
        
        </p>   
 
{/* <div class="containerif"> */}
  <iframe class="responsive-iframeif" src={this.state.search.formid+"/viewform?embedded=true"} ></iframe>
{/* </div> */}



   </SectionContainer>

}
       </MDBContainer>
        
    
    
   
     </MDBAnimation> 
  
    </> );
  }
}

export default  NewForm;
