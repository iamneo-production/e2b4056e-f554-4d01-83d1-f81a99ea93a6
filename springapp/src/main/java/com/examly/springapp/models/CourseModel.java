package com.examly.springapp.models;


import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="courses")
public class CourseModel {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long courseId;
	private String courseName;
	private String courseDuration;
	private String courseDescription;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="institutes_id" , nullable = false )
	/*@OnDelete(action = OnDeleteAction.CASCADE)*/
	@JsonIgnore
	private InstituteModel institute;
	
	@ManyToMany(mappedBy = "courses")
	@JsonIgnore
	private List<StudentModel> students = new ArrayList<>();


	public CourseModel() {
	}
	public CourseModel(Long courseId, String courseName, String courseDuration, String courseDescription) {
		this.courseId = courseId;
		this.courseName = courseName;
		this.courseDuration = courseDuration;
		this.courseDescription = courseDescription;
	}
	

	public Long getCourseId() {
		return courseId;
	}
	public void setCourseId(Long courseId) {
		this.courseId = courseId;
	}
	public String getCourseName() {
		return courseName;
	}
	public void setCourseName(String courseName) {
		this.courseName = courseName;
	}
	public String getCourseDuration() {
		return courseDuration;
	}
	public void setCourseDuration(String courseDuration) {
		this.courseDuration = courseDuration;
	}
	public String getCourseDescription() {
		return courseDescription;
	}
	public void setCourseDescription(String courseDescription) {
		this.courseDescription = courseDescription;
	}
	public InstituteModel getInstitute() {
		return institute;
	}
	public void setInstitute(InstituteModel institute) {
		this.institute = institute;
	}
}
