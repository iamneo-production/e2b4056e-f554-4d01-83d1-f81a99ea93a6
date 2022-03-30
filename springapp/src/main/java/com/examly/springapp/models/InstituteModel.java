package com.examly.springapp.models;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="institutes")

public class InstituteModel {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long instituteId;
	
	@Column(name = "institute_name")
	private String instituteName;
	
	@Column(name = "institute_desc")
	private String instituteDescription;
	
	@Column(name = "institute_address")
	private String instituteAddress;
	private String mobile;
	private String email;
	private String img_url;
	
	@OneToMany(mappedBy = "institute" , cascade = {
		CascadeType.ALL
	})
	List<CourseModel> courses;
	
	public InstituteModel() {

		
	}
	
	public InstituteModel(Long instituteId, String instituteName, String instituteDescription, String instituteAddress,
			String mobile, String email, String img_url) {
		this.instituteId = instituteId;
		this.instituteName = instituteName;
		this.instituteDescription = instituteDescription;
		this.instituteAddress = instituteAddress;
		this.mobile = mobile;
		this.email = email;
		this.img_url = img_url;
	}

	public Long getInstituteId() {
		return instituteId;
	}
	public void setInstituteId(Long instituteId) {
		this.instituteId = instituteId;
	}
	public String getInstituteName() {
		return instituteName;
	}
	public void setInstituteName(String instituteName) {
		this.instituteName = instituteName;
	}
	public String getInstituteDescription() {
		return instituteDescription;
	}
	public void setInstituteDescription(String instituteDescription) {
		this.instituteDescription = instituteDescription;
	}
	public String getInstituteAddress() {
		return instituteAddress;
	}
	public void setInstituteAddress(String instituteAddress) {
		this.instituteAddress = instituteAddress;
	}
	public String getMobile() {
		return mobile;
	}
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getImg_url() {
		return img_url;
	}

	public void setImg_url(String img_url) {
		this.img_url = img_url;
	}
	public List<CourseModel> getCourses() {
		return courses;
	}

	public void setCourses(List<CourseModel> courses) {
		this.courses = courses;
	}
}
