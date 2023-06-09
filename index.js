const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/phonebookApp', { useNewUrlParser: true, useUnifiedTopology: true})
.then (() => {
  console.log('Connection OPEN!');
})
.catch (err => {
  console.log('Oh no! An ERROR occured!');
  console.log(err);
})

// This is where we declare a sort of blueprint on how we wanted our data should be structured
const contactSchema = new mongoose.Schema({
  name: String,
  phone: Number
});

// The first property is a name we choose for the model, followed by the schema we just created above
const Contact = mongoose.model('Contact',contactSchema)
const person = new Contact({name: 'Roowell', phone: 09152034117})
// After this line, this doesn't add the new instance to our phonebookApp database yet
// To test, use <node -i -e "$(< index.js)"> instead of .load index.js (which causes an infinite loop at the moment)
person.save()
.then(data => {
  console.log('Entry added!');
  console.log(data);
})
.catch(error => {
  console.log('Error occured!');
  console.log(error);
});