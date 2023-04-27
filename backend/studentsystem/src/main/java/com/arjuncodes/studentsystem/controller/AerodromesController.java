package com.arjuncodes.studentsystem.controller;

import com.arjuncodes.studentsystem.model.Aerodromes;
import com.arjuncodes.studentsystem.service.AerodromesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/aerodromes")
@CrossOrigin
public class AerodromesController {
    @Autowired
    private AerodromesService aerodromesService;

    @PostMapping("/add")
    public String add(@RequestBody Aerodromes aerodromes){
        aerodromesService.saveAerodromes(aerodromes);
        return "New aerodrome is added";
    }
    @GetMapping("/getAll")
    public List<Aerodromes> getAllAerodromes(){
        return aerodromesService.getAllAerodromes();
    }
}
