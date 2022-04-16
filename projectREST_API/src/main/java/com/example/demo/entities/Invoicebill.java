package com.example.demo.entities;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "invoice_bill")
public class Invoicebill {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int invoiceid;
	@Column
	private String cust_name;
	@Column(name = "email_id")
	private String emailId;
	@Column
	private String contact;
	@Column
	private String state;
	@Column
	private String city;
	@Column
	private String pincode;

	@Column
	private float amount;
	@Column
	private float sgst;
	@Column
	private float cgst;
	@Column
	private float gross_Amount;

	@Column
	private int pid1;

	@Column(nullable = true)
	private float pid1rate;

	@Column(nullable = true)
	private float pid1qty;

	@Column
	private int pid2;

	@Column(nullable = true)
	private float pid2rate;

	@Column(nullable = true)
	private float pid2qty;

	@Column
	private int pid3;

	@Column(nullable = true)
	private float pid3rate;

	@Column(nullable = true)
	private float pid3qty;

//	@JsonIgnoreProperties("invoice_bills")
//	@OneToMany(targetEntity = Product.class, cascade = CascadeType.ALL)
//	@JoinColumn(name = "fk_invoiceID", referencedColumnName = "invoiceid")
//	private List<Product> Products;

	public Invoicebill() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Invoicebill(int invoiceid, String cust_name, String emailId, String contact, String state, String city,
			String pincode, float amount, float sgst, float cgst, float gross_Amount, int pid1, float pid1rate,
			float pid1qty, int pid2, float pid2rate, float pid2qty, int pid3, float pid3rate, float pid3qty) {
		super();
		this.invoiceid = invoiceid;
		this.cust_name = cust_name;
		this.emailId = emailId;
		this.contact = contact;
		this.state = state;
		this.city = city;
		this.pincode = pincode;
		this.amount = amount;
		this.sgst = sgst;
		this.cgst = cgst;
		this.gross_Amount = gross_Amount;
		this.pid1 = pid1;
		this.pid1rate = pid1rate;
		this.pid1qty = pid1qty;
		this.pid2 = pid2;
		this.pid2rate = pid2rate;
		this.pid2qty = pid2qty;
		this.pid3 = pid3;
		this.pid3rate = pid3rate;
		this.pid3qty = pid3qty;
	}

	public Invoicebill(String cust_name, String emailId, String contact, String state, String city, String pincode,
			float amount, float sgst, float cgst, float gross_Amount, int pid1, float pid1rate, float pid1qty, int pid2,
			float pid2rate, float pid2qty, int pid3, float pid3rate, float pid3qty) {
		super();
		this.cust_name = cust_name;
		this.emailId = emailId;
		this.contact = contact;
		this.state = state;
		this.city = city;
		this.pincode = pincode;
		this.amount = amount;
		this.sgst = sgst;
		this.cgst = cgst;
		this.gross_Amount = gross_Amount;
		this.pid1 = pid1;
		this.pid1rate = pid1rate;
		this.pid1qty = pid1qty;
		this.pid2 = pid2;
		this.pid2rate = pid2rate;
		this.pid2qty = pid2qty;
		this.pid3 = pid3;
		this.pid3rate = pid3rate;
		this.pid3qty = pid3qty;
	}

	public int getInvoiceid() {
		return invoiceid;
	}

	public void setInvoiceid(int invoiceid) {
		this.invoiceid = invoiceid;
	}

	public String getCust_name() {
		return cust_name;
	}

	public void setCust_name(String cust_name) {
		this.cust_name = cust_name;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public String getContact() {
		return contact;
	}

	public void setContact(String contact) {
		this.contact = contact;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getPincode() {
		return pincode;
	}

	public void setPincode(String pincode) {
		this.pincode = pincode;
	}

	public float getAmount() {
		return amount;
	}

	public void setAmount(float amount) {
		this.amount = amount;
	}

	public float getSgst() {
		return sgst;
	}

	public void setSgst(float sgst) {
		this.sgst = sgst;
	}

	public float getCgst() {
		return cgst;
	}

	public void setCgst(float cgst) {
		this.cgst = cgst;
	}

	public float getGross_Amount() {
		return gross_Amount;
	}

	public void setGross_Amount(float gross_Amount) {
		this.gross_Amount = gross_Amount;
	}

	public int getPid1() {
		return pid1;
	}

	public void setPid1(int pid1) {
		this.pid1 = pid1;
	}

	public float getPid1rate() {
		return pid1rate;
	}

	public void setPid1rate(float pid1rate) {
		this.pid1rate = pid1rate;
	}

	public float getPid1qty() {
		return pid1qty;
	}

	public void setPid1qty(float pid1qty) {
		this.pid1qty = pid1qty;
	}

	public int getPid2() {
		return pid2;
	}

	public void setPid2(int pid2) {
		this.pid2 = pid2;
	}

	public float getPid2rate() {
		return pid2rate;
	}

	public void setPid2rate(float pid2rate) {
		this.pid2rate = pid2rate;
	}

	public float getPid2qty() {
		return pid2qty;
	}

	public void setPid2qty(float pid2qty) {
		this.pid2qty = pid2qty;
	}

	public int getPid3() {
		return pid3;
	}

	public void setPid3(int pid3) {
		this.pid3 = pid3;
	}

	public float getPid3rate() {
		return pid3rate;
	}

	public void setPid3rate(float pid3rate) {
		this.pid3rate = pid3rate;
	}

	public float getPid3qty() {
		return pid3qty;
	}

	public void setPid3qty(float pid3qty) {
		this.pid3qty = pid3qty;
	}

}