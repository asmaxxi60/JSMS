package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Invoicebill;
@Repository
public interface InvoicebillRepository extends JpaRepository<Invoicebill, Integer> {

}
