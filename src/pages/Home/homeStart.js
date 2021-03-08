import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer, MDBCard } from
"mdbreact";
import "./homeStart.css";
import { HttpService } from "../../Service-ApI/http-service";

import { 
  isMobile
} from "react-device-detect";

const HomeStart = (props) => {
   
  const [HomeStartLocal, setHomeHomeStartLocal] = React.useState( );

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
      HttpService.initFBSingleAlbumdata(props.album).then((data) => { 
      if(data.photos){    
        localStorage.setItem(album.name, JSON.stringify(data)) 
        setHomeHomeStartLocal(data)
      }  else{
        initializaData(); 
       }
      })
      } 
     else{  
      setHomeHomeStartLocal(lodalAlbumData)
      } 

      }


   
  return (<>
     {HomeStartLocal&& <MDBCarousel
      activeItem={1}
      length={6}
      showControls={true}
      showIndicators={true}
      className="z-depth-1"
    >
      <MDBCarouselInner>
        {HomeStartLocal.photos.data.map((list,index)=>
        <MDBCarouselItem itemId={index}>
        <MDBView className={isMobile?"HomeStartViewMobile":"HomeStartViewDesktop"}>
          <img
            className="d-block w-100"
          src={list.images[parseInt((list.images.length>=5)?5:list.images.length/2)].source}
            alt="First slide"
          />
        <MDBMask overlay="black-light" />
        </MDBView> 
      </MDBCarouselItem>
    
        )}
        
      
      </MDBCarouselInner>
    </MDBCarousel>}
 </> );
}
 
export default HomeStart;