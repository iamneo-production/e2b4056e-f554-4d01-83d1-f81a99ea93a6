package com.examly.springapp.services;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.examly.springapp.models.StudentModel;

public interface StudentService {
	
	//View all students
	public ResponseEntity<List<StudentModel>> viewAllStudents();
	
	//View student by studentId
	public ResponseEntity<StudentModel> viewStudentById(Long Studentid);
	
	//Delete student
	public ResponseEntity<HttpStatus> deleteStudentModel(Long Studentid);
}
