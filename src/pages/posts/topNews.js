import { MDBContainer } from 'mdbreact';
import React, { Component } from 'react';
import {  MDBRow, MDBCol,MDBPageNav,
  MDBCardFooter,MDBCardTitle,MDBTabPane,MDBPageItem,MDBPagination,MDBPageLink ,
  MDBCardText,MDBTooltip,MDBTabContent,MDBNavItem,MDBNav,MDBNavLink,MDBCardHeader,
  MDBCard, MDBCardBody,
   MDBIcon, MDBMask, MDBView, MDBBtn } from "mdbreact";
import queryString from "query-string";
import JwPagination from 'jw-react-pagination';
import "./post.css"
import YouTube from 'react-youtube';
//  
import Gallery from 'react-grid-gallery';
import GallaryImages from '../Gallary/galaryImagesold';
import GallaryImagesSlide from '../Gallary/GallaryImagesSlide';
import VideoGallary from '../Gallary/videoGallary';
// import YoutubePlayerComp from './youtubeplayer';
var groupObj = require('@hunters/group-object');
 

class TopNews extends Component {
constructor(props){
 super(props);

//  let search = queryString.parse(this.props.location.search);
 let search = queryString.parse(this.props.album);

 this.onChangePage = this.onChangePage.bind(this);
 
    this.state = { 
      pageOfItems: [],
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
        postIndex:0,
        activeItemOuterTabs: "1",
        activeItemInnerPills: "1",
      };
}

async componentDidMount(){
  
  this.setState({loading:true});  
  window.scrollTo({ top: 0, behavior: "smooth" });
 
let facebookAlbumPath='https://graph.facebook.com/' + "100180088170173?fields=description,posts{attachments,message,created_time}"
+"&access_token=EAAJvjLe71rMBAEuQEAWbAUE3M59B1OhB8qn2akftaxw62mW5TiBZCZAtaeusVGPOSLca68ua20jyB8huYsZBJENoVHQui1dnIvwnhTZBYlVG7ViAUtjz9vmROhk4N5Nt96ovYTMyBRVtIuGYNoag8j9flZAZCldlcWDKsdGgd4AQZDZD";
 
let facebookAlbumDataPath='https://graph.facebook.com/' + this.props.album.fbId +"?fields=description,name,photos{target,images,created_time,name,event,updated_time}"
+"&access_token=EAAJvjLe71rMBAEuQEAWbAUE3M59B1OhB8qn2akftaxw62mW5TiBZCZAtaeusVGPOSLca68ua20jyB8huYsZBJENoVHQui1dnIvwnhTZBYlVG7ViAUtjz9vmROhk4N5Nt96ovYTMyBRVtIuGYNoag8j9flZAZCldlcWDKsdGgd4AQZDZD";
this.initFBAlbumdata(facebookAlbumDataPath,1);
 
}


onChangePage(pageOfItems) {

  // window.scrollTo({ top: 200, behavior: "smooth" });
  this.setState({ pageOfItems });
}

initFBAlbumdata(albumsUrl,countpage){
  fetch(albumsUrl)
    .then(response => response.json())
    .then(data => 
      {    
      console.log("album Posts")
      console.log(data )
      if(!data.error){
      console.log("album Posts")
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

 

changeToNextIndex(next,postLength){
  console.log("changeToNextIndex")
  console.log("changeToNextIndex", postLength)
  console.log("this.state.postIndex",this.state.postIndex)
let index=this.state.postIndex
  // if((index==postLength)&&next){
  //   index=-1;
  // }
  // if((index==0)&&!next){
  //   index=postLength;
  // }
if(next){ 
  this.setState({postIndex:index+1}) 
}
else{
  this.setState({postIndex:index-1}) 
}
}


initFBdata(albumsUrl,countpage){
    fetch(albumsUrl)
      .then(response => response.json())
      .then(data => 
        {   
        console.log("posts top news")
        console.log(data)
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
        let maxlength=3
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
    
    var { 
      albumPosts,
      postIndex } = this.state;
return(  
   <> 
  {this.state.loading  && 
  
  <>


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


{/* <MDBContainer> 
        </MDBContainer>   */}

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

 
  
<h1>{this.props.album.name}</h1> 
           
              <MDBRow className=' rounded'>
 
       
              <JwPagination pageSize={1} items={this.state.albumPosts} onChangePage={this.onChangePage} />
              <span className="float-right">
<MDBBtn color="primary float-right" rounded outline size="sm"  href={"Posts/album/?name=News&fbId="+"116157410357817"}  >

<a> See All News</a>            </MDBBtn></span>
{this.state.pageOfItems.map((post,index)=>
<>

{/* {(post.attachments&& post.message)&& */}
<MDBCard className="my-5 px-2  pb-5"  key={post} value={post} > 
      <MDBCardBody>
        <MDBRow>
            
          <MDBCol lg="6" xl="6">
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


          <MDBCol lg="6" xl="6">
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
     


        </MDBContainer>      


        
</>  
}
  </>
) 
 }
}

export default TopNews;