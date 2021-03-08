

  import React, { Component } from "react";
  import {
    MDBContainer,MDBView,MDBMask,
    MDBTabPane,
    MDBTabContent,
    MDBNav,MDBTooltip,
    MDBNavItem,
    MDBNavLink,
    MDBRow,
    MDBCol, MDBCard, 
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBIcon,
    MDBCardHeader,
  } from "mdbreact";
  import "./gallarypage.css"
import VideoGallary from "./videoGallary";
  class GallaryPage extends Component {
    state = {
        photos:"",
        albums:[],
        data:{albums:
          {data:[
            // {photos:{data:[]}},
            // {picture:{data:{url:""}}}
              // src={data.picture.data.url}

        ]
      }},
      activeItemOuterTabs: "1",
      activeItemInnerPills: "1",
    };
  
    componentDidMount() {
      
    window.scrollTo({ top: 0, behavior: "smooth" });

        var albumsUrl='https://graph.facebook.com/102938435013048?fields=albums{photos.limit(1){name},picture{url},name,count}&access_token=EAAJvjLe71rMBAEuQEAWbAUE3M59B1OhB8qn2akftaxw62mW5TiBZCZAtaeusVGPOSLca68ua20jyB8huYsZBJENoVHQui1dnIvwnhTZBYlVG7ViAUtjz9vmROhk4N5Nt96ovYTMyBRVtIuGYNoag8j9flZAZCldlcWDKsdGgd4AQZDZD'
        this.initFBdata(albumsUrl,1);
    }

initFBdata(albumsUrl,countpage){
  fetch(albumsUrl)
    .then(response => response.json())
    .then(data => {
      if(data.error){

      }
      else{
let MergeData = this.state.albums;
      if(countpage>1){
        for(let i=0;i<data.data.length;i++){
          MergeData.push(data.data[i]);
        }
      this.setState({ albums:MergeData })    
      if(data.paging.next){
        countpage=countpage+1;
        this.initFBdata(data.paging.next,countpage);
      }
      }
      else{
        this.setState({ albums:data.albums.data })
        if(data.albums.paging.next){
          countpage=countpage+1;
          this.initFBdata(data.albums.paging.next,countpage);
        }
      }

      }
      
  });


}
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
      return (
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
 

        <MDBContainer >
          
  <h2 className=" mt-5 h1-responsive font-weight-bold ml-2 pt-0">
      Gallary
  </h2> 
          <MDBNav id="tabnav" tabs className="nav-justified rounded p-2 mb-2 tabnav"  
             color="success-color-dark darken-4">
            <MDBNavItem >
              <MDBNavLink className="navItem " link to="#" active={this.state.activeItemOuterTabs === "1"} onClick={this.toggleOuterTabs("1")} role="tab" >
                <MDBIcon icon="images" /> Photo Albums
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem >
              <MDBNavLink className="navItem " link to="#" active={this.state.activeItemOuterTabs === "2"} onClick={this.toggleOuterTabs("2")} role="tab" >
                <MDBIcon icon="video" /> Videos
              </MDBNavLink>
            </MDBNavItem>
          </MDBNav>
          <MDBTabContent
            className="card mb-5"
            activeItem={this.state.activeItemOuterTabs}
          >
            <MDBTabPane tabId="1" role="tabpanel">
            <h2 className="h4-responsive font-weight-bold m-2 pl-2 ">
            Albums
          </h2>
              <MDBRow className='m-3 rounded'>


              {this.state.albums.map((data)=><>
              {(data.photos)&&
              
        <MDBCol lg='3' md='6' sm='6' className=' mb-4'>
       
          <MDBCard wide ecommerce  >
            <MDBCardHeader    onClick={()=>{
                             window.location.assign("/Gallary/album/?fbId="+data.id);
            }}
              style={{backgroundImage:"url("+data.picture.data.url+")",backgroundSize:'contain', maxHeight:"150px", heght:"150px",cursor:"pointer"}}
            height="444"
            >

            </MDBCardHeader>
            
            <MDBCardBody cascade className='text-center'  href={"/Gallary/album/?fbId="+data.id}>
             
              <MDBCardTitle>
                <MDBTooltip
                  domElement
                  tag="span"
                  placement="bottom"
                >
                <h2 className='h6 ext-uppercase font-weight-bold' style={{
  whiteSpace: "nowrap",
  width: "210px",
  overflow: "hidden",
  textOverflow: "ellipsis",}}>
                              <a href={"/Gallary/album/?fbId="+data.id}>{data.name}</a>
                              </h2>
                  <span>{data.name}{", "} {data.count} Images</span>
                </MDBTooltip>
              </MDBCardTitle>
                <MDBCardText>{data.count} Images</MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
    }
        </>)}
              
              </MDBRow>
            </MDBTabPane>
            <MDBTabPane tabId="2" role="tabpanel">
              <VideoGallary></VideoGallary>
            </MDBTabPane>
          </MDBTabContent>
        </MDBContainer>
      
      </>);
    }
  }
  export default GallaryPage