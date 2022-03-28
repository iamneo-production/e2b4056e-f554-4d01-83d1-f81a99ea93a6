package com.examly.springapp.services;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.examly.springapp.models.InstituteModel;



public interface InstituteModelService {
	String addInstitute(InstituteModel instituteModel);
	
	//Fetch Institute
	List<InstituteModel> ViewInstituteModelList();
	
	//Fetch Institute by Id
	ResponseEntity<InstituteModel> ViewInstituteModelById(Long institutesId);
	
	//Update Institute
	InstituteModel editInstituteModel(Long instituteId , InstituteModel instituteModel);
	
	//Delete Institute
	ResponseEntity<HttpStatus> deleteInstituteModel(Long instituteId);

}
