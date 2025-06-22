const test_array = [ 1, 2, 4, 6, 3, 5, 7, 2 ];
console.log("Test Array : " + test_array);

function filterLessThanThree(input){
	return input < 3;
}

const filtered = test_array.filter(filterLessThanThree);
console.log("Filtered Array : " + filtered);

const trippled = test_array.map( (input) => {
	return input*3;
});
console.log("Trippled Array : " + trippled);
