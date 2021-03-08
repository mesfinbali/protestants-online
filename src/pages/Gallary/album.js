import { MDBContainer } from 'mdbreact';
import React, { Component } from 'react';
import {  MDBRow, MDBCol,  MDBIcon, MDBMask, MDBView, MDBBtn } from "mdbreact";
import queryString from "query-string";
import "./album.css"
import YouTube from 'react-youtube';

import Gallery from 'react-grid-gallery';
import YoutubePlayerComp from './youtubeplayer';

class AlbumPage extends Component {
constructor(props){
 super(props);

 let search = queryString.parse(this.props.location.search);

    this.state = {
        projectData:JSON.parse(localStorage.getItem('selectedProject')),
        search:search,
        fbAlbumData:{},
        albumPhotos:[
            { }],
      };
}

async componentDidMount(){  

  window.scrollTo({ top: 0, behavior: "smooth" });
   
let facebookAlbumPath='https://graph.facebook.com/' + this.state.search.fbId +'?fields=photos{images},description,name,location,created_time,place,cover_photo,link,updated_time&access_token=EAAJvjLe71rMBAEuQEAWbAUE3M59B1OhB8qn2akftaxw62mW5TiBZCZAtaeusVGPOSLca68ua20jyB8huYsZBJENoVHQui1dnIvwnhTZBYlVG7ViAUtjz9vmROhk4N5Nt96ovYTMyBRVtIuGYNoag8j9flZAZCldlcWDKsdGgd4AQZDZD';
this.initFBdata(facebookAlbumPath,1);
}



initFBdata(albumsUrl,countpage){
  fetch(albumsUrl)
    .then(response => response.json())
    .then(data => 
      {




        let data2;
        let photos=[];
        let SinglePhoto={};

      let MergeData = this.state.albumPhotos;
        
      if(countpage>1){
        data2=data
      }
      else{
        data2=data.photos

      }

      if(data2){
        for(let i=0;i<data2.data.length;i++){
          let thumb;
            if(((data2.data[i].images.length)-2)>0){
              thumb=((data2.data[i].images.length)-2)
            }
              else{
                thumb=0;
              }
          SinglePhoto={
              src: data2.data[i].images[0].source,
              thumbnail: data2.data[i].images[thumb].source,
              thumbnailWidth: data2.data[i].images[0].width,//320,
              thumbnailHeight: data2.data[i].images[0].height,//174,
              // isSelected: true,
              // caption: "After Rain (Jeshu John - designerspics.com)"
      }
          photos.push(SinglePhoto);
        }
      }

      if(countpage>1){
        for(let i=0;i<photos.length;i++){
          MergeData.push(photos[i]);
        }
      }
      else{
        this.setState({fbAlbumData:data})
        MergeData=photos;
      }
      // console.log("Albums data")
      // console.log(data2)
      this.setState({albumPhotos: MergeData })
    
      if(data2){
      if(data2.paging.next){
        countpage=countpage+1;
        this.initFBdata(data2.paging.next,countpage);
      }}
        });
    

}



parseTime = (minute) => {
  let hours = parseInt(minute / 60);
  let minutes = minute % 60;
  return <span>{hours + "hrs " + minutes + "mins"}</span>;
};

parseDate = (dateString) => {
  let options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    // hour: "numeric",
    // minute: "numeric",
  };
  
  let date = new Date(dateString);
  let newDate = date.toLocaleString("en-GB", options);
  return <span>{newDate}</span>;
};


goToAlbum = () => {
  
};

