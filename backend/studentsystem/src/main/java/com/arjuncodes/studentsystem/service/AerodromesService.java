package com.arjuncodes.studentsystem.service;

import com.arjuncodes.studentsystem.model.Aerodromes;

import java.util.List;

public interface AerodromesService {
    public Aerodromes saveAerodromes(Aerodromes aerodromes);
    public List<Aerodromes> getAllAerodromes();
}
