const express = require('express');
const bodyParser= require('body-parser')
const app = express();
const MongoClient = require('mongodb').MongoClient;
const { MongoDBNamespace } = require('mongodb');

MongoClient.connect('mongodb+srv://user:password!1@cluster0.jogi3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useUnifiedTopology: true })
.then(client => {
    // ...
    const db = client.db('QA')
    const ingredientsCollection = db.collection('ingredients')
    
    app.post('/ingredients', (req, res) => {
        ingredientsCollection.insertOne(req.body)
          .then(result => {
            console.log(result)
            res.redirect('/ingredients')
          })
          .catch(error => console.error(error))
      })

      app.get('/ingredients', (req, res) => {
        ingredientsCollection.find().toArray()
          .then(results => {
            console.log(results)
          })
          .catch(error => console.error(error))
      
      })

    app.delete('/ingredientDelete', (req, res) => {
      var dele = { namef: ""};
      console.log( req.params)
      ingredientsCollection.deleteOne(
      dele
      )
        .then(result => {
      
          res.json('Deleted')
        })
        .catch(error => console.error(error))
    })
    
      
  })
  .catch(console.error)
  app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static('public'));

app.listen(3000, function() {
    console.log('listening on 3000')
  })

  app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
  })

 
