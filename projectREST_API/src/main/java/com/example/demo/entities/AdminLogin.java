package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="admin")
public class AdminLogin {
	
	 @Id
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
	 private int adminid;
	 
	 @Column(length = 255, nullable = false )
	 private String name;
	 
	 @Column(length = 45, nullable = false )
	 private String emailid;
	 
	 @Column (length = 20, nullable = false )
	 private String contact;
	 
	 @Column (length = 50, nullable = false )
	 private String state;
	 
	 @Column(length = 50, nullable = false )
	 private String city;
	 
	 @Column (length = 10, nullable = false )
	 private String pincode;
	 
	 @Column (length = 50, nullable = false )
	 private String designation;
	 
	 @Column 
	 private String password;

	public AdminLogin(int adminid, String name, String emailid, String contact, String state, String city,
			String pincode, String designation, String password) {
		super();
		this.adminid = adminid;
		this.name = name;
		this.emailid = emailid;
		this.contact = contact;
		this.state = state;
		this.city = city;
		this.pincode = pincode;
		this.designation = designation;
		this.password = password;
	}

	public AdminLogin() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getAdminid() {
		return adminid;
	}

	public void setAdminid(int adminid) {
		this.adminid = adminid;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmailid() {
		return emailid;
	}

	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}

	public String getContact() {
		return contact;
	}

	public void setContact(String contact) {
		this.contact = contact;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getPincode() {
		return pincode;
	}

	public void setPincode(String pincode) {
		this.pincode = pincode;
	}

	public String getDesignation() {
		return designation;
	}

	public void setDesignation(String designation) {
		this.designation = designation;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	 
	 

}
