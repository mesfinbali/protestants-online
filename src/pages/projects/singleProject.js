import { MDBContainer } from 'mdbreact';
import React, { Component ,useState} from 'react';
import {  MDBRow, MDBCol,  MDBCardBody, MDBMask, MDBView, MDBBtn } from "mdbreact";

// import React, { useState } from 'react';
// import FsLightbox from 'fslightbox-react';
 
// const [toggler, setToggler] = useState(false);
import Gallery from 'react-grid-gallery';
import GallaryPage from '../Gallary/gallarypage';

const IMAGES =
[{
        src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        isSelected: true,
        caption: "After Rain (Jeshu John - designerspics.com)"
},
{
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "Boats (Jeshu John - designerspics.com)"
},

{
        src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
        thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
},

{ src: 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(58).jpg', md: '3',
thumbnail: "https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(58).jpg",
thumbnailWidth: 320,
thumbnailHeight: 212 },
{ src: 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(61).jpg', md: '3',
thumbnail: "https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(61).jpg",
thumbnailWidth: 320,
thumbnailHeight: 212 },
{ src: 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(62).jpg', md: '3',
thumbnail: "https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(62).jpg",
thumbnailWidth: 320,
thumbnailHeight: 212 },
{ src: 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(60).jpg', md: '3' ,
thumbnail: "https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(60).jpg",
thumbnailWidth: 320,
thumbnailHeight: 212},
{ src: 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(66).jpg', md: '4',
thumbnail: "https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(66).jpg",
thumbnailWidth: 320,
thumbnailHeight: 212 },
{ src: 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(70).jpg', md: '4',
thumbnail: "https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(70).jpg",
thumbnailWidth: 320,
thumbnailHeight: 212 },
{ src: 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(74).jpg', md: '4',
thumbnail: "https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(74).jpg",
thumbnailWidth: 320,
thumbnailHeight: 212 },
{ src: 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(64).jpg', md: '3' ,
thumbnail: "https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(64).jpg",
thumbnailWidth: 320,
thumbnailHeight: 212},
{ src: 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(77).jpg', md: '3',
thumbnail: "https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(77).jpg",
thumbnailWidth: 320,
thumbnailHeight: 212 },
{ src: 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(78).jpg', md: '3',
thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
thumbnailWidth: 320,
thumbnailHeight: 212 },
{ src: 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(76).jpg', md: '3',
thumbnail: "https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(76).jpg",
thumbnailWidth: 320,
thumbnailHeight: 212 }
]

class SingleProject extends Component {
  state = {
    mixed: [
      { src: 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(58).jpg', md: '3' },
      { src: 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(61).jpg', md: '3' },
      { src: 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(62).jpg', md: '3' },
      { src: 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(60).jpg', md: '3' },
      { src: 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(66).jpg', md: '4' },
      { src: 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(70).jpg', md: '4' },
      { src: 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(74).jpg', md: '4' },
      { src: 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(64).jpg', md: '3' },
      { src: 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(77).jpg', md: '3' },
      { src: 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(78).jpg', md: '3' },
      { src: 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(76).jpg', md: '3' }
    ]
  };


  render() {
return(   <> 
   
   
<div id='parallaxintro'>
        
        <MDBView className='mdbparallaxHeader'
          src={'https://mdbootstrap.com/img/Photos/Others/images/76.jpg'}
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
             
                <h1 className='display-3 mb-0 pt-md-2 pt-2 white-text font-weight-bold'>
                  Project 
                  {/* <span className='indigo-text font-weight-bold'> Us</span> */}
                </h1>
                <hr className='hr-light my-2' />
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBView>
        
        
        </div>
        
        <MDBContainer>
   
    <h2 className='h1 text-center text-uppercase font-weight-bold mt-5 mb-3 mt-5'>
      My projects
    </h2>
    <p className='text-center text-uppercase font-weight-bold'>
      All about my work
    </p>
    <p className='section-description mt-5 pt-2'>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error
      amet numquam iure provident voluptate esse quasi, veritatis totam
      voluptas nostrum quisquam eum porro a pariatur accusamus veniam. At ab
      ea a molestiae corrupti numquam quo beatae minima ratione magni
      accusantium repellat eveniet quia vitae.
    </p>
    <Gallery images={IMAGES}/>
  </MDBContainer>
</>
)
  }
}

export default SingleProject;