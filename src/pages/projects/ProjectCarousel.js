
  import React from "react";
  import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBContainer } from "mdbreact";
  import Carousel from "react-multi-carousel";
  import "react-multi-carousel/lib/styles.css";
  import Ellaimage from '../../assets/images/ella.jpg';
  import "./ProjectCarousel.css"
  import firebase from "../../firebase";

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
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



  const ProjectCarousel = () => {
  
    const [Teams, setTeams] = React.useState({teamsList:[]});
    
    const [albumPhotos, setalbumPhotos] = React.useState([]);
    const [albumPhotosData, setalbumPhotosData] = React.useState({});
    React.useEffect(() => {

      
    
      
let facebookAlbumPath='https://graph.facebook.com/' + 210134160508098 +'?fields=photos.limit(10){images,name},description,name,location,created_time,place,cover_photo,link,updated_time&access_token=EAAJvjLe71rMBAEuQEAWbAUE3M59B1OhB8qn2akftaxw62mW5TiBZCZAtaeusVGPOSLca68ua20jyB8huYsZBJENoVHQui1dnIvwnhTZBYlVG7ViAUtjz9vmROhk4N5Nt96ovYTMyBRVtIuGYNoag8j9flZAZCldlcWDKsdGgd4AQZDZD';

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
        name:data.photos.data[i].name
        // caption: "After Rain (Jeshu John - designerspics.com)"
}
    photos.push(SinglePhoto);
  }}
  setalbumPhotos(photos);
          console.log("setalbumPhotosData:", data);
          setalbumPhotosData(data);
});
    
}, []);
  
  
return (
    <>
    <MDBCard className="my-5  pb-5 text-center">
        <MDBCardBody  className="px-2 ">
          <h2 className="h1-responsive font-weight-bold my-3">

          Some Projects
                    </h2>
          <p className="grey-text w-responsive mx-auto mb-2">

         {albumPhotosData.description}
          </p>
  
        </MDBCardBody>
        <MDBContainer>
          
        <Carousel infinite="true" autoPlay="true" responsive={responsive} className="my-2 pb-2 text-center">
    {albumPhotos.map((team,index)=>
    <div  className="m-2 ">
    <MDBCard testimonial  className="p-2 roundedHalf">
     {(albumPhotos[index]) &&<img
              src= {albumPhotos[index].src}
               className="roundedHalf z-depth-1 img-fluid"
                  alt="Sample avatar"
              />}
              
            <MDBCardBody>
            
            <h5 className="font-weight-bold mt-4 mb-3"  
                    style={{
                    whiteSpace: "nowrap",
                    width: "260px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",}}
            >{team.name}</h5>
            </MDBCardBody>
          </MDBCard>
    </div>
    
    )}
    </Carousel>
 
    <strong> < a  className=" mb-2" href="/Projects/OurWorks">See All Projects</a>
                   </strong>
  
        
        </MDBContainer>
      </MDBCard>
  
  
  </>
  
  
    );
  }
  


  export default ProjectCarousel;