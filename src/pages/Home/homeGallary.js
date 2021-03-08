import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBIcon, MDBTooltip,  MDBBadge, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBBtn } from "mdbreact";
import "./homeGallary.css"
import {  HomeGalleryData } from "../../Service-ApI/MasterData";
import { HttpService } from "../../Service-ApI/http-service";
import { CommonServices } from "../../Service-ApI/common-services";
 
const EcommercePage = (props) => {
   

  const [HomeGalleryLocal, setHomeGalleryLocal] = React.useState( );

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
      HttpService.initFBSingleAlbumdata(album).then((data) => { 
      if(data.photos){    
        localStorage.setItem(album.name, JSON.stringify(data)) 
        setHomeGalleryLocal(data)
      }  else{
        initializaData(); 
       }
      })
      } 
     else{  
      setHomeGalleryLocal(lodalAlbumData)
      } 

      }
   


  return (
  <div className="gallarybg pt-5 pb-5">
  <MDBContainer>
      
    <section className="text-center my-5">
      <h1 className="h1-responsive font-weight-bold text-center my-3">
        Gallery
      </h1>
      {/* <p className="grey-text text-center w-responsive mx-auto mb-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
        error amet numquam iure provident voluptate esse quasi, veritatis
        totam voluptas nostrum quisquam eum porro a pariatur veniam.
      </p> */}
      {HomeGalleryLocal&&
      <MDBRow>
     {HomeGalleryData.list.map((list,index)  => <MDBCol lg="6" md="6" className="mb-lg-0 mt-5  mb-5 ">
          <MDBCard collection className="z-depth-1-half">
            <div className="view viewGallery zoom ">
              <img  
              src= {HomeGalleryLocal.photos.data[index].images[CommonServices.calcImagesType(HomeGalleryLocal.photos.data[index].images,200,550)].source}
              className="img-fluid"
                alt=""
              />
              <div className="stripe dark z-index-2">
                <a href={"/Gallary/album/?fbId="+list.id}>
                  <p>{list.albumName} 
                     <MDBIcon icon="angle-right" />
                  </p>
                </a>
              </div>
            </div>
          </MDBCard>
        </MDBCol>
   
     )}
      </MDBRow>}
    </section>
  
    </MDBContainer>
    </div>
  );
}

export default EcommercePage;