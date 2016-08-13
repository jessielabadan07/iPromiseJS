# iPromiseJS

##To use our library:

* Add script reference to your page.

  ```html
  <!-- add reference to ipromise library -->
  <script src="ipromise.js"></script>
  ```

## Sample

```javascript
/*
  Using our IPromise library.
 */

// Initialize
try {

  // Initialize object
  var promise = iPromise(res, rej),
    img = document.querySelector('.img01');


  // Perform then operation
  promise.then(res, rej);

  // If pass
  function res() {

    var message = document.querySelector('#message');

    message.innerText = "Wait for 5 seconds...";

    //console.log(message);

    setTimeout(function() {

      //console.log( img.complete );
      message.innerText += ' Complete: ' + img.complete;

    }, 5000);

  };

  // If fail
  function rej() {
    console.log('Reject: ' + arguments);
  };

} catch (err) {
  console.log('Stack: ' + err.Message);
}
```
