import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { 
  MDBMask,
  MDBRow,
  MDBCol, 
  MDBView, 
  MDBContainer,
   
  
} from 'mdbreact';
import './HomePage.css';
 import TeamPage from '../aboutus/team';//not to be DELETED, has effect no known
import HomeStart from '../../pages/Home/homeStart.js';
import CoursesPage from '../filmschool/team';
import RegisterSchool from '../filmschool/registerSchool';
import EcommercePage from './homeGallary';
import HomeTourism from './homeTourism';
import HomeCultures from './homeCulture'; 
import { HomeAboutGedeoData, HomeBannersData, HomeCultureData, HomeGalleryData, HomeStartData, HomeTourismData } from '../../Service-ApI/MasterData';
import { HttpService } from '../../Service-ApI/http-service';
import RegisterForm from '../filmschool/registerForm';


import { 
  isMobile
} from "react-device-detect";
import TopNews from '../posts/topNews';
import Mastawekiya from '../posts/mastawekiya';


class HomePage extends React.Component { 
  // let local= JSON.parse(localStorage.getItem("albumPost"));
  state = {
    collapsed: false,
    HomeBannersAlbum:HomeBannersData,
    HomeBannersLocal:JSON.parse(localStorage.getItem("HomeBanner"))
  };

  handleTogglerClick = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  componentDidMount() {

    document.querySelector('nav').style.height = '65px';
    this.initializaData();
    window.scrollTo({ top: 0, behavior: "smooth" });

  }
  componentWillUnmount() {
    document.querySelector('nav').style.height = 'auto';
  }



 
    initializaData(){

    var album= this.state.HomeBannersAlbum;  
var lodalAlbumData= JSON.parse(localStorage.getItem("HomeBanner")); 
     

  if(!lodalAlbumData){  
    HttpService.initFBSingleAlbumdata(album).then((data) => { 
    if(data.photos){    
      localStorage.setItem(album.name, JSON.stringify(data)) 
      this.setState({HomeBannersLocal:data}) 
    }  else{
      this.initializaData(); 
     }
    })
    } 
   else{  
    this.setState({HomeBannersLocal:lodalAlbumData})  
    } 

    }






  scrollToTop = () => window.scrollTo(0, 0);

