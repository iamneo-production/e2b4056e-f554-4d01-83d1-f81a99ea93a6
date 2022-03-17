package com.example.demo;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.example.demo.models.ERole;
import com.example.demo.models.Role;
import com.example.demo.repository.RoleRepository;

@SpringBootApplication
public class CricketAcademy1Application {
	
	@Autowired 
	RoleRepository roleRepository;
	
	public static void main(String[] args) {
		SpringApplication.run(CricketAcademy1Application.class, args);
	} 
	
	@PostConstruct 
	public void addroles() {
		Role user = new Role(1,ERole.ROLE_USER);
		Role admin = new Role(2,ERole.ROLE_ADMIN);
		roleRepository.save(user);
		roleRepository.save(admin);
	}
}
