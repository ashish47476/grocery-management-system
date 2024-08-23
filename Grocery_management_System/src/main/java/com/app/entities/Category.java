package com.app.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;

import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity 
@Table(name = "Category") 
@NoArgsConstructor
@Getter
@Setter
@ToString(exclude = {"products"})
public class Category extends BaseEntity{
	
	
	@Column(name="category_name",length =20)
	private String categoryName;
	
	@Column(name="category_desc",length=250)
	private String categoryDesc;
	
	@OneToMany(mappedBy = "category", cascade = CascadeType.ALL,orphanRemoval = true /* , fetch = FetchType.EAGER */ )
	
	@JsonIgnore //To tell Jackson : ignore this property during ser n de-ser.
	private List<Products> products = new ArrayList<>();
	
	
	
}
