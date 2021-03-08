import { MDBContainer } from 'mdbreact';
import React, { Component ,useState} from 'react';
import {  MDBRow, MDBCol,  MDBCardBody, MDBMask, MDBView, MDBBtn } from "mdbreact";
// import queryString from "query-string";
// import YouTube from 'react-youtube';
// import ReactPlayer from 'react-player'
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

class YoutubePlayerComp extends Component {
constructor(props){
 super(props);
 
}
_onReady(event) {
  event.target.pauseVideo();
}
  render() {
   const opts = {
      height: '100%',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    };
 

return(   <> 
{/* <h1>youtube video</h1> */}
{/* <YouTube videoId={this.props.youtubeId} opts={opts} onReady={this._onReady} /> */}
{/* <iframe width="100%" height="1000%" src={"https://www.youtube.com/embed/"+this.props.youtubeId }frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}

<BrowserView>
<iframe
                        id="player"
                        type="text/html"
                        style={{ width: "100%", height: this.props.youtubeHeightBrowser}}
                        src={`https://www.youtube.com/embed/`+this.props.youtubeId}
                        frameborder="0"
                    ></iframe>
</BrowserView>
<MobileView>
<iframe
                        id="player"
                        type="text/html"
                        style={{ width: "100%", height: this.props.youtubeHeightMobile}}
                        src={`https://www.youtube.com/embed/`+this.props.youtubeId}
                        frameborder="0"
                    ></iframe>
</MobileView>
                    
        
     
     </>
)
  }
  
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default YoutubePlayerComp;