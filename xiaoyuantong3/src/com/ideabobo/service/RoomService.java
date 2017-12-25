package com.ideabobo.service;

import java.util.List;
import java.util.Map;

import com.ideabobo.model.Room;
import com.ideabobo.util.Page;

public interface RoomService {
	public void save(Room model);
	public void update(Room model);
	public Room find(String uuid);
	public Room find(Room model);
	public void delete(Integer uuid);
	public List<Room> list();
	public List<Room> list(Room model);
	public Page findByPage(Page page,Map paramsMap);
}
