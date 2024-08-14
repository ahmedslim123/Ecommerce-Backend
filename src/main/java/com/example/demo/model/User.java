package com.example.demo.model;

import jakarta.persistence.*;
import lombok.Getter;

@Entity
@Table(name = "USER")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private int id;

    @Column(name = "FIRSTNAME")
    private String firstName;

    @Column(name = "SECONDNAME")
    private String secondName;

    @Column(name = "EMAIL" , unique = true)
    private String email;

    @Getter
    @Column(name = "PASSWORD")
    private String password;

    @Column(name = "ADDRESS")
    private String address;

    @Getter
    @Column(name = "REGION")
    private String region;

    @Getter
    @Column(name = "CITY")
    private String city;

    @Column(name = "ZIPCODE")
    private String zipcode;

    public User() {
    }

    public User(int id, String firstName, String secondName, String email, String password, String address, String region, String city, String zipcode) {
        super();
        this.id = id;
        this.firstName = firstName;
        this.secondName = secondName;
        this.email = email;
        this.password = password;
        this.address = address;
        this.region = region;
        this.city = city;
        this.zipcode = zipcode;
    }

    // Getters and Setters
    public int getId() {
        return this.id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFirstName() {
        return this.firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getSecondName() {
        return this.secondName;
    }

    public void setSecondName(String secondName) {
        this.secondName = secondName;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
    public String getPassword() {
        return password;
    }


    public void setPassword(String password) {
        this.password = password;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }


    public String getRegion() {
        return this.region;
    }
    public void setRegion(String region) {
        this.region = region;
    }
    public void setCity(String city) {
        this.city = city;
    }

    public String getCity() {
        return this.city;
    }

    public String getZipCode() {
        return this.zipcode;
    }

    public void setZipCode(String zipcode) {
        this.zipcode = zipcode;
    }
}
