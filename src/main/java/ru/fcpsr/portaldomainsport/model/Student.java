package ru.fcpsr.portaldomainsport.model;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class Student {
    private String firstName;
    private String lastName;
}
