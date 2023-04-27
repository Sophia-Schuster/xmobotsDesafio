package com.arjuncodes.studentsystem.service;

import com.arjuncodes.studentsystem.model.Aerodromes;
import com.arjuncodes.studentsystem.repository.AerodromesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AerodromesServiceImpl implements AerodromesService{
    @Autowired
    private AerodromesRepository aerodromesRepository;

    @Override
    public Aerodromes saveAerodromes(Aerodromes aerodromes) {
        return aerodromesRepository.save(aerodromes);
    }

    @Override
    public List<Aerodromes> getAllAerodromes() {
        return aerodromesRepository.findAll();
    }
}
