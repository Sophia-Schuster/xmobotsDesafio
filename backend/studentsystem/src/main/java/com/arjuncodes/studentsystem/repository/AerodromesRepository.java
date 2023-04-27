package com.arjuncodes.studentsystem.repository;

import com.arjuncodes.studentsystem.model.Aerodromes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AerodromesRepository extends JpaRepository<Aerodromes, Integer> {
}
