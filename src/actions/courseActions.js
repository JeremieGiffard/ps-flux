import dispatcher from "../appDispatcher";
import * as courseApi from "../api/courseApi";
import actionTypes from "./actionTypes";
import { toast } from "react-toastify";
import * as authorApi from "../api/authorApi";

export function saveCourse(course) {
	//Hey dispatcher, go tell all the stores that a course was just created
	return courseApi.saveCourse(course).then((savedCourse) => {
		dispatcher.dispatch({
			//if course.id exist => UPDATE_COURSE else CREATE_COURSE
			actionType: course.id
				? actionTypes.UPDATE_COURSE
				: actionTypes.CREATE_COURSE,
			course: savedCourse,
		});
	});
}

export function loadCourses() {
	return courseApi.getCourses().then((courses) => {
		dispatcher.dispatch({
			actionType: actionTypes.LOAD_COURSES,
			courses: courses,
		});
	});
}

export function loadAuthors() {
	return authorApi.getAuthors().then((authors) => {
		dispatcher.dispatch({
			actionType: actionTypes.LOAD_AUTHORS,
			authors: authors,
		});
	});
}

export function deleteCourse(id) {
	return courseApi.deleteCourse(id).then(() => {
		dispatcher.dispatch({
			actionType: actionTypes.DELETE_COURSE,
			id: id,
			toast: toast.error("Course Deleted."),
		});
	});
}
