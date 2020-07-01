/**
 * The Server Can be configured and created here...
 *
 * You can find the JSON Data file here in the Data module. Feel free to impliment a framework if needed.
 */

/*
-- This is the product data, you can view it in the file itself for more details 
{
    "_id": "019",
    "isActive": "false",
    "price": "23.00",
    "picture": "/img/products/N16501_430.png",
    "name": "Damage Reverse Thickening Conditioner",
    "about": "Dolor voluptate velit consequat duis. Aute ad officia fugiat esse anim exercitation voluptate excepteur pariatur sit culpa duis qui esse. Labore amet ad eu veniam nostrud minim labore aliquip est sint voluptate nostrud reprehenderit. Ipsum nostrud culpa consequat reprehenderit.",
    "tags": [
        "ojon",
        "conditioner"
    ]
}
*/

const data = require('./data')
const http = require('http')
const hostname = 'localhost'
const port = 3035

function escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function search(query) {

    const escapedQuery = escapeRegexCharacters(query.trim())

    if (escapedQuery === '') return []

    let filterByName = data.filter(datum => datum.name.match(query) && datum.isActive);
    if (filterByName.length !== 0) return filterByName

    let filterByAbout = data.filter(datum => datum.about.match(query) && datum.isActive);
    if (filterByAbout.length !== 0) return filterByAbout

    return []
}

/**
 * Start the Node Server Here...
 *
 * The http.createServer() method creates a new server that listens at the specified port.
 * The requestListener function (function (req, res)) is executed each time the server gets a request.
 * The Request object 'req' represents the request to the server.
 * The ServerResponse object 'res' represents the writable stream back to the client.
 */
http.createServer(function (req, res) {
    if (req.method === 'POST' && req.url === '/search') {

        let body = [];
        let result = [];
        req.on('error', (err) => {
            console.error(err);
            res.statusCode = 500
            res.end()
        }).on('data', (chunk) => {
            body.push(chunk);
        }).on('end', () => {
            body = Buffer.concat(body).toString();

            let bodyJson = JSON.parse(body)
            result = search(bodyJson.query)

            res.statusCode = 200
            res.write(JSON.stringify(result))
            res.end()
        })
    } else {
        res.statusCode = 404
        res.end()
    }
}).listen(port)

console.log(`[Server running on ${hostname}:${port}]`)