setDescription=(desc)=>{

//   console.log("desc ooooooooooooo");
//   console.log(desc);
  
// var desc=   "Festivals:\n\n\u12f3\u122b\u122e ~ \u12e8\u130c\u12f4\u12a6 \u12d8\u1218\u1295 \u1218\u1208\u12c8\u132b\n\u2764 \u12e8\u121d\u1235\u130b\u1293 \u1240\u1295 \n\u130c\u12f4\u12a6 \u1244\u12ec \u1218\u1295\u12f0\u1229\u1295 \u1220\u120b\u121d \u120b\u12f0\u1228\u1308 \u1363\u12a0\u12dd\u1218\u122b\u1293 \u1230\u1265\u1209\u1295 \u12a8\u1270\u121d\u127d \u1208\u1320\u1260\u1240 \u1363\u1205\u12dd\u1261\u1295\u1293 \u121d\u12f5\u1229\u1295 \u12a8\u1218\u12d3\u1275\u1293 \u12a5\u122d\u130d\u121b\u1295 \u1208\u1273\u12f0\u1308 \u121b\u130c\u1296 /\u1348\u1323\u122a/ \u121d\u1235\u130b\u1293 \u12e8\u121a\u12eb\u1240\u122d\u1265\u1260\u1275 \u1240\u1295 \u12a5\u1295\u1206 \u12f0\u1228\u1230!!\n\u1208\u12a0\u1263 \u130b\u12f3 \u1309\u121b\u1273 /\u1230\u1326\u1273/ \u12e8\u121a\u1230\u1293\u12f3\u1260\u1275 \u1260\u130b\u122b \u12e8\u121a\u12a8\u1260\u122d \u12e8\u121d\u1235\u130b\u1293\u1293 \u12e8\u1235\u1326\u1273 \u1260\u12d3\u120d \u12f3\u122b\u122e \u12a8\u12c8\u1275\u122e\u12cd \u1260\u1270\u1208\u12e8 \u1260\u12f0\u1218\u1245 \u1201\u1294\u1273 \u1208\u121b\u12ad\u1260\u122d \u130c\u12f4\u12a6 \u123d\u122d \u1309\u12f5 \u121b\u1208\u1275 \u12a8\u1300\u1218\u1228 \u1230\u1295\u1263\u1265\u1277\u120d\u1362 \n\u1260\u12da\u1205\u12cd \u12a0\u130b\u1323\u121a \u12e8\u130c\u12f4\u12a6 \u12de\u1295 \u12a0\u1235\u1270\u12f3\u12f0\u122d \u12a5\u1295\u12b3\u1295 \u1208\u130c\u12f4\u12a6 \u1265\u1214\u122d \u12d8\u1218\u1295 \u1218\u1208\u12c8\u132b \u12e8\u12f3\u122b\u122e \u1260\u12d3\u120b \u1260\u1230\u120b\u121d \u12a0\u12f0\u1228\u1233\u127d\u1201 \u12a0\u12f0\u1228\u1230\u1295 \u12ed\u120b\u120d\u1362 \n\u1260\u130c\u12f4\u12a6 \u1265\u1214\u122d \u1275\u120d\u1245 \u1235\u134d\u122b \u12e8\u121a\u1230\u1320\u12cd \u12e8\u121d\u1235\u130b\u1293 \u12e8\u1235\u1326\u1273 \u1260\u12d3\u120d \u12f3\u122b\u122e \u12d8\u1295\u12f5\u122e\u121d \u1260\u1235\u1356\u122d\u1273\u12ca \u12cd\u12f5\u12f5\u122e\u127d \u1363\u1260\u124b\u1295\u124b\u1293 \u1263\u1205\u120d \u1232\u1295\u1356\u12da\u12e8\u121d \u12a5\u1295\u12f2\u1201\u121d \u1260\u1270\u1208\u12eb\u12e9 \u12dd\u130d\u1305\u1276\u1278 \u1263\u1205\u120b\u12ca \u12ed\u12d8\u1271\u1295 \u12a5\u1295\u12f0\u1320\u1260\u1240 \u1260\u12f2\u120b \u12a8\u1270\u121b \u1260\u12f0\u121d\u1240\u1275 \u12ed\u12a8\u1260\u122b\u120d\u1362\n\u12e8\u12d8\u1295\u12f5\u122e \u12e8\u12f3\u122b\u122e \u1260\u12d3\u120d \u201c\u12f3\u122b\u122e \u1208\u1230\u120b\u121b\u127d\u1295 \u12a0\u1295\u12f5\u1290\u1273\u127d\u1295\u1293 \u1208\u1265\u120d\u133d\u130d\u1293\u127d\u1295\u201d \u1260\u121a\u120d \u1218\u122a \u1243\u120d \u1235\u1293\u12a8\u1265\u122d \u12a8\u121d\u1295\u121d \u1260\u120b\u12ed \u1263\u1205\u120b\u12ca \u12a5\u1234\u1276\u127b\u127d\u1295 \u1208\u12d8\u120b\u1242 \u1220\u120b\u121b\u127d\u1295\u1293 \u12a0\u1295\u12f5\u1290\u1273\u127d\u1295 \u12eb\u120b\u1278\u12cd\u1295 \u12e8\u120b\u1240 \u12a0\u1235\u1270\u12cb\u133e \u1260\u1218\u1228\u12f3\u1275 \u132d\u121d\u122d \u1290\u12cd\u1362\n\u1260\u1200\u1308\u122d \u12cd\u1235\u1325\u1293 \u1260\u12cd\u132d \u12eb\u120b\u127d\u1201 \u12e8\u12de\u1291 \u1270\u12c8\u120b\u1306\u127d\u1293 \u12c8\u12f3\u1306\u127d \u1291 \u12f3\u122b\u122e\u1295 \u12a8\u12a5\u129b \u130b\u122d \u12a0\u12ad\u1265\u1229 \u12a5\u12eb\u1208 \u12e8\u130c\u12f4\u12a6 \u12de\u1295 \u12a0\u1235\u1270\u12f3\u12f0\u122d \u12e8\u12a0\u12ad\u1265\u122e\u1275 \u1325\u122a\u12cd\u1295 \u12eb\u1235\u1270\u1208\u120d\u134d\u1362\n\u12e8\u12ab\u1260\u1270 \u12e8\u1270\u1348\u1325\u122e \u1325\u1260\u1243 \u1263\u1205\u120d \u1263\u1208\u1264\u1275 \u12e8\u1275\u12a8\u120d \u12f5\u1295\u130b\u12ee\u127d\u1293 \u12e8\u1270\u1208\u12eb\u12e9 \u1270\u1348\u1325\u122e\u12d3\u12ca\u1293 \u1273\u122a\u12ab\u12ca \u1245\u122d\u1236\u127d \u1218\u1308\u129b \u120d\u12e9 \u1323\u12a5\u121d \u12eb\u1208\u12cd \u12e8\u12ed\u122d\u130b\u1328\u134c \u1261\u1293 \u1218\u134a\u1208\u1242\u12eb \u130c\u12f4\u12a6 \u12a5\u1295\u12f0 \u1263\u1205\u1209 \u12a0\u123b\u121b \u1291 \u12f3\u122b\u122e\u1295 \u12a0\u1265\u1228\u1295 \u1260\u130b\u122b \u12a5\u1293\u12ad\u1260\u122d \u12ed\u120b\u120d\u1362\n\u12e8\u12f3\u122b\u122e \u1260\u12d3\u120d\u1295 \u121d\u12ad\u1295\u12eb\u1275 \u1260\u121b\u12f5\u1228\u130d \u1260\u1206\u1274\u120d\u1293 \u1271\u122a\u12dd\u121d \u1260\u12a0\u130d\u122e \u1355\u122e\u1230\u1235\u1295\u130d \u1260\u1218\u1295\u1348\u12ad\u1278\u122d\u1293 \u1218\u1230\u120d \u12d8\u122d\u134e\u127d \u1260\u12a2\u1295\u1268\u1235\u1275\u1218\u1295\u1275 \u1208\u1218\u1230\u121b\u122b\u1275 \u12e8\u121a\u1348\u120d\u1309 \u1263\u1208\u1203\u1265\u1276\u127d\u1295 \u1208\u1218\u1240\u1260\u120d \u1260\u122b\u127d\u1295 \u12ad\u1348\u1275 \u1290\u12cd\u1362\n\u1325\u122d 16 \u1260\u130c\u12f4\u12a6 \u12de\u1295 \u12f2\u120b \u12a8\u1270\u121b \u12a0\u12ed\u1240\u1228\u121d \u12ed\u120b\u120d \u12e8\u130c\u12f4\u12a6 \u12de\u1295 \u12a0\u1235\u1270\u12f3\u12f0\u122d\u1362 \n\u1291 \u1230\u1208\u12de\u1291 \u120d\u121b\u1275\u1293 \u1265\u120d\u133d\u130d\u1293 \u12a5\u1295\u12f2\u1201\u121d \u1208\u12a0\u12a8\u1263\u1262\u12cd \u12d8\u120b\u1242 \u1220\u120b\u121d\u1293 \u1218\u1228\u130b\u130b\u1275 \u1260\u130b\u122b \u12a5\u1295\u121d\u12a8\u122d \u12a5\u12eb\u120d\u1295 \u1260\u12f5\u130b\u121a \u1208\u12f3\u122b\u122e \u1260\u12d3\u120d \u1260\u1230\u1208\u121d \u12a0\u12f0\u1228\u1233\u127d\u1201 \u12a0\u12f0\u1228\u1230\u1295!!\n\nComments"
// document.getElementById("descriptionMessage").innerHTML = desc;
}



 multiparagraphs =(multiparagraphs,id) =>{  
return( 
  <> <p className="descriptionMessage">{multiparagraphs}</p>
  </>
   )
 
}





  render() {
    
return(  
   <>   

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
 

<MDBContainer  className="mt-5 ">

{/* {this.multiparagraphs("this.state.projectData.description","id")} */}

{(this.state.search.ytId)&&
<>
     {((this.state.projectData)&&<>
        <MDBRow>
          <MDBCol lg="6">
            <a href="#!" className="green-text">
              <h6 className="font-weight-bold mb-3">
                <MDBIcon icon="image" className="pr-2" />
                {this.state.projectData.workType.type}
              </h6>
            </a>
            <h3 className="font-weight-bold mb-3 p-0">
              <strong>
                {this.state.projectData.workTitle} </strong>
            </h3>
             

            {/* {this.state.projectData.description&&*/}
 <>
{/* {this.multiparagraphs("this.state.projectData.description","id")} */}
</>
{/* } */}
{/* {()=>{this.multiparagraphs("m","m")}} */}

            {/* <p className="descriptionMessage">
                {this.state.projectData.description} 
                
            </p> */}
            <p>
            {(this.state.projectData.createdTo)&& <> by <a href="#!">
                <strong> {this.state.projectData.createdTo}</strong>
              </a></>}
              {(this.state.projectData.dateWorked)&&<span> , {this.state.projectData.dateWorked}</span> } 
              {(this.state.projectData.place)&& <span> ,  {this.state.projectData.place}</span>}
            </p>
          </MDBCol>
       
          <MDBCol lg="6" style={{height:"290px !important"}}>
            <YoutubePlayerComp youtubeId={this.state.search.ytId }   youtubeHeightBrowser={"307px"} youtubeHeightMobile={'217px'}></YoutubePlayerComp>
          </MDBCol>
        </MDBRow>
        <hr className="my-5" />      
        </>)}
</>
}
        </MDBContainer>       
        <MDBContainer>

    <h2 className='h3 text-center text-uppercase font-weight-bold mt-3 mb-3'>
    {this.state.fbAlbumData.name}
    </h2>
    <p className='section-description   descriptionMessage mt-2 pt-2'>
      {this.state.fbAlbumData.description}
          </p> 
    <Gallery images={this.state.albumPhotos}/>
  </MDBContainer>
</>
)  }
}

export default AlbumPage;