package ru.fcpsr.portaldomainsport.controllers.web;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/event")
public class EventController {
    @GetMapping("/page")
    public String eventPage(Model model){
        model.addAttribute("title","Соревнование");
        model.addAttribute("page","event");
        return "index";
    }

    @GetMapping("/calendar")
    public String eventCalendar(Model model){
        model.addAttribute("title","Календарь");
        model.addAttribute("page","calendar");
        return "index";
    }
}
