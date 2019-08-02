import React from 'react';
import './style.css';
//import RegisterForm from '../registrationForm/RegisterForm.js';
import { Link } from 'react-router-dom'; 


class LoginPage extends React.Component {
    constructor() {
      super();
      this.state = {
        fields: {},
        errors: {}
      }

      this.handleChange = this.handleChange.bind(this);
      this.submituserLoginPage = this.submituserLoginPage.bind(this);

    };

    handleChange(e) {
      let fields = this.state.fields;
      fields[e.target.name] = e.target.value;
      this.setState({
        fields
      });

    }

    submituserLoginPage(e) {
      e.preventDefault();
      if (this.validateForm()) {
        console.log(JSON.stringify(this.state.fields))
          /*fetch('https://my-json-server.typicode.com/kumargauravsingh14/demo', 
            {
              method:'POST', 
              body: JSON.stringify(this.state.fields)
            }
          )*/
          let fields = {};
          fields["emailid"] = "";
          fields["password"] = "";
          
          
          this.setState({fields:fields});
          alert("Form submitted");
      }

    }

    validateForm() {

      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

      if (!fields["emailid"]) {
        formIsValid = false;
        errors["emailid"] = "*Please enter your email-ID.";
      }

      if (typeof fields["emailid"] !== "undefined") {
        //regular expression for email validation
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(fields["emailid"])) {
          formIsValid = false;
          errors["emailid"] = "*Please enter valid email-ID.";
        }
      }

      
      if (!fields["password"]) {
        formIsValid = false;
        errors["password"] = "*Please enter your password.";
      }
    
      this.setState({
        errors: errors
      });
      return formIsValid;
    }



  render() {
    return (
    <div id="main-login-container">
     <div id="loginPage">
        <h3>Login page</h3>
        <form method="post"  name="userLoginPage"  onSubmit= {this.submituserLoginPage} >
        
        <label>Email ID:</label>
        <input type="text" name="emailid" value={this.state.fields.emailid} onChange={this.handleChange}  />
        <div className="errorMsg">{this.state.errors.emailid}</div>
        <label>Password</label>
        <input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.password}</div>
        <input type="submit" className="button"  value="Login"/>
        </form>
        
        {/*<div className = "register_link"> 
          <a href = '..\registerationForm\RegisterForm.js'>New User? Register now!</a>  
        </div>*/
    }
    <Link to="<.\RegisterForm">hello</Link>
    </div>
</div>

      );
  }


}


export default LoginPage;