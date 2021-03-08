import React from 'react';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,MDBDropdown,MDBDropdownItem,MDBDropdownMenu,MDBDropdownToggle,
  MDBNavLink,MDBIcon,
  MDBNavbarToggler,
  MDBCollapse,
  MDBContainer,
  MDBListGroup, MDBListGroupItem,
} from 'mdbreact';
import './header.css';
import Sidebar from "react-sidebar";
import { ReactComponent as Logo } from './../../assets/Know-gedeo.svg';
////
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

import './sideNav.css';
import { SidebarData } from '../../Service-ApI/MasterData';

import { slide as Menu } from 'react-burger-menu';
import "./sideBar.css"

class NavBar extends React.Component {
  state = {
    collapseID: ''
  };

  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false
    };
  this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
}
  
  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }
  
  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ''
    }));


    closeCollapse = collID => () => {
        const { collapseID } = this.state;
        window.scrollTo(0, 0);
        collapseID === collID && this.setState({ collapseID: '' });
      };

  componentDidMount() {
    document.querySelector('nav').style.height = '65px';
  }

  componentWillUnmount() {
    document.querySelector('nav').style.height = 'auto';
  }

  render() {
    const { collapseID } = this.state;
    const overlay = (
      <div
        id='sidenav-overlay'
        style={{ backgroundColor: 'black' }}
        onClick={this.toggleCollapse('mainNavbarCollapse')}
      />
    );
    return (
      <>
     
    <Menu  isOpen={ this.state.sidebarOpen } onClose={ ()=>this.onSetSidebarOpen(false) }  customBurgerIcon={ false } customCrossIcon={ false } >
   

{/*"menu-item */} 
                
      <MDBListGroup style={{ color: '#fff !important'  }} >
          

{/* 
      <MDBNavLink className='text-white'
                              exact
                              to={{
                                pathname: item.path ,
                              album:{"name":item.name,"id":item.id}
                            }
                            }
                               

                             >
                 <MDBIcon icon={item.icon} size="sm"   />

                              <strong className="ml-3">{item.title}</strong>
                            </MDBNavLink> */}




          {SidebarData.map((item, index) =><>
              <MDBListGroupItem className='nav-menu-items '>
              <MDBNavItem  className={item.cName} > 
                            <MDBNavLink className='nav-text p-0'
                              exact
                              to={{
                                pathname: item.path ,
                              album:{"name":item.name,"id":item.id}
                            }}
                              onClick={() => this.onSetSidebarOpen(false)}
                             >
                                {/* {item.icon} */}
                                
                <MDBIcon icon={item.icon} size="sm"   />
                              <strong className="ml-3">{item.title}</strong>
                            </MDBNavLink>
                          </MDBNavItem>
                  
              </MDBListGroupItem>

              
          
          </>)}
          
                          
          
          
            </MDBListGroup>
      
    </Menu>

      <div id='classicformpage'>
          <div>

            <MDBNavbar
              dark
              expand='md'
              scrolling
              fixed='top'
             color="darken-4"
            >
              <MDBContainer>
              <MDBNavbarBrand href='/' className='py-0 font-weight-bold'>
          {isBrowser&&
           <Logo className="m-0" style={{ height: '6rem', width: '12rem', top:"5" , position:"absolute", }} />
          
          } 
          
          {isMobile&&
           <Logo className="m-0" style={{ height: '3rem', width: '6rem', top:"5" , position:"absolute", }} />
          }
              {/* <strong className='align-middle'>KNOW GEDEO</strong> */}
            </MDBNavbarBrand>
                <MDBNavbarToggler
                //   onClick={this.toggleCollapse('mainNavbarCollapse')}
                  onClick={()=>this.onSetSidebarOpen(true)}

                />
                <MDBCollapse id='mainNavbarCollapse' isOpen={collapseID} navbar>
                <MDBNavbarNav right>

                {SidebarData.map((item, index) =><> 

    <MDBDropdown>
      <MDBDropdownToggle   color=" ">
        {item.subTitles&&
                    <strong className="text-white">{item.title}</strong>
        }
        {!item.subTitles&&
                    <strong className="text-white"
                     onClick={()=>{
                      window.location.assign(item.path);
                    }}>{item.title}</strong>
        }
      </MDBDropdownToggle>
      {item.subTitles&& 
      <MDBDropdownMenu basic>
        {(item.subTitles.map((subtitle)=>
        <MDBDropdownItem href={"/Posts/album/?name="+subtitle.title+"&fbId="+subtitle.albumId}>{subtitle.title}</MDBDropdownItem>))
        }
      </MDBDropdownMenu>
      }
    </MDBDropdown>
                
                </>)}
              
              </MDBNavbarNav>
               
                </MDBCollapse>
              </MDBContainer>
            </MDBNavbar>


            <Menu>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
      </Menu>


            {collapseID && overlay}
          </div>
      </div>
   </> );
  }
}



export default NavBar;
















