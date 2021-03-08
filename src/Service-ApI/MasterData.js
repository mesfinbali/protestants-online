
import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    // icon: <AiIcons.AiFillHome />,
    icon:"home",
    cName: 'nav-text'
  }, {
    title: 'Posts',
    path: '/Posts',
    // icon: <AiIcons.AiFillHome />,
    icon:"photo-video",
    cName: 'nav-text'
  },
  { 
    name:"HomeAboutGedeo",id:117216360251922,
    title: 'About Gedeo',
    path: '/AboutGedeo',
    // icon: <IoIcons.IoIosPaper />,
    icon:"film",
    cName: 'nav-text',
    subTitles:[
      {
      title: 'Facts',
      path: '/Services',
      albumId:"111920664114825",
      icon:"film",
      cName: 'nav-text'

    },
    {
    title: 'Coffee',
    path: '/Services',
    albumId:"111900044116887",
    icon:"film",
    cName: 'nav-text'
  },
  {
  title: 'Cuisine',
  path: '/Services',
  albumId:"111907827449442",
  icon:"film",
  cName: 'nav-text'

},
{
title: 'The People',
path: '/Services',
albumId:"111879994118892",
icon:"film",
cName: 'nav-text'
},
{
title: 'Historical Info',
path: '/Services',
albumId:"111910240782534",
icon:"film",
cName: 'nav-text'

},
{
title: 'Geographical Info',
path: '/Services',
albumId:"103012238339001",
icon:"film",
cName: 'nav-text'

},
{
title: 'Festival',
path: '/Services',
albumId:"107239254582966",
icon:"film",
cName: 'nav-text'
},
]
  },
  { 
    name:"HomeTourism",id:115997590373799, 
    title: 'Tourism',
    path: '/Tourism',
    icon:"graduation-cap",
    // icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text',
    subTitles:[
      {
      title: 'Tourist Attraction',
      path: '/Tourism',
      albumId:"111895950783963",
      icon:"film",
      cName: 'nav-text'

    },
    {
    title: 'Tourism Events',
    path: '/Tourism',
    albumId:"107205927919632",
    icon:"film",
    cName: 'nav-text'
  },
  {
  title: 'Hotels',
  path: '/Tourism',
  albumId:"111878340785724",
  icon:"film",
  cName: 'nav-text'

},]
  },
  { 
    name:"HomeCulture",id:111909114115980, 
    title: 'Culture',
    path: '/Culture',
    icon:"compact-disc", 
    // icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text',
    subTitles:[
      {
      title: 'Music',
      path: '/Culture',
      albumId:"108049024501989",
      icon:"film",
      cName: 'nav-text'

    },
    {
    title: 'Documentary',
    path: '/Culture',
    albumId:"111881804118711",
    icon:"film",
    cName: 'nav-text'
  },
  {
  title: 'Culture Images',
  path: '/Culture',
  albumId:"111909114115980",
  icon:"film",
  cName: 'nav-text'

},]
  },
  
  { 
    name:"HomeGallery",id:115997873707104, 
    title: 'Gallary',
    path: '/gallary',
    icon:"photo-video",
    // icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  },
  // {
  //   title: 'About',
  //   path: '/About',
  //   icon:"question-circle",
  //   // icon: <IoIcons.IoMdPeople />,
  //   cName: 'nav-text'
  // },
  // {
  //   title: 'Contact',
  //   path: '/Contact',
  //   icon:"map-marker-alt",
  //   // icon: <FaIcons.FaEnvelopeOpenText />,
  //   cName: 'nav-text'
  // }
]; 

// Gallery Collection
export const  HomeBannersData = {name:"HomeBanner",id:117221260251432,
  
}
export const  HomeStartData = {name:"HomeStart",id:103012238339001,
  
}
// albums:[{name:"HomeStart",id:103012238339001},{name:"HomeTourism",id:115997590373799},
// {name:"HomeGallery",id:115997873707104},{name:"HomeAboutGedeo",id:103012238339001},
// {name:"HomeCulture",id:111909114115980}]

