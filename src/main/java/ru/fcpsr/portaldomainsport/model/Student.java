package ru.fcpsr.portaldomainsport.model;

import lombok.*;
import lombok.experimental.NonFinal;

@Data
@RequiredArgsConstructor
//@Builder
public class Student {
    @NonNull
    private String firstName;
    @NonNull
    private String lastName;
}
