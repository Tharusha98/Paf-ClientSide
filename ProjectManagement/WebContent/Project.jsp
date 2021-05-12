<%@page import="model.Project"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Project Management</title>
<link rel="stylesheet" href="Views/bootstrap.min.css">
<script src="Component/jquery-3.2.1.min.js"></script>
<script src="Component/Project.js"></script>
</head>
<body>
<div class="container"><div class="row"><div class="col-6">
<h1>Project Management V10.1</h1>
<form id="prjectform" name="projectform">
 <br>Project Name:
 <input id="projectname" name="projectname" type="text"
 class="form-control form-control-sm">
 <br> Description:
 <input id="description" name="description" type="text"
 class="form-control form-control-sm">
 <br> Field:
 <input id="field" name="field" type="text"
 class="form-control form-control-sm">
 <br> URL:
 <input id="url" name="url" type="text"
 class="form-control form-control-sm">
 <br> Researcher_ID:
 <input id="researcherid" name="researcherid" type="text"
 class="form-control form-control-sm">
 <br>
 <input id="btnSave" name="btnSave" type="button" value="Save"
 class="btn btn-primary">
 <input type="hidden" id="hidProjectIDSave"
 name="hidIProjectIDSave" value="">
</form>
<div id="alertSuccess" class="alert alert-success"></div>
<div id="alertError" class="alert alert-danger"></div>
<br>
<div id="divItemsGrid">
 <%
 Project projectObj = new Project();
 out.print(projectObj.readProjects());
 %>
</div>
</div> </div> </div>
</body>
</html>