export const  HomeTourismData = {name:"HomeTourism",id:115997590373799,
  list:[
    {
      albumName:"Attractions",
      id:"111895950783963",
      description:"",
      image:""
    },
    {
      albumName:"Events",
      id:"107205927919632",
      description:"",
      image:""
    },
    {
      albumName:"Places",
      id:"111878340785724",
      description:"",
      image:""
    },]
}

export const  HomeGalleryData ={name:"HomeGallery",id:115997873707104,
list:[
  {
    albumName:"people",
    id:"111879994118892",
    description:"",
    image:""
  },
  {
    albumName:"culture",
    id:"111909114115980",
    description:"",
    image:""
  },
  {
    albumName:"coffee",
    id:"111900044116887",
    description:"",
    image:""
  },
  {
    albumName:"tour",
    id:"111880957452129",
    description:"",
    image:""
  },]
}

export const  HomeAboutGedeoData ={name:"HomeAboutGedeo",id:117216360251922,
list:[ 
    {
      albumName: 'Facts',
      description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda deleniti hic.",
    path: '/Services',
    id:"111920664114825",
    icon:"film",
    cName: 'nav-text'

  },
  { 
    albumName: 'Coffee',
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda deleniti hic.",
  path: '/Services',
  id:"111900044116887",
  icon:"flask",
  cName: 'nav-text'
},
{
  albumName: 'Cuisine',
path: '/Services',
description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda deleniti hic.",
id:"111907827449442",
icon:"glass-martini",
cName: 'nav-text'

},
{
  albumName: 'The People',
path: '/Services',
description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda deleniti hic.",
id:"111879994118892",
icon:"bolt",
cName: 'nav-text'
},
{
  albumName: 'Historical Info',
path: '/Services',
description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda deleniti hic.",
id:"111910240782534",
icon:"magic",
cName: 'nav-text'

},
{
  albumName: 'Geographical Info',
path: '/Services',
description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda deleniti hic.",
id:"103012238339001",
icon:"film",
cName: 'nav-text'

},
{
  albumName: 'Festival',
path: '/Services',
description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda deleniti hic.",
id:"107239254582966",
icon:"film",
cName: 'nav-text'
},
]



}

export const  HomeCultureData ={name:"HomeCulture",id:111909114115980,
list:[
  
  {
    albumName:"Festivals",
    id:"107239254582966",
    description:"",
    image:""
  },
  {
    albumName:"Music",
    id:"108049024501989",
    description:"",
    image:""
  },
  {
    albumName:"Documentaries",
    id:"111881804118711",
    description:"",
    image:""
  },
  {
    albumName:"Cultural Foods",
    id:"111907827449442",
    description:"",
    image:""
  },
  {
    albumName:"Histories",
    id:"111910240782534",
    description:"",
    image:""
  },
  {
    albumName:"Facts",
    id:"111920664114825",
    description:"",
    image:""
  },]
}


 
export const  StudentsTestimonyData ={ 
    intro:{
        description:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur veniam.',
           imagepath:'https://mdbootstrap.com/img/Photos/Others/screens-section.jpg',
            },
    imagesGallary:[],
    studentTestimonies:[  {
        studentName:'Hemron',
        specializedSkill:'Camera',
        imagePath:'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img (55).jpg',
        testimony:'Lorem ipsum dolor sit amet, consectetur adipisicing minima veniam elit.',
    },
    {
        studentName:'Chuchaye',
        specializedSkill:'Graphics Editer',
        imagePath:'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img (49).jpg',
        testimony:'Lorem ipsum dolor sit amet, consectetur adipisicing minima veniam elit.',
    },
     {
        studentName:'Samy Hub',
        specializedSkill:'Directing',
        imagePath:'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img (56).jpg',
        testimony:'Lorem ipsum dolor sit amet, consectetur adipisicing minima veniam elit.',
    }
    ]
}

export const  AfterComplatingCoursesData ={ 
            intro:{
                description:' You will be able to Do:',
                   imagepath:'https://mdbootstrap.com/img/Photos/Others/screens-section.jpg',
                    },
            imagesGallary:[],
            skills:[  
                {
                    skillType:'Short/ long Films',
                    description:' a visual art-form used to simulate experiences that communicate ideas, stories, perceptions, feelings, or beauty.',
                },
                {
                    skillType:'Series Drama',
                    description:' Some stories are so rich they need more than a movie to tell them. Crime sagas, medical dramas, sci-fi and more–these shows will keep you glued to your seat.',
                },
                {
                    skillType:'Documentary',
                    description:' A documentary film is a non-fictional motion-picture intended to "document reality, primarily for the purposes of instruction, education, or maintaining a historical record".',
                },
                {
                    skillType:'Music Clips',
                    description:' A film or video rendition of a recorded song, often showing the musicians performing or showing images that illustrate the lyrics or the mood of the song.',
                },
                {
                    skillType:'Television shows',
                    description:'Any content produced for viewing on a television set and broadcast via over-the-air, satellite, cable, - it can be breaking news, advertisements, or trailers. ',
                },
            ]
            }

export const CoursesData ={ 
            intro:{
                description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
                    imagepath:"https://mdbootstrap.com/img/Mockups/Transparent/Small/iphone-portfolio1.png"
            },
            imagesGallary:[],
            Courses:[  
                {
                    icon:"flag-checkered",
                courseType: 'Photo / Video Editing',
                description: 'Developed in association with Pixar and Animal Logic, develop the skills to animate and bring characters and worlds to life with the latest 3D and MoCap tech."            ',
             },
             {
                icon:"flask",
             courseType: '2D/3D Animation',
             description: 'Digital technology is creating unprecedented demand for information, and entertainment production is big business. Produce your own cutting-edge content with the latest media and 3D tech at JMC.',
          },
          {
            icon:"glass-martini",
          courseType: 'Graphics Design',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda deleniti hic.',
       },
       {
        icon:"heart",
       courseType: 'Cinimatograpy',
       description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda deleniti hic.',
    },
    {
        icon:"bolt",
    courseType: 'Script Writing',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda deleniti hic.',
 },
 {
    icon:"magic",
 courseType: 'Directing',
 description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda deleniti hic.',
},
            ]
            }

export const ServicesTypeData = [
    
  {
    servicetype: 'Location Scouting',
    path: '/',
    imagePath:'https://scontent.fmba5-1.fna.fbcdn.net/v/t1.0-9/89914191_832511500588121_3214570957045760000_o.jpg?_nc_cat=101&_nc_sid=8bfeb9&_nc_ohc=7_fKBkpw8NQAX9JQySf&_nc_ht=scontent.fmba5-1.fna&oh=7f98a05367b81021be5c343f0e8b9fac&oe=5FAD02B2'
},
{
  servicetype: 'Shooting and Editing',
  path: '/',
  imagePath:'https://i.pinimg.com/originals/4e/f4/0d/4ef40d168123faf9af807a4149816a0a.jpg'
},
{
  servicetype: 'Motion Graphics',
  path: '/',
  imagePath:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQT8qt9S3Zm2DUrRuOCAqiMA7KMfU5CwdU9JA&usqp=CAU'
},
{
  servicetype: 'Post-Production',
  path: '/',
  imagePath:'https://images.blackmagicdesign.com/images/products/blackmagicursaminipro/post/post-production/post-production-md.jpg?_v=1534304209'
},
{
  servicetype: 'Equipment Rental',
  path: '/',
  imagePath:'https://assets.website-files.com/5979e04f8ce136000121f712/59887ea61c3cee0001f9514d_rental-button-used-2.jpg'
},
{
  servicetype: 'Script Writing',
  path: '/',
  imagePath:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRKoJG2wFiSreLiGao1qQOXGu9bewWB2kemiQ&usqp=CAU'
},

]
