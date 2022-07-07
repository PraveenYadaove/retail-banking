package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.model.Customer;

public interface Customerrepo  extends JpaRepository<Customer,Integer> {
	@Transactional
	@Modifying
	@Query("UPDATE Customer SET cbalance = :cbalance WHERE cid = :cid")
	Integer updatePriceByName(@Param("cbalance")double cbalance,@Param("cid") int cid);
	
	Customer findByCidAndPasswords(int cid, String passwords);
}
