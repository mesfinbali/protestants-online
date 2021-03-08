import React from "react";
import {MDBContainer,  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";
import { HomeTourismData } from "../../Service-ApI/MasterData";
import "./homeTourism.css"
import { HttpService } from "../../Service-ApI/http-service";
import { CommonServices } from "../../Service-ApI/common-services";
 
const HomeTourism = (props) => {
 
  const [HomeTourismLocal, setHomeTourismLocal] = React.useState();


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
        setHomeTourismLocal(data)
      }  else{
        initializaData(); 
       }
      })
      } 
     else{  
      setHomeTourismLocal(lodalAlbumData)
      } 

      }
   
  return (
    <>
    
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
     {HomeTourismLocal&&
    <MDBCard className="  px-5 pb-5">
      <MDBCardBody className="text-center">
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          Tourism
        </h2>
        {/* <p className="text-center w-responsive mx-auto mb-5">
          Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit
          anim id est laborum.
        </p> */}
        <MDBRow>
{HomeTourismData.list.map((list,index)=>
          <MDBCol lg="4" md="4" className="mb-lg-0 mb-4">
          <MDBView hover className="rounded viewTourism z-depth-2 mb-4" waves>
            <img
              className="img-fluid"
              src= {HomeTourismLocal.photos.data[index].images[CommonServices.calcImagesType(HomeTourismLocal.photos.data[index].images,200,350)].source}
              alt=""
            />
            <MDBMask overlay="white-slight" />
          </MDBView>
          <a className="pink-text"   href={"Posts/album/?name="+list.albumName+"&fbId="+list.id}>
            <h4 className="font-weight-bold mb-3">
              <MDBIcon icon="map" className="pr-2" />
              {list.albumName}
            </h4>
          </a> 
          {/* <p>
            by <a href="#!" className="font-weight-bold">Billy Forester</a>,
            15/07/2018
          </p> */}
          <p className="dark-grey-text"> 
          {list.description}
          </p>
          <MDBBtn color="pink"  rounded size="md" href={"Posts/album/?name="+list.albumName+"&fbId="+list.id}>
            Read more
          </MDBBtn>
        </MDBCol>

)}


  </MDBRow>
      </MDBCardBody>
    </MDBCard>}  
 </> );
}

export default HomeTourism;