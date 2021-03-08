
import React, { Component } from 'react';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBFooter,
  MDBNavLink,
  MDBTooltip,
  MDBIcon
} from 'mdbreact';

import {CircleArrow as ScrollUpButton} from "react-scroll-up-button";
import { BrowserRouter as Router } from 'react-router-dom';
import { ReactComponent as Logo } from './assets/BFlogo.svg';
import Routes from './Routes';
import FooterPage from './components/footer/FooterPage';
import NavBar from "./components/Header/navbar.js"
import firebase from "./firebase";
import HomeStart from './pages/Home/homeStart';
import { HttpService } from './Service-ApI/http-service';
var groupObj = require('@hunters/group-object');

class App extends Component {
  constructor(props){
    super(props);
   
    // let search = queryString.parse(this.props.location.search);
  // let homeUpdates2= localStorage.getItem("homeUpdates");
   
       this.state = { 
           readMoredESC:false,
          //  search:search,
          // homeUpdates:homeUpdates2,
           posts:{data:[],paging:{}},
           seeMoreImagesId:"",
           loading:true,
           banner:null,
           albumData:{},
           albumPosts:[],
           albumIndex:0,
           albums:[{name:"HomeStart",id:103012238339001},{name:"HomeTourism",id:115997590373799},
            {name:"HomeGallery",id:115997873707104},{name:"HomeAboutGedeo",id:117216360251922},
            {name:"HomeCulture",id:111909114115980}]
         };
   }
   
   async componentDidMount(){

    var search= window.document.location.search
    var pathname= window.document.location.pathname
 
console.log("location")
console.log(window.document.location)

// if((window.document.location.protocol!='https:')&&(window.document.location.hostname!='gedeopeople') ){
//     window.document.location.replace("https://gedeopeople"+pathname+search)
// }
// else if((window.document.location.protocol=='https:')&&(window.document.location.hostname!='gedeopeople')){
//     window.document.location.replace("https://gedeopeople"+pathname+search)
// }

     this.setState({loading:true});  
     window.scrollTo({ top: 0, behavior: "smooth" });
      var updatedDate = new Date();
      var homeUpdates= localStorage.getItem("updatedDate"); 

   if(homeUpdates!=null){ 
    if(updatedDate.getDate()!=parseInt(homeUpdates)){
      localStorage.setItem("updatedDate", updatedDate.getDate()) 
      HttpService.initFBAlbumdata(1,this.state.albumIndex); 
    }
    else{ 
      console.log("  updateded");
    }
    }
    else{ 
      localStorage.setItem("updatedDate", updatedDate.getDate()) 
      HttpService.initFBAlbumdata(1,this.state.albumIndex); 
    }
    }
      
  render() {

    return (
      
      <Router>
      <div className='flyout'  >
     
    <NavBar  pageWrapId={'page-wrap'} outerContainerId={'outer-container'} ></NavBar>
      {/* <SideBarComp pageWrapId={'page-wrap'} outerContainerId={'outer-container'} /> */}
    
          {/* <main style={{ marginTop: '4rem' }}> */}
          <main>
            <Routes />
          </main>
          <FooterPage></FooterPage>
          <ScrollUpButton
          EasingType="easeInOutQuad"
          StopPosition={6}
          ShowAtPosition={102}
          AnimationDuration={505}
        /> 
          </div>
      </Router>
    );
  }
}

export default App;
