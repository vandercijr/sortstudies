var assert = require('assert');

describe ('My sort tests', function () {
	describe ('Sort', function () {
		describe ('Quicksort', function () {
			it ('should return sorted array fast [1,2,3,4,5,6,7,8,9]', function () {
				var sort = require('../src/quicksort.js');

				var a = [3,5,6,7,8,2,1,9,4];

				assert.deepEqual([1,2,3,4,5,6,7,8,9], sort.quickSort(a));
			})
		});
	});
})
