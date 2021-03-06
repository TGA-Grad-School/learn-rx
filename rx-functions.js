const { newReleases, movieLists, movieListsBoxarts, vidoes, bookmarks } = require('./data.json');

// Exercise 1: Print all the names in an array
const simplePrint = (console) => {
	var names = ["Ben", "Jafar", "Matt", "Priya", "Brian"],
		counter;

	for(counter = 0; counter < names.length; counter++) {
		console.log(names[counter]);
	}
}

// Exercise 2: Use forEach to print all the names in an array
const elegantPrint = (console) => {
	var names = ["Ben", "Jafar", "Matt", "Priya", "Brian"];

	names.forEach(function(name) {
		console.log(name);
	});
}

/*
  Projecting Arrays
  Applying a function to a value and creating a new value is called a projection. To project one array into another, we apply a projection function to each item in the array and collect the results in a new array.

  Exercise 3: Project an array of videos into an array of {id,title} pairs using forEach()

  For each video, add a projected {id, title} pair to the videoAndTitlePairs array.
*/
const projecting = () => {
	const videoAndTitlePairs = [];

	// ------------ INSERT CODE HERE! -----------------------------------
	// Use forEach function to accumulate {id, title} pairs from each video.
	// Put the results into the videoAndTitlePairs array using the Array's
	// push() method. Example: videoAndTitlePairs.push(newItem);
	// ------------ INSERT CODE HERE! -----------------------------------
	
  
  newReleases.forEach(function(movie) {
    videoAndTitlePairs.push({id: movie.id, title: movie.title});
  });
  
	return videoAndTitlePairs;
}

/*
  Exercise 5: Use map() to project an array of videos into an array of {id,title} pairs

  Let's repeat the exercise of collecting {id, title} pairs for each video in the newReleases array, but this time we'll use our map function.
*/
function mapNewreleases() {

	// ------------ INSERT CODE HERE! -----------------------------------
	// Use map function to accumulate {id, title} pairs from each video.
  return newReleases.map(movie => {return {id: movie.id, title: movie.title}}) // finish this expression!
	// ------------ INSERT CODE HERE! -----------------------------------

}

/*
  Filtering Arrays
  Like projection, filtering an array is also a very common operation. To filter an array we apply a test to each item in the array and collect the items that pass into a new array.

  Exercise 6: Use forEach() to collect only those videos with a rating of 5.0

  Use forEach() to loop through the videos in the newReleases array and, if a video has a rating of 5.0, add it to the videos array.
*/
const filterNewReleases = () => {
	const videos = [];

	// ------------ INSERT CODE HERE! -----------------------------------
	// Use forEach function to accumulate every video with a rating of 5.0
	// ------------ INSERT CODE HERE! -----------------------------------
	
  newReleases.forEach(movie => {
    if (movie.rating === 5.0) {
  		videos.push(movie)
    }                    
  });
    
	return videos;
}

/*
  Query Data by Chaining Method Calls
  Exercise 8: Chain filter and map to collect the ids of videos that have a rating of 5.0
*/
const chainMapFilter = () => {

	// ------------ INSERT CODE HERE! -----------------------------------
	// Chain the filter and map functions to select the id of all videos
	// with a rating of 5.0.  
	
	return newReleases.filter(movie => movie.rating === 5.0)
    .map(movie => movie.id) // Complete this expression
	// ------------ INSERT CODE HERE! -----------------------------------
}

/*
  Querying Trees
  Sometimes, in addition to flat arrays, we need to query trees. Trees pose a challenge because we need to flatten them into arrays in order to apply filter() and map() operations on them. In this section we'll define a concatAll() function that we can combine with map() and filter() to query trees.

  Exercise 9: Flatten the movieLists array into an array of video ids

  Let's start by using two nested forEach loops to collect the id of every video in the two-dimensional movieLists array.
*/
const flattenArr = () => {
	const allVideoIdsInMovieLists = [];

	// ------------   INSERT CODE HERE!  -----------------------------------
	// Use two nested forEach loops to flatten the movieLists into a list of
	// video ids.
	// ------------   INSERT CODE HERE!  -----------------------------------
  movieLists.forEach(movie => {
                     movie.videos.forEach(video => {
                     		allVideoIdsInMovieLists.push(video.id);
                     });                
  })
	return allVideoIdsInMovieLists;

}

