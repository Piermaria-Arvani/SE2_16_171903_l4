<!DOCTYPE html>
<html>
   <head>
      <meta charset="utf-8">
      <title> Lab 4</title>
   </head>
   <body>
        <form method="GET">
			Insert employee ID:
			<input type="text" name ="input">
			<input type ="submit" value="Search" name = "submit">
			<input type ="submit" value="Delete" name = "submit">
		</form>
        <br>
        <input type = "button" id = "show" value = "Show/hide" onclick = "gestisciVisualizzazione()">
        <br><br>
        <form id = "form" method = "GET" style ="display: none">
			<label for="id">ID</label>
			<input type ="text" name ="id" id = "id" value ="(: id :)"><br>
			<label for="name">Name</label>
			<input type ="text" name ="name" id = "name" value = "(: name :)" required><br>
			<label for="surname" >Surname</label>
			<input type ="text" name ="surname" id = "surname" value = "(: surname :)" required><br>
			<label for="level">Level</label>
			<input type ="text" name ="level" id = "level" value = "(: level :)" required><br>
			<label for="salary">Salary</label>
			<input type ="text" name ="salary" id = "salary" value = "(: salary :)" required><br><br>
			<input type ="submit" value ="Insert Employee" name = "submit">
        </form>
		
		<script src = "/scripts/script.js" type = "text/javascript"></script>
       
   </body>
</html>