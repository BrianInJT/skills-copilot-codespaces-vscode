// Create web server
// Create a comments web service that will accept a POST request and save the comment to a file. 
// Then create a GET request that will read the file and return the contents as JSON. 
// The file name should be the date (e.g. 2017-01-01) and the contents of the file should be the comments. 
// If the file does not exist, return an empty array.

const express = require('express')
const app = express()

const fs = require('fs')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/comments', function(req, res) {
    fs.readFile('./comments.json', 'utf8', function(err, data) {
        if (err) {
            res.send([])
        } else {
            res.send(JSON.parse(data))
        }
    })
})

app.post('/comments', function(req, res) {
    fs.readFile('./comments.json', 'utf8', function(err, data) {
        if (err) {
            res.send([])
        } else {
            let arr = JSON.parse(data)
            arr.push(req.body)
            fs.writeFile('./comments.json', JSON.stringify(arr), function(err) {
                if (err) {
                    res.send([])
                } else {
                    res.send(arr)
                }
            })
        }
    })
})

app.listen(3000, function() {
    console.log('Example app listening on port 3000!')
})