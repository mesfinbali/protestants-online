import React, { Component } from 'react';
import Gallery from 'react-grid-gallery';

class GallaryImages extends Component {
constructor(props){
 super(props);
    this.state = {
        images:[]
      }; 
} 
async componentDidMount(){
    if(this.props){
//  console.log("gallary images props")
//  console.log(this.props.post)
 this.setState({images:this.props.post})
    }
}

render() {
    
return(  
   <> 
    <Gallery images={this.state.images}/>
    </>
)  }
}

export default GallaryImages;