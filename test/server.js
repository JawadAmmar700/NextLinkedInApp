const express = require('express');
const app = express()
const mongoose = require('mongoose');
const cors = require('cors')
const Pusher = require("pusher");
const User = require('./model/Schema')

app.use(cors({ origin: true }));
app.use(express.json());

const pusher = new Pusher({
  appId: "1202258",
  key: "0f451dc85b035e1558d1",
  secret: "8a797030d45768c917a1",
  cluster: "ap1",
  useTLS: true
});

mongoose.connect('mongodb+srv://live:live123@cluster0.m3a5n.mongodb.net/LiveUser?retryWrites=true&w=majority',
  { useUnifiedTopology: true, useNewUrlParser: true }, () => console.log('connected'))





// const db = mongoose.connection
// db.once('open', () => {
//   console.log('connected');
//   const changeStream = mongoose.connection.collection("lives").watch();
//   changeStream.on('change', (data) => {

//     try {
//       if (data.operationType === 'insert') {
//         pusher.trigger("lives", "inserted", {
//           data: data.fullDocument
//         })
//       } else {

//         console.log('something went wrong in the event');
//       }
//     } catch (err) {
//       console.log(err);
//     }


//   })

// })









app.get('/', (req, res) => {
  User.find((err, doc) => {
    res.json(doc)
  })

})

app.post('/', (req, res) => {

  const { name, des, src, video, email, photo, time } = req.body
  const user = new User({
    name,
    des,
    src,
    video,
    email,
    photo,
    time
  })

  user.save().then(() => {
    console.log('user created');
    User.find((err, doc) => {
      res.json(doc)
    })
  }).catch(err => console.log(err))

})

app.listen(5000, () => console.log('live 5000'))
