const express = require('express');
const db = require('./a_db'); 

const createPackage = (req,res)=>{
  console.log(req);
    const {
      package_name,
      package_desc,
      price,
      date_start,
      date_end,
      time_start,
      time_end,
      visibility,
      item_list,
      image_filepath,
      tags,
      merchant_id
    } = req.body;
    
    const insert = 'INSERT INTO package (package_name,package_desc,price,date_start,date_end,time_start,time_end,visibility,item_list,image_filepath,tags,merchant_id) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)';
    const data = [package_name,package_desc,price,date_start,date_end,time_start,time_end,visibility,item_list,image_filepath,tags,merchant_id]
    db.query(insert, data, (err, result) => {
      
      if (err) {
        console.error('Error inserting data:', err);
        return res.status(500).json({ status: 500, success:false,error: 'Error inserting data' });
      }
  
      if (result.affectedRows > 0) {
        return res.status(200).json({
          status: 200,
          success: true,
          data: result.affectedRows,
        });
      } else {
        return res.status(500).json({ status: 500, success: false, error: 'Record insertion failed' });
      }
    });
}

const updatePackage = (req,res)=>{
    const {package_id,package_name,package_desc,price,date_start,date_end,time_start,time_end,visibility,item_list,image_filepath,tags} = req.body;
    console.log(req.body)
    const update = 'UPDATE package SET package_name=?,package_desc=?, price=?, date_start=?,date_end=?,time_start=?,time_end=?,visibility=?,item_list=?,image_filepath=?,tags=? WHERE package_id=?';

    const data = [package_name,package_desc,price,date_start,date_end,time_start,time_end,visibility,item_list,image_filepath,tags, package_id]
    db.query(update, data, (err, result) => {
      if (err) {
        console.error('Error updating data:', err);
        return res.status(500).json({ status: 500, success:false,error: 'Error updating data' });
      }
  
      if (result.affectedRows > 0) {
        return res.status(200).json({
          status: 200,
          success: true,
          data: result,
        });
      } else {
        return res.status(500).json({ status: 500, success: false, error: 'Record update failed' });
      }
    });
}

const retrieveAll = (req,res)=>{
    const retrieveRecs = 'SELECT * FROM package'

    db.query(retrieveRecs, (err, rows) => {
      if (err) {
        console.error('Error retrieving all records:', err);
        return res.status(500).json({ status: 500, success:false,error: 'Error retrieving all records' });
      }else{
        return res.status(200).json({
          status: 200,
          success: true,
          data: rows,
        });
      }
    });
}

const retrieveByParams = (req,res)=>{
    const { col, val } = req.query; 

    const retrieveSpecific = 'SELECT * FROM package WHERE ?? = ?';
  
    db.query(retrieveSpecific, [col,val],(err, row) => {
      if (err) {
        console.error('Error retrieving records:', err);
        return res.status(500).json({ status: 500, success:false,error: 'Error retrieving records' });
      }else{
        return res.status(200).json({
          status: 200,
          success: true,
          data: row,
        });
      }
    });
}

const retrieveByTwoParams = (req,res)=>{
  const { col1, val1, col2, val2, order_param} = req.query; 
  var orderByClause = ''; // Initialize the ORDER BY clause

  if (order_param) {
    // If an order_param is provided, add the ORDER BY clause
    orderByClause = ` ORDER BY ${order_param} ASC`; // You can change ASC to DESC if needed
  }

  const retrieveSpecific = `SELECT * FROM package WHERE ?? = ? AND ?? = ?${orderByClause}`;

  db.query(retrieveSpecific, [col1,val1, col2, val2],(err, rows)  =>  {
    if (err) {
      console.error('Error retrieving records:', err);
      return res.status(500).json({ status: 500, success:false,error: 'Error retrieving records' });
    }else{
      console.log("ROWWWWWWSSS");
      console.log(rows);
      return res.status(200).json({
        status: 200,
        success: true,
        data: rows,
      });
      
    }
  });
}

const deletePackage = (req,res)=>{
  console.log("REQUEST BODY: "+ req.body);
    const {package_id} = req.body;

    const deleteQuery = 'DELETE FROM package WHERE package_id = ?';
  
    db.query(deleteQuery, package_id,(err, result) => {
      if (err) {
        console.error('Error deleting record:', err);
        return res.status(500).json({ status: 500, success:false,error: 'Error deleting records' });
      }else{
        return res.status(200).json({
          status: 200,
          success: true,
          data: result,
        });
      }
    });
}

module.exports = {
    createPackage,
    updatePackage,
    retrieveAll,
    retrieveByParams,
    deletePackage,
    retrieveByTwoParams,
}