package com.user.register.test;

import static org.junit.jupiter.api.Assertions.*;

import java.io.ByteArrayOutputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import org.junit.jupiter.api.Test;

class testing {

	@Test
	void test()   {
		
	       String url = "jdbc:mysql://localhost:3306/Users";
	       String username = "root";
	       String password = "root";

	       try {
	           // Load the MySQL JDBC driver
	           Class.forName("com.mysql.cj.jdbc.Driver");

	           // Connect to the database
	           Connection conn = DriverManager.getConnection(url, username, password);

	           // Prepare the SQL statement to read the blob
	           String sql = "SELECT file FROM user WHERE id = ?";
	           PreparedStatement pstmt = conn.prepareStatement(sql);
	           pstmt.setInt(1, 3);

	           // Execute the SQL statement and get the result set
	           ResultSet rs = pstmt.executeQuery();

	           // Read the blob data from the result set
	           if (rs.next()) {
	               InputStream is = rs.getBinaryStream("file");
	               ByteArrayOutputStream bos = new ByteArrayOutputStream();
	               byte[] buffer = new byte[4096];
	               int bytesRead;
	               while ((bytesRead = is.read(buffer)) != -1) {
	                   bos.write(buffer, 0, bytesRead);
	               }
	               byte[] blobData = bos.toByteArray();
	               bos.close();
	               is.close();
	               
	               // Write the blob data to a file
	               String filename = "E:/Ayub.txt";
	               FileOutputStream fos = new FileOutputStream(filename);
	               fos.write(blobData);
	               fos.close();
	               
	               // Print the blob data
	               System.out.println("Blob data read successfully:");
	               System.out.println(new String(blobData));
	           } else {
	               System.out.println("No data found for the specified ID.");
	           }

	           // Clean up
	           rs.close();
	           pstmt.close();
	           conn.close();
	       } catch (Exception e) {
	           e.printStackTrace();
	       }
	}

}
