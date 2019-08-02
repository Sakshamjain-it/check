import React from 'react';
import './style.css';


class RegisterForm extends React.Component {
    constructor() {
      super();
      this.state = {
        fields: {},
        errors: {}
     }
      this.handleChange = this.handleChange.bind(this);
      this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

    };

    handleChange(e) {
      let fields = this.state.fields;
      fields[e.target.name] = e.target.value;
      this.setState({
        fields
      });

    }

    submituserRegistrationForm(e) {
      e.preventDefault();
      if (this.validateForm()) {
        console.log(JSON.stringify(this.state.fields))
          /*fetch('http:\\192.168.43.41:8090\customer\reg', 
            {
              method:'POST', 
              body: JSON.stringify(this.state.fields)
            }
          )*/
          let fields = {};
          fields["userType"] = "";
          fields["emailid"] = "";
          fields["password"] = "";
          fields["confirmPassword"] = "";
          
          this.setState({fields:fields});
          alert("Form submitted");
      }

    }

    validateForm() {

      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

      if (!fields["userType"]) {
        formIsValid = false;
        errors["userType"] = "*Please select user type.";
      }
      
      if (fields["userType"]==="Choose user") {
        formIsValid = false;
        errors["userType"] = "*Please select user type.";
      }
      
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

      if (typeof fields["password"] !== "undefined") {
        if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
          formIsValid = false;
          errors["password"] = "*Please enter secure and strong password.";
        }
      }
      if (!fields["confirmPassword"]) {
        formIsValid = false;
        errors["confirmPassword"] = "*Please confirm your password.";
      }
      if (fields["confirmPassword"]!==fields["password"]) {
        formIsValid = false;
        errors["confirmPassword"] = "*Please confirm your password.";
      }

      this.setState({
        errors: errors
      });
      return formIsValid;


    }



  render() {
    return (
    <div id="main-registration-container">
     <div id="register">
        <h3>Registration page</h3>
        <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
        
        <label>User Type:</label>
        <select name="userType" value={this.state.fields.userType} onChange={this.handleChange}>
        <option value="Choose user">Choose user</option>
        <option value="Customer">Customer</option>
        <option value="Service provider">Service provider</option>    
        </select>
         
        <div className="errorMsg">{this.state.errors.userType}</div>
        
        
        <label>Email ID:</label>
        <input type="text" name="emailid" value={this.state.fields.emailid} onChange={this.handleChange}  />
        <div className="errorMsg">{this.state.errors.emailid}</div>
        <label>Password</label>
        <input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.password}</div>
        <label>Confirm Password</label>
        <input type="password" name="confirmPassword" value={this.state.fields.confirmPassword} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.confirmPassword}</div>
        <input type="submit" className="button"  value="Register"/>
        </form>
    </div>
</div>

      );
  }


}


export default RegisterForm;