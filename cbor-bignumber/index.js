var cbor = require('cbor');

var encoded = cbor.encode(true); // returns <Buffer f5>
cbor.decodeFirst(encoded, function(error, obj) {
    console.log("worked");
});