import React from "react";

const InputField = (props) =>{
	const {label, name, value, placeholder, type, onChange} = props;

	return(
		<div className="form-group">
	    <label htmlFor={name}>{label}</label>
	    <input
	    	name={name}
	    	onChange={onChange}
	    	className="form-control" 
	    	type={type} value={value}
	    	placeholder={placeholder} 
	    />
	  </div>
	);
};

InputField.defaultProps = {
	type: "text"
}

export default InputField;