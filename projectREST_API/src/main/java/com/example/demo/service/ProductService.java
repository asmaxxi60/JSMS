package com.example.demo.service;

import java.io.IOException;
import java.util.Base64;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.entities.Product;
import com.example.demo.repositories.ProductRepository;

@Service
public class ProductService {
	
	@Autowired
	ProductRepository prepo;
	
	public List<Product> getAll()
	{
		return prepo.findAll();
	}
	
	public void saveProductToDB(MultipartFile file, String pname, String description, int qty, float weight, String color, float purity)
	{
		
		//String fileName = org.springframework.util.StringUtils.cleanPath(file.getOriginalFilename());
		
		String binaryCode= null;
		try {
			binaryCode = Base64.getEncoder().encodeToString(file.getBytes());
		} catch (IOException e) {
			e.printStackTrace();
		}
		Product p = new Product(pname, description, qty, weight, color, purity, binaryCode);
		
		prepo.save(p);
	}
}
