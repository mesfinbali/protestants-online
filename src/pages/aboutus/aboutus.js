import React from "react";
import {  MDBRow, MDBCol, MDBMask, MDBContainer, MDBView ,MDBIcon} from "mdbreact";

import TeamPage from "./team.js"
import firebase from "../../firebase";

const AboutUs = () => {

  const [servicesWeOffer, setServicesWeOffer] = React.useState({});
  const [whatDoWeDo, setWhatDoWeDo] = React.useState({});
  const [whyChoosUs, setWhyChoosUs] = React.useState({strengths:[]});

  React.useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      
      const data1 = await db.collection("AboutUs").doc('servicesWeOffer');
      const data2 = await db.collection("AboutUs").doc('whatDoWeDo');
      const data3 = await db.collection("AboutUs").doc('whyChoosUs');
      
    data1.get().then(function(doc) {
        if (doc.exists) {
            console.log("courses Document data:", doc.data());
            setServicesWeOffer(doc.data());

        } else {
            console.log("No such  document courses!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
    
    data2.get().then(function(doc) {
      if (doc.exists) {
          console.log("courses Document data:", doc.data());
          setWhatDoWeDo(doc.data());

      } else {
          console.log("No such  document courses!");
      }
  }).catch(function(error) {
      console.log("Error getting document:", error);
  });

  data3.get().then(function(doc) {
    if (doc.exists) {
        console.log("courses Document data:", doc.data());
        setWhyChoosUs(doc.data());

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
  <>
  
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
                  About 
                  <span className='indigo-text font-weight-bold'> Us</span>
                </h1>
                <hr className='hr-light my-2' />
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBView>
        
        
        </div>

        <section className="my-5">
        <h2 className="h1-responsive font-weight-bold text-center my-5">
        {whyChoosUs.title}
        </h2>
        <p className="lead grey-text w-responsive text-center mx-auto p-2 mb-5">
{whyChoosUs.description}
</p>

        <MDBRow  className="p-3">
          <MDBCol lg="5" className="text-center text-lg-left">
            <img
              className="img-fluid"
              src={whyChoosUs.introImagePath}
              alt=""
            />
          </MDBCol>
          <MDBCol lg="7">
         {whyChoosUs.strengths.map((strength)=>
         
         <MDBRow className="mb-3">
         <MDBCol size="1" >
           <MDBIcon icon="share" size="lg" className="indigo-text" />
         </MDBCol>
         <MDBCol xl="10" md="11" size="10">
           <h5 className="font-weight-bold mb-3">{strength.strengthTitle}</h5>
           <p className="grey-text">{strength.description}
</p>             
         </MDBCol>
       </MDBRow>
         
         )}
         
          </MDBCol>
        </MDBRow>
      </section>
  

      <div id='parallaxintro' >
        
        <MDBView className='mdbparallaxHeader view' 
          src={'https://scontent.fmba5-1.fna.fbcdn.net/v/t1.0-9/125473609_209977990523715_4062154164245074664_o.jpg?_nc_cat=106&ccb=2&_nc_sid=cdbe9c&_nc_ohc=02ln4Wrz_gQAX8XqG-V&_nc_ht=scontent.fmba5-1.fna&oh=441e04451e2841e1143c7ad0fe487f1c&oe=5FD86B66'}
          fixed
         
        >
          {/* <MDBMask className='rgba-black-light '/> */}
          <MDBMask className='d-flex justify-content-center align-items-center gradient' />
          
          <MDBContainer
            className='d-flex justify-content-center align-items-center'
            style={{ height: '20%', width: '100%', paddingTop: '5rem' }}
          ></MDBContainer>
          <MDBContainer
            className='d-flex justify-content-center align-items-center'
            style={{ height: '20%', width: '100%', paddingTop: '5rem' }}
          ></MDBContainer>
          <MDBContainer
            className='d-flex justify-content-center align-items-center'
            style={{ height: '20%', width: '100%', paddingTop: '5rem' }}
          ></MDBContainer>
          
          <MDBContainer
            className='d-flex justify-content-center align-items-center'
            style={{ height: '10%', width: '100%', paddingTop: '5rem' }}
          ></MDBContainer>
        </MDBView>
</div>


        <section className="my-5">
        <h2 className="h1-responsive font-weight-bold text-center my-5">
        {whatDoWeDo.title}
          {/* Why is it so great? */}
        </h2>
        <p className="lead grey-text w-responsive text-center mx-auto mb-5">
        {whatDoWeDo.description}
        </p>
</section>


<section className="my-5">
        <h2 className="h1-responsive font-weight-bold text-center my-5">
{servicesWeOffer.title}     
        </h2>
        <p className="lead grey-text w-responsive text-center mx-auto p-2 mb-5">
     {servicesWeOffer.description}
     </p>

</section>





<div id='parallaxintro'
      >
        
        <MDBView className='mdbparallaxHeader view' 
          src={'https://scontent.fmba5-1.fna.fbcdn.net/v/t1.0-9/125813958_209978237190357_2879734405367801973_o.jpg?_nc_cat=101&ccb=2&_nc_sid=cdbe9c&_nc_ohc=ztJr16oqnQoAX_v6gsN&_nc_ht=scontent.fmba5-1.fna&oh=4890fd374647a46378807a067c1689d2&oe=5FD7179E'}
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
          
          <MDBContainer
            className='d-flex justify-content-center align-items-center'
            style={{  width: '100%', paddingTop: '5rem' }}
          ></MDBContainer>
        </MDBView>
</div>



  <TeamPage></TeamPage>
  </>
  );
}

export default AboutUs;