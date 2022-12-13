const express = require('express')
const app = express()
const port = 3000


// in memory book data
//
let books = [{
  id: 0,
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  releaseYear: '1925',
  checkedOut: true
}, {
  id: 1,
  title: 'To Kill a Mockingbird',
  author: 'Harper Lee',
  releaseYear: '1960',
  checkedOut: true
}, {
  id: 2,
  title: 'One Hundred Years of Solitude',
  author: 'Gabriel García Márquez',
  releaseYear: '1967',
  checkedOut: false
}, {
  id: 3,
  title: 'Beloved',
  author: 'Toni Morrison',
  releaseYear: '1987',
  checkedOut: true
}]


// API endpoints
//
app.get('/', (req, res) => {
  res.send('Hello, World!')
})

// TODO Add two numbers, 'first' and 'second' as query parameters
// Ex: /add?first=4&second=8 => Returns "12"


// TODO SOLIDWORKS-, 'x' and 'y' as query parameters, repeat "SOLID" x times and "WORKS" y times
// Ex: /repeat?x=1&y=1 => Returns "SOLIDWORKS"

// TODO Look up a book by ID
// Ex: /book/2 => Returns full json object for "100 Years..."


// TODO Return a summary of book stats
// (total books, oldest release year, how many checked out?)


// app startup
//
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
