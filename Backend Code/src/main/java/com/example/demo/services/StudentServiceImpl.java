package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.demo.models.StudentModel;
import com.example.demo.repository.StudentRepository;

@Service
public class StudentServiceImpl implements StudentService{
	
	@Autowired StudentRepository studentrepo;
	
	public ResponseEntity<List<StudentModel>> viewAllStudents(){
		List<StudentModel> list = studentrepo.findAll();
		return new ResponseEntity<>(list , HttpStatus.OK);
	}
	
	public ResponseEntity<HttpStatus> deleteStudentModel(Long Studentid){
		studentrepo.deleteByStudentid(Studentid);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
}
