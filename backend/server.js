const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;
const path = require('path');

app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://Team:Teamwork@expeerience-8vflz.mongodb.net/expeerience?retryWrites=true&w=majority";
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);
mongoose.connect(uri);

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const collegeRouter = require('./routes/college.route');
const majorRouter = require('./routes/major.route');
const skillRouter = require('./routes/skill.route');
const userRouter = require('./routes/user.route');
const projectRouter = require('./routes/project.route');
const requestRouter = require('./routes/request.route');
const messageRouter = require('./routes/message.route');

app.use('/college', collegeRouter);
app.use('/major', majorRouter);
app.use('/skill', skillRouter);
app.use('/user', userRouter);
app.use('/project', projectRouter);
app.use('/request', requestRouter);
app.use('/message', messageRouter);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('../client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '/../client', 'build', 'index.html'));

  });
}
app.listen(port, () => {
    console.log("Server is running on port: " + port);
});