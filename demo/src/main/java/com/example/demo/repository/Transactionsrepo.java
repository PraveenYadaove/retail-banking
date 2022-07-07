package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Transactions;

public interface Transactionsrepo  extends JpaRepository<Transactions,Integer> {

}
