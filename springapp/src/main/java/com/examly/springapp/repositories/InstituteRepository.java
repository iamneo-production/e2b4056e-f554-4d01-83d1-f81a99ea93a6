package com.examly.springapp.repositories;

import com.examly.springapp.models.InstituteModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InstituteRepository extends JpaRepository<InstituteModel,Long> {

}
