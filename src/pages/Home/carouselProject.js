import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
"mdbreact";
import "./carouselProject.css"

import { 
  isMobile
} from "react-device-detect";

const CarouselProject = () => {
  return (
   
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
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://scontent.fadd1-1.fna.fbcdn.net/v/t1.0-9/122025745_203105301210984_4161517645796088861_o.jpg?_nc_cat=110&_nc_sid=8bfeb9&_nc_ohc=ItCJdu_cIwMAX9LgCjF&_nc_ht=scontent.fadd1-1.fna&oh=243a7b0af7c9f13c9ac63ef7756156ed&oe=5FB62211"
                alt="First slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://scontent.fadd1-1.fna.fbcdn.net/v/t1.0-9/122160765_203059107882270_2936834127367052108_o.jpg?_nc_cat=110&_nc_sid=8bfeb9&_nc_ohc=ouxl4kydBBsAX_rIv9W&_nc_ht=scontent.fadd1-1.fna&oh=919af2ce2415beda45d592ba70b93563&oe=5FB469CD"
                alt="Second slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://scontent.fadd1-1.fna.fbcdn.net/v/t1.0-9/122177391_203059044548943_8318266201094554760_o.jpg?_nc_cat=102&_nc_sid=8bfeb9&_nc_ohc=J0i3gSAbI1IAX9fQuuj&_nc_ht=scontent.fadd1-1.fna&oh=baea01d6eb5d94d4fa5f8575022c7dd1&oe=5FB52A7D"
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://scontent.fadd1-1.fna.fbcdn.net/v/t1.0-9/122042928_203055754549272_7166599135880249094_o.jpg?_nc_cat=111&_nc_sid=8bfeb9&_nc_ohc=4g7-ywS5aX4AX-KlFVL&_nc_ht=scontent.fadd1-1.fna&oh=b00214a167ca1c094ad3e45985169184&oe=5FB566EB"
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg"
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg"
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg"
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
  
   );
}

export default CarouselProject;