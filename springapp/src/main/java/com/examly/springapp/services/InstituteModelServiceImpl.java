package com.examly.springapp.services;

import java.util.List;

import com.examly.springapp.models.InstituteModel;
import com.examly.springapp.repositories.InstituteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.examly.springapp.exceptions.ResourceNotFoundException;

@Service
public class InstituteModelServiceImpl implements InstituteModelService{
	
	@Autowired
	private InstituteRepository instituteRepository;
	
	//Add Institute
	@Override
	public String addInstitute(InstituteModel instituteModel) {
		instituteRepository.save(instituteModel);
		return "Academy added successfully !! ";
	}
	
	//View Institutes
	@Override
	public List<InstituteModel> ViewInstituteModelList()
	{
		return (List<InstituteModel>) instituteRepository.findAll(); 
	}
	
	//View Institute by Id
	public ResponseEntity<InstituteModel> ViewInstituteModelById(Long instituteId)
	{
		InstituteModel institutemodel = instituteRepository.findById(instituteId)
				.orElseThrow(()-> new ResourceNotFoundException("No Institute found with ID "+instituteId));
		return ResponseEntity.ok(institutemodel);
	}
	
	//Edit Institutes
	@Override
	public InstituteModel editInstituteModel(Long instituteId , InstituteModel instituteModel)
	{
		InstituteModel existingInstituteModel = this.instituteRepository.findById(instituteId)
		.orElseThrow(()-> new ResourceNotFoundException("No Academy found with Id "+instituteId));
		existingInstituteModel.setInstituteName(instituteModel.getInstituteName());
		existingInstituteModel.setInstituteDescription(instituteModel.getInstituteDescription());
		existingInstituteModel.setInstituteAddress(instituteModel.getInstituteAddress());
		existingInstituteModel.setEmail(instituteModel.getEmail());
		existingInstituteModel.setMobile(instituteModel.getMobile());
		existingInstituteModel.setImg_url(instituteModel.getImg_url());
		return this.instituteRepository.save(existingInstituteModel);
	}
	
	//Delete Institutes
	@Override
	public ResponseEntity<HttpStatus> deleteInstituteModel(Long instituteId) {
		InstituteModel instituteModel = instituteRepository.findById(instituteId)
				.orElseThrow(()-> new ResourceNotFoundException("No Academy found with Id "+instituteId));
		instituteRepository.delete(instituteModel);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
}

