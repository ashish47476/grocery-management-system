package com.app.entities;

import java.time.LocalDate;

import javax.persistence.*;
import org.hibernate.annotations.*;
import lombok.*;


@Getter
@Setter
@ToString
@MappedSuperclass
public class BaseEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@CreationTimestamp
	private LocalDate createdOn;
	
	@UpdateTimestamp
	private LocalDate updatededOn;
	
}
