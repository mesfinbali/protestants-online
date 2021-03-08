
import React, { Component } from 'react';
import {
  MDBContainer,MDBBtn,
  MDBRow,
  MDBCol,MDBCardImage,MDBCardTitle,MDBCardText,MDBCardFooter,MDBTooltip,
  MDBCardBody,MDBCard
} from 'mdbreact';
import "./services.css"
import firebase from "../../firebase";
const WhatWeDoComponent = () => {
  
  const [ServicePhotos, setServicePhotos] = React.useState({src:''});
  const [ServicesTypeData, setServicesTypeData] = React.useState({servicesList:[]});

  React.useEffect(() => {
let facebookAlbumPath='https://graph.facebook.com/207823877405793?fields=photos{images},description,name,location,created_time,place,cover_photo,link,updated_time&access_token=EAAJvjLe71rMBAEuQEAWbAUE3M59B1OhB8qn2akftaxw62mW5TiBZCZAtaeusVGPOSLca68ua20jyB8huYsZBJENoVHQui1dnIvwnhTZBYlVG7ViAUtjz9vmROhk4N5Nt96ovYTMyBRVtIuGYNoag8j9flZAZCldlcWDKsdGgd4AQZDZD';

fetch(facebookAlbumPath)
.then(response => response.json())
.then(data => {
  console.log("Services photos")  
  console.log(data)  
let photos=[];
let SinglePhoto={};
if(data.photos){
  for(let i=0;i<data.photos.data.length;i++){
    SinglePhoto={
        src: data.photos.data[i].images[0].source,
        thumbnail: data.photos.data[i].images[((data.photos.data[i].images.length)-2)].source,
        thumbnailWidth: data.photos.data[i].images[0].width,//320,
        thumbnailHeight: data.photos.data[i].images[0].height,//174,
        // isSelected: true,
        // caption: "After Rain (Jeshu John - designerspics.com)"
}

    photos.push(SinglePhoto);
  }}
  
  console.log("services photos with thumnail")  
  console.log(photos)  
  setServicePhotos(photos)
  // this.setState({ServicePhotos: photos ,fbAlbumData:data})
});


const fetchData = async () => {
  const db = firebase.firestore();
  const data = await db.collection("services").doc('services');
  data.get().then(function(doc) {
    if (doc.exists) {
        console.log(" services  data:", doc.data());
        setServicesTypeData(doc.data());
    } else {
      console.log("No such  document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});       
};     
fetchData();
}, []);
    return (
       
       <>
<MDBContainer>
  <section className="text-center my-5">
      <h2 className="h1-responsive font-weight-bold text-center my-5">
      What We Do?
      </h2>
      <p className="grey-text text-center w-responsive mx-auto mb-5">
        {ServicesTypeData.intro}
      </p>
      
    <MDBRow>
    {ServicesTypeData.servicesList.map((servicetype,index)=><>
       <MDBCol lg='4' md='6' className='mb-lg-0 mb-4 p-3'>
          <MDBCard wide ecommerce>
           {(ServicePhotos[index])&&
            <MDBCardImage
              cascade
              src={ServicePhotos[index].src}
              top
              alt='sample photo'
            />
            }
            <MDBCardBody cascade className='text-center'>
            
              <MDBCardTitle>
                 <strong>  
                {servicetype.serviceName}
                </strong>
              </MDBCardTitle>
                <strong>
                  <a href='/Contact'>Contact Us</a>
                </strong>
              {/* <MDBCardText>Lorem ipsum dolor sit amet, consectetur adipisicing minima veniam elit.</MDBCardText>
              <MDBCardFooter className='px-1'>
                <span className='float-right'>
                  <MDBBtn outline color="info"  size="sm">Read More</MDBBtn>
                </span>
              </MDBCardFooter> */}
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
    
    </>)}
      </MDBRow>
  
    </section>
    </MDBContainer>





    </>);
  }

export default WhatWeDoComponent;
