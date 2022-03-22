package com.examly.springapp.repositories;

import java.util.Optional;

import org.springframework.stereotype.Repository;

import com.examly.springapp.models.ERole;
import com.examly.springapp.models.Role;


@Repository
public interface RoleRepository {
	Optional<Role> findByName(ERole name);
}
