
package com.examly.springapp.repositories;

import com.examly.springapp.models.CourseModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CourseRepository extends JpaRepository<CourseModel, Long>{
	
	@Query(value ="select * from courses c  where c.institutes_id = ?1",nativeQuery = true)
	List<CourseModel> findByInstitutesId(Long institutesId);
}

