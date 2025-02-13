package ru.fcpsr.portaldomainsport.service.impl;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import ru.fcpsr.portaldomainsport.model.KotlinStudent;
import ru.fcpsr.portaldomainsport.repository.StudentRepository;
import ru.fcpsr.portaldomainsport.service.StudentService;

import java.util.List;

/*@Service
@AllArgsConstructor
public class InMemoryStudentService implements StudentService {

    private final InMemoryStudentDao repository;
    @Override
    public List<KotlinStudent> getKotlinStudent() {
        return repository.getKotlinStudents();
    }

    @Override
    public KotlinStudent saveStudent(KotlinStudent student) {
        return repository.saveStudent(student);
    }

    @Override
    public List<KotlinStudent> getStudentsByName(String name) {
        return repository.getKotlinStudentsByName(name);
    }
}*/

@Service
@AllArgsConstructor
public class InMemoryStudentService implements StudentService {

    private final StudentRepository repository;

    @Override
    public List<KotlinStudent> getKotlinStudent() {
        return repository.findAll();
    }

    @Override
    public KotlinStudent saveStudent(KotlinStudent student) {
        return repository.save(student);
    }

    @Override
    public List<KotlinStudent> getStudentsByName(String name) {
        return repository.findByFnContainingIgnoreCase(name);
    }
}