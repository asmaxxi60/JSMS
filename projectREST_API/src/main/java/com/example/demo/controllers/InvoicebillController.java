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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Invoicebill;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.repositories.InvoicebillRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class InvoicebillController {
	
	@Autowired
	InvoicebillRepository irepo;
	
	@GetMapping("/invoicebill")
	public List<Invoicebill> getAllEmployees(){
		return irepo.findAll();
	}
	
	@PostMapping("/invoice")
	public Invoicebill createInvoice(@RequestBody Invoicebill invoicebill) {
		return irepo.save(invoicebill);
	}
	
	@GetMapping("/invoicebill/{id}")
	public ResponseEntity<Invoicebill> getInvoiceByID(@PathVariable Integer id) {
		Invoicebill invoicebill = irepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
		return ResponseEntity.ok(invoicebill);
	}
	
	
//	@PostMapping("/updateInvoiceBill/{id}")
//	public ResponseEntity<Invoicebill> updateInvoice(@PathVariable Integer id, @RequestBody Invoicebill invoicebilldetails){
//		Invoicebill invoicebill = irepo.findById(id)
//				.orElseThrow(() -> new ResourceNotFoundException("Invoice not exist with id :" + id));
//		
//		invoicebill.setCust_name(invoicebilldetails.getCust_name());
//		invoicebill.setEmailId(invoicebilldetails.getEmailId());
//		invoicebill.setContact(invoicebilldetails.getContact());
//		invoicebill.setCity(invoicebilldetails.getCity());
//		invoicebill.setState(invoicebilldetails.getState());
//		invoicebill.setPincode(invoicebilldetails.getPincode());
//		invoicebill.setUnit(invoicebilldetails.getUnit());
//		invoicebill.setQty(invoicebilldetails.getQty());
//		invoicebill.setRate(invoicebilldetails.getRate());
//		invoicebill.setAmount(invoicebilldetails.getAmount());
//		invoicebill.setTax(invoicebilldetails.getTax());
//		invoicebill.setP_id(invoicebilldetails.getP_id());
//		
//		
//		
//		Invoicebill updatedInvoice = irepo.save(invoicebill);
//		return ResponseEntity.ok(updatedInvoice);
//	}
//	
	@DeleteMapping("/invoicebill/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteInvoice(@PathVariable Integer id){
		Invoicebill invoicebill = irepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("invoice not exist with id :" + id));
		
		irepo.delete(invoicebill);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
//	
}

	


