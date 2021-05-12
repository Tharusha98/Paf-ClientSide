/**
 * 
 * 
 * 
 */


$(document).ready(function() {
	$("#alertSuccess").hide();
	$("#alertError").hide();
});

// UPDATE==========================================
$(document).on(
		"click",
		".btnUpdate",
		function(event) {
			$("#hidProjectIDSave").val(
					$(this).closest("tr").find('#hidIProjectIDUpdate').val());
			$("#projectname").val($(this).closest("tr").find('td:eq(0)').text());
			$("#description").val($(this).closest("tr").find('td:eq(1)').text());
			$("#field").val($(this).closest("tr").find('td:eq(2)').text());
			$("#url").val($(this).closest("tr").find('td:eq(3)').text());
			$("#researcherid").val($(this).closest("tr").find('td:eq(3)').text());
		});

// CLIENT-MODEL================================================================
function validateItemForm() {
	// CODE
	if ($("#projectname").val().trim() == "") {
		return "Insert Item Code.";
	}
	// NAME
	if ($("#description").val().trim() == "") {
		return "Insert Item Name.";
	}
	// PRICE-------------------------------
	if ($("#field").val().trim() == "") {
		return "Insert Item Price.";
	}
	if ($("#url").val().trim() == "") {
		return "Insert Item Price.";
	}
	// is numerical value
	var tmpPrice = $("#researcherid").val().trim();
	if (!$.isNumeric(tmpPrice)) {
		return "Insert a numerical value for Item Price.";
	}
	
	return true;
}



var type = ($("#hidprojectIDSave").val() == "") ? "POST" : "PUT";




$(document).on("click", "#btnSave", function(event)
		{
		// Clear alerts---------------------
		 $("#alertSuccess").text("");
		 $("#alertSuccess").hide();
		 $("#alertError").text("");
		 $("#alertError").hide();
		// Form validation-------------------
		var status = validateItemForm();
		if (status != true)
		 {
		 $("#alertError").text(status);
		 $("#alertError").show();
		 return;
		 }
		// If valid------------------------
		var type = ($("#hidItemIDSave").val() == "") ? "POST" : "PUT";
		 $.ajax(
		 {
		 url : "Project",
		 type : type,
		 data : $("#projectform").serialize(),
		 dataType : "text",
		 complete : function(response, status)
		 {
		 onItemSaveComplete(response.responseText, status);
		 }
		 });
		});

function onItemSaveComplete(response, status)
{
if (status == "success")
 {
 var resultSet = JSON.parse(response);
 if (resultSet.status.trim() == "success")
 {
 $("#alertSuccess").text("Successfully saved.");
 $("#alertSuccess").show();
 $("#divItemsGrid").html(resultSet.data);
 } else if (resultSet.status.trim() == "error")
 {
 $("#alertError").text(resultSet.data);
 $("#alertError").show();
 }
 } else if (status == "error")
 {
 $("#alertError").text("Error while saving.");
 $("#alertError").show();
 } else
 {
 $("#alertError").text("Unknown error while saving..");
 $("#alertError").show();
 }
  $("#hidProjectIDSave").val("");
  $("#projectform")[0].reset(); 


}

$(document).on("click", ".btnUpdate", function(event)
		{
		$("#hidItemIDSave").val($(this).data("itemid"));
		 $("#projectname").val($(this).closest("tr").find('td:eq(0)').text());
		 $("#description").val($(this).closest("tr").find('td:eq(1)').text());
		 $("#field").val($(this).closest("tr").find('td:eq(2)').text());
		 $("#url").val($(this).closest("tr").find('td:eq(3)').text());
		 $("#researcherid").val($(this).closest("tr").find('td:eq(2)').text());
		});

$(document).on("click", ".btnRemove", function(event)
		{
		 $.ajax(
		 {
		 url : "Project",
		 type : "DELETE",
		 data : "Project_ID=" + $(this).data("Project_ID"),
		 dataType : "text",
		 complete : function(response, status)
		 {
		 onItemDeleteComplete(response.responseText, status);
		 }
		 });
		});
function onItemDeleteComplete(response, status)
{
	if (status == "success")
 {
 var resultSet = JSON.parse(response);
 if (resultSet.status.trim() == "success")
 {
 $("#alertSuccess").text("Successfully deleted.");
 $("#alertSuccess").show();
 $("#divItemsGrid").html(resultSet.data);
 } else if (resultSet.status.trim() == "error")
 {
 $("#alertError").text(resultSet.data);
 $("#alertError").show();
 }
 } else if (status == "error")
 {
 $("#alertError").text("Error while deleting.");
 $("#alertError").show();
 } else
 {
 $("#alertError").text("Unknown error while deleting..");
 $("#alertError").show();
 }
}
