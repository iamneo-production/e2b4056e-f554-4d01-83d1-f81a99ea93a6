package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import com.example.demo.models.CourseModel;
import com.example.demo.models.StudentModel;
import com.example.demo.models.User;
import com.example.demo.payload.Response.MessageResponse;
import com.example.demo.payload.request.StudentRequest;
import com.example.demo.repository.CourseRepository;
import com.example.demo.repository.StudentRepository;
import com.example.demo.repository.UserRepository;

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
			
			//System.out.println(studentRequest.getUserid());
			
			List<Long> user_id = studentRepository.getUserId(studentRequest.getUserid());
			
				if(user_id.get(0) > 0)
				{
					//System.out.println("if");
					
				List<Long> studentid = studentRepository.getStudentId(studentRequest.getUserid());
				Long student_id=studentid.get(0);
				StudentModel student = new StudentModel( student_id,
						studentRequest.getFirstName(), 
						studentRequest.getFatherName(),
						studentRequest.getMotherName(), 
						studentRequest.getAge(),
						studentRequest.getEmail(), 
						studentRequest.getGender(), 
						studentRequest.getState(), 
						studentRequest.getNationality(), 
						studentRequest.getPhonenumber(), 
						studentRequest.getAddress(),
						studentRequest.getPincode());
				
	
				CourseModel courses=courseRepository.getById(studentRequest.getCourse_id());
				student.getCourses().add(courses);
				User u=userRepository.getById((long) studentRequest.getUserid());
				
				student.setUsers(u);
				System.out.println(student.toString());
				studentRepository.save(student);
			
				return new ResponseEntity<>( student,HttpStatus.OK);
				}
				else if(user_id.get(0) == 0) {
				//	System.out.println("else if");
				      Long random_int = (long)Math.floor(Math.random()*(2999-1000+1)+1000);
	
				       StudentModel student=new StudentModel( 
				    		    random_int,
				    		   	studentRequest.getFirstName(), 
				    		   	studentRequest.getFatherName(),
								studentRequest.getMotherName(), 
								studentRequest.getAge(),
								studentRequest.getEmail(), 
								studentRequest.getGender(), 
								studentRequest.getState(), 
								studentRequest.getNationality(), 
								studentRequest.getPhonenumber(), 
								studentRequest.getAddress(),
								studentRequest.getPincode());
						CourseModel courses=courseRepository.getById(studentRequest.getCourse_id());
					student.getCourses().add(courses);
				      
				      User u=userRepository.getById((long) studentRequest.getUserid());
				student.setUsers(u);
						
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
