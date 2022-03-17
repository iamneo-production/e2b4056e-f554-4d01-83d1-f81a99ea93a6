package com.example.demo.controllers;

import java.util.List;

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

import com.example.demo.models.InstituteModel;
import com.example.demo.repository.InstituteRepository;
import com.example.demo.services.InstituteModelService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AdminController {
	@Autowired private InstituteModelService instituteModelService;

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

	@PreAuthorize("hasRole('ROLE_ADMIN')")
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

	@PreAuthorize("hasRole('ROLE_ADMIN')")
	@DeleteMapping("/admin/deleteInstitute/{instituteId}")
	public ResponseEntity<HttpStatus> deleteInstituteModel(@PathVariable Long instituteId) {
		return instituteModelService.deleteInstituteModel(instituteId);
	}
}
