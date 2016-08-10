var iPromise = (function(res, rej) {

    return new Promise(function(resolve, reject) {
        if (resolve) resolve(res);
        if (reject) reject(rej);

    });

});

var ip = iPromise(res, rej);

ip.then(res, rej);

function res() {
    console.log('inside resolve');
};

function rej() {
    console.log('inside reject');
};

/*iPromise(
	res, 
	rej
); */