function(doc) {
    if (doc._id.substr(0,10) === "submission") {
		emit(doc._id, {
			"Date: ": doc.myDate,
			"Description: ": doc.myDescription,
			"Category: ": doc.myNewsCat,
			"Tags: ": doc.myTags,
			"URL: ": doc.myURL
		});
		
  }
};