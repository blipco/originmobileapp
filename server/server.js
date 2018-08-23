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
  axios.get(`https://startnow.origincodeacademy.com/api/Proxies/validateStudentByEmail?apiToken=a0d440548980c0912e4ab48108439d303f6f882e&moodleUserId=${newUser.studentId}&email=${newUser.email}`)
    .then(response => {
      res.send(response.data);
    })
    .catch(err => {
      res.send(err.message);
    })
})

app.get('/checkin', (req, res) => {
  
  let checkIn = JSON.parse(req.query.checkin_outInstance);
  
  axios.get(`https://startnow.origincodeacademy.com/api/Proxies/checkIn?apiToken=a0d440548980c0912e4ab48108439d303f6f882e&moodleUserId=${checkIn.id}&isoDate=${checkIn.isoDate}&dow=${checkIn.dow}&room=${checkIn.room}&building=${checkIn.building}`)
    .then(response => {
       res.send(response.data);
    })
    .catch(error => {
      res.send(error.message);
    })
})

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function (err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();
});
