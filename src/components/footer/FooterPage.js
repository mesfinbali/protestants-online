import React, { Component } from "react";
import { SidebarData } from '../../Service-ApI/MasterData';
import "./footer.css";
import {
  MDBNavLink,MDBIcon
} from 'mdbreact';
import Cookie from "./cookie/cookie";

class FooterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailModal: false,
      modalText: null,
      isLoading: false,
      modalView: false,
    };
  }
  closeViewDialog = () => {
    this.setState({ modalView: false });
  };
  closeDialog = () => {
    this.setState({ emailModal: false, modalText: null });
  };
  render() {
    var loading = null;
    if (this.state.isLoading) {
      loading = (
        <div className="Loading-div">
          <div className="Loading">
            {/* <ProgressLoader displayMess="Subscribing your email" /> */}
          </div>
        </div>
      );
    }
    return (
      <footer className="footer-container mt-5">
        {loading}
        <div className="footer-body">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
              <h5 className="text-left">USEFUL LINKS</h5>

              <div className="list-group text-left">
              
          {SidebarData.map((item, index) =>
          <>
          <MDBNavLink className='text-white'
                              exact
                              to={{
                                pathname: item.path ,
                              album:{"name":item.name,"id":item.id}
                            }
                            }
                               

                              // to={item.path}
                             >
                 <MDBIcon icon={item.icon} size="sm"   />

                              <strong className="ml-3">{item.title}</strong>
                            </MDBNavLink>
          </>)}
              
                <a></a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
              <h5 className="text-left">CONTACT</h5>
              <div className="list-group text-left ml-3">
                <a className="list-group-item list-group-item-action">
                  {" "}
                  KnowGedeoPeople@gmail.com
                </a>
                
                <a className="list-group-item list-group-item-action">
                  +251 9 60371120  

                </a>
                <a className="list-group-item list-group-item-action">
                  +251 9 42424293

                </a>
                <a className="list-group-item list-group-item-action">
                  +251 9 42632262 

                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
              <h5 className="text-left">FOLLOW US</h5>
              <div className="list-group text-left ml-3">
                <ul className="social-media p-0">
                  <li>
                    <a
                      className="links white-text"
                      href="https://www.facebook.com/Know-Gedeo-People-102938435013048/"
                      target="_blank"
                    >
                     <MDBIcon fab icon="facebook" size="2x" />
                    </a>
                    <a
                      className="links white-text"
                      href="https://telegram.me/Bfamilymediatrainingcenter"
                      target="_blank"
                    >
                     <MDBIcon fab icon="telegram-plane" size="2x"/>
                    </a>
                    
                    
                  </li>
                </ul>
              </div>
            </div>
          </div>
       
        </div> 
        <Cookie></Cookie>
        <hr style={{ backgroundColor: "white", maxWidth: "75%" }} />
        <p style={{ "text-align": "center" }}>
          © Know Gedeo People, All Rights Reserved
        </p>
      </footer>
    );
  }
}

export default FooterPage;
