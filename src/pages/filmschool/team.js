import React from "react";
import {  MDBRow, MDBCol,MDBCard,MDBCardBody, MDBIcon,MDBContainer,MDBView,MDBMask } from "mdbreact";
import firebase from "../../firebase";
import "./team.css"
import { HttpService } from "../../Service-ApI/http-service";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CommonServices } from "../../Service-ApI/common-services";
import { HomeAboutGedeoData, SidebarData } from "../../Service-ApI/MasterData";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


const CoursesPage = (props) => {

// const HomeAboutGedeo= JSON.parse(localStorage.getItem("HomeAboutGedeo"));

const [HomeAboutGedeo, setHomeAboutGedeo] = React.useState();
const [CoursesList, setCoursesList] = React.useState({coursesList:[]});


React.useEffect(() => { 
  window.scrollTo({ top: 0, behavior: "smooth" }); 
  initializaData();
    },
    []);
    

  const  initializaData=()=>{

    var album= JSON.parse(localStorage.getItem("propsAlbumData")); 
 
      if(props.album){ 
        album= props.album  
      localStorage.setItem("propsAlbumData", JSON.stringify(props.album))  
    }

    else if(props.location.album){
      album= props.location.album  
      localStorage.setItem("propsAlbumData", JSON.stringify(props.location.album))  
    }

    else{
      album= JSON.parse(localStorage.getItem("propsAlbumData"))  
    }


var lodalAlbumData= JSON.parse(localStorage.getItem(album.name)); 
    
  if(!lodalAlbumData){  
    HttpService.initFBSingleAlbumdata(props.album).then((data) => { 
    if(data.photos){    
      localStorage.setItem(album.name, JSON.stringify(data)) 
      setHomeAboutGedeo(data)
    }  else{
      initializaData(); 
     }
    })
    } 
   else{  
    setHomeAboutGedeo(lodalAlbumData)
    } 

    }
 
  return (
    <>
    <div className="aboucss">
    {(!(window.location.pathname==""||window.location.pathname=="/"))&&
   
<div id='parallaxintro'>
        
        <MDBView className='mdbparallaxHeader'
          src={'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fget.wallhere.com%2Fphoto%2Fpattern-texture-background-colorful-1046774.jpg&f=1&nofb=1'}
        
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
             
                {/* <h1 className='display-3 mb-0 pt-md-2 pt-2 white-text font-weight-bold'>
                    
                  <span className='indigo-text font-weight-bold'> {this.state.search.name}</span>
                </h1>
                <hr className='hr-light my-2' /> */}
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBView>
        
        
        </div>
 
  }   

<MDBContainer>
<section className="my-5 ">

        <h2 className="h1-responsive font-weight-bold text-center my-5">
          About Gedeo
        </h2>
        <p className="lead grey-text w-responsive text-center mx-auto mb-5">
        The Gedeo are an ethnic group in southern Ethiopia. The Gedeo Zone in the Southern Nations, Nationalities, and People's Region (SNNPR) is named for this people. They speak the Gedeo language, which is one of the Cushitic languages.
        </p>

        <MDBRow>
          <MDBCol md="4"  className="mb-5">
            
       {HomeAboutGedeoData.list.map((list,index)=>   
         <> 
         {(((HomeAboutGedeoData.list.length/2)>(index+1))&&(((HomeAboutGedeoData.list.length/2) )>(index+1))) &&
         <> 
          <MDBRow className="mb-3">
              <MDBCol size="2">
                <MDBIcon
                  icon="book"
                  size="2x"
                  className="deep-black-text"
                />
              </MDBCol>
              <MDBCol size="10">
                
              <a   href={"Posts/album/?name="+list.albumName+"&fbId="+list.id}>
                <h5 className="black-text font-weight-bold mb-3">{list.albumName}</h5></a>
                <p className="grey-text">
                 {list.description} {"  "}
               <span>
                 <a href={"Posts/album/?name="+list.albumName+"&fbId="+list.id} > 
                Read more{' '}
                {/* <MDBIcon
                  icon='chevron-right'
                  className='ml-2'
                  size='sm'
                ></MDBIcon>  */}
            </a></span> 
                </p>
              </MDBCol>
            </MDBRow> 
            </>
}
             </>)}

          </MDBCol>
          <MDBCol md="4" className="mb-5 text-name">
          
{HomeAboutGedeo&&
<Carousel infinite="true" autoPlay="true" responsive={responsive} className="my-2 pb-2 text-center">
    {HomeAboutGedeo.photos.data.map((team,index)=>
    <div  className="m-2 ">
    <MDBCard testimonial  className="p-2 roundedAboutGedeo">
      {/* {(albumPhotos[index])&&
      <img
              src={albumPhotos[index].src}
              // style
              className="rounded-circle z-depth-1 img-fluid"
                  alt="Sample avatar"
              />
      }  */}
      

      <MDBView className=" roundedAboutGedeo">

<img
       className="img-fluid  roundedAboutGedeo z-depth-5"
       src= {team.images[CommonServices.calcImagesType(team.images,200,200)].source}  alt=""
     />
            </MDBView>
              
            <MDBCardBody  className="mt-0 mb-0 p-0">
            
            {/* <h5 className="font-weight-bold mt-2 mb-2">{team.fullName}</h5>
            {team.roles.map((role)=><p className=" blue-text">{role}</p>)}
   {(team.roles.length<2) && <p className="text-uppercase blue-text">--</p>} */}
            </MDBCardBody>
          </MDBCard>
    </div>
    
    )}
    </Carousel>

}
         {((HomeAboutGedeoData.list.length%2)==1)&&
<MDBRow className="mb-3">
              <MDBCol size="2">
                <MDBIcon
                  icon="book"
                  size="2x"
                  className=" "
                />
              </MDBCol>
              <MDBCol size="10">  
              
               <a  href={"Posts/album/?name="+HomeAboutGedeoData.list[Math.round(HomeAboutGedeoData.list.length/2)-1].albumName+"&fbId="+HomeAboutGedeoData.list[Math.round(HomeAboutGedeoData.list.length/2)-1].id}>
               <h5 className="black-text font-weight-bold mb-3">
                  {HomeAboutGedeoData.list[Math.round(HomeAboutGedeoData.list.length/2)-1].albumName}</h5></a>
                <p className="grey-text">
                 
                {HomeAboutGedeoData.list[Math.round(HomeAboutGedeoData.list.length/2)-1].description} {"  "}
               <span>
                 <a href={"Posts/album/?name="+HomeAboutGedeoData.list[Math.round(HomeAboutGedeoData.list.length/2)-1].albumName+"&fbId="+HomeAboutGedeoData.list[Math.round(HomeAboutGedeoData.list.length/2)-1].id} > 
                Read more{' '}
                {/* <MDBIcon
                  icon='chevron-right'
                  className='ml-2'
                  size='sm'
                ></MDBIcon>  */}
            </a></span> 
                </p>



              </MDBCol>
            </MDBRow>
}

          </MDBCol>
          <MDBCol md="4"   className="mb-5">
           
       {HomeAboutGedeoData.list.map((list,index)=> 
         <> 
         {((HomeAboutGedeoData.list.length/2)<=(index)) && 
            <MDBRow className="mb-3">
              <MDBCol size="2">
                <MDBIcon
                  icon="book"
                  size="2x" 
                />
              </MDBCol>
              <MDBCol size="10">
                
                 <a   href={"Posts/album/?name="+list.albumName+"&fbId="+list.id}>
                <h5 className="black-text font-weight-bold mb-3">{list.albumName}</h5></a>
                <p className="grey-text">
                 {list.description} {"  "}
               <span>
                 <a href={"Posts/album/?name="+list.albumName+"&fbId="+list.id} > 
                Read more{' '}
                {/* <MDBIcon
                  icon='chevron-right'
                  className='ml-2'
                  size='sm'
                ></MDBIcon>  */}
            </a></span> 
                </p>

              </MDBCol>
            </MDBRow>
}
            </>)}
             </MDBCol>
        </MDBRow>
      </section>
  
      </MDBContainer>
      </div>
      </>
      );
}

export default CoursesPage;
