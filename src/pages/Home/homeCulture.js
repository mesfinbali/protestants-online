import React from "react";
import {  MDBRow, MDBCol,MDBContainer, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBadge, MDBBtn } from "mdbreact";
import "./homeCulture.css"
import { HomeCultureData } from "../../Service-ApI/MasterData";
import { HttpService } from "../../Service-ApI/http-service";

import { CommonServices } from "../../Service-ApI/common-services";

const HomeCultures = (props) => {
 
  const newsStyle = {
    borderBottom: "1px solid #e0e0e0",
    marginBottom: "1.5rem"
  };

  
  const [HomeCultureLocal, setHomeCultureLocal] = React.useState();

  React.useEffect(() => { 
    window.scrollTo({ top: 0, behavior: "smooth" }); 
    initializaData();
      },
      []);
       

    const  initializaData=()=>{

      var album= JSON.parse(localStorage.getItem("propsAlbumData")); 
   
        if(props.album){ 
          album= props.album  
        localStorage.setItem("propsAlbumData", JSON.stringify(props.album))  
      }

      else if(props.location.album){
        album= props.location.album  
        localStorage.setItem("propsAlbumData", JSON.stringify(props.location.album))  
      }

      else{
        album= JSON.parse(localStorage.getItem("propsAlbumData"))  
      }


  var lodalAlbumData= JSON.parse(localStorage.getItem(album.name));  
      
    if(!lodalAlbumData){  
      HttpService.initFBSingleAlbumdata( album).then((data) => { 
      if(data.photos){    
        localStorage.setItem(album.name, JSON.stringify(data)) 
        setHomeCultureLocal(data)
      }  else{
        initializaData(); 
       }
      })
      } 
     else{ 
      setHomeCultureLocal(lodalAlbumData)
      } 

      }
   

  return (<>

{(!(window.location.pathname==""||window.location.pathname=="/"))&&
  
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
             
                {/* <h1 className='display-3 mb-0 pt-md-2 pt-2 white-text font-weight-bold'>
                    
                  <span className='indigo-text font-weight-bold'> {this.state.search.name}</span>
                </h1>
                <hr className='hr-light my-2' /> */}
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBView>
        
        
        </div>
 

  }   
{HomeCultureLocal&&
    <MDBCard
        className="culturebg"
        style={{ fontWeight: 300, maxWidth: "100%" }}
      >
        <MDBCardBody style={{ paddingTop: 0 }}>
          <h2 className="h1-responsive font-weight-bold my-5 text-center">
            Culture
          </h2>
          {/* <p className="dark-grey-text mx-auto mb-5 w-75 text-center">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit id
            laborum.
          </p> */}
        
        
          <MDBContainer
          className='d-flex justify-content-center align-items-center'
          style={{ height: '100%', width: '100%'}}
        >
          <MDBRow className="text-center"> 
       {HomeCultureData.list.map((list,index)=>  
          <MDBCol md="4" lg="4" className="mb-lg-0 mb-5">
              <MDBView hover rounded className="z-depth-1-half mb-4 viewCulture">
                <img
                  className="img-fluid"
                  src={HomeCultureLocal.photos.data[index].images[CommonServices.calcImagesType(HomeCultureLocal.photos.data[index].images,200,350)].source}
                  alt=""
                />
                  <a href={"Posts/album/?name="+list.albumName+"&fbId="+list.id}>
                  <MDBMask overlay="white-slight" className="waves-light" />
                </a>
              </MDBView>
              <MDBRow className="mb-3 text-center">
                <MDBCol size="12">
                  <a href={"Posts/album/?name="+list.albumName+"&fbId="+list.id}>
 
                    
                    <MDBBtn   color="success  " outline><MDBIcon icon="leaf" className="pr-2  " aria-hidden="true" />
                    <span className="font-weight-bold"> {list.albumName}</span> 
                    </MDBBtn> 
                  </a>
                </MDBCol>
              </MDBRow> 
 
            </MDBCol>

 )}
          </MDBRow>
      </MDBContainer>
        </MDBCardBody>
      </MDBCard>}
 </> );
}

export default HomeCultures;