/*
  Exercise 10: Implement concatAll()

  Let's add a concatAll() function to the Array type. The concatAll() function iterates over each sub-array in the array and collects the results in a new, flat array. Notice that the concatAll() function expects each item in the array to be another array.
*/
Array.prototype.concatAll = () => {
	var results = [];
	this.forEach(function(subArray) {
		// ------------ INSERT CODE HERE! ----------------------------
		// Add all the items in each subArray to the results array.
		// ------------ INSERT CODE HERE! ----------------------------
    subArray.forEach(item => {
    	results.push(item);                 
    });
	});

	return results;
};


// ------------------- Exercises 11-15 -----------------
/*
  Exercise 11: Use map() and concatAll() to project and flatten the movieLists into an array of video ids

  Hint: use two nested calls to map() and one call to concatAll().
*/
const mapAndConcatAll = () => {

	// ------------   INSERT CODE HERE!  -----------------------------------
	// Use map and concatAll to flatten the movieLists in a list of video ids.
	// ------------   INSERT CODE HERE!  -----------------------------------

	return movieLists
          .map(movieList => movieList.videos.map(video => video.id))
          .concatAll() // Complete this expression!

}

/*
  Exercise 12: Retrieve id, title, and a 150x200 box art url for every video

  You've managed to flatten a tree that's two levels deep, let's try for three! Let's say that instead of a single boxart url on each video, we had a collection of boxart objects, each with a different size and url. Create a query that selects {id, title, boxart} for every video in the movieLists. This time though, the boxart property in the result will be the url of the boxart object with dimensions of 150x200px. Let's see if you can solve this problem with map(), concatAll(), and filter().

  There's just more one thing: you can't use indexers. In other words, this is illegal:

  var itemInArray = movieLists[0];
  			
  Furthermore, you're not allowed to use indexers in any of the remaining exercises unless you're implementing one of the five functions. There is a very good reason for this restriction, and that reason will eventually be explained. For now, you'll simply have to accept it on faith that this restriction serves a purpose. :-)
*/
const concatMap = () => {

	// Use one or more map, concatAll, and filter calls to create an array with the following items
	// [
	//	 {"id": 675465,"title": "Fracture","boxart":"http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
	//	 {"id": 65432445,"title": "The Chamber","boxart":"http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
	//	 {"id": 654356453,"title": "Bad Boys","boxart":"http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" },
	//	 {"id": 70111470,"title": "Die Hard","boxart":"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" }
	// ];

  return movieListsBoxarts.map(({ videos }) => videos).concatAll()
    .map(video => {
      const { id, title, boxarts } = video;
      // console.log(id, title, boxarts);
      const newShit = boxarts
        .filter(({ width }) => width === 150)
        .map(({ url: boxart }) => ({ id, title, boxart }));
        
      return newShit;      
    }).concatAll();
  
          
  
  return newMovies; // Complete this expression!
}

// concatMap();

/*
  Exercise 13: Implement concatMap()

  Nearly every time we flatten a tree we chain map() and concatAll(). Sometimes, if we're dealing with a tree several levels deep, we'll repeat this combination many times in our code. To save on typing, let's create a concatMap function that's just a map operation, followed by a concatAll.
*/
Array.prototype.concatMap = (projectionFunctionThatReturnsArray) => {
	return this.
		map(function(item) {
			// ------------   INSERT CODE HERE!  ----------------------------
			// Apply the projection function to each item. The projection
			// function will return a new child array. This will create a
			// two-dimensional array.
			// ------------   INSERT CODE HERE!  ----------------------------
      return projectionFunctionThatReturnsArray(item);
		}).concatAll();
		// apply the concatAll function to flatten the two-dimensional array
};

// var spanishFrenchEnglishWords = [ ["cero","rien","zero"], ["uno","un","one"], ["dos","deux","two"] ];
// 	// collect all the words for each number, in every language, in a single, flat list
// 	var allWords = [0,1,2].
// 		concatMap(function(index) {
// 			return spanishFrenchEnglishWords[index];
// 		});
    
  // console.log(allWords);


