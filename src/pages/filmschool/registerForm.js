
import React, { Component } from 'react';
import {
  
   MDBAlert, 
  MDBInput,MDBView,
  MDBBtn,MDBAnimation,MDBRow,
  MDBIcon,MDBMask,MDBCol,
  MDBContainer,
  MDBCard, 
} from 'mdbreact';
import SectionContainer from '../../components/sectionContainer';
import "./registerForm.css"
import firebase from "../../firebase";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

class RegisterForm extends Component {

  state = {
    IframeWidth:isMobile?"320":"700",
    validated: false,
    isLoading: false,
    validateResultText:null,
    name: null,
    email : null,  
     talent1: null, 
    talent2: null, 
    talent3:null, 
    social: null, 
    town: null, 
  
    phone: null,
    message: null,
    modal: false,
    activeItemOuterTabs: "1",
    activeItemInnerPills: "1",
  };

  toggle = () => {
    const { modal } = this.state;
    this.setState({
      modal: !modal
    });
  };
  




 componentDidMount(){
  // this.initgallaryData();//only if you want to update
    }

    
initgallaryData=async()=>{

  let allvideos=[
   {description:"Gada biifoomme! Derraaro_2013 Gedeo/ BFAMILY PROMOTION / Gedeo zone tourist attractions",
 
    title:"Gada biifoomme! Derraaro_2013 Gedeo/ BFAMILY PROMOTION / Gedeo zone tourist attractions",
    videoId:"yhRqs1RR64s"},
    
    
    
    {
    videoId: "nlX3ZdSHZT8",
    title:  "Tesfaye Taye & Aklilu Yohannes - Deraro | ደራሮ - New Ethiopian Music 2020 (Official Video)",
    description: "Tesfaye Taye & Aklilu Yohannes - Deraro | ደራሮ - New Ethiopian Music 2020 (Official Video)",
  },
   {
        videoId: "jBDovaCD2nw",
        title:  "Ethiopian Gediyo Music Seble Mezmur – Gediyo Yoya - ሰብለ መዝሙር - ጌዲዬ ዮያ - የጌዲዬ ብሔረሰብ ሙዚቃ",
        description: "Ethiopian Gediyo Music Seble Mezmur – Gediyo Yoya - ሰብለ መዝሙር - ጌዲዬ ዮያ - የጌዲዬ ብሔረሰብ ሙዚቃ",
      },
   {
        videoId: "kvPKwU8gP-M",
        title:  "Abrham Belayneh –Shalaye - አብርሃም በላይነህ - ሻላዬ - የጌዲዬ ብሔረሰብ ሙዚቃ",
        description: "Abrham Belayneh –Shalaye - አብርሃም በላይነህ - ሻላዬ - የጌዲዬ ብሔረሰብ ሙዚቃ",
      },
   {
        videoId: "NGioHTWEEdk",
        title:  "Habesh bekele and Ujulu Fera - Dilla - New Ethiopian Gedeo Music 2019 (Official Video)",
        description: "Habesh bekele and Ujulu Fera - Dilla - New Ethiopian Gedeo Music 2019 (Official Video)",
      },
   {
        videoId: "TIvJxA-7_zU",
        title:  "New Ethiopian Gedeo music Haile Shalo",
        description: "New Ethiopian Gedeo music Haile Shalo",
      },
   {
        videoId: "tKJFsBbDZDI",
        title:  "Tesfaye Taye – Zanati - ተስፋዬ ታዬ - ዛነጢ - የጌዲዬ ብሔረሰብ ሙዚቃ",
        description: "Tesfaye Taye – Zanati - ተስፋዬ ታዬ - ዛነጢ - የጌዲዬ ብሔረሰብ ሙዚቃ",
      },
   {
        videoId: "Drj8Rfrqz4k",
        title:  "Ayyete Hissa Aklilu Yohannes",
        description: "Ayyete Hissa Aklilu Yohannes",
      },
   {
        videoId: "d-LC4dnoLAk",
        title:   "YEGEDEO QONJO",
        description: "YEGEDEO QONJO ",
      },
      {
           videoId: "eSZBkWFap3c",
           title:   "Hasheban: gedeo music Akoka Hasheban",
           description: "Hasheban: gedeo music Akoka Hasheban",
         },
         {
              videoId: "HvEQkR-vbyI",
              title:   "Ethiopia - New Ethiopan Music 2014 Abrham Belayneh - Babafayo - (Official Video)",
              description: "Ethiopia - New Ethiopan Music 2014 Abrham Belayneh - Babafayo - (Official Video)",
            },
            {
                 videoId: "QFhU6sJ4H_4",
                 title:   "Akliluu Yohaannis(Akko) - Hamama",
                 description: "Akliluu Yohaannis(Akko) - Hamama",
               },
            {
                 videoId: "TNssgvLvCdE",
                 title:   "Aww'o Mittele Malle'a Laanggaxxaa Gubbataabani",
                 description: "Aww'o Mittele Malle'a Laanggaxxaa Gubbataabani",
               },
  
  ]


  let videos=[]
  for(let i=0;i<allvideos.length;i++){
  let newvid ={   
    videoId: allvideos[i].videoId,
    title:  allvideos[i].title,
    description: allvideos[i].description,

    fbAlbumId:  "108049024501989",
    source:  "youtube",
   }
   videos.push(newvid)
  }
   console.log("videos successfully readed!",videos ); 

const db = firebase.firestore();
const data = await  db.collection("Gallery").doc("Gallery").update({
  videos:   videos
  // videos2:   firebase.firestore.FieldValue.arrayUnion(newvid)
  // ArtTalent:   "newMessage"
})
.then(function( data) {
  // console.log("Document successfully written!" ); 
})
.catch(function(error) {
  // console.error("Error writing document: ", error);
}); 


}

