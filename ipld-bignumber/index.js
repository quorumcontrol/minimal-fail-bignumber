var dagCBOR = require('ipld-dag-cbor');

dagCBOR.util.serialize({test: "true"}, (err, serialized) => {
    console.log("worked: ", serialized);
});