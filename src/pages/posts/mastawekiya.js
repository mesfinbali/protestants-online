
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView } from "mdbreact";
import React from "react"; 
import MastawekiyaSingle from "./mastawekiya/registerSchool";
import firebase from "./../../firebase";

const Mastawekiya = (props) => {
  console.log(" courouselImages data:", props.courouselImages);
  const [courouselImages, setcourouselImages] = React.useState([]);
  const [mastawekiyawoch, setMastawekiyawoch] = React.useState([]);


  React.useEffect(() => {

    if(props.courouselImages){
      setcourouselImages(props.courouselImages)
    // console.log(" courouselImages Defined:", props.courouselImages);
  
    }     
    // console.log("itemDetails");
    // console.log(itemDetails);
    const fetchData = async () => {
      const db = firebase.firestore();
      
      const data = await db.collection("Utility").doc('Advertisement');
      data.get().then(function(doc) {
        if (doc.exists) {
            console.log("Advertisements:", doc.data());
            setMastawekiyawoch(doc.data().advertisements);

        } else {
            console.log("No such  document StudentList!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
    
    // setSpells(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    };
    fetchData();
  }, []);

  
 







  return (
   <> 
   {(setMastawekiyawoch.length>0)&&
   <MDBCarousel
   thumbnails
        activeItem={1}
        length={1}
        showControls={true}
        showIndicators={false}
        className="z-depth-1 mb-5"
      >
        <MDBCarouselInner 
        className="">

{mastawekiyawoch.map((advertisement,index)=>
          <MDBCarouselItem itemId={index+1}>
          
          <MastawekiyaSingle advertisement={advertisement}></MastawekiyaSingle>
        </MDBCarouselItem>
      
        )} 
   
   
        </MDBCarouselInner>
      </MDBCarousel>}
 </> 
   );
}

export default Mastawekiya;