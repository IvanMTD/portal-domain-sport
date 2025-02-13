package ru.fcpsr.portaldomainsport;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import ru.fcpsr.portaldomainsport.model.Student;

@SpringBootApplication
@EnableJpaRepositories(basePackages = "ru.fcpsr.portaldomainsport.repository")
public class PortalDomainSportApplication {

    public static void main(String[] args) {
        SpringApplication.run(PortalDomainSportApplication.class, args);
        Student student = new Student("name","name");
    }

}
