package com.examly.springapp.models;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "student")
public class StudentModel {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long admissionid;
	private Long studentid;
	private String Studentname;
	private String fathersname;
	private String mothersname;
	private String email;
	private String gender;
	private String state;
	private String nationality;
	private String phonenumber;
	private String address;
	private String pincode;
	
	
	@ManyToMany(fetch = FetchType.EAGER)
	@JoinTable(name = "STUDENT_COURSE", 
		joinColumns = @JoinColumn(name="STUDENT_ID"), 
		inverseJoinColumns = @JoinColumn(name = "COURSE_ID"))
	private List<CourseModel> courses = new ArrayList<>();


	@OneToOne(cascade = {CascadeType.ALL},fetch = FetchType.EAGER)
	@JoinColumn(name="user_id")
	@JsonIgnore
	private User users;


	public Long getAdmissionid() {
		return admissionid;
	}


	public void setAdmissionid(Long admissionid) {
		this.admissionid = admissionid;
	}


	public Long getStudentid() {
		return studentid;
	}


	public void setStudentid(Long studentid) {
		studentid = studentid;
	}


	public String getStudentname() {
		return Studentname;
	}


	public void setStudentname(String studentname) {
		Studentname = studentname;
	}


	public String getFathersname() {
		return fathersname;
	}


	public void setFathersname(String fathersname) {
		this.fathersname = fathersname;
	}


	public String getMothersname() {
		return mothersname;
	}


	public void setMothersname(String mothersname) {
		this.mothersname = mothersname;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getGender() {
		return gender;
	}


	public void setGender(String gender) {
		this.gender = gender;
	}


	public String getState() {
		return state;
	}


	public void setState(String state) {
		this.state = state;
	}


	public String getNationality() {
		return nationality;
	}


	public void setNationality(String nationality) {
		this.nationality = nationality;
	}


	public String getPincode() {
		return pincode;
	}


	public void setPincode(String pincode) {
		this.pincode = pincode;
	}


	public String getPhonenumber() {
		return phonenumber;
	}


	public void setPhonenumber(String phonenumber) {
		this.phonenumber = phonenumber;
	}


	public String getAddress() {
		return address;
	}


	public void setAddress(String address) {
		this.address = address;
	}


	public List<CourseModel> getCourses() {
		return courses;
	}


	public void setCourses(List<CourseModel> courses) {
		this.courses = courses;
	}


	public User getUsers() {
		return users;
	}


	public void setUsers(User users) {
		this.users = users;
	}


	public StudentModel(Long studentid, String studentname, String fathersname, String mothersname, String email,

			String gender, String state, String nationality,String pincode, String phonenumber, String address ) {

		
		super();
		this.studentid = studentid;
		this.Studentname = studentname;
		this.fathersname = fathersname;
		this.mothersname = mothersname;
		this.email = email;
		this.gender = gender;
		this.state = state;
		this.nationality = nationality;
		this.pincode = pincode;
		this.phonenumber = phonenumber;
		this.address = address;		

	}
	
	public StudentModel() {
		super();
	}
	
}
