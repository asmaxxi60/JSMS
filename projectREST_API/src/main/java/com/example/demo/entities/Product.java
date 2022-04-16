package com.example.demo.entities;

import java.io.Serializable;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "product")
public class Product implements Serializable {

	private static final long serialVersionUID = -1000119078147252957L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int pid;

	@Column(length = 255, nullable = false)
	private String pname;

	@Column(length = 255, nullable = false)
	private String description;

	@Column
	private int qty;

	@Column
	private float weight;

	@Column(length = 20, nullable = false)
	private String color;

	@Column
	private float purity;

	@Lob
	@Column(columnDefinition = "LONGBLOB")
	private String image;


//	@JsonIgnoreProperties("invoice_bills")
//	@ManyToOne(targetEntity = Invoicebill.class, cascade = CascadeType.ALL)
//	@JoinColumn(name = "fk_invoiceID", referencedColumnName = "invoiceid")
//	private List<Invoicebill> invoiceBills;

	

	public int getPid() {
		return pid;
	}

	public Product(String pname, String description, int qty, float weight, String color, float purity, String image) {
	super();
	this.pname = pname;
	this.description = description;
	this.qty = qty;
	this.weight = weight;
	this.color = color;
	this.purity = purity;
	this.image = image;
}

	public Product(int pid, String pname, String description, int qty, float weight, String color, float purity,
		String image) {
	super();
	this.pid = pid;
	this.pname = pname;
	this.description = description;
	this.qty = qty;
	this.weight = weight;
	this.color = color;
	this.purity = purity;
	this.image = image;
}

	public void setPid(int pid) {
		this.pid = pid;
	}

	

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	public Product() {
		super();
		// TODO Auto-generated constructor stub
	}

	public String getPname() {
		return pname;
	}

	public void setPname(String pname) {
		this.pname = pname;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public int getQty() {
		return qty;
	}

	public void setQty(int qty) {
		this.qty = qty;
	}

	public float getWeight() {
		return weight;
	}

	public void setWeight(float weight) {
		this.weight = weight;
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}

	public float getPurity() {
		return purity;
	}

	public void setPurity(float purity) {
		this.purity = purity;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}


}