/*
  Exercise 14: Use concatMap() to retrieve id, title, and 150x200 box art url for every video

  Let's repeat the exercise we just performed. However this time we'll simplify the code by replacing the map().concatAll() calls with concatMap().
*/
const multipleConcatMap = () => {
	// Use one or more concatMap, map, and filter calls to create an array with the following items
	// [
	//	 {"id": 675465, "title": "Fracture", "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
	//	 {"id": 65432445, "title": "The Chamber", "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
	//	 {"id": 654356453, "title": "Bad Boys", "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" },
	//	 {"id": 70111470, "title": "Die Hard", "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" }
	// ];
  
  const newMovies = movieListsBoxarts.concatMap(({ videos }) => {
    return videos.concatMap(video => {
      const { id, title, boxarts } = video;
      
      return boxarts
        .filter(({ width }) => width === 150)
        .map(({ url: boxart }) => {
          return { id, title, boxart };
        });
    });
  });
  
	return newMovies // Complete this expression!

}

// console.log(multipleConcatMap());
/*
  Reducing Arrays
  Sometimes we need to perform an operation on more than one item in the array at the same time. For example, let's say we need to find the largest integer in an array. We can't use a filter() operation, because it only examines one item at a time. To find the largest integer we need to compare items in the array to each other.

  One approach could be to select an item in the array as the assumed largest number (perhaps the first item), and then compare that value to every other item in the array. Each time we come across a number that was larger than our assumed largest number, we'd replace it with the larger value, and continue the process until the entire array was traversed.

  If we replaced the specific size comparison with a closure, we could write a function that handled the array traversal process for us. At each step our function would apply the closure to the last value and the current value and use the result as the last value the next time. Finally we'd be left with only one value. This process is known as reducing because we reduce many values to a single value.

  Exercise 15: Use forEach to find the largest box art

  In this example we use forEach to find the largest box art. Each time we examine a new boxart we update a variable with the currently known maximumSize. If the boxart is smaller than the maximum size, we discard it. If it's larger, we keep track of it. Finally we're left with a single boxart which must necessarily be the largest.
*/
const reduce = () => {
	let =	currentSize, maxSize = -1, largestBoxart;

	boxarts.forEach(function(boxart) {
		currentSize = boxart.width * boxart.height;
		if (currentSize > maxSize) {
			largestBoxart = boxart;
			maxSize = currentSize;
		}
	});

	return largestBoxart;
}

// [1,2,3].reduce(function(accumulatedValue, currentValue) { return accumulatedValue + currentValue; }); === [6];
// [1,2,3].reduce(function(accumulatedValue, currentValue) { return accumulatedValue + currentValue; }, 10); === [16];

/*
This process is a reduction because we're using the information we derived from the last computation to calculate the current value. However in the example above, we still have to specify the method of traversal. Wouldn't it be nice if we could just specify what operation we wanted to perform on the last and current value? Let's create a helper function to perform reductions on arrays.

Exercise 16: Implement reduce()

Let's add a reduce() function to the Array type. Like map. Take note this is different from the reduce in ES5, which returns a value instead of an Array!
*/

Array.prototype.reduce = (combiner, initialValue) => {
	let counter, accumulatedValue;

	// If the array is empty, do nothing
	if (this.length === 0) {
		return this;
	}
	else {
		// If the user didn't pass an initial value, use the first item.
		if (arguments.length === 1) {
			counter = 1;
			accumulatedValue = this[0];
		}
		else if (arguments.length >= 2) {
			counter = 0;
			accumulatedValue = initialValue;
		}
		else {
			throw "Invalid arguments.";
		}

		// Loop through the array, feeding the current value and the result of
		// the previous computation back into the combiner function until
		// we've exhausted the entire array and are left with only one value.
		while(counter < this.length) {
			accumulatedValue = combiner(accumulatedValue, this[counter])
			counter++;
		}

		return [accumulatedValue];
	}
};


/*
  Exercise 17: Retrieve the largest rating.

  Let's use our new reduce function to isolate the largest value in an array of ratings.
*/
const reduceRating = () => {
	var ratings = [2,3,1,4,5];

	// You should return an array containing only the largest rating. Remember that reduce always
	// returns an array with one item.
	return ratings.
		reduce((rating, nextRating) => {
			let largestRating = 0;

			if (nextRating > rating) {
				largestRating = nextRating;
			}
			
			return largestRating;
		});  // Complete this expression
}

