package com.example.demo.controllers;

import java.io.Console;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.LoginCredentials;
import com.example.demo.PasswordToken;
import com.example.demo.entities.AdminLogin;
import com.example.demo.service.AdminLoginService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class AdminloginController {
	
	@Autowired
	AdminLoginService adminloginService;
	
	@PostMapping("/signin")
	public PasswordToken checkLogin(@RequestBody LoginCredentials logincredentials)
	{
		boolean success=false;
		PasswordToken pt = null;
		ArrayList<AdminLogin> loginList =  (ArrayList<AdminLogin>) adminloginService.getAll();
		
		for (AdminLogin adminLogin : loginList) {
			if (logincredentials.getEmail().equals(adminLogin.getEmailid()) && logincredentials.getPwd().equals(adminLogin.getPassword()))
			{
				success=true;
				pt = new PasswordToken(success,adminLogin.getName(),adminLogin.getDesignation());
				break;
			}
			else {
				
			}
		}
		//PasswordToken pt = new PasswordToken(success,adminLogin.getName(),adminLogin.getDesignation());
		if(success==false)
			return pt = new PasswordToken(success,"","");
		else
			return pt;
		
		
//		
//		
//		boolean success=false;
//		ArrayList<AdminLogin> loginList =  (ArrayList<AdminLogin>) adminloginService.getAll();
//		for (AdminLogin adminLogin : loginList) {
//			if (logincredentials.getEmail().equals(adminLogin.getEmailid()) && logincredentials.getPwd().equals(adminLogin.getPassword()))
//			{
//				success=true;
//				
//				PasswordToken pt = new PasswordToken(success,adminLogin.getName(),adminLogin.getDesignation());
//				return pt;
//			}
//			else {
//				PasswordToken pt = new PasswordToken(success,"","");
//				return pt;
//			}
//		}
//		
//		return null;
	}
	
//	@PostMapping("/signin")
//	public PasswordToken checkLogin(@RequestParam("userEmail") String email, @RequestParam("password") String pwd)
//	{
//		boolean success=false;
//		PasswordToken pt = null;
//		int getId = 0;
//		ArrayList<AdminLogin> loginList =  (ArrayList<AdminLogin>) adminloginService.getAll();
//		
//		for (AdminLogin adminLogin : loginList) {
//			if (email.equals(adminLogin.getEmailid()) && pwd.equals(adminLogin.getPassword()))
//			{
//				success=true;
//				getId = adminLogin.getAdminid();
//				pt = new PasswordToken(success,adminLogin.getName(),adminLogin.getDesignation());
//				break;
//			}
//			else {
//				
//			}
//		}
//		//PasswordToken pt = new PasswordToken(success,adminLogin.getName(),adminLogin.getDesignation());
//		if(success==false)
//			return pt = new PasswordToken(success,"","");
//		else
//			return pt;
//	}
////	
	
    @GetMapping("/authUser")
	public Optional<AdminLogin> authUser(@RequestParam("adminid") int adminid)
	{
		return adminloginService.getbyid(adminid);
	}
	
}
