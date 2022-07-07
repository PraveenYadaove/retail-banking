package com.example.demo.model;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;    
@Entity
public class Transactions {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	 public int getTid() {
		return tid;
	}
	public void setTid(int tid) {
		this.tid = tid;
	}
	public int getSenderid() {
		return senderid;
	}
	public void setSenderid(int senderid) {
		this.senderid = senderid;
	}
	public int getReceiveid() {
		return receiveid;
	}
	public void setReceiveid(int receiveid) {
		this.receiveid = receiveid;
	}
	public Double getBeforebalance() {
		return beforebalance;
	}
	public void setBeforebalance(Double beforebalance) {
		this.beforebalance = beforebalance;
	}
	public Double getDebitbalance() {
		return debitbalance;
	}
	public void setDebitbalance(Double debitbalance) {
		this.debitbalance = debitbalance;
	}
	public Double getCreditbalance() {
		return creditbalance;
	}
	public void setCreditbalance(Double creditbalance) {
		this.creditbalance = creditbalance;
	}
	public Double getAfterbalance() {
		return afterbalance;
	}
	public void setAfterbalance(Double afterbalance) {
		this.afterbalance = afterbalance;
	}
	public String getReason() {
		return reason;
	}
	public void setReason(String reason) {
		this.reason = reason;
	}
	
	 private int tid;	
	 private int senderid;
	 private int receiveid;
	 private Double beforebalance;
	 private Double debitbalance;
	 private Double creditbalance;
	 private Double afterbalance;
	 private String reason;
	
}
