package com.main.model;

import java.time.LocalDate;

public class Victimdto {
	private Long employeeid;
	private LocalDate affectedDate;
	private int dosages;
	private int sickLeaves;
	private String status;
	private String docurl;
	public String getDocurl() {
		return docurl;
	}

	public void setDocurl(String docurl) {
		this.docurl = docurl;
	}

	public Long getEmployeeid() {
		return employeeid;
	}

	public void setEmployeeid(Long employeeid) {
		this.employeeid = employeeid;
	}

	public LocalDate getAffectedDate() {
		return affectedDate;
	}

	public void setAffectedDate(LocalDate affectedDate) {
		this.affectedDate = affectedDate;
	}

	public int getDosages() {
		return dosages;
	}

	public void setDosages(int dosages) {
		this.dosages = dosages;
	}

	public int getSickLeaves() {
		return sickLeaves;
	}

	public void setSickLeaves(int sickLeaves) {
		this.sickLeaves = sickLeaves;
	}

	

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	@Override
	public String toString() {
		return "Victumdto [employeeid=" + employeeid + ", affectedDate=" + affectedDate + ", dosages=" + dosages
				+ ", sickLeaves=" + sickLeaves +", status=" + status + "]";
	}

}
