package com.app.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="users")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class User extends BaseEntity {

    @Column(name = "email", nullable = false, unique = true)
    private String email;

    @Column(name="first_name", length=30, nullable = false)
    private String firstName;

    @Column(name="last_name", length=30, nullable = false)
    private String lastName;

    @Column(name = "password", nullable = false)
    private String password;

    @Column(name="phone_no", length = 13, unique = true, nullable = false)
    private String phoneNo;

    @Enumerated(EnumType.STRING)
    @Column(length = 20, columnDefinition = "varchar(25) default 'ROLE_CUSTOMER'")
    private UserRole role;

    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore
    private Address address;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true )
    @JsonIgnore
    private List<Orders> orders = new ArrayList<>();
}
