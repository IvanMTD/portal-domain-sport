package ru.fcpsr.portaldomainsport.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.fcpsr.portaldomainsport.model.KotlinStudent;
import java.util.List;

@Repository
public interface StudentRepository extends JpaRepository<KotlinStudent, Long> {
    List<KotlinStudent> findByFnContainingIgnoreCase(String name);
    KotlinStudent findBySn(String sn);
}

