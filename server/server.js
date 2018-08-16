const axios = require('axios');
const loopback = require('loopback');
const boot = require('loopback-boot');
const bodyParser = require('body-parser');
const app = module.exports = loopback();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.start = function () {
  // start the web server
  return app.listen(function () {
    app.emit('started');
    var baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      var explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
};

app.get('/register', (req, res) => {
  const newUser = {
    studentId: req.query.studentId,
    email: req.query.email
  }
  axios.get('https://18825649.ngrok.io/studentConfirmationTest', newUser)
    .then(response => {
      res.send(response.data);
    })
    .catch(err => {
      res.send(err.message);
    })
})

app.get('/studentConfirmationTest', (req, res) => {
  //user is a student
  const confirmed = {
    status: true
  }
  //user is not a student
  const denied = {
    status: false
  }
  res.send(confirmed);
})

app.get('/checkin', (req, res) => {
  const checkInInstance = req.query;

  axios.get('https://18825649.ngrok.io/checkInTest', checkInInstance)
    .then(response => {
      res.send(response.data);
    })
    .catch(error => {
      res.send(error.message);
    })
})

app.get('/checkInTest', (req, res) => {
  //successful check in
  const success = {
    status: "success"
  }
  //failed to check in
  const error = {
    error: {
      statusCode: 400,
      name: "Error",
      message: "failure"
    }
  }
  res.send(success);
})

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function (err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();
});