      submitContact = async () => {
          let newDate=new Date();
   let newMessage ={ 
     registeredDate: newDate,
     name: this.state.name,
    email: this.state.email, 
    talent1: this.state.talent1, 
    talent2: this.state.talent2, 
    talent3: this.state.talent3, 
    social: this.state.social, 
    phone: this.state.phone,
    message: this.state.message,
    town: this.state.town,
    }
    console.error("newMessage writing document: ", newMessage);
    this.setState({isLoading:true});
    if(this.state.phone&&this.state.name  &&this.state.talent1){
  
      const db = firebase.firestore();
      const data = await  db.collection("Utility").doc("Register").update({
        ArtTalent:   firebase.firestore.FieldValue.arrayUnion(newMessage)
        // ArtTalent:   "newMessage"
    })
    .then(function( data) {
        // console.log("Document successfully written!" ); 
    })
    .catch(function(error) {
        // console.error("Error writing document: ", error);
    }); 
      this.setState(
        {isLoading:false,
           validateResultText:"You have successfully Registered, we will cantact you in your address",
          
        })
    }
else{
  this.setState({isLoading:false,validateResultText:"Please enter Name, Talent and Phone inputs properly!"})

}
  }  

  render() {
    const { modal } = this.state;

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
             
                <h1 className='display-3 mb-0 pt-md-2 pt-2 white-text font-weight-bold'>
                  Register 
                  <span className='indigo-text font-weight-bold'> Your Talent</span>
                </h1>
                <hr className='hr-light my-2' />
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBView>
        
        
        </div>
           
             
          <MDBAnimation type='zoomIn' duration='500ms' id="registernow">
       <MDBContainer>
     
<MDBCard className="text-center">
  <h6  className="font-weight-bold m-2 grey-text">
  የትወና,
የሙዚቃ,
የሞዴሊንግ,
Directing,
Short movie ጽሁፍ,
Documentery ጽሁፍ,
Drama ጽሁፍ,
vocal,
scirpt writing,
screen play,
እና ሌሎች የጥበብ ሙያዎችን 

ያላችሁ በሙሉ ክታች ያለውን Form ሞልተው ቶሎ ይመዝገቡ</h6>

</MDBCard>
       
            <SectionContainer className='z-depth-2  mt-5 text-center'>
              

       <p className='h5 text-center mb-2'>Fill the below form properly to Register!
        
        </p>   
 <form  className=' text-left p-2'>
     
     <div className='grey-text bordered'>
       
     <MDBRow>
       <MDBCol md="6">
       <MDBInput 
         label='Full Name'
         icon='user'
         group
         value={this.state.name}
         onChange={(value)=>{this.setState({name:value.target.value})}}
         type='text'
         validate
         error='wrong'
         success='right'
       />
       </MDBCol>
       <MDBCol md="6">
       
       <MDBInput  
         value={this.state.phone}
         onChange={(value)=>{this.setState({phone:value.target.value})}}
         label='Phone'
         icon='phone'
         group
         type='text'
         validate
         error='wrong'
         success='right'
       />
       </MDBCol>
       
 
</MDBRow>
<MDBRow>
<MDBCol md="6">

<MDBInput  
  value={this.state.email }
  onChange={(value)=>{this.setState({email :value.target.value})}}
  label='Email'
  icon='envelope'
  group
  type='email'
  validate
  error='wrong'
  success='right'
/>
       </MDBCol>
        <MDBCol md="6">

       <MDBInput  
         value={this.state.social }
         onChange={(value)=>{this.setState({social :value.target.value})}}
         label=' telegram or facebook user name'
         icon='envelope'
         group
         type='text'
         validate
         error='wrong'
         success='right'
       />
              </MDBCol>
       <MDBCol md="6">

       <select className="browser-default custom-select m-2" 
         onChange={(value)=>{this.setState({talent1:value.target.value})}}>
 <option>  Your #1 Talent</option>

 <option value="የትወና">የትወና</option>
 <option value="የሞዴሊንግ">የሞዴሊንግ</option>
 <option value="Short movie ጽሁፍ">Short movie ጽሁፍ,
</option>
 <option value="Documentery ጽሁፍ">Documentery ጽሁፍ</option>
 <option value="Drama ጽሁፍ">Drama ጽሁፍ</option>
 <option value="ሙዚቃ">ሙዚቃ</option>
 <option value="መዝሙር">መዝሙር</option>
 <option value="የሙዚቃ መሳሪያ">የሙዚቃ መሳሪያ</option>
 <option value="Dance">Dance / ውዝዋዜ</option>

 <option value="vocal">vocal</option>
 <option value="camera">camera</option>
 <option value="editing">editing</option>
 <option value="directing">directing</option>
 <option value="vocal">vocal</option>
 <option value="scirpt writing">scirpt writing</option>
 <option value="screen play">screen play</option>
 <option value="ሌሎች የጥበብ ሙያዎች">ሌሎች የጥበብ ሙያዎች</option>
</select>

</MDBCol>
       <MDBCol md="6">

<select className="browser-default custom-select m-2" 
         onChange={(value)=>{this.setState({talent2:value.target.value})}}>
 <option>  Your #2 Talent</option>

 <option value="የትወና">የትወና</option>
 <option value="የሞዴሊንግ">የሞዴሊንግ</option>
 <option value="Short movie ጽሁፍ">Short movie ጽሁፍ,
</option>
 <option value="Documentery ጽሁፍ">Documentery ጽሁፍ</option>
 <option value="Drama ጽሁፍ">Drama ጽሁፍ</option>
 <option value="ሙዚቃ">ሙዚቃ</option>
 <option value="መዝሙር">መዝሙር</option>
 <option value="የሙዚቃ መሳሪያ">የሙዚቃ መሳሪያ</option>
 <option value="Dance">Dance / ውዝዋዜ</option>

 <option value="vocal">vocal</option>
 <option value="camera">camera</option>
 <option value="editing">editing</option>
 <option value="directing">directing</option>
 <option value="vocal">vocal</option>
 <option value="scirpt writing">scirpt writing</option>
 <option value="screen play">screen play</option>
 <option value="ሌሎች የጥበብ ሙያዎች">ሌሎች የጥበብ ሙያዎች</option>
    </select>

    </MDBCol>
       <MDBCol md="6">

<MDBInput
         value={this.state.talent3}
         onChange={(value)=>{this.setState({talent3:value.target.value})}}
         label='ያልተካተተ ሙያ ካሎት'
         icon='pencil-alt'
         group
         type='text'
         validate
         error='wrong'
         success='right'
       />
              </MDBCol>
              <MDBCol md="6">

<MDBInput
         value={this.state.town}
         onChange={(value)=>{this.setState({town:value.target.value})}}
         label='Town'
         icon='map'
         group
         type='text'
         validate
         error='wrong'
         success='right'
       />
              </MDBCol>
    
       <MDBCol md="12">

       <MDBInput
         value={this.state.message}
         onChange={(value)=>{this.setState({message:value.target.value})}}
         type='textarea'
         rows='2'
         label='Any message?'
         icon='pencil-alt'
       />
              </MDBCol>
 
</MDBRow>

     </div>




{((this.state.validateResultText) && (this.state.isLoading === false)) &&
                  <MDBAlert color="danger" >
                {this.state.validateResultText}
                </MDBAlert>
                
         }


                 {this.state.isLoading &&

<div className='text-center'>
<MDBBtn outline color='secondary' disabled>
                         <div className="spinner-grow spinner-grow-sm text-success" role="status">
<span className="sr-only">Loading...</span>
</div>

                     Submiting...
                     </MDBBtn>
</div>
}

                 {(this.state.isLoading === false) &&
                   
     <div className='text-center'>
       <MDBBtn outline color='secondary' onClick={()=>{this.submitContact()}}>
       Send Form <MDBIcon icon='paper-plane' className='ml-1' />
     </MDBBtn>
     </div>
                 }

   </form>

   </SectionContainer>


       </MDBContainer>
        
    
    
   
     </MDBAnimation> 
  
    </> );
  }
}

export default RegisterForm;
