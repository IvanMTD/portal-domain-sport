package ru.fcpsr.portaldomainsport.repository;

import org.springframework.stereotype.Repository;
import ru.fcpsr.portaldomainsport.model.KotlinStudent;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

/*@Repository
public class InMemoryStudentDao {
    private final List<KotlinStudent> STUDENTS = new ArrayList<>();

    public List<KotlinStudent> getKotlinStudents() {
        return STUDENTS;
    }

    public KotlinStudent saveStudent(KotlinStudent student) {
        STUDENTS.add(student);
        return student;
    }

    public List<KotlinStudent> getKotlinStudentsByName(String name) {
        return STUDENTS.stream()
                .filter(student -> student.getFn().toLowerCase().contains(name.toLowerCase()))
                .collect(Collectors.toList());
    }
}*/
