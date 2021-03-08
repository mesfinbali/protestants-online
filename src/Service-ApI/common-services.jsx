
import { 
    isMobile
  } from "react-device-detect";
  
export class CommonServices {
    
static calcImagesType =(images,mobSizeGiven,DesSizeGiven)=>{
    let mobileSize=0;
    let desktopSize=0; 
  
      for(let i=images.length-1;i>=0;i--){
  if(images[i].width>mobSizeGiven){
    if(images[mobileSize].width>=images[i].width){
      mobileSize=i
    }
  }
  
  if(images[i].width>DesSizeGiven){
    if(images[desktopSize].width>=images[i].width){
      desktopSize=i
    }
  }
     }
  
     if(isMobile){
      return (mobileSize)
     }
     else{
        return desktopSize
     }
  
   }
}

