import React, { useState, useEffect } from "react";
import TextInput from "./common/TextInput";
import PropTypes from "prop-types";
import SelectInput from "./common/SelectInput";

function CourseForm(props) {
	return (
		<form onSubmit={props.onSubmit}>
			<TextInput
				id="title"
				label="Title"
				onChange={props.onChange}
				name="title"
				value={props.course.title}
				error={props.errors.title}
			/>

			<SelectInput
				id="author"
				name="authorId"
				label="Author"
				onChange={props.onChange}
				value={props.course.authorId}
				error={props.errors.authorId}
				authors={props.authors}
			/>

			<TextInput
				id="category"
				label="Category"
				name="category"
				onChange={props.onChange}
				value={props.course.category}
				error={props.errors.category}
			/>

			<input type="submit" value="Save" className="btn btn-primary" />
		</form>
	);
}

CourseForm.propTypes = {
	course: PropTypes.object.isRequired,
	onSubmit: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	errors: PropTypes.object.isRequired,
};

export default CourseForm;

