import { MDBContainer } from 'mdbreact';
import React, { Component } from 'react';
import {  MDBRow, MDBCol  ,MDBTabPane, MDBTabContent,MDBNavItem,MDBNav,MDBNavLink, 
  MDBCard, MDBCardBody,
   MDBIcon, MDBMask, MDBView, MDBBtn } from "mdbreact";
import queryString from "query-string";

import "./post.css"
import YouTube from 'react-youtube';
// 
import Gallery from 'react-grid-gallery';
import GallaryImages from '../Gallary/galaryImagesold';
import GallaryImagesSlide from '../Gallary/GallaryImagesSlide';
import VideoGallary from '../Gallary/videoGallary';
import { FacebookInfoData } from '../../Service-ApI/MasterData';
// import YoutubePlayerComp from './youtubeplayer';
var groupObj = require('@hunters/group-object');

class albumPosts extends Component {
constructor(props){
 super(props);

 let search = queryString.parse(this.props.location.search);

    this.state = { 
      albumPhotos:null,
         itemGalary:[],
        readMoredESC:false,
        search:search,
        posts:{data:[],paging:{}},
        seeMoreImagesId:"",
        loading:true,
        isAlbumData:false,
        banner:null,
        albumData:{},
        albumPosts:[],
        activeItemOuterTabs: "1",
        activeItemInnerPills: "1",
      };
}

async componentDidMount(){
  
  this.setState({loading:true});  
  window.scrollTo({ top: 0, behavior: "smooth" });
  
// console.log("Albums ")
// console.log(search)
let facebookAlbumPath='https://graph.facebook.com/' + 
"100180088170173?fields=description,posts{attachments,message,created_time}"
+"&access_token="+FacebookInfoData.token;
// this.initFBdata(facebookAlbumPath,1);

let facebookAlbumDataPath='https://graph.facebook.com/' + this.state.search.fbId +"?fields=description,name,photos{target,images,created_time,name,event,updated_time}"
+"&access_token="+FacebookInfoData.token;
this.initFBAlbumdata(facebookAlbumDataPath,1);
    // var local= JSON.parse(localStorage.getItem("albumPost"));
    //  if(local){
    //   this.setState({albumPosts:local,loading:false})  

    //  }
// console.log("local ")
// console.log(local)

}



initFBAlbumdata(albumsUrl,countpage){
  fetch(albumsUrl)
    .then(response => response.json())
    .then(data => 
      {    
      if(!data.error){
      console.log("posts fb")
      console.log(data.photos.data)
      
        var groupedData = groupObj.group(data.photos.data,'created_time'); 
        groupedData=Object.values(groupedData); 
        localStorage.setItem("albumPost", JSON.stringify(groupedData)) 
        this.setState({albumPosts:groupedData.reverse(), albumData:data,loading:false,isAlbumData:true})  

        



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
            original: data2.data[i].images[0].source,
            thumbnail: data2.data[i].images[thumb].source, 
            //   originalAlt:"",// image alt
            // thumbnailAlt: "", //thumbnail image alt
              // src: item.productGalary[i], 
              // thumbnail: item.productGalary[i],
              // thumbnailWidth:  320,
              // thumbnailHeight:  174,
            //           isSelected: true,
              // caption: attachement.data[i].description,

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
        console.log("album  post photos")
        console.log("album  post photos")
      } 
      this.setState({albumPhotos: MergeData })
        console.log("album  post photos")
        console.log("album  post photos")
        console.log("album  post photos")
        console.log(MergeData)
    
      // if(data2){
      // if(data2.paging.next){
      //   countpage=countpage+1;
      //   this.initFBdata(data2.paging.next,countpage);
      // }}


      }
      else{
      this.setState({isAlbumData:false, loading:false}) 
        
      }
        });
    

}

 

