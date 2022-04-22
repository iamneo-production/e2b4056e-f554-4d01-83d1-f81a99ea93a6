package com.example.demo.services;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.example.demo.models.StudentModel;

public interface StudentService {
	
	//View all students
	public ResponseEntity<List<StudentModel>> viewAllStudents();
	
	//View admission by id
	public ResponseEntity<StudentModel> viewAdmissionById(Long Studentid);
	
	//View student by studentId
	public ResponseEntity<List<StudentModel>> viewStudentById(Long Studentid);
	
	//Edit student
	public ResponseEntity<List<StudentModel>> editStudentById(Long Studentid , StudentModel student);
	
	
	//Delete student
	public ResponseEntity<HttpStatus> deleteStudentModel(Long Studentid);
}
