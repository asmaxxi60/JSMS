package com.example.demo.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Vendor;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.repositories.VendorRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class VendorController {

	@Autowired
	
    VendorRepository vendorRepository;
	//VendorService empservice;
	// get all vendors
	@GetMapping("/vendors")
	public List<Vendor> getAllVendors(){
		return vendorRepository.findAll();
	}		
	
	// create vendor rest api
	@PostMapping("/vendors")
	public Vendor createVendor(@RequestBody Vendor vendor) {
		return vendorRepository.save(vendor);
	}
	
	// get vendor by id rest api
	@GetMapping("/vendors/{id}")
	public ResponseEntity<Vendor> getVendorById(@PathVariable Integer id) {
		Vendor vendor = vendorRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Vendor not exist with id :" + id));
		return ResponseEntity.ok(vendor);
	}
	
	// update vendor rest api
	
	@PostMapping("/vendors/{id}")
	public ResponseEntity<Vendor> updateVendor(@PathVariable Integer id, @RequestBody Vendor vendorDetails){
		Vendor vendor = vendorRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Vendor not exist with id :" + id));
		
		vendor.setFirstName(vendorDetails.getFirstName());
		vendor.setLastName(vendorDetails.getLastName());
		vendor.setEmailId(vendorDetails.getEmailId());
		vendor.setContact(vendorDetails.getContact());
		vendor.setCity(vendorDetails.getCity());
		vendor.setPincode(vendorDetails.getPincode());
		
		
		Vendor updatedVendor = vendorRepository.save(vendor);
		return ResponseEntity.ok(updatedVendor);
	}
	
	// delete vendor rest api
	@DeleteMapping("/vendors/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteVendor(@PathVariable Integer id){
		Vendor vendor = vendorRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Vendor not exist with id :" + id));
		
		vendorRepository.delete(vendor);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
//	@PutMapping("/vendor/{id}")
//	public Vendor updvendor(@PathVariable Integer id,@RequestBody Vendor vendor) {
//		System.out.println("hello");
//		System.out.println(id);
//	empservice.updatemp(vendor,id);
//		return vendor;
//	}
	
}
