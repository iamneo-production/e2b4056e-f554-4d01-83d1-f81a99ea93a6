package com.examly.springapp.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.examly.springapp.models.CourseModel;

@Repository
public interface CourseRepository extends JpaRepository<CourseModel, Long>{
	
	@Query(value ="select * from courses c  where c.institutes_id = ?1",nativeQuery = true)
	List<CourseModel> findByInstitutesId(Long institutesId);
	//CourseModel findById(Long id);

}
