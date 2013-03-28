function(doc) {
    if (doc._id.substr(0,10) === "submission") {
		emit(doc._id, {
			"_rev": doc._rev,
			"date": doc.myDate,
			"description": doc.myDescription,
			"category": doc.myNewsCat,
			"tags": doc.myTags,
			"url": doc.myURL
		});
		
  }
};