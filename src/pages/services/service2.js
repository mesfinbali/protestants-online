import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBContainer } from "mdbreact";
import firebase from "../../firebase";

const Service2Page = () => {

  const [whatwearrange, setwhatwearrange] = React.useState({lists:[]});
 
  const [whatweworkedon, setwhatweworkedon] = React.useState({lists:[]});
 


  React.useEffect(() => {

  const fetchData = async () => {
    const db = firebase.firestore();
    const data = await db.collection("services").doc('whatwearrange');
    const data2 = await db.collection("services").doc('whatweworkedon');
    data.get().then(function(doc) {
      if (doc.exists) {
          console.log(" services  data:", doc.data());
          setwhatwearrange(doc.data());
      } else {
        console.log("No such  document!");
      }
  }).catch(function(error) {
      console.log("Error getting document:", error);
  });  
  
  data2.get().then(function(doc) {
    if (doc.exists) {
        console.log(" services  data:", doc.data());
        setwhatweworkedon(doc.data());
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
        <MDBContainer>
    <MDBCard
        className="my-5  mx-auto"
        style={{ fontWeight: 300, maxWidth: "90%" }}
      >
        <MDBCardBody style={{ paddingTop: 0 }}>
          {/* <h2 className="h1-responsive font-weight-bold my-5 text-center">
            Section title
          </h2>
          <p className="dark-grey-text mx-auto mb-5 w-75 text-center">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit id
            laborum.
          </p> */}
          <MDBRow>
            <MDBCol lg="6" md="12" className="my-5">
              <div style={{
                borderBottom: "1px solid #e0e0e0",
                marginBottom: "1.5rem"
              }}>
                <MDBView hover rounded className="z-depth-1-half mb-4">
                  <img
                    className="img-fluid"
                    src={whatwearrange.introImagePath}
                    alt=""
                  />
                  <a href="#!">
                    <MDBMask overlay="white-slight" className="waves-light" />
                  </a>
                </MDBView>
                <div className="d-flex justify-content-between">
                  <a href="#!" className="light-blue-text">
                    <h6 className="font-weight-bold">
                      <MDBIcon icon="plane" className="pr-2" />
                      Services
                    </h6>
                  </a>
                </div>
                <h3 className="font-weight-bold dark-grey-text mb-3 p-0">
                  <a href="#!">{whatwearrange.title}</a>
                </h3>
                <p className="dark-grey-text">
                  {whatwearrange.description}
   </p>
              </div>
{whatwearrange.lists.map((list)=>
              <div style={{
                borderBottom: "1px solid #e0e0e0",
                marginBottom: "1.5rem"
              }}>
                <MDBRow>
             
                    <MDBCol size="1">
                <MDBIcon icon="share" size="sm" className="indigo-text" />
              </MDBCol>
              <MDBCol xl="10" md="11" size="10">
                <h5 className=" mb-2">{list.title} </h5>
              </MDBCol>
           
                </MDBRow>
              </div>)
}
            </MDBCol>

            <MDBCol lg="6" md="12" className="my-5">
              <div style={{
                borderBottom: "1px solid #e0e0e0",
                marginBottom: "1.5rem"
              }}>
                <MDBView hover rounded className="z-depth-1-half mb-4">
                  <img
                    className="img-fluid"
                    src={whatweworkedon.introImagePath}
                    alt=""
                  />
                  <a href="#!">
                    <MDBMask overlay="white-slight" className="waves-light" />
                  </a>
                </MDBView>
                <div className="d-flex justify-content-between">
                  <a href="#!" className="pink-text">
                    <h6 className="font-weight-bold">
                      <MDBIcon icon="home" className="pr-2" />
                      Experiances
                    </h6>
                  </a>
                </div>
                <h3 className="font-weight-bold dark-grey-text mb-3 p-0">
                  <a href="#!">{whatweworkedon.title}</a>
                </h3>
                <p className="dark-grey-text">{whatweworkedon.description}
                 </p>
              </div>

              {whatweworkedon.lists.map((list)=>
              <div style={{
                borderBottom: "1px solid #e0e0e0",
                marginBottom: "1.5rem"
              }}>
                <MDBRow>
             
                    <MDBCol size="1">
                <MDBIcon icon="share" size="sm" className="indigo-text" />
              </MDBCol>
              <MDBCol xl="10" md="11" size="10">
                <h5 className=" mb-2">{list.title}
 </h5>
              </MDBCol>
           
                </MDBRow>
              </div>)}
              <div style={{
                borderBottom: "1px solid #e0e0e0",
                marginBottom: "1.5rem"
              }}>
                <MDBRow>
             
                    <MDBCol size="1">
                <MDBIcon icon="share" size="sm" className="indigo-text" />
              </MDBCol>
              <MDBCol xl="10" md="11" size="10">
                   <strong> < a  className=" mb-2" href="/Projects/OurWorks">Check Projects We Done</a>
                   </strong>
              </MDBCol>
           
                </MDBRow>
              </div>

 </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
        </MDBContainer>

);
}

export default Service2Page;