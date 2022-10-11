package com.main.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.main.model.Victims;


public interface VictimsRepository extends JpaRepository<Victims, Long>{
	@Query("select v from Victims v where v.employee.city=?1")
	List<Victims> getFilteredList(String city);
	@Query("select v from Victims v where v.sickLeaves=?1")
	List<Victims> getFilteredListdays(int sick_leaves);
	@Query("select v from Victims v where v.employee.project=?1")
	List<Victims> getFilteredListpro(String project);
	@Query("select v from Victims v where v.employee.gender=?1")
	List<Victims> getFilteredListGender(String gender);
	@Query(value = "update Victims set status = :status where id = :id", nativeQuery=true)
	public void updateStatus(@Param ("id") int id, @Param("status") String Status);
}
