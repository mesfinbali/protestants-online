import React from "react";
import { MDBSelect, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn, MDBContainer } from "mdbreact";
import firebase from "../../firebase";

const OurWorks = () => {

  const [loadingWorks, setLoadingWorks] = React.useState(true);
  const [recentWorks, setRecentWorks] = React.useState({worksList:[]});
  const [allWorks, setAllWorks] = React.useState({worksList:[],workType:[]});
  const [allWorksFiltered, setAllWorksFiltered] = React.useState({worksList:[]});
  
  const [currentUrlPath, setPath] = React.useState(window.location.pathname);
  const [isRecentProjectPage, setProjectPage] = React.useState(true);
  const [filter, setFilter] = React.useState({type:"all projects"});

  React.useEffect(() => {
console.log("path");
console.log(currentUrlPath);
if(currentUrlPath=="/Projects/OurWorks"){
  // alert(true)
setProjectPage(true)
}
else{
  setProjectPage(false)
}
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("projects").doc('recentWorks');
      data.get().then(function(doc) {
        if (doc.exists) {
            console.log(" Document data:", doc.data());
            setAllWorks(doc.data());
            setAllWorksFiltered(doc.data());
            initRecentWorks(doc.data());
        } else {
          console.log("No such  document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });       
  };     
    fetchData();
  }, []);
  
const initRecentWorks=(data)=>{
  let recentWorksList=[];
  let itemNumber=3
  for(let i=0;i<itemNumber;i++){
    if(data.worksList.length>i){
      recentWorksList.push(data.worksList[i]);
    }
  }
  setRecentWorks({worksList:recentWorksList})
  setLoadingWorks(false)
}

 const filterProjectType = (e) => {
  for(let i=0;i<allWorks.workType.length;i++){
    if(allWorks.workType[i].id==e){
      setFilter(allWorks.workType[i])
    }
  }
  let addFilteredData=[];
if(e=="0"){
  addFilteredData=allWorks.worksList;
  setFilter({type:"all Projects"})
}
else{
  for(let i=0;i<allWorks.worksList.length;i++){
    if(allWorks.worksList[i].workType.id==e){
    addFilteredData.push(allWorks.worksList[i]);
    }
    }
}
    initRecentWorks({worksList:addFilteredData});
    setAllWorksFiltered({worksList:addFilteredData})
}
 
 const seeMore = () => {
      let addNewData=[];
      addNewData=recentWorks.worksList;
      let init =recentWorks.worksList.length;
      let l =recentWorks.worksList.length+3;

      for(let i=init;i<=l;i++){
        if(allWorksFiltered.worksList.length>addNewData.length){
          addNewData.push(allWorksFiltered.worksList[i])
        }
    }
    setRecentWorks({worksList:addNewData})
    };
    
 return (
    <>
    <MDBContainer>
    <div className="mt-5 px-2 py-0 z-index-0">
       
    <MDBRow>
      
      <span className="h3-responsive font-weight-bold text-center ml-3 mb-1">
      Filter: 
        </span>
          <MDBCol lg="5" className="text-right">
           <select className="browser-default custom-select" 
                      // className="form-control select-widget"
                      onChange={
                        (e) => {
                          {filterProjectType(e.target.value)}
                        }
                        
                        }>
              <option defaultValue value="0">All Projects</option>
            {allWorks.workType.map((options)=>
              <option value={options.id}>{options.type}</option>
            )}
        </select>
      </MDBCol>
      </MDBRow>
    </div>
    </MDBContainer>

   {loadingWorks && <>
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
    
   {!loadingWorks && 

<>

{(recentWorks.worksList.length<=0)&&
<>
        <h2 className="h1-responsive font-weight-bold text-center mt-5 mb-1">
        {allWorks.title}
        </h2>

        <h2 className="h2-responsive font-weight-bold text-center my-2 green-text">
        {filter.type}
        </h2>
        
        <h2 className="h4-responsive font-weight-bold text-center my-2 red-text">
      No {filter.type} projects found, Please try any other!
        </h2>
</>
}
{(recentWorks.worksList.length>0)&&

    <>
    
      <MDBCard className="my-5 px-2 pb-5 z-index-0">
      <MDBContainer>
      <MDBCardBody>
        <h2 className="h1-responsive font-weight-bold text-center mt-5 mb-1">
        {allWorks.title}
        </h2>

        <h2 className="h2-responsive font-weight-bold text-center my-2 green-text">
        {filter.type}
        </h2>
        <p className="text-center w-responsive mx-auto mb-5">
        {allWorks.description}
        </p>
      
        {recentWorks.worksList.map((recentWork,index)=>
       <>
      {((index%2==0)&&<>
        <MDBRow>
          <MDBCol lg="5">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img
                className="img-fluid"
                src={recentWork.gallary[0]}
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
          <MDBCol lg="7">
            <a href="#!" className="green-text">
              <h6 className="font-weight-bold mb-3">
                <MDBIcon icon="image" className="pr-2" />
                {recentWork.workType.type}
              </h6>
            </a>
            <h3 className="font-weight-bold mb-3 p-0">
              <strong>
                {recentWork.workTitle}</strong>
            </h3>
            <p>
                {recentWork.description}
            </p>
            <p>
            {(recentWork.createdTo)&& <> by <a href="#!">
                <strong> {recentWork.createdTo}</strong>
              </a></>}
              {(recentWork.dateWorked)&&<span> , {recentWork.dateWorked}</span> } 
              {(recentWork.place)&& <span> ,  {recentWork.place}</span>}
            </p>
            <MDBBtn color="success" size="md" className="waves-light " 
            onClick={()=>{
              console.log(recentWork);
              localStorage.setItem("selectedProject", JSON.stringify(recentWork));
              let search =
                "?fbId=" +
                recentWork.facebookAlbumId +
                "&ytId=" +
                recentWork.youtubeVideoId;
              let path = "/Gallary/album/" + search;
              window.location.assign(path);
            }}
            >
              Read more
            </MDBBtn>
          </MDBCol>
        </MDBRow>
        <hr className="my-5" />
      
        </>)}
      
        {((index%2!=0)&&<>
        <MDBRow>
          <MDBCol lg="7">
            <a href="#!" className="pink-text">
              <h6 className="font-weight-bold mb-3">
                <MDBIcon icon="image" className="pr-2" />
                {recentWork.workType.type}
              </h6>
            </a>
            <h3 className="font-weight-bold mb-3 p-0">
              <strong>
                {recentWork.workTitle}</strong>
            </h3>
            <p >
                {recentWork.description}
            </p>
            <p> 
            {(recentWork.createdTo)&&  <> by   <a href="#!">
               <strong> {recentWork.createdTo}</strong>
              </a></>}
              {(recentWork.dateWorked)&&<span> , {recentWork.dateWorked} </span> } 
              {(recentWork.place)&& <span> , {recentWork.place}</span>}
            </p>
            <MDBBtn
              color="pink"
              size="md"
              className="mb-lg-0 mb-4 waves-light"   
              onClick={()=>{
                console.log(recentWork);
                localStorage.setItem("selectedProject", JSON.stringify(recentWork));
                let search =
                  "?fbId=" +
                  recentWork.facebookAlbumId +
                  "&ytId=" +
                  recentWork.youtubeVideoId;
                let path = "/Gallary/album/" + search;
                window.location.assign(path);
              }}
            >
              Read more
            </MDBBtn>
          </MDBCol>
          <MDBCol lg="5">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img
                className="img-fluid"
                src={recentWork.gallary[0]}
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
        </MDBRow>
        <hr className="my-5" />
       </>)}
      </>)}
{!isRecentProjectPage&&

      <button type="button" class="btn btn-outline-primary waves-effect" 
        onClick={()=>{
          window.location.assign("Projects/OurWorks");
        }}
      >See More Projects</button>
}

{((isRecentProjectPage)&&(recentWorks.worksList.length<allWorksFiltered.worksList.length)&&(recentWorks.worksList.length>0))&&

<button type="button" class="btn btn-outline-primary waves-effect" 
  onClick={seeMore}
>See More </button>}
      </MDBCardBody>
       </MDBContainer>
    </MDBCard>
</>

}
</>
}
</> );


}

export default OurWorks;