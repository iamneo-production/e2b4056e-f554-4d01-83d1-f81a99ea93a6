package com.examly.springapp.services;

import java.util.List;

import com.examly.springapp.repositories.InstituteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.examly.springapp.exceptions.ResourceNotFoundException;
import com.examly.springapp.models.CourseModel;
import com.examly.springapp.repositories.CourseRepository;

@Service
public class CourseModelServiceImpl implements CourseModelService{
	
	@Autowired
	private CourseRepository courserepo;
	@Autowired
	private InstituteRepository instituterepo;
	
	//View all courses in an academy
	public ResponseEntity<List<CourseModel>> viewAllCoursesInstitute(Long institutesId){
		List<CourseModel> courses = courserepo.findByInstitutesId(institutesId);
		return new ResponseEntity<>(courses , HttpStatus.OK);
	}
	
	//View course by id
	public ResponseEntity<CourseModel> viewCourseById(Long courseId){
		CourseModel course = courserepo.findById(courseId)
		.orElseThrow(()-> new ResourceNotFoundException("No course found with id = " +courseId));
		return new ResponseEntity<>(course,HttpStatus.OK);
	}
	
	//Add Courses
	public ResponseEntity<CourseModel> addCourseModel(Long institutesId, CourseModel course)
	{
		CourseModel newcourse = instituterepo.findById(institutesId).map(institute->{
			course.setInstitute(institute);
			return courserepo.save(course);
		}).orElseThrow(()-> new ResourceNotFoundException("No academy found with id = " +institutesId));
		return new ResponseEntity<>(newcourse,HttpStatus.CREATED);
	}
	
	//View all courses
	public ResponseEntity<List<CourseModel>> viewAllCourses(){
		List<CourseModel> list = courserepo.findAll();
		return new ResponseEntity<>(list , HttpStatus.OK);
	}
	
	//Edit Course
	public ResponseEntity<CourseModel> editCourseModel(Long courseId, CourseModel course){
		CourseModel existingcourse = courserepo.findById(courseId)
		.orElseThrow(()-> new ResourceNotFoundException("No course found by id = " + courseId));
		existingcourse.setCourseName(course.getCourseName());
		existingcourse.setCourseDuration(course.getCourseDuration());
		existingcourse.setCourseDescription(course.getCourseDescription());
		return new ResponseEntity<>(courserepo.save(existingcourse), HttpStatus.OK);
	}
	
	//Delete Course
	public ResponseEntity<HttpStatus> deleteCourseModel(Long courseId){
		courserepo.deleteById(courseId);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
}

