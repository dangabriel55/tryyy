const http = require("http");
const url = require("url");
const StringDecoder = require("string_decoder").StringDecoder;
const util = require("util");
const formidable = require("formidable");

const server = http.createServer(function(req, res) {
    console.log(http.METHODS);
});



