package com.ideabobo.model;

/**
 * User entity. @author MyEclipse Persistence Tools
 */

public class Obj implements java.io.Serializable {

	// Fields
    private Integer id;
    private String title;
    private String note;
    private String ndate;
    private String img;
    private String address;
    private String fname;
    private String clert;
    private String tel;
    private String yuanxi;
    private String score;
    private String course;
    private String type;
	public String getImg() {
		return img;
	}
	public void setImg(String img) {
		this.img = img;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getNote() {
		return note;
	}
	public void setNote(String note) {
		this.note = note;
	}
	public String getNdate() {
		return ndate;
	}
	public void setNdate(String ndate) {
		this.ndate = ndate;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getFname() {
		return fname;
	}
	public void setFname(String fname) {
		this.fname = fname;
	}
	public String getClert() {
		return clert;
	}
	public void setClert(String clert) {
		this.clert = clert;
	}
	public String getTel() {
		return tel;
	}
	public void setTel(String tel) {
		this.tel = tel;
	}
	public String getYuanxi() {
		return yuanxi;
	}
	public void setYuanxi(String yuanxi) {
		this.yuanxi = yuanxi;
	}
	public String getScore() {
		return score;
	}
	public void setScore(String score) {
		this.score = score;
	}
	public String getCourse() {
		return course;
	}
	public void setCourse(String course) {
		this.course = course;
	}
	
	

   
}