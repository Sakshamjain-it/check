import React from 'react';
import './style.css';


class NewOrder extends React.Component {
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
          fields["sourceLocation"] = "";
          fields["destinationLocation"] = "";
          fields["startDateTime"] = "";
          fields["category"] = "";
          fields["load"] = "";
          
          this.setState({fields:fields});
          alert("Form submitted");
      }

    }

    validateForm() {

      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

      if (!fields["sourceLocation"]) {
        formIsValid = false;
        errors["sourceLocation"] = "*Please enter source location address.";
      }
      
      if (!fields["destinationLocation"]) {
        formIsValid = false;
        errors["destinationLocation"] = "*Please enter destination location address.";
      }
      
      if (!fields["startDateTime"]) {
        formIsValid = false;
        errors["startDateTime"] = "*Please enter Date and Time order to be picked up.";
      }
      
      if (!fields["category"]) {
        formIsValid = false;
        errors["category"] = "*Please choose category.";
      }
      if (fields["category"]==="Choose category") {
        formIsValid = false;
        errors["category"] = "*Please select category .";
      }
      
     

      
      if (!fields["load"]) {
        formIsValid = false;
        errors["load"] = "*Please enter load.";
      }

     
      if (fields["load"]>0) {
        formIsValid = false;
        errors["load"] = "*load should be more than 0.";
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
        <h3>Order Details</h3>
        <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
        <label>Source Location:</label>
        <input type="text" name="sourceLocation" value={this.state.fields.sourceLocation} onChange={this.handleChange}  />
        <div className="errorMsg">{this.state.errors.sourceLocation}</div>
        <label>Destination Location:</label>
        <input type="text" name="destinationLocation" value={this.state.fields.destinationLocation} onChange={this.handleChange}  />
        <div className="errorMsg">{this.state.errors.destinationLocation}</div>
        
        <label>Start Date and Time:</label>
        <input type="datetime-local" name="startDateTime" value={this.state.fields.startDateTime} onChange={this.handleChange}  />
        <div className="errorMsg">{this.state.errors.startDateTime}</div>
        <h4>Item Details</h4>
        <label>Category:</label>
        <select name="category" value={this.state.fields.category} onChange={this.handleChange}>
        <option value="Choose category">Choose user</option>
        <option value="Refrigerated">Refrigerated</option>
        <option value="Non Refrigerated">Non Refrigerated</option>    
        </select>
         
        <div className="errorMsg">{this.state.errors.category}</div>
        
        
        <label>Email ID:</label>
        <input type="text" name="emailid" value={this.state.fields.emailid} onChange={this.handleChange}  />
        <div className="errorMsg">{this.state.errors.emailid}</div>
        <label>Password</label>
        <input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.password}</div>
        <label>Confirm Password</label>
        <input type="password" name="confirmPassword" value={this.state.fields.confirmPassword} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.confirmPassword}</div>
        <input type="submit" className="button"  value="Place Order"/>
        </form>
    </div>
</div>

      );
  }


}


export default NewOrder;