const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const newsRoute = require('./routes/newsRoute');
const cookieParser = require('cookie-parser');
const { requireAuth, checkUser} = require('./middleware/authMiddleware');

const app = express();
const PORT = process.env.PORT || 3000;
// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());

// view engine
app.set('view engine', 'ejs');

// database connection
const dbURI = process.env.MONGODB_URI || 'mongodb+srv://nitish:youare1234@cluster0.zpnyb.mongodb.net/node-auth';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then((result) => app.listen(PORT))
  .catch((err) => console.log(err));

// routes
app.get('*', checkUser);
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', requireAuth, (req, res) => res.render('smoothies'));
// app.get('/getNews', requireAuth, (req, res) => res.render('getNews'));

app.use(authRoutes);
app.use(requireAuth);
app.use(newsRoute);
