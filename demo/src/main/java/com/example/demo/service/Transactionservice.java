package com.example.demo.service;

import java.util.List;

import com.example.demo.model.Transactions;



public interface Transactionservice {
	public List<Transactions> getAllTrans();
	 public void saveOrUpdate(Transactions trans);
	 public List<Transactions> getAllTransdata(Transactions student);
}
