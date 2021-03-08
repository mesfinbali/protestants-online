import React ,{useState}from 'react';
import { MDBRow,MDBModalBody,MDBModalFooter,MDBModalHeader,MDBIcon,MDBModal,MDBContainer,MDBBtn, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBTooltip } from 'mdbreact';
import CarouselStudents from './carouselStudents';
import { StudentsTestimonyData } from '../../Service-ApI/MasterData';
import { useEffect } from 'react';
import firebase from "../../firebase";

const StudentsPage = () => {
 
  const [StudentList, setStudentList] = React.useState({studentsList:[]});
  React.useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      
      const data = await db.collection("FilmSchool").doc('students');
      data.get().then(function(doc) {
        if (doc.exists) {
            console.log("StudentList Document data:", doc.data());
            setStudentList(doc.data());

        } else {
            console.log("No such  document StudentList!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
    
    // setSpells(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    };
    fetchData();
  }, []);

  
  return (
    <>
      <MDBContainer>
    <section className='text-center my-5'>
      <h2 className='h1-responsive font-weight-bold text-center my-5'>{StudentList.title}</h2>
      <p className='grey-text text-center w-responsive mx-auto mb-5'>{StudentList.description}
      </p>
      <MDBRow>
        {StudentList.studentsList.map((testimony,index)=>
        
        <MDBCol lg='4' md='4' className='mb-lg-0 mb-4'>
          <MDBCard wide ecommerce>
            <MDBCardImage
              cascade
              src={testimony.gallary[0]}
              top
              alt='sample photo'
            />
            <MDBCardBody cascade className='text-center'>
              <a href='#!' className='text-muted'>
                <h5>{testimony.studentName}</h5>
              </a>
              <MDBCardTitle>
                <strong>
                  <a href='#!'>{testimony.specializattionSkill}</a>
                </strong>
              </MDBCardTitle>
              <MDBCardText>{testimony.description}</MDBCardText>
              {/* <MDBCardFooter className='px-1'>
                <span className='float-right'>
                  <MDBBtn outline color="info"  size="sm" >Read More</MDBBtn>
                </span>
              </MDBCardFooter> */}
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        )}
      
         </MDBRow>
    </section>
 
    </MDBContainer>
    
    <MDBRow>
      <MDBContainer className="text-center">
            <strong> < a  className=" mb-2" href="/Gallary/album/?fbId=216007856587395">See All Photos</a>
            </strong>
      </MDBContainer>
         </MDBRow>

    <CarouselStudents courouselImages={StudentList.gallary}></CarouselStudents>

  
  
    </>
     );
};

export default StudentsPage;
