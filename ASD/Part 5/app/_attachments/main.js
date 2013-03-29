//By Joel Zyla

$('#home').on('pageinit', function () {
	//code needed for home page goes here
});


//*****************BROWSE STORIES PAGE******************
$("#browseStories").on('pageinit', function () {

	$('#mySubmissionForm').hide(); 
	$('#myDisplayStoriesButton').hide();
	$('#myStories').show();


	//*****************DISPLAY STORIES FUNCTION******************
	$(function() {
		$.couch.urlPrefix = "https://joelzyla.cloudant.com";
		console.log("Stories page loaded");
		//https://cloudant.com/db/joelzyla/project5/_design/app/_view/myItems
		$.couch.db("project5").view("app/myItems", {
			success: function(data) {
				console.log(data);
				$('#myStories').empty();
				$.each(data.rows, function(index, submission) {
					var myID = submission.id;
					// var myRev = "data." + myID + "._rev";

					// console.log("myRev: ", myRev);
					console.log("myID: ", myID);
					var couchRev = submission.value._rev;
					console.log(couchRev);
					var couchNewsCat = submission.value.category;
					var couchURL = submission.value.url;
					var couchTags = submission.value.tags;
					var couchDate = submission.value.date;
				    var couchDescription = submission.value.description;

					$('#myStories').append(
					    "<ul>" + 
					    "<li>" + "Submission ID: " + myID + "</li>" +
				  		"<li>" + couchNewsCat[0] + ":" + couchNewsCat[1] + "</li>" +
				  		"<li>" + couchURL[0] + ":" + couchURL[1] + "</li>" +
				  		"<li>" + couchTags[0] + ":" + couchTags[1] + "</li>" +
				  		"<li>" + couchDate[0] + ":" + couchDate[1] + "</li>" +
				  		"<li>" + couchDescription[0] + ":" + couchDescription[1] +
			  		"</ul>"
			  		);
			  		$('#myStories').append(myEditDeleteButtons(myID), "</br>");
				});
			}
		});

		return false;
	});


    //*****************ADD STORY BUTTON******************
 	$("#myAddStoryButton").on('click', function () {
 		$('#mySubmissionForm')[0].reset();
 		$('#mySubmissionForm').show();
 		$('#myStories').hide();
 		$('#myDisplayStoriesButton').show();
 		saveStories();
 		return false;
	});


    //*****************DISPLAY STORIES BUTTON******************
	$("#myDisplayStoriesButton").on('click', function () {
 		$('#mySubmissionForm').hide();
 		$('#myStories').show();
 		$('#myDisplayStoriesButton').hide();
 		return false;
	});


    //*****************SAVE STORIES FUNCTION******************
	var saveStories = function(key, rev){
	//console.log('Second Data:' + key);

		if(!key){ 
			var id = "submission" + Math.floor(Math.random()*1001);
			console.log("No key, assigning: ", id);
			//console.log('Third Data:' + key);
		}else{
			var id = key;
			console.log("Keep the current key: ", key);
			console.log("Keep the current revision: ", rev);
		}

		var item 			= {};
		item._rev           = rev;
		item._id 			= id;
		item.myCategory 	= $("#myNewsCat").val();
		item.myDate			= $("#myDate").val();
		item.myDescription	= $("#myDescription").val();
		item.myTags			= $("#myTags").val();
		item.myURL			= $("#myURL").val();

		// var item = {
		// 	'_rev' : rev,
		// 	'_id' : id,
		// 	'myNewsCat' : ["Category" , $("#myNewsCat").val()],
		// 	'myDate' : ["Date" , $("#myDate").val()],
		// 	'myDescription' : ["Description" , $("#myDescription").val()],
		// 	'myTags' : ["Tags" , $("#myTags").val()],
		// 	'myURL' : ["URL" , $("#myURL").val()]
		// };

		// var couchNewsCat = submission.value.category;
		// var couchURL = submission.value.url;
		// var couchTags = submission.value.tags;
		// var couchDate = submission.value.date;
	 	// var couchDescription = submission.value.description;

		//console.log("FINAL ITEM", item);

	$("#submitStoryButton").on('click', function () {
		$.couch.db('project5').saveDoc(item, {
		 	success: function(data){
		 		console.log("success", data);
		 		alert("Submission Saved");

		 	},
		 	error: function(data) {
		 		console.log("error", data);
		 	}
		});
	});


		
		//alert("Position Saved!");
		//window.location.reload();
	}; 

    //*****************EDIT AND DELETE BUTTON FUNCTION******************
	var myEditDeleteButtons = function(myID) {
		console.log("Edit and delete buttons getting myID:", myID);
		var editButton = $('<a></a>').attr({
			"href": "#",
			"class": "myEditButton",
			"data-key" : myID,
			"data-role": "button",
			"data-inline": "true"
		}).html('Edit Submission').appendTo($('#myStories'));
		
		var deleteButton = $('<a></a>').attr({
			"href": "#",
			"class": "myDeleteButton",
			"data-key" : myID,
			"data-role": "button",
			"data-theme": "a",
			"data-inline": "true"
		}).html('Delete Submission').appendTo($('#myStories'));


		$(".myDeleteButton").on('click', function(e){
			e.preventDefault();
			deleteKey = $(this).data('key'); 
			console.log("deleteKey: ", deleteKey);
			var deleteConfirmation = confirm("Are you sure you want to delete this submission?");
			if(deleteConfirmation === true){	
				$.couch.db('project5').openDoc(deleteKey, {
					success: function(data){
						//var item = {};
						//item._id = data._id;
						//item._rev = data._rev;
						$.couch.db('project5').removeDoc(data, {
							success: function(data){
						window.location.reload();
						alert("Submission Deleted");
							}
						});
					}
				});
				return false;
			}
			return false;
		});

	    $(".myEditButton").on('click', function (e) {
	    	e.preventDefault();
	    	key = $(this).data('key');
	        editStory(key);
	        console.log("edit button click key: ", key);
	        //window.location.reload();
	        return false;
	    });
	};


    //*****************EDIT STORIES FUNCTION******************
	var editStory = function(key) {
		console.log("editStory key:", key);
		$('#mySubmissionForm').show();
 		$('#myStories').hide();
 		$('#myDisplayStoriesButton').show();

		$.couch.db('project5').openDoc(key,{
			success: function(data){
				//var myID = submission.id;
				//var couchRev = submission.value._rev;
				console.log("edit item data", data);
				//console.log("category", data.submission.myCategory);
				$('#myNewsCat').val(data.myNewsCat[1]);
				$('#myDate').val(data.myDate[1]);
				$('#myTags').val(data.myTags[1]);
				$('#myURL').val(data.myURL[1]);
				$('#myDescription').val(data.myDescription[1]);

				//$('#submitStoryButton').val("Submit").attr({'key': data._id, 'rev': data._rev}); 
				console.log("editStory data._id: ", data._id);
				saveStories(data._id, data._rev);
				
			}
		});
		return false;
	};
	return false;
});