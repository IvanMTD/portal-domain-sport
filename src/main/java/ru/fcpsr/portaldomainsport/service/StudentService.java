package ru.fcpsr.portaldomainsport.service;

import ru.fcpsr.portaldomainsport.model.KotlinStudent;

import java.util.List;


public interface StudentService {
    List<KotlinStudent> getKotlinStudent();
    KotlinStudent saveStudent(KotlinStudent student);
    List<KotlinStudent> getStudentsByName(String name);
}
