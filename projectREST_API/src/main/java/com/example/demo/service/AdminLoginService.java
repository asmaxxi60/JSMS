package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.AdminLogin;
import com.example.demo.repositories.AdminLoginRepository;

@Service
public class AdminLoginService {

	@Autowired
	AdminLoginRepository adminloginRepo;
	
	public List<AdminLogin> getAll()
	{
		return adminloginRepo.findAll();
	}
	
	public Optional<AdminLogin> getbyid(int id)
	{
		return adminloginRepo.findById(id);
	
}
}