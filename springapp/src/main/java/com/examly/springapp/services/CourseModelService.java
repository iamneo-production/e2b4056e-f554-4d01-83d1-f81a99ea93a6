package com.examly.springapp.services;

import com.examly.springapp.models.CourseModel;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface CourseModelService {
	
	//Add Course in an Institute
	public ResponseEntity<CourseModel> addCourseModel(Long institutesId, CourseModel course);
	
	//View Courses in an institute
	public ResponseEntity<List<CourseModel>> viewAllCoursesInstitute(Long institutesId);
	
	//View all courses
	public ResponseEntity<List<CourseModel>> viewAllCourses();
	
	//View course by id
	public ResponseEntity<CourseModel> viewCourseById(Long courseId);
	
	//Edit Course
	public ResponseEntity<CourseModel> editCourseModel(Long courseId , CourseModel course);
	
	//Delete Course
	public ResponseEntity<HttpStatus> deleteCourseModel(Long courseId);
}

