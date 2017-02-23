const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').load();

app.use(express.static(path.join(__dirname, '../client')));;
app.use(cookieParser());
app.use(bodyParser.urlencoded());
app.use(session({secret: "topsecret"}));

//routers
const authRouter = require('./routers/authRouter.js')(express);
const searchRouter = require('./routers/searchRouter.js')(express);
app.use('/search', searchRouter);
app.use('/auth', authRouter);


app.listen(PORT, function() {
  console.log('listening on port 3000');
})