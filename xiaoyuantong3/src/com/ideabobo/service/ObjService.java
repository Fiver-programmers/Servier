package com.ideabobo.service;

import java.util.List;
import java.util.Map;

import com.ideabobo.model.Obj;
import com.ideabobo.util.Page;

public interface ObjService {
	public void save(Obj model);
	public void update(Obj model);
	public Obj find(String uuid);
	public Obj find(Obj model);
	public void delete(Integer uuid);
	public List<Obj> list();
	public List<Obj> list(Obj model);
	public Page findByPage(Page page,Map paramsMap);
}
