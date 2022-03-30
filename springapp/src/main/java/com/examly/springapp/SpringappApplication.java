package com.examly.springapp;
import javax.annotation.PostConstruct;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.beans.factory.annotation.Autowired;

import com.examly.springapp.models.ERole;
import com.examly.springapp.models.Role;
import com.examly.springapp.repositories.RoleRepository;
@SpringBootApplication
public class SpringappApplication {
	@Autowired 
	RoleRepository roleRepository;
	public static void main(String[] args) {
		SpringApplication.run(SpringappApplication.class, args);
	}

	@PostConstruct 
	public void addroles() {
		Role user = new Role(1,ERole.ROLE_USER);
		Role admin = new Role(2,ERole.ROLE_ADMIN);
		roleRepository.save(user);
		roleRepository.save(admin);
	}
}

