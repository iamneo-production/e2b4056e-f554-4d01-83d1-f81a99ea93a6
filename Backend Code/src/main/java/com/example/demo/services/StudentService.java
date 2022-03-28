package com.example.demo.services;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.example.demo.models.StudentModel;

public interface StudentService {
	
	//View all students
	public ResponseEntity<List<StudentModel>> viewAllStudents();
	
	//Delete student
	public ResponseEntity<HttpStatus> deleteStudentModel(Long Studentid);
}
