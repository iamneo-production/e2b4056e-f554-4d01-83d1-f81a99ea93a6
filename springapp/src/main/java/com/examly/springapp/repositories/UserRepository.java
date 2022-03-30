package com.examly.springapp.repositories;

import java.util.Optional;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.examly.springapp.models.User;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {
	Optional<User> findByUsername(String username);
	Boolean existsByUsername(String username);
	Boolean existsByEmail(String email);
	Boolean existsByMobno(String mobno);
	
}
