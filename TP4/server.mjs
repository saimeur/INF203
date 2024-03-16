"use strict";

import {createServer} from "http";
import fs from "fs";
import path from 'path';
import { parse } from "querystring";

function getMimeType(filePath) {
    const extname = path.extname(filePath);
    switch (extname) {
        case ".html":
            return "text/html";
        case ".css":
            return "text/css";
        case ".js":
            return "application/javascript";
        case ".mjs":
            return "application/javascript";
        case ".png":
            return "image/png";
        case ".jpg":
            return "image/jpeg";
        default:
            return "application/octet-stream";
    }
}

let users = [];

// request processing
function webserver( request, response ) {
    if(request.url==="/kill"){
        response.setHeader("Content-Type", "text/html; charset=utf-8");
        response.end("<!doctype html><html><body>The server will stop now.</body></html>");
        process.exit(0);
    }
    else if(request.url.startsWith("/hallo")) {
        const queryParams = parse(request.url.split("?")[1]);
        const userName = queryParams.user ? queryParams.user : "Anonymous";
        const decodedUserName = decodeURIComponent(userName);
        response.setHeader("Content-Type", "text/html; charset=utf-8");
        response.end(`<!doctype html><html><body>hallo ${decodedUserName}</body></html>`)}
    else if(request.url.startsWith("/coucou")) {
        const queryParams = parse(request.url.split("?")[1]);
        console.log(queryParams.name)
        const userName = queryParams.name ? queryParams.name.replace(/</g, '_').replace(/>/g, '_') : "Anonymous";
        response.setHeader("Content-Type", "text/html; charset=utf-8");
        response.end(`<!doctype html><html><body>coucou ${userName}, the following users have already visited this page: ${users.join(', ')}</body></html>`);
        users.push(decodeURIComponent(userName));} // save the name in the users array
    else if(request.url.startsWith("/clear")) {
        users = [];
        response.setHeader("Content-Type", "text/html; charset=utf-8");
        response.end(`<!doctype html><html><body>Users list cleared</body></html>`)}
    else if(request.url.startsWith("/Files/")){
        const filePath = request.url.substring(7);
        if (!filePath.includes("..")) {
            fs.readFile(filePath, (err, data) => {
                if (err) {
                    response.writeHead(404);
                    response.end("File not found");
                } else {
                    const contentType = getMimeType(filePath);
                    response.writeHead(200, { "Content-Type": contentType });
                    response.end(data);
                }
            });
        } else {
            response.writeHead(403); // Forbidden
            response.end("Access to parent directories is not allowed");
        }
    }
    else{
        response.setHeader("Content-Type", "text/html; charset=utf-8");  
        response.end("<!doctype html><html><body>Server works!</body></html>");
    }
    console.log("Got a request!");
    console.log(request.url);
    }
    

// server object creation
const server = createServer(webserver);
console.log(process.argv)
const port = process.argv[2] || 8000;

// server starting
server.listen(port, (err) => {});
