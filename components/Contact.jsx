'use strict';
var React = require('react');

var Contact = React.createClass({
  getInitialState: function() {
    return {
    	errors: {},
    	submitted: false
    }
  },

  // Handle submit event.
  handleSubmit: function() {
  	if (this.isValid()) {
  		this.sendMessage();
  	}
  },

  // Validate data.
  isValid: function() {
  	var errors = {},
  			fields = ['name', 'email', 'message'];

  	fields.forEach(function(field) {
  		// Get field value.
  		var value = trim(this.refs[field].getDOMNode().value);
  		if (!value) {
  			errors[field] = 'This field is required';
  		}
  	}.bind(this));
  	// Set errors state.
  	this.setState({
  		errors: errors,
  		submitted: false
  	});

  	var isValid = true;
  	for (var error in errors) {
  		isValid = false;
  		break;
  	}

  	return isValid;
  },

  sendMessage: function() {
  	// Lets not lose context.
  	var ctx = this;
  	$.ajax({
  		type: "POST",
  		url: "contact",
  		data: this.getValues(),
  		success: function(response) {
  			this.setState({submitted: true});
  		}
  	})
  	.fail(function() {
	    ctx.setState({
	    	errors: {server: 'Error sending message.'},
	    	submitted: false
	    });
	  })
  	
  },

  getValues: function() {
  	return {
  		name: this.refs.name.getDOMNode().value,
  		email: this.refs.email.getDOMNode().value,
  		message: this.refs.message.getDOMNode().value,
  	}
  },

  // Render textfield field with error wrapper.
  renderTextField: function(id, placeholder) {
  	return <div className={(this.state.errors[id]) ? 'error input-wrapper' : 'input-wrapper' }>
	  	  		<input type="text" className={"form-control " + id} id={id} ref={id} placeholder={placeholder} />
	  	  		{ id in this.state.errors &&
	  	  			<div className="error">{this.state.errors[id]}</div>
	  	  		}
  	  		 </div>
  },

  // Render textarea field with error wrapper.
  renderTextArea: function(id, placeholder) {
  	return <div className={(this.state.errors[id]) ? 'error input-wrapper' : 'input-wrapper' }>
	  	  		<textarea className={"form-control " + id} id={id} ref={id} placeholder={placeholder} />
	  	  		{ id in this.state.errors &&
	  	  			<div className="error">{this.state.errors[id]}</div>
	  	  		}
  	  		 </div>
  },

  render: function() {
  	var status = null;
  	// Show notice message to user if message is sent successfully.
  	if (this.state.submitted === true) {
  		status = <div className="alert alert-success">Successfully sent.</div>
  	}
  	if (this.state.errors['server']) {
  		status = <div className="alert alert-error">{this.state.errors['server']}</div>
  	}

  	return (
  	  <div clasName="contact-form-wrapper">
  	  	<div className="header-wrapper"><h2>Get in touch!</h2></div>
  	  	<div className="alerts">{status}</div>
  	  	<div className="form">
  	  		{this.renderTextField("name", "Name")}
  	  		{this.renderTextField("email", "Email")}
  	  		{this.renderTextArea("message", "Message")}
  	  		<button type="button" className="submit" onClick={this.handleSubmit}>Send!</button>
  	  	</div>
  	  </div>
  	);
  },

});

module.exports = Contact;


// Helper functions.
function trim(string) {
  var TRIM_RE = /^\s+|\s+$/g;
  return string.replace(TRIM_RE, '');
}