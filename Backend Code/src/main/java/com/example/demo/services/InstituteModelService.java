package com.example.demo.services;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.example.demo.models.InstituteModel;

public interface InstituteModelService {
		//Add Institute
		String addInstitute(InstituteModel instituteModel);
		
		//Fetch Institute
		List<InstituteModel> ViewInstituteModelList();
		
		//Fetch Institute by Id
		ResponseEntity<InstituteModel> ViewInstituteModelById(Long instituteId);
		
		//Update Institute
		InstituteModel editInstituteModel(Long instituteId , InstituteModel instituteModel);
		
		//Delete Institute
		ResponseEntity<HttpStatus> deleteInstituteModel(Long instituteId);
}
