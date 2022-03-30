
package com.examly.springapp.controllers;

import java.util.List;

import javax.persistence.FetchType;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.examly.springapp.models.CourseModel;
import com.examly.springapp.models.InstituteModel;
import com.examly.springapp.models.StudentModel;
import com.examly.springapp.payload.request.StudentRequest;
import com.examly.springapp.services.CourseModelService;
import com.examly.springapp.services.InstituteModelService;
import com.examly.springapp.services.StudentService;
import com.examly.springapp.services.UserServiceImpl;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AdminController {
	@Autowired private InstituteModelService instituteModelService;
	@Autowired private CourseModelService courseModelService;
	@Autowired private UserServiceImpl userservice;
	@Autowired private StudentService studentservice;

	@PreAuthorize("hasRole('ROLE_ADMIN')")
	@PostMapping("/admin/addInstitutes")
	public String addInstitute(@RequestBody InstituteModel instituteModel) {
		return instituteModelService.addInstitute(instituteModel);
	}

	@PreAuthorize("hasRole('ROLE_USER') or hasRole('ROLE_ADMIN')")
	@GetMapping("/admin/viewInstitutes")
	public List<InstituteModel> ViewInstituteModelList()
	{
		return instituteModelService.ViewInstituteModelList();
	}

	//@PreAuthorize("hasRole('ROLE_ADMIN')")
	@GetMapping("/admin/viewInstitutes/{instituteId}")
	public ResponseEntity<InstituteModel> ViewInstituteModelById(@PathVariable long instituteId)
	{
		return instituteModelService.ViewInstituteModelById(instituteId);
	}

	@PreAuthorize("hasRole('ROLE_ADMIN')")
	@PutMapping("/admin/editInstitute/{instituteId}")
	public InstituteModel editInstituteModel(@PathVariable Long instituteId,@RequestBody InstituteModel instituteModel) {
		return instituteModelService.editInstituteModel(instituteId,instituteModel);
	}

	//@PreAuthorize("hasRole('ROLE_ADMIN')")
	@DeleteMapping("/admin/deleteInstitute/{instituteId}")
	public ResponseEntity<HttpStatus> deleteInstituteModel(@PathVariable Long instituteId) {
		return instituteModelService.deleteInstituteModel(instituteId);
	}
	
	//*************************Courses*******************
	
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	@GetMapping("/admin/institutes/{institutesId}/courses")
	public ResponseEntity<List<CourseModel>> viewAllCoursesInstitute(@PathVariable (value = "institutesId") Long institutesId){
		return courseModelService.viewAllCoursesInstitute(institutesId);
	}
	
	//@PreAuthorize("hasRole('ROLE_ADMIN')")
	@GetMapping("/admin/view-courses")
	public ResponseEntity<List<CourseModel>> viewAllCourses(){
		return courseModelService.viewAllCourses();
	}
	
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	@GetMapping("/admin/view-course/{courseId}")
	public ResponseEntity<CourseModel> viewCourseById(@PathVariable Long courseId){
		return courseModelService.viewCourseById(courseId);
	}
	
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	@PostMapping("/admin/institutes/{institutesId}/create-course")
	public ResponseEntity<CourseModel> addCourseModel(@PathVariable (value = "institutesId") Long institutesId, @RequestBody CourseModel course){
		return courseModelService.addCourseModel(institutesId, course);
	}
	
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	@PutMapping("/admin/edit-course/{courseId}")
	public ResponseEntity<CourseModel> editCourseModel(@PathVariable (value = "courseId") Long courseId , @RequestBody CourseModel course){
		return courseModelService.editCourseModel(courseId, course);
	}
	
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	@DeleteMapping("/admin/delete-course/{courseId}")
	public ResponseEntity<HttpStatus> deleteCourseModel(@PathVariable(value = "courseId") Long courseId){
		return courseModelService.deleteCourseModel(courseId);
	}
	
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	@GetMapping("/admin/viewStudents")
	public ResponseEntity<List<StudentModel>> viewAllStudents(){
		return studentservice.viewAllStudents();
	}
	
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	@DeleteMapping("/admin/deleteStudent/{Studentid}")
	public ResponseEntity<HttpStatus> deleteStudentModel(@PathVariable Long Studentid){
		return studentservice.deleteStudentModel(Studentid);
	}
	
	
	//User Side
	
	@PostMapping("/addAdmission")
	public ResponseEntity<?> enroll(  @Valid @RequestBody  StudentRequest studentRequest){
		return  userservice.enroll(studentRequest);
	}
	
	@GetMapping("/viewenrolledcourses/{userid}")
	public ResponseEntity<List<StudentModel>> displayenrollcourse(@PathVariable("userid") Integer userid) throws Exception{
		return  userservice.viewenroll(userid);
	}
}

