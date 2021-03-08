import React from "react";
import {  MDBRow, MDBCol, MDBMask, MDBContainer, MDBView ,MDBIcon} from "mdbreact";

import Ellaimage from '../../assets/images/ella.jpg';
import CoursesPage from "./team.js"
import StudentsPage from "./student.js"
import { AfterComplatingCoursesData } from "../../Service-ApI/MasterData";
import CourseComplating from "./courseComplating";
import RegisterSchool from "./registerSchool";
import RegisterForm from "./registerForm";
const SchoolPage = () => {
  
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  })
  return (
  <>
 
<RegisterSchool></RegisterSchool>
        <CoursesPage></CoursesPage>
 
        <div id='parallaxintro'
      >
        
        <MDBView className='mdbparallaxHeader view' 
          src={'https://scontent.fmba5-1.fna.fbcdn.net/v/t1.0-9/124165948_208057014049146_3527204818212155717_o.jpg?_nc_cat=103&ccb=2&_nc_sid=8bfeb9&_nc_ohc=kue1IRpM_YoAX9YLEji&_nc_ht=scontent.fmba5-1.fna&oh=29cf1250974ea96d28aab957758c7e7d&oe=5FD7FCC4'}
          fixed
         
        >
          {/* <MDBMask className='rgba-black-light '/> */}
          <MDBMask className='d-flex justify-content-center align-items-center gradient' />
          
          <MDBContainer
            className='d-flex justify-content-center align-items-center'
            style={{  width: '100%', paddingTop: '5rem' }}
          ></MDBContainer>
          
          <MDBContainer
            className='d-flex justify-content-center align-items-center'
            style={{  width: '100%', paddingTop: '5rem' }}
          ></MDBContainer>
          
          <MDBContainer
            className='d-flex justify-content-center align-items-center'
            style={{  width: '100%', paddingTop: '5rem' }}
          ></MDBContainer>
        </MDBView>
</div>

<CourseComplating></CourseComplating>

  

      <div id='parallaxintro'
      >
        
        <MDBView className='mdbparallaxHeader view' 
          src={'https://scontent.fmba5-1.fna.fbcdn.net/v/t1.0-9/122029439_202885054566342_3917003156055104579_o.jpg?_nc_cat=102&ccb=2&_nc_sid=8bfeb9&_nc_ohc=xnQ4dViYB2kAX8PrP4Q&_nc_ht=scontent.fmba5-1.fna&oh=0f18c6a0cdbc0201351a127213220fc3&oe=5FD750DE'}
          fixed
         
        >
          {/* <MDBMask className='rgba-black-light '/> */}
          <MDBMask className='d-flex justify-content-center align-items-center gradient' />
          
          <MDBContainer
            className='d-flex justify-content-center align-items-center'
            style={{  width: '100%', paddingTop: '5rem' }}
          ></MDBContainer>
          
          <MDBContainer
            className='d-flex justify-content-center align-items-center'
            style={{  width: '100%', paddingTop: '5rem' }}
          ></MDBContainer>
          
          <MDBContainer
            className='d-flex justify-content-center align-items-center'
            style={{  width: '100%', paddingTop: '5rem' }}
          ></MDBContainer>
        </MDBView>
</div>


<StudentsPage></StudentsPage>
<MDBContainer> 
<section className='text-center my-5'>
      <h2 className='h1-responsive font-weight-bold text-center my-5'>Register To School</h2>
      <p className='grey-text text-center w-responsive mx-auto mb-5'> 
      </p>
<RegisterForm></RegisterForm>
</section>
</MDBContainer>

  </>
  );
}

export default SchoolPage;