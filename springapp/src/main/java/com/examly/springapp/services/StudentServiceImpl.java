package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.demo.exceptions.ResourceNotFoundException;
import com.example.demo.models.StudentModel;
import com.example.demo.repository.StudentRepository;

@Service
public class StudentServiceImpl implements StudentService{
	
	@Autowired StudentRepository studentrepo;
	
	public ResponseEntity<List<StudentModel>> viewAllStudents(){
		List<StudentModel> list = studentrepo.findAll();
		return new ResponseEntity<>(list , HttpStatus.OK);
	}
	
	public ResponseEntity<StudentModel> viewAdmissionById(Long Studentid){
		StudentModel student = studentrepo.findById(Studentid)
		.orElseThrow(()-> new ResourceNotFoundException("No student found with ID "+Studentid));
		return new ResponseEntity<>(student,HttpStatus.OK);
	}
	
	public ResponseEntity<List<StudentModel>> viewStudentById(Long Studentid){
		List<StudentModel> list  = studentrepo.findStudentByStudentid(Studentid);
		return new ResponseEntity<>(list,HttpStatus.OK);
	}
	
	public ResponseEntity<List<StudentModel>> editStudentById(Long Studentid , StudentModel student){
		
		List<StudentModel> list = studentrepo.findStudentByStudentid(Studentid);
		for(StudentModel existingStudent : list) {
			existingStudent.setAddress(student.getAddress());
			existingStudent.setAge(student.getAge());
			//existingStudent.setCourses(student.getCourses());
			existingStudent.setEmail(student.getEmail());
			existingStudent.setFathersname(student.getFathersname());
			existingStudent.setGender(student.getGender());
			existingStudent.setMothersname(student.getMothersname());
			existingStudent.setNationality(student.getNationality());
			existingStudent.setPhonenumber(student.getPhonenumber());
			existingStudent.setPincode(student.getPincode());
			existingStudent.setState(student.getState());
			existingStudent.setStudentname(student.getStudentname());
			studentrepo.save(existingStudent);
		}
		return new ResponseEntity<>(list,HttpStatus.OK);
	}
	
	public ResponseEntity<HttpStatus> deleteStudentModel(Long Studentid){
		studentrepo.deleteByStudentid(Studentid);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
}
