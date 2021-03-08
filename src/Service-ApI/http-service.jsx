 
import axios from "axios";
// import jwt from "jsonwebtoken";
var groupObj = require('@hunters/group-object');
export class HttpService {
  static  getHeaderAndURL () { 
    let baseURL = "https://aks-cluster-dev.ethiopianairlines.com/"; //Development URL
    // let baseURL = "https://m.ethiopianairlines.com/"; // Production URL
    let token = localStorage.getItem("holidaysToken");
    let headers = {
      Authorization: "Bearer " + token, //the token is a variable which holds the token
      // IsDevelopment: true,
      IsDevelopment: true,
      ContentType: "application/json",
      Accept: "application/json",
    };
    return {
      baseUrl: baseURL,
      token: token,
      headers: headers,
      
      albums:[{name:"HomeStart",id:103012238339001},{name:"HomeTourism",id:115997590373799},
      {name:"HomeGallery",id:115997873707104},{name:"HomeAboutGedeo",id:117216360251922},
      {name:"HomeCulture",id:111909114115980}]
    };
  };

  static getService = (relativePath, queryString = "") => {
    let headerAndURL = this.getHeaderAndURL();
    let baseUrl = headerAndURL.baseUrl + "flightapi-etholidays/V1.0/api/";
    // "/ETIOPIANAGENCYPORTALCERT/BookingAPI/V2.0/api/"
    // axios
    return axios.get(baseUrl + relativePath + queryString, {
      headers: headerAndURL.headers,
    });
  };

  static postService = (requestData, relativePath, queryString = "") => {
    debugger;
    let headerAndURL = this.getHeaderAndURL();
    let baseUrl = headerAndURL.baseUrl + "flightapi-etholidays/V1.0/api/";
    // "/ETIOPIANAGENCYPORTALCERT/BookingAPI/V2.0/api/"
    // "https://services.ethiopianairlines.com/ETIOPIANAGENCYPORTALCERT/BookingAPI/V2.0/api/";
    return axios.post(baseUrl + relativePath + queryString, requestData, {
      headers: headerAndURL.headers,
    });
  };

  static getIPService2 = (relativePath, queryString = "") => {
    let token = this.getToken();
    let baseUrl = "https://ipapi.co";
    return axios.get(baseUrl + relativePath + queryString, {
      headers: {
        Authorization: "Bearer " + token, //the token is a variable which holds the token
        //Isdevelopment: "true",
        Isdevelopment: "false",
        ContentType: "application/json",
        Accept: "application/json",
      },
    });
  };

  static getIPService  = (ipData) => {
    
    const publicIp = require('public-ip');
    let headerAndURL = this.getHeaderAndURL();
    let baseUrl = headerAndURL.baseUrl + "masterdataapi-etholidays/api/";
   
      var relativePath2 = "IpDetail/Get?IpAddress="+ipData ; 
       
      return axios.get(baseUrl + relativePath2 , {
        headers: headerAndURL.headers,
      }); 

  };
 
  static getToken = () => {
    let baseUrl = "https://aks-cluster-dev.ethiopianairlines.com";//Development URL
    // let baseUrl = "https://m.ethiopianairlines.com"; // Production URL

    let tokenApiUrl = "/authorizationapi-marketplace/api/OAuth/Generate";
    // "/ETIOPIANAGENCYPORTALCERT/AuthenticationAPI/api/Tokens/access";
    return axios.post(
      baseUrl + tokenApiUrl,
      { Username: "me@gmail.com", Password: "123456" },
      {
        headers: {
          // isdevelopment: "true",
          isdevelopment: "false",
          ContentType: "application/json",
          Accept: "application/json",
        },
      }
    );
  };
  static postEmail = (requestData) => {
    let headerAndURL = this.getHeaderAndURL();
    let baseUrl =
      "https://aks-cluster-dev.ethiopianairlines.com/masterdataapi-etholidays/api/Subscription/add";//Development URL
    // let baseUrl =
    //   "https://m.ethiopianairlines.com/masterdataapi-etholidays/api/Subscription/add";// Production URL
    // let baseURL =""; 

    return axios.post(baseUrl, requestData, {
      headers: {
        headers: headerAndURL.headers,
      },
    });
  };


//   static checkToken (){
//      debugger
//     // localStorage.setItem("holidaysToken", token);
// const token = localStorage.getItem('holidaysToken');

// if(token == null || token =="null")
// {
//   return this.getToken().then((response) => {
//     let newToken =  response.data.token;
//     localStorage.setItem("holidaysToken", newToken);
//   })

// }
// else
// {
//   var decodedToken=jwt.decode(token, {complete: true});
// var dateNow = new Date();
//   // if(decodedToken.payload.exp < dateNow.getTime()  )
//   // {
//   //  return this.getToken().then((response) => {
//   //     let newToken =  response.data.token;
//   //     localStorage.setItem("holidaysToken", newToken);
//   //   })
//   // }
// }
//   };









static initFBSingleAlbumdata(albumData){
  let  headerAndURL = this.getHeaderAndURL(); 
      let albumsUrl='https://graph.facebook.com/' + albumData.id +"?fields=description,name,photos{target,images,created_time,name,event,updated_time}"
      +"&access_token=EAAJvjLe71rMBAEuQEAWbAUE3M59B1OhB8qn2akftaxw62mW5TiBZCZAtaeusVGPOSLca68ua20jyB8huYsZBJENoVHQui1dnIvwnhTZBYlVG7ViAUtjz9vmROhk4N5Nt96ovYTMyBRVtIuGYNoag8j9flZAZCldlcWDKsdGgd4AQZDZD";
     
      return fetch(albumsUrl).then(response => response.json())
         .then(data => 
           {    
            console.log("Album  data valua id:" + albumData.id)
           console.log(data) 
           if(data.photos){    
            localStorage.setItem(albumData.name, JSON.stringify(data)) 
           }  
           return data 
          });
         
     
     }
     
      


  static initFBAlbumdata(countpage,albumIndex){
    let  headerAndURL = this.getHeaderAndURL();
    let id=headerAndURL.albums[albumIndex].id;
        let albumsUrl='https://graph.facebook.com/' + id +"?fields=description,name,photos{target,images,created_time,name,event,updated_time}"
        +"&access_token=EAAJvjLe71rMBAEuQEAWbAUE3M59B1OhB8qn2akftaxw62mW5TiBZCZAtaeusVGPOSLca68ua20jyB8huYsZBJENoVHQui1dnIvwnhTZBYlVG7ViAUtjz9vmROhk4N5Nt96ovYTMyBRVtIuGYNoag8j9flZAZCldlcWDKsdGgd4AQZDZD";
       
         fetch(albumsUrl)
           .then(response => response.json())
           .then(data => 
             {   
             console.log("Album  data")
             console.log(data) 
             if(data.photos){ 
              var groupedData = groupObj.group(data.photos.data,'created_time');
              console.log("Album photos") 
              localStorage.setItem(headerAndURL.albums[albumIndex].name, JSON.stringify(data)) 
             }
             if(albumIndex<headerAndURL.albums.length-1){
             this.initFBAlbumdata(1,albumIndex+1)
             }
            });
           
       
       }
       
        
       
       static initFBdata(albumsUrl,countpage){
           fetch(albumsUrl)
             .then(response => response.json())
             .then(data => 
               {   
               // console.log("posts data")
               // console.log(data)
               this.setState({posts:data.posts,loading:false})  
                 });
             
         
         }




















}
