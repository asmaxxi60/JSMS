package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.demo.entities.Vendor;
import com.example.demo.repositories.VendorRepository;

@Service
public class VendorServices {
	@Autowired
	VendorRepository vrepo;
//	public List<Vendor> getAll(){
//		return vrepo.findAll();
//	}
//	public void savevendor(Vendor v)
//	{
//		 vrepo.save(v);
//	}
//	
//	public void del(int vendorid)   
//	{  
//		vrepo.deleteById(vendorid);  
//	}

}
