import React from "react";
import "./cookie.css";
import Cookies from "js-cookie";

class Cookie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cookieShow: true,
    };
  }
  componentWillMount() {
    var cookieValue = Cookies.remove("BFamilyFilmSchool-tracking-consent");

    var cookieValue = Cookies.get("gedeopeople-tracking-consent");
    if (cookieValue != null) {
      this.setState({ cookieShow: false });
    }
  }
  setCookie = () => {
    Cookies.set("gedeopeople-tracking-consent", "true");
    this.setState({ cookieShow: false });
  };
  render() {
    if (this.state.cookieShow) {
      return (
        <div id="cookie-dialog-consent">
          <div>
         <p> <strong>Data Save notification: </strong></p>  
            We use owned and
            third-party cookies to improve our services. If you continue to
            browse, we consider you accept this use.
            &nbsp;&nbsp;
            <button
              type="button"
              className="conset-btn"
              onClick={this.setCookie}
            >
              I accept
            </button>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}
export default Cookie;
