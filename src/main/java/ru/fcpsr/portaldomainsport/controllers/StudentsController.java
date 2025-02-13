package ru.fcpsr.portaldomainsport.controllers;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import ru.fcpsr.portaldomainsport.model.KotlinStudent;
import ru.fcpsr.portaldomainsport.service.StudentService;

import java.util.List;

@RestController
@AllArgsConstructor
public class StudentsController {

    private final StudentService service;


    @GetMapping("/students-get")
    public List<KotlinStudent> students() {
        return service.getKotlinStudent();
    }


    @PostMapping("/students-save")
    public KotlinStudent saveStudent(@RequestBody KotlinStudent student) {
        return service.saveStudent(student);
    }

    @GetMapping("/students-getbyname")
    public List<KotlinStudent> studentsByName(@RequestParam String name) {
        return service.getStudentsByName(name);
    }
}
