
  import React from "react";
  import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBContainer } from "mdbreact";
  import Carousel from "react-multi-carousel";
  import "react-multi-carousel/lib/styles.css";
  import Ellaimage from '../../assets/images/ella.jpg';
  import "./team.css"
  import firebase from "../../firebase";
// 210052870516227
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };



  const TeamPage = () => {
  
    const [Teams, setTeams] = React.useState({teamsList:[]});
    const [albumPhotos, setalbumPhotos] = React.useState({teamsList:[]});
    
    React.useEffect(() => {
    
      
let facebookAlbumPath='https://graph.facebook.com/' + 210147027173478 +'?fields=photos{images},description,name,location,created_time,place,cover_photo,link,updated_time&access_token=EAAJvjLe71rMBAEuQEAWbAUE3M59B1OhB8qn2akftaxw62mW5TiBZCZAtaeusVGPOSLca68ua20jyB8huYsZBJENoVHQui1dnIvwnhTZBYlVG7ViAUtjz9vmROhk4N5Nt96ovYTMyBRVtIuGYNoag8j9flZAZCldlcWDKsdGgd4AQZDZD';

fetch(facebookAlbumPath)
.then(response => response.json())
.then(data => {
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
  setalbumPhotos(photos);
});
    
    
      const fetchData = async () => {
        const db = firebase.firestore();
        
        const data = await db.collection("AboutUs").doc('Teams');
        data.get().then(function(doc) {
          if (doc.exists) {
              console.log("courses Document data:", doc.data());
              setTeams(doc.data());
  
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
    <MDBCard className="my-5  pb-5 text-center">
    <MDBContainer>
        <MDBCardBody  className="px-2 ">
          <h2 className="h1-responsive font-weight-bold my-3">

          {Teams.title}
                    </h2>
          <p className="grey-text w-responsive mx-auto mb-2">

         {Teams.description}
          </p>
  
        </MDBCardBody>
        <MDBContainer>
          
        <Carousel infinite="true" autoPlay="true" responsive={responsive} className="my-2 pb-2 text-center">
    {Teams.teamsList.map((team,index)=>
    <div  className="m-2 ">
    <MDBCard testimonial  className="p-2 roundedHalf2">
      {(albumPhotos[index])&&
      <img
              src={albumPhotos[index].src}
              // style
              className="rounded-circle z-depth-1 img-fluid"
                  alt="Sample avatar"
              />
      }
              
            <MDBCardBody  className="mt-0 mb-0 p-0">
            
            <h5 className="font-weight-bold mt-2 mb-2">{team.fullName}</h5>
            {team.roles.map((role)=><p className=" blue-text">{role}</p>)}
   {(team.roles.length<2) && <p className="text-uppercase blue-text">--</p>}
            </MDBCardBody>
          </MDBCard>
    </div>
    
    )}
    </Carousel>
 
  
        
        </MDBContainer>
        </MDBContainer>
      </MDBCard>
  
  
  </>
  
  
    );
  }
  


  export default TeamPage;