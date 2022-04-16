//package com.example.demo.service;
//
//import java.util.List;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import com.example.demo.entities.CartItems;
//import com.example.demo.entities.Customer;
//import com.example.demo.repositories.CartItemRepository;
//
//@Service
//public class ShoppingCartService {
//	
//	@Autowired
//	private CartItemRepository cartRepo;
//	
//	public List<CartItems> listCartItems(Customer customer){
//		return cartRepo.findbyCustomer(customer);
//	}
//
//}
