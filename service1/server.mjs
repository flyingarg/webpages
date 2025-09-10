import { createServer } from 'node:http'
import { hostname } from 'node:os';
import url from 'node:url';
import path from 'node:path';
import fs, { exists } from 'node:fs';

const host = '127.0.0.1';
const port = 9999;

const server = createServer((req, res) => {

	var uri = url.parse(req.url?.toString()).pathname
	var filename = path.join(process.cwd(), 'app', uri);
	console.log(`Filename : ${filename}`);

	var file_extension = uri.split(".")[1];
	console.log(`Requested page extension : ${file_extension}`);
	var content_type = 'text/plain';
	switch (file_extension) {
		case "js":
			content_type = 'text/javascript';
			break;
		case "html":
			content_type = 'text/html';
			break;
		case "css":
			content_type = 'text/css';
			break;
		case "ico":
			content_type = 'image/x-image';
			break;
		default:
			content_type = 'text/plain';
	}
	console.log(`Serving Content-Type : ${content_type}`);

	fs.exists(filename, function(exists){
		if(!exists) {
			res.statusCode = 404;
			res.setHeader('Content-Type', 'text/plain');
			res.end("Content Not Found");
			return;
		}

		fs.readFile(filename, "binary", function(err, file) {
			if(err) {
				res.statusCode = 500;
				res.setHeader('Content-Type', 'text/plain');
				res.end("Application Error");
				return;
			}

			res.setHeader('Content-Type', content_type);
			res.write(file, "binary");
			res.statusCode = 200;
			res.end();
		});
	});
});

server.listen(port, hostname, () => {
	console.log(`Server started on ${host} and ${port}`);
});
