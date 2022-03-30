
package com.examly.springapp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.examly.springapp.models.InstituteModel;

@Repository
public interface InstituteRepository extends JpaRepository<InstituteModel,Long> {

}


