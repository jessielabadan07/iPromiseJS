/**
 * iPromise library
 *
 **/

var iPromise = (function(res, rej) {

	return new Promise(function(resolve, reject) {
		if (resolve) resolve(res);
		if (reject) reject(rej);

	});

});