initFBdata(albumsUrl,countpage){
    fetch(albumsUrl)
      .then(response => response.json())
      .then(data => 
        {   
        // console.log("posts data")
        // console.log(data)
        this.setState({posts:data.posts,loading:false})  
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
 
postGallaryImages = (data2,seeall) => {
    // console.log("postGallaryImages");
    // console.log(images.attachments.data);
    let photos=[];
    let SinglePhoto;
    let attachement =data2;
    if(data2){
    // if(attachement){
        let length;
        let maxlength=5
        if((seeall==true)||(maxlength>attachement.length)){
            length=attachement.length;
        }
        else{
            length=maxlength;
        }
        
        for(let i=0;i< length;i++){ 
          if(i>1&&this.state.banner==null){
            this.setState({banner:attachement[i].images[0].source})
          }
if(attachement[i]){
          SinglePhoto={ 
            // //           isSelected: true,
            caption: attachement[i].name,
            src: attachement[i].images[0].source,
            thumbnail: (attachement[i].images.length>2)?  attachement[i].images[(( attachement[i].images.length)-2)].source:attachement[i].images[0].source,
            thumbnailWidth: attachement[i].images[0].width,//320,
            thumbnailHeight: attachement[i].images[0].height,//174,
              } 
                  photos.push(SinglePhoto); 
            }   }
    // }


       return( 
       <>
       <GallaryImages post={photos}></GallaryImages> 
       </>
        )
    }
  
};
    toggleOuterTabs = tab => e => {
      if (this.state.activeItemOuterTabs2 !== tab) {
        this.setState({
          activeItemOuterTabs: tab
        });
      }
    };
  
    toggleInnerPills = tab => e => {
      if (this.state.activeItemInnerPills !== tab) {
        this.setState({
          activeItemInnerPills: tab
        });
      }
    };
  

  render() {
    
return(  
   <> 
  {this.state.loading  && 
  
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
             
                <h1 className='display-3 mb-0 pt-md-2 pt-2 white-text font-weight-bold'>
                   
                  <span className='indigo-text font-weight-bold'> {this.state.search.name}</span>
                </h1>
                <hr className='hr-light my-2' />
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBView>
        
        
        </div>
 

    <MDBContainer>
      <div  className="mt-5 px-2 pb-2 z-index-0  text-center">
        <h3> Loading </h3>
      <div className="spinner-grow text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-grow text-success" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-grow text-danger" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-grow text-warning" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-grow text-info" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      </div>

    </MDBContainer>
    </>
    }
    
   {!this.state.loading &&
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
{this.state.albumData&&
<>
 
<h2 className="h1-responsive font-weight-bold text-center ">
          {this.state.albumData.name}
        </h2>
        {this.state.albumData.description&&<>
         {((this.state.albumData.description.length>=200)&&(this.state.readMoredESC!=true)) &&
          <p className="dark-grey-text multiParagragh">
          {this.state.albumData.description.substring(0, 400)}{"...   "}
          <a color='red'  onClick={() =>{this.setState({readMoredESC:true})}}><span className=" font-weight-bold"> read more</span></a> 
          </p>}
 

          {((this.state.albumData.description.length>=200)&&(this.state.readMoredESC!=false)) &&
           <p className="dark-grey-text multiParagragh">
           {this.state.albumData.description}
          <a color='red'  onClick={() =>{this.setState({readMoredESC:false})}}><span className=" font-weight-bold"> read less</span></a> 
          </p>}


          {((this.state.albumData.description.length<200) )&& 
          <p className="dark-grey-text multiParagragh"> 
          {this.state.albumData.description}  
          </p>}
</>}
        </>
 
}   

<MDBNav id="tabnav" tabs className="nav-justified rounded p-2 mb-2 tabnav"  
             color="success-color-dark darken-4">
            <MDBNavItem >
              <MDBNavLink className="navItem " link to="#" active={this.state.activeItemOuterTabs === "1"} onClick={this.toggleOuterTabs("1")} role="tab" >
                <MDBIcon icon="images" /> Feed
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem >
              <MDBNavLink className="navItem " link to="#" active={this.state.activeItemOuterTabs === "2"} onClick={this.toggleOuterTabs("2")} role="tab" >
                <MDBIcon icon="video" />  Photos
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem >
              <MDBNavLink className="navItem " link to="#" active={this.state.activeItemOuterTabs === "3"} onClick={this.toggleOuterTabs("3")} role="tab" >
                <MDBIcon icon="video" /> Videos
              </MDBNavLink>
            </MDBNavItem>
          </MDBNav>
          <MDBTabContent
            className="  mb-5 pannelbody"
            activeItem={this.state.activeItemOuterTabs}
          >
            <MDBTabPane tabId="1" role="tabpanel" >
           
              <MDBRow className=' rounded'>
 
       
{this.state.albumPosts.map((post,index)=>
<>

{/* {(post.attachments&& post.message)&& */}
<MDBCard className="my-5 px-2  pb-5">
      <MDBCardBody>
        <MDBRow>
            
          <MDBCol lg="12" xl="12">
            {/* {post[0].name&&
            <h5 className="dark-grey-text font-weight-bold">
           <span className=" blue-dark-text"> 
           {post[0].name.substring(0, 50)}...
           </span>
            </h5>}
            <p className="dark-grey-text">
            {post[0].name}
            </p>
            <p>
              {post[0].created_time}
            </p> */}

            {post[0].name&&
            <h5 className="dark-grey-text font-weight-bold">
           <span className=" blue-dark-text"> {post[0].name.substring(0, 50)}...</span>
            </h5>}
           {post[0].name&& <p className="multiParagragh">
            {((post[0].name.length>=200)&&(this.state.readMoreImagesId!=post[0].created_time))&&<>
            {post[0].name.substring(0, 200)}{"...   "}
            <a color='red'  onClick={() =>{this.setState({readMoreImagesId:post[0].created_time})}}><span className=" font-weight-bold"> read more</span></a> 
          </>  }
            {((post[0].name.length>=200)&&(this.state.readMoreImagesId==post[0].created_time))&&<>
            {post[0].name}{"    "}
            <a color='red'  onClick={() =>{this.setState({readMoreImagesId:""})}}><span className=" font-weight-bold"> read less</span></a> 
          </>  }
          {((post[0].name.length<200)&&(this.state.readMoreImagesId!=post[0].created_time))&&<>
            {post[0].name} 
          </>  }
            </p>}
            <p className="dark-grey-text multiParagragh">
              {this.parseDate(post[0].created_time)}
            </p>



            
          </MDBCol>


          <MDBCol lg="12" xl="12">
              {post&& 
   <>           
{(this.state.seeMoreImagesId==post[0].created_time)&&
<>
{this.postGallaryImages(post,true)}
</>
}
{(this.state.seeMoreImagesId!=post[0].created_time)&&
<>
{this.postGallaryImages(post,false)}
</>
}
 </>
  }  
   </MDBCol>

            {(this.state.seeMoreImagesId==post[0].created_time)&&
        <MDBBtn color="primary" rounded outline size="sm"  onClick={() =>{this.setState({seeMoreImagesId:""})}}>
              see less
            </MDBBtn>
            }
        {(this.state.seeMoreImagesId!=post[0].created_time)&&
        <MDBBtn color="primary" rounded outline size="sm"  onClick={() =>{this.setState({seeMoreImagesId:post[0].created_time})}}>
              see more
            </MDBBtn>
            }
        </MDBRow> 

     
      </MDBCardBody>
    </MDBCard>
  
          {/* } */}
</>)}
              
              </MDBRow>
            </MDBTabPane>
            <MDBTabPane tabId="2" role="tabpanel"> 
          {/* <GallaryImagesSlide></GallaryImagesSlide> */}
          {this.state.albumPhotos&&
       <GallaryImagesSlide post={this.state.albumPhotos}></GallaryImagesSlide> }
            </MDBTabPane>
            <MDBTabPane tabId="3" role="tabpanel"> 
            <VideoGallary albumId={this.state.search.fbId}></VideoGallary>

            </MDBTabPane>
          </MDBTabContent>
     


        </MDBContainer>       
        
</>  
}
  </>
) 
 }
}

export default albumPosts;