/*
Exercise 18: Retrieve url of the largest boxart

Let's try combining reduce() with map() to reduce multiple boxart objects to a single value: the url of the largest box art.
*/
const reduceBoxarts = () => {
	// You should return an array containing only the URL of the largest box art. Remember that reduce always
	// returns an array with one item.
	return boxarts.
		reduce((current, next) => {
			const { width: currentWidth, height: currentHeight } = current;
			const { width: nextWidth, height: nextHeight } = next;
			
			let largestBoxart = current;
			const currentSize = currentWidth + currentHeight;
			const nextSize = nextWidth + nextHeight;
			
			if (nextSize > currentSize) {
				largestBoxart = next;
			}
			
			return largestBoxart;
		}).map(art => art.url);   // Complete this expression
}

// console.log(reduceBoxarts());

/*
Exercise 20: Retrieve the id, title, and smallest box art url for every video.

This is a variation of the problem we solved earlier, where we retrieved the url of the boxart with 
a width of 150px. This time we'll use reduce() instead of filter() to retrieve the smallest box art 
in the boxarts array. 
*/

const reduceInsteadOfFilter = () => {

	// Use one or more concatMap, map, and reduce calls to create an array with the following items (order doesn't matter)
	// [
	//	 {"id": 675465,"title": "Fracture","boxart":"http://cdn-0.nflximg.com/images/2891/Fracture120.jpg" },
	//	 {"id": 65432445,"title": "The Chamber","boxart":"http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg" },
	//	 {"id": 654356453,"title": "Bad Boys","boxart":"http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg" },
	//	 {"id": 70111470,"title": "Die Hard","boxart":"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" }
	// ];
	
	return movieListsBoxarts.
		concatMap(({ videos }) => {
			return videos.concatMap(({ id, title, boxarts }) => {
				return boxarts.reduce((acc, next) => {
					const { width: accWidth, url: accUrl } = acc, 
							{ width: nextWidth, url: nextUrl } = next;
					const boxart = accWidth < nextWidth ? accUrl : nextUrl;
					
					if (accWidth) test = { id, title, boxart };
					
					return test;
				});			
			});
		});
}

// console.log('Reduced: ', reduceInsteadOfFilter());
// reduceInsteadOfFilter();

/*
Zipping Arrays:

Sometimes we need to combine two arrays by progressively taking an item from each and combining the 
pair. If you visualize a zipper, where each side is an array, and each tooth is an item, you'll have 
a good idea of how the zip operation works.

Exercise 21: Combine videos and bookmarks by index

Use a for loop to traverse the videos and bookmarks array at the same time. For each video and 
bookmark pair, create a {videoId, bookmarkId} pair and add it to the videoIdAndBookmarkIdPairs array.
*/

const zip = () => {
	let	counter;
	const videoIdAndBookmarkIdPairs = [];

	for (counter = 0; counter < Math.min(videos.length, bookmarks.length); counter++) {
		// Insert code here to create a {videoId, bookmarkId} pair and add it to the videoIdAndBookmarkIdPairs array.
		let videoId = videos[counter].id;
		let bookmarkId = bookmarks[counter].id
		
		videoIdAndBookmarkIdPairs.push({ videoId, bookmarkId });
	}

	return videoIdAndBookmarkIdPairs;
}

// console.log('Zipping: ', zip());

/*
Exercise 22: Implement zip

Let's add a static zip() function to the Array type. The zip function accepts a combiner function, 
traverses each array at the same time, and calls the combiner function on the current item on the 
left-hand-side and right-hand-side. The zip function requires an item from each array in order to 
call the combiner function, therefore the array returned by zip will only be as large as the 
smallest input array.
*/

Array.zip = (left, right, combinerFunction) => {
	var counter,
		results = [];

	for(counter = 0; counter < Math.min(left.length, right.length); counter++) {
		// Add code here to apply the combinerFunction to the left and right-hand items in the respective arrays
		results.push(combinerFunction(left[counter], right[counter]));
	}

	return results;
};

/*
Exercise 23: Combine videos and bookmarks by index

Let's repeat exercise 21, but this time lets use your new zip() function. For each video and 
bookmark pair, create a {videoId, bookmarkId} pair.
*/

// Use imported "videos" and "bookmarks"
const zipVideos = () => {
	// return Array.
	// 	zip( //... finish this expression
}
		