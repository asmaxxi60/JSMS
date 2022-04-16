package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.entities.Product;
import com.example.demo.service.ProductService;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ProductController {
	
	@Autowired
	ProductService pservice;
	
	@GetMapping("/allproduct")
	public List<Product> getAll()
	{
		return pservice.getAll();
	}
	
	@PostMapping("/saveProduct")
	public void saveProduct(@RequestParam("file") MultipartFile file, 
			@RequestParam("pname") String pname,
			@RequestParam("qty") int qty,
			@RequestParam("weight") float weight,
			@RequestParam("type") String type,
			@RequestParam("discription") String desp,
			@RequestParam("purity") float purity
			)
	{
		pservice.saveProductToDB(file, pname, desp, qty, weight, type, purity);
		//return "redirect:/allproduct";
	}

}
