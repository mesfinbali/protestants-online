import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon } from "mdbreact";
import firebase from "../../firebase";
import "./ProjectCarousel.css"

const Testimonials = () => {

  
    const [testimonials, setTestimonials] = React.useState({testimonialsList:[]});
    React.useEffect(() => {
      const fetchData = async () => {
        const db = firebase.firestore();
        
        const data = await db.collection("projects").doc('testimonials');
        data.get().then(function(doc) {
          if (doc.exists) {
              console.log("courses Document data:", doc.data());
              setTestimonials(doc.data());
  
          } else {
              console.log("No such  document courses!");
          }
      }).catch(function(error) {
          console.log("Error getting document:", error);
      });
      
      // setSpells(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
      };
      fetchData();
    }, []);
  
  return (
    <MDBCard className="my-5 pb-1 text-center">
      <MDBCardBody>
        <h2 className="h1-responsive font-weight-bold my-5">
          {testimonials.title}
        </h2>
        <p className="grey-text w-responsive mx-auto mb-5">
  {testimonials.description}
  </p>
        <MDBRow className="text-md-left">
          {testimonials.testimonialsList.map((testimonial)=>
          <MDBCol lg="6" md="12" className="mb-5">
          <MDBCol md="4" lg="6" className="float-left  ">
            <img
              src= {testimonial.personImagePath}
              className="mx-auto mb-md-0 mb-4 roundedHalfinvers z-depth-1 img-fluid"
              tag="img"
              alt="Sample avatar"
               
            />
          </MDBCol>
          <MDBCol md="8" lg="6" className="float-right">
            <h4 className="font-weight-bold mb-3">{testimonial.testimonialPersonName}</h4>
           {(testimonial.typeOfWorks)&&
            <h6 className="font-weight-bold grey-text mb-3">
               {testimonial.typeOfWorks.map((type,index)=><span>{(index>0)&&<span>, </span> }{type}</span>)} 
            </h6>}
            <p className="grey-text">
           {testimonial.description}
            </p>
            <a href="#!" className="p-2 fa-lg fb-ic">
              <MDBIcon fab icon="facebook-f" />
            </a>
            <a href="#!" className="p-2 fa-lg tw-ic">
              <MDBIcon fab icon="twitter" />
            </a>
            <a href="#!" className="p-2 fa-lg dribbble-ic">
              <MDBIcon fab icon="dribbble" />
            </a>
          </MDBCol>
        </MDBCol>
     
          )}
   
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
  );
}

export default Testimonials;