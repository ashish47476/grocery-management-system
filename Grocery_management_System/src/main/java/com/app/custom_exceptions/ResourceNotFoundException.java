package com.app.custom_exceptions;

public class ResourceNotFoundException extends RuntimeException {
	public ResourceNotFoundException(String mesg) {
		super(mesg);
	}
	public ResourceNotFoundException(String errMesg, String string, Long categoryId) {
		super(errMesg);
	}
}
