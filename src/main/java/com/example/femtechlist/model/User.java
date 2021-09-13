package com.example.femtechlist.model;

import javax.persistence.*;

@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;
    @Column(name = "student_name")
    private String studentName;
    @Column(name = "student_surname")
    private String studentSurname;
    @Column(name = "student_age")
    private String studentAge;
    @Column(name = "country_origin")
    private String countryOrigin;
    @Column(name = "educational_level")
    private String educationalLevel;
    @Column(name = "student_address")
    private String studentAddress;
    @Column(name = "student_promotion")
    private String studentPromotion;
    @Column (name ="email_address")
    private String emailAddress;

    public User(String studentName, String studentSurname, String studentAge, String countryOrigin, String educationalLevel, String studentAddress, String studentPromotion, String emailAddress) {
        this.studentName = studentName;
        this.studentSurname = studentSurname;
        this.studentAge = studentAge;
        this.countryOrigin = countryOrigin;
        this.educationalLevel = educationalLevel;
        this.studentAddress = studentAddress;
        this.studentPromotion = studentPromotion;
        this.emailAddress =  emailAddress;
    }


    public User() {
    }


    public Long getId() { return id; }

    public void setId(Long id) {
        this.id = id;
    }

    public String getStudentName() {
        return studentName;
    }

    public void setStudentName(String studentName) {
        this.studentName = studentName;
    }

    public String getStudentSurname() {
        return studentSurname;
    }

    public void setStudentSurname(String studentSurname) {
        this.studentSurname = studentSurname;
    }

    public String getStudentAge() {
        return studentAge;
    }

    public void setStudentAge(String studentAge) {
        this.studentAge = studentAge;
    }

    public String getCountryOrigin() {
        return countryOrigin;
    }

    public void setCountryOrigin(String countryOrigin) {
        this.countryOrigin = countryOrigin;
    }

    public String getEducationalLevel() {
        return educationalLevel;
    }

    public void setEducationalLevel(String educationalLevel) {
        this.educationalLevel = educationalLevel;
    }

    public String getStudentAddress() {
        return studentAddress;
    }

    public void setStudentAddress(String studentAddress) {
        this.studentAddress = studentAddress;
    }

    public String getStudentPromotion() {
        return studentPromotion;
    }

    public void setStudentPromotion(String studentPromotion) {
        this.studentPromotion = studentPromotion;
    }

    public String getEmailAddress() {
        return emailAddress;
    }

    public void setEmailAddress(String emailAddress) {
        this.emailAddress= emailAddress;
    }

}
