// same user can give infinite like 

import express from 'express'
import User from './database.js';
import cors from 'cors';

const app = express()
const port = 3000
app.use(cors());
app.use(express.json());
let org=[];  


app.post('/createPage',async (req, res) => {
  const nameOfOrg=req.body.nameOfOrg;
  // console.log(req.body);
  const email=req.body.email;
  const feed=[];
  const newUser=new User({
    nameOfOrg:nameOfOrg,
    email:email,
    feed:[]
  })
  await newUser.save();


  res.send('Hello World!')
})

app.post('/addFeed',async (req, res) => {
  const nameOfOrg=req.body.nameOfOrg;
  console.log(nameOfOrg)
  // console.log(req.body.feed);
  const feed=req.body.feed;
  const user=await User.findOne({nameOfOrg:nameOfOrg});
  console.log(feed)
  user.feed.push(feed);
  await user.save();
  res.send(req.body)
});

app.put('/updateFeed',async (req, res) => {
  const id=req.body.id;
  
  const user=await User.findOne({_id:id}); 
  // console.log(support);
  
  
  // console.log(support)
  user.feed[0].support++;
  user.markModified('feed');
  await user.save();  
  console.log(user)
  res.send("support increased"); 
})

app.get('/getData',async (req, res) => {
  const data=await User.find();
  res.send(data);
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

