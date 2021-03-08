import React, { Component } from 'react';
import Gallery from 'react-grid-gallery';
import ImageGallery from 'react-image-gallery';
import "./gallaryImages.css";
class GallaryImagesSlide extends Component {
constructor(props){
 super(props);
    // this.state = {
    //     images:[ ]
    //   };

      this.state = {
        images:["https://scontent.fadd1-1.fna.fbcdn.net/v/t1.0-9/147681510_4117996628232182_6086136831750530116_n.jpg?_nc_cat=1&ccb=2&_nc_sid=8bfeb9&_nc_ohc=uoY3SQH_TIgAX9fxBqc&_nc_ht=scontent.fadd1-1.fna&oh=1b8cd53c66d80aa45c1e5be19e944c79&oe=604662AD",
    "https://scontent.fadd1-1.fna.fbcdn.net/v/t1.0-9/147238874_4113627655335746_4427337413352370901_n.jpg?_nc_cat=105&ccb=2&_nc_sid=8bfeb9&_nc_ohc=1zg1hk0Wh5UAX8YCKzB&_nc_ht=scontent.fadd1-1.fna&oh=c4eba78e37ce535e6f3dfcc1398bfdf7&oe=6047BBAA"]
      };


} 
async componentDidMount(){
    if(this.props){
 console.log("gallary images props")
 console.log(this.props.post)
//  this.setState({images:this.props.post})
    }
}

render() {
return(  
   <> 
    {/* <Gallery  showLightboxThumbnails={true} images={this.state.images}/> */}
   { (this.state.images.length <= 0)&& <h4>No Image Attached </h4> }
   {(this.state.images.length >0)&& <ImageGallery items={this.state.images} />}
    </>
)  }
}

export default GallaryImagesSlide;