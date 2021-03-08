import React from 'react';
import { Route, Switch } from 'react-router-dom';


import HomePage from './pages/Home/HomePage';
import ContactsPage from './pages/contact/contact';
import ServicesPage from './pages/services/services';
import ProjectsPage from './pages/projects/projects';
import SingleProject from './pages/projects/singleProject';
import AboutUs from './pages/aboutus/aboutus';
import SchoolPage from './pages/filmschool/school';
import GallaryPage from './pages/Gallary/gallarypage';
import AlbumPage from './pages/Gallary/album';
import OurWorks from './pages/projects/ourWorks';
import VideoGallary from './pages/Gallary/videoGallary';
import Posts from './pages/posts/posts';
import albumPosts from './pages/posts/albumPosts';
import HomeCultures from './pages/Home/homeCulture';
import HomeTourism from './pages/Home/homeTourism';
import CoursesPage from './pages/filmschool/team';
import RegisterForm from './pages/filmschool/registerForm';
import NewForm from './pages/form/form';

class Routes extends React.Component {
  render() {
    return (
      <Switch>

        
<Route exact path='/posts' component={Posts} />
<Route exact path='/Posts/album/' component={albumPosts} />
        
        {/* <Route exact path='/' component={HomePageNew} /> */}
        <Route exact path='/' component={HomePage} />
        <Route exact path='/Contact' component={ContactsPage} />
        <Route exact path='/Services' component={ServicesPage} />
        <Route exact path='/Projects' component={ProjectsPage} />
        
        <Route exact path='/Projects/OurWorks' component={OurWorks} />
        <Route exact path='/Project/name' component={SingleProject} />
        <Route exact path='/School' component={SchoolPage} /> 
        <Route exact path='/register' component={RegisterForm} /> 
        <Route exact path='/gallary' component={GallaryPage} />
        <Route exact path='/gallary/album' component={AlbumPage} />
        <Route exact path='/gallary/Video' component={VideoGallary} />
        <Route exact path='/About' component={AboutUs} />
        <Route exact path='/AboutGedeo' component={CoursesPage} /> 
        <Route exact path='/Culture' component={HomeCultures} />
        <Route exact path='/Tourism' component={HomeTourism} />
        <Route exact path='/form' component={NewForm} />

        
        <Route
          render={function() {
            return <h1>Not Found</h1>;
          }}
        />
      </Switch>
    );
  }
}

export default Routes;
