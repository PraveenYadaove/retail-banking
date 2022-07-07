package com.example.demo.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Transactions;
import com.example.demo.repository.Transactionsrepo;



@Service
public class Transactionimpl implements Transactionservice{
		@Autowired
	    private Transactionsrepo transRepository;
		@Override
	    public void saveOrUpdate(Transactions student) {
	       transRepository.save(student);
	    }

	    @Override
	    public List<Transactions> getAllTrans() {
	    	List<Transactions> books = new ArrayList<Transactions>();
	    	
	    	transRepository.findAll().forEach(books1 -> books.add(books1));
	    	
	    	return books; 
	    }
	    @Override
	    public List<Transactions> getAllTransdata(Transactions student)
	    {
	    	List<Transactions> books = new ArrayList<Transactions>();  
	    	
	    	for(Transactions x:transRepository.findAll())
	    	{
	    		if(x.getSenderid()==student.getSenderid())
	    		{
	    			books.add(x);
	    		}
	    	}
	    	return books;
	    }
	    
}
