package ru.fcpsr.portaldomainsport.controllers.web;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import ru.fcpsr.portaldomainsport.model.Student;

import java.util.List;

@Controller
public class StudentsController {
    @ResponseBody
    @GetMapping("/students")
    public String getStudents() {
        String a = Student.builder().lastName("asds").firstName("jhg").build().toString();
        return a;
    }
}
