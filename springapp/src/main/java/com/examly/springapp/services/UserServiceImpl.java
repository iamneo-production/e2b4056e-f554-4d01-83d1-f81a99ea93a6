package com.examly.springapp.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import com.examly.springapp.models.CourseModel;
import com.examly.springapp.models.StudentModel;
import com.examly.springapp.models.User;
import com.examly.springapp.payload.response.MessageResponse;
import com.examly.springapp.payload.request.StudentRequest;
import com.examly.springapp.repositories.CourseRepository;
import com.examly.springapp.repositories.StudentRepository;
import com.examly.springapp.repositories.UserRepository;

@Component
public class UserServiceImpl implements UserService{
	
	@Autowired
	StudentRepository studentRepository;
	@Autowired
	CourseRepository  courseRepository;
	@Autowired
	UserRepository userRepository;
	
	@Override
	public ResponseEntity<?> enroll(StudentRequest studentRequest) {
			
		
			
			List<Long> user_id = studentRepository.getUserId(studentRequest.getUserid());
			
				if(user_id.get(0) > 0)
				{
					
					
				List<Long> studentid = studentRepository.getStudentId(studentRequest.getUserid());
				Long student_id=studentid.get(0);
				StudentModel student = new StudentModel( student_id,studentRequest.getFirstName(), studentRequest.getFatherName(),
						studentRequest.getMotherName(), studentRequest.getEmail(), 
						studentRequest.getGender(), studentRequest.getState(), 
	studentRequest.getNationality(), studentRequest.getPincode(),studentRequest.getPhonenumber(), studentRequest.getAddress());
				
	
				Optional <CourseModel> courses=courseRepository.findById(studentRequest.getCourse_id());
				student.getCourses().add(courses.get());
				Optional<User> u=userRepository.findById( studentRequest.getUserid());
				
				student.setUsers(u.get());
			
				studentRepository.save(student);
			
				return new ResponseEntity<>( student,HttpStatus.OK);
				}
				else if(user_id.get(0) == 0) {
				
				      Long random_int = (long)Math.floor(Math.random()*(2999-1000+1)+1000);
	
				       StudentModel student=new StudentModel( 
				    		    random_int,
				    		   	studentRequest.getFirstName(), 
				    		   	studentRequest.getFatherName(),
								studentRequest.getMotherName(), 
								studentRequest.getEmail(), 
								studentRequest.getGender(), 
								studentRequest.getState(), 
								studentRequest.getNationality(), 
								studentRequest.getPincode(),
								studentRequest.getPhonenumber(), 
								studentRequest.getAddress()
								);
					Optional<CourseModel> courses=courseRepository.findById(studentRequest.getCourse_id());
					student.getCourses().add(courses.get());
			      
				     Optional< User> u=userRepository.findById( studentRequest.getUserid());
				student.setUsers(u.get());
						
						studentRepository.save(student);
						 return new ResponseEntity<>( student,HttpStatus.OK);
	
				}
				return ResponseEntity
	                    .badRequest()
	                    .body(new MessageResponse("Error! Not Registerd "));	
					
			
		}
	
		@Override
		public ResponseEntity<List<StudentModel>> viewenroll(long userid) {
			List<StudentModel> student= studentRepository.getEnrollCourse(userid);
			return new ResponseEntity<>( student,HttpStatus.OK);
		}
}
