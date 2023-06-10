const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/storeApp', { useNewUrlParser: true, useUnifiedTopology: true})
.then (() => {
  console.log('Connection OPEN!');
})
.catch (err => {
  console.log('Oh no! An ERROR occured!');
  console.log(err);
})

const productSchema = new mongoose.Schema({
  // As we know, the shorthand form of the code below is <name: String>
  name: {
    type: String,
    required: true
  }, // Here we added a validation property 'required' which is set to 'true'
  price: {
    type: Number,
    required: true
  }
});

const Product = mongoose.model('Product', productSchema);
const handheld = new Product({name: 'Steam Deck', price: 399});
handheld.save()
.then(data => {
  console.log('Product added!');
  console.log(data);
})
.catch (error => {
  console.log('Error occured!');
  console.log(error);
});