package ru.fcpsr.portaldomainsport.controllers.web;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {
    private static final Logger log = LoggerFactory.getLogger(HomeController.class);
    @GetMapping("/")
    public String home(Model model) {
        log.info("Home page");
        model.addAttribute("title", "Главная");
        model.addAttribute("page","home");
        return "index";
    }
}
