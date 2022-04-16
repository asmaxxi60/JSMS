package com.example.demo;

import com.example.demo.entities.AdminLogin;

public class PasswordToken {
	
	private boolean success;
	private String name;
	private String designation;
	
	public PasswordToken() {
		super();
		// TODO Auto-generated constructor stub
	}
	public PasswordToken( boolean success, String name, String designation) {
		super();
		this.success = success;
		this.name = name;
		this.designation = designation;
	}
	
	
	public boolean isSuccess() {
		return success;
	}
	public void setSuccess(boolean success) {
		this.success = success;
	}
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDesignation() {
		return designation;
	}
	public void setDesignation(String designation) {
		this.designation = designation;
	}
	
	

	
	
	
	

}
