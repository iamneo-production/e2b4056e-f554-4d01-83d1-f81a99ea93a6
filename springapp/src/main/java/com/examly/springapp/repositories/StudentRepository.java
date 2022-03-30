
package com.examly.springapp.repositories;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.examly.springapp.models.StudentModel;

public interface StudentRepository extends JpaRepository<StudentModel, Long>{
	@Query(value ="select count(s.user_id) from student s  where s.user_id = ?1",nativeQuery = true)
	List<Long> getUserId(@Param("id")long l);
	
	@Query(value ="select studentid from student s  where s.user_id = ?1",nativeQuery = true)
	List<Long> getStudentId(@Param("id")long id);
	
	
	@Query(value ="select * from student s  where s.user_id = ?1",nativeQuery = true)
	List<StudentModel> getEnrollCourse(@Param("userid")long userid);
	
	@Transactional
	Long deleteByStudentid(Long Studentid);
}