  render() {
    
    const navStyle = { marginTop: '4rem' };
    const overlay = (
      <div
        id='sidenav-overlay'
        style={{ backgroundColor: 'transparent' }}
        onClick={this.handleTogglerClick}
      />
    );

    const { collapsed } = this.state;
    return (
      <>
      
       <HomeStart album={HomeStartData}></HomeStart>


      <CoursesPage album={HomeAboutGedeoData} ></CoursesPage>

<Mastawekiya></Mastawekiya>
      {/* <RegisterSchool></RegisterSchool>       */}
      
{this.state.HomeBannersLocal&&
      <div id='parallaxintro'>
        
        <MDBView className='mdbparallaxHeader '
          src={this.state.HomeBannersLocal.photos.data[0].images[0].source }  fixed
        >
          <MDBMask className='rgba-black-light gradient' color="mdb-color darken-2"/>
          {/* <MDBMask className='d-flex justify-content-center align-items-center gradient' /> */}

          <MDBContainer
  className='d-flex justify-content-center align-items-center'
  style={{ height: '100%', width: '100%', paddingTop: '2.5rem' }}
>
  <MDBRow>
    <MDBCol md='12' className='mb-4 white-text text-center'>
    
    </MDBCol>
  </MDBRow>

</MDBContainer>

<MDBContainer
  className='d-flex justify-content-center align-items-center'
  style={{ height: '100%', width: '100%', paddingTop: '2.5rem' }}
>
  <MDBRow>
    <MDBCol md='12' className='mb-4 white-text text-center'>
    
    </MDBCol>
  </MDBRow>

</MDBContainer>

<MDBContainer
  className='d-flex justify-content-center align-items-center'
  style={{ height: '100%', width: '100%', paddingTop: '2.5rem' }}
>
  <MDBRow>
    <MDBCol md='12' className='mb-4 white-text text-center'>
    
    </MDBCol>
  </MDBRow>

</MDBContainer>

          <MDBContainer
            className='d-flex justify-content-center align-items-center'
            style={{ height: '100%', width: '100%', paddingTop: '2.5rem' }}
          >
            <MDBRow>
              <MDBCol md='12' className='mb-4 white-text text-center'>
             
                <h1 className='display-3 mb-0 pt-md-2 pt-2 white-text font-weight-bold'>
                  KNOW
                  <span className='indigo-text font-weight-bold'> GEDEO</span>
                </h1>
                <hr className='hr-light my-2' />
              </MDBCol>
            </MDBRow>

          </MDBContainer>
          
        </MDBView>


</div>  
  }    
      <EcommercePage  album={HomeGalleryData}></EcommercePage>

      
      
{this.state.HomeBannersLocal&&
      <div id='parallaxintro'>
        
        <MDBView className='mdbparallaxHeader '
          src={this.state.HomeBannersLocal.photos.data[1].images[0].source }  fixed
        >
          <MDBMask className='rgba-black-light gradient' color="mdb-color darken-2"/>
          {/* <MDBMask className='d-flex justify-content-center align-items-center gradient' /> */}

          <MDBContainer
  className='d-flex justify-content-center align-items-center'
  style={{ height: '100%', width: '100%', paddingTop: '2.5rem' }}
>
  <MDBRow>
    <MDBCol md='12' className='mb-4 white-text text-center'>
    
    </MDBCol>
  </MDBRow>

</MDBContainer>

<MDBContainer
  className='d-flex justify-content-center align-items-center'
  style={{ height: '100%', width: '100%', paddingTop: '2.5rem' }}
>
  <MDBRow>
    <MDBCol md='12' className='mb-4 white-text text-center'>
    
    </MDBCol>
  </MDBRow>

</MDBContainer>

<MDBContainer
  className='d-flex justify-content-center align-items-center'
  style={{ height: '100%', width: '100%', paddingTop: '2.5rem' }}
>
  <MDBRow>
    <MDBCol md='12' className='mb-4 white-text text-center'>
    
    </MDBCol>
  </MDBRow>

</MDBContainer>

          <MDBContainer
            className='d-flex justify-content-center align-items-center'
            style={{ height: '100%', width: '100%', paddingTop: '2.5rem' }}
          >
            <MDBRow>
              <MDBCol md='12' className='mb-4 white-text text-center'>
             
                <h1 className='display-3 mb-0 pt-md-2 pt-2 white-text font-weight-bold'>
                  KNOW
                  <span className='indigo-text font-weight-bold'> GEDEO</span>
                </h1>
                <hr className='hr-light my-2' />
              </MDBCol>
            </MDBRow>

          </MDBContainer>
          
        </MDBView>


</div>  
  }    
      <HomeTourism album={HomeTourismData} ></HomeTourism>
  
      
{this.state.HomeBannersLocal&&
      <div id='parallaxintro'>
        
        <MDBView className='mdbparallaxHeader '
          src={this.state.HomeBannersLocal.photos.data[2].images[0].source }  fixed
        >
          <MDBMask className='rgba-black-light gradient' color="mdb-color darken-2"/>
          {/* <MDBMask className='d-flex justify-content-center align-items-center gradient' /> */}

          <MDBContainer
  className='d-flex justify-content-center align-items-center'
  style={{ height: '100%', width: '100%', paddingTop: '2.5rem' }}
>
  <MDBRow>
    <MDBCol md='12' className='mb-4 white-text text-center'>
    
    </MDBCol>
  </MDBRow>

</MDBContainer>

<MDBContainer
  className='d-flex justify-content-center align-items-center'
  style={{ height: '100%', width: '100%', paddingTop: '2.5rem' }}
>
  <MDBRow>
    <MDBCol md='12' className='mb-4 white-text text-center'>
    
    </MDBCol>
  </MDBRow>

</MDBContainer>

<MDBContainer
  className='d-flex justify-content-center align-items-center'
  style={{ height: '100%', width: '100%', paddingTop: '2.5rem' }}
>
  <MDBRow>
    <MDBCol md='12' className='mb-4 white-text text-center'>
    
    </MDBCol>
  </MDBRow>

</MDBContainer>

          <MDBContainer
            className='d-flex justify-content-center align-items-center'
            style={{ height: '100%', width: '100%', paddingTop: '2.5rem' }}
          >
            <MDBRow>
              <MDBCol md='12' className='mb-4 white-text text-center'>
             
                <h1 className='display-3 mb-0 pt-md-2 pt-2 white-text font-weight-bold'>
                  KNOW
                  <span className='indigo-text font-weight-bold'> GEDEO</span>
                </h1>
                <hr className='hr-light my-2' />
              </MDBCol>
            </MDBRow>

          </MDBContainer>
          
        </MDBView>


</div>  
  }    
      <HomeCultures  album={HomeCultureData} ></HomeCultures>
    
{this.state.HomeBannersLocal&&
      <div id='parallaxintro'>
        
        <MDBView className='mdbparallaxHeader '
          src={this.state.HomeBannersLocal.photos.data[3].images[0].source }  fixed
        >
          <MDBMask className='rgba-black-light gradient' color="mdb-color darken-2"/>
          {/* <MDBMask className='d-flex justify-content-center align-items-center gradient' /> */}

          <MDBContainer
  className='d-flex justify-content-center align-items-center'
  style={{ height: '100%', width: '100%', paddingTop: '2.5rem' }}
>
  <MDBRow>
    <MDBCol md='12' className='mb-4 white-text text-center'>
    
    </MDBCol>
  </MDBRow>

</MDBContainer>

<MDBContainer
  className='d-flex justify-content-center align-items-center'
  style={{ height: '100%', width: '100%', paddingTop: '2.5rem' }}
>
  <MDBRow>
    <MDBCol md='12' className='mb-4 white-text text-center'>
    
    </MDBCol>
  </MDBRow>

</MDBContainer>

<MDBContainer
  className='d-flex justify-content-center align-items-center'
  style={{ height: '100%', width: '100%', paddingTop: '2.5rem' }}
>
  <MDBRow>
    <MDBCol md='12' className='mb-4 white-text text-center'>
    
    </MDBCol>
  </MDBRow>

</MDBContainer>

          <MDBContainer
            className='d-flex justify-content-center align-items-center'
            style={{ height: '100%', width: '100%', paddingTop: '2.5rem' }}
          >
            <MDBRow>
              <MDBCol md='12' className='mb-4 white-text text-center'>
             
                <h1 className='display-3 mb-0 pt-md-2 pt-2 white-text font-weight-bold'>
                  KNOW
                  <span className='indigo-text font-weight-bold'> GEDEO</span>
                </h1>
                <hr className='hr-light my-2' />
              </MDBCol>
            </MDBRow>

          </MDBContainer>
          
        </MDBView>


</div>  
  }
{/* <RegisterForm></RegisterForm>    */}
<TopNews album={{fbId:"116157410357817",name:"Top News"}} ></TopNews>
 
      </>
    );
  }
}

export default HomePage;
