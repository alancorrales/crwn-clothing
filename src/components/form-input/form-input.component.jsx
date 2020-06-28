import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => (
	<div className='group'>
		{/* Other props receive eg. 'required', 'type', etc... */}
		<input className='form-input' onChange={handleChange} {...otherProps} />
		{/* Only render a label element if developer passes one */}
		{/* 'Shrink' whenever user has anything typed in */}
		{label ? (
			<label
				className={`${
					otherProps.value.length ? 'shrink' : ''
				} form-input-label`}
			>
				{label}
			</label>
		) : null}
	</div>
);

export default FormInput;
