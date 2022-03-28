package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.models.StudentModel;

public interface StudentRepository extends JpaRepository<StudentModel, Long>{
	@Query(value ="select count(s.user_id) from student s  where s.user_id = ?1",nativeQuery = true)
	List<Long> getUserId(@Param("id")long l);
	
	@Query(value ="select studentid from student s  where s.user_id = ?1",nativeQuery = true)
	List<Long> getStudentId(@Param("id")long id);
	
	
	@Query(value ="select * from Student s  where s.user_id = ?1",nativeQuery = true)
	List<StudentModel> getEnrollCourse(@Param("userid")long userid);
	
	Long deleteByStudentid(Long Studentid);
}
