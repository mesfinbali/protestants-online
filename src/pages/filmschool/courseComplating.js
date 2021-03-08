import React from "react";
import {  MDBRow, MDBCol, MDBMask, MDBContainer, MDBView ,MDBIcon} from "mdbreact";
import Ellaimage from '../../assets/images/ella.jpg';
import CoursesPage from "./team.js"
import StudentsPage from "./student.js"
import { AfterComplatingCoursesData } from "../../Service-ApI/MasterData";
import firebase from "../../firebase";

const CourseComplating = () => {
    
  const [AfterComplatingCourses, setAfterComplatingCourses] = React.useState({lists:[]});
  React.useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      
      const data = await db.collection("FilmSchool").doc('afterComplatingCourses');
      data.get().then(function(doc) {
        if (doc.exists) {
            console.log("StudentList Document data:", doc.data());
            setAfterComplatingCourses(doc.data());

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
  

 <section className="my-5">
        <h2 className="h1-responsive font-weight-bold text-center my-5">
        {AfterComplatingCourses.title}
        </h2>
    
<p className="lead grey-text w-responsive text-center mx-auto mb-5">

{AfterComplatingCourses.description}
 </p>

        <MDBRow>
          <MDBCol lg="4" className="text-center text-lg-left">
            <img
              className="img-fluid"
              src={AfterComplatingCourses.introImage} 
              alt=""
            />
          </MDBCol>
          <MDBCol lg="7" className="ml-2">
          {AfterComplatingCourses.lists.map((skill,index)=>
            <MDBRow className="mb-3">
              <MDBCol size="1">
                <MDBIcon icon="share" size="lg" className="indigo-text" />
              </MDBCol>
              <MDBCol xl="11" md="11" size="11">
                <h5 className="font-weight-bold mb-3">{skill.title}</h5>
                <p className="grey-text">
                {skill.description}
                </p>
              </MDBCol>
            </MDBRow>
          )}

          </MDBCol>
        </MDBRow>
      </section>
  

  


  </>
  );
}

export default CourseComplating;