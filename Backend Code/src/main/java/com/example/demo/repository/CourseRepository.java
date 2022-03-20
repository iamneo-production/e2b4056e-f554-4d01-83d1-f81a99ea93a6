package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.example.demo.models.CourseModel;

@Repository
public interface CourseRepository extends JpaRepository<CourseModel, Long>{
	
	@Query(value ="select * from courses c  where c.institutes_id = ?1",nativeQuery = true)
	List<CourseModel> findByInstitutesId(Long institutesId);
}
