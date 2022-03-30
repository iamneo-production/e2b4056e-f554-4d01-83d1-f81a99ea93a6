package com.examly.springapp.services;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.examly.springapp.models.StudentModel;
import com.examly.springapp.payload.request.StudentRequest;

@Service
public interface UserService {
	ResponseEntity<?> enroll(StudentRequest studentRequest);
	ResponseEntity<List<StudentModel>> viewenroll( long userid);
}
