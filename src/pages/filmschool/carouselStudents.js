
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView } from "mdbreact";
import React from "react";
import "./carouselStudents.css";

const CarouselStudents = (props) => {
  console.log(" courouselImages data:", props.courouselImages);
  const [courouselImages, setcourouselImages] = React.useState([]);


  React.useEffect(() => {

    if(props.courouselImages){
      setcourouselImages(props.courouselImages)
    // console.log(" courouselImages Defined:", props.courouselImages);
  
    }    

  });

  

  return (
   <>
   
   <MDBCarousel
   thumbnails
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={true}
        className="z-depth-1 mb-5"
      >
        <MDBCarouselInner 
        className=" CarouselProject">

{courouselImages.map((item,index)=>
          <MDBCarouselItem itemId={index+1}>
          <MDBView>
            <img
              className="d-block w-100"
              src={item}
              alt=""
            />
          </MDBView>
        </MDBCarouselItem>
      
        )}
   
   
        </MDBCarouselInner>
      </MDBCarousel>
 </> 
   );
}

export default CarouselStudents;