package com.examly.springapp.repositories;

import java.util.Optional;

import org.springframework.stereotype.Repository;

import com.examly.springapp.models.ERole;
import com.examly.springapp.models.Role;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface RoleRepository extends JpaRepository<Role,Long> {
	Optional<Role> findByName(ERole name);
}
