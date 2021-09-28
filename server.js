require('dotenv').config();

// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");
const nodemailer = require("nodemailer");
const email = process.env.email;
const superSecretPwd = process.env.superSecretPwd;
const tokenFb = process.env.tokenAccesoFB

// Create an instance of the express app.
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static("public"));

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 3000;

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Redirect to  https://www.akkaconsulting.com.mx
const targetBaseUrl = 'https://www.akkaconsulting.com.mx/inicio';



// Routes
app.get('/', function (req, res) {
    // res.redirect(targetBaseUrl);
    res.render('inicio');

});
app.get('/inicio', function (req, res) {
    res.render('inicio')
});
app.get('/privacidad', function (req, res) {
    res.render('privacidad');
});
app.get('/outplacement', function (req, res) {
    res.render('outplacement');
});
app.get('/contacto', function (req, res) {
    res.render('contacto');
});
app.get('/capacitacion-directores-colaboradores-clave', function (req, res) {
    res.render('capacitacion-directores-colaboradores-clave');
});
app.get('/blog-post', function (req, res) {
    res.render('blog-post');
});
app.get('/blog', function (req, res) {
    res.render('blog');
});
app.get('/comunicacion-efectiva', function (req, res) {
    res.render('comunicacion-efectiva');
});
app.get('/desarrollo-facilitadores', function (req, res) {
    res.render('desarrollo-facilitadores');
});
app.get('/efectividad-en-almacenes', function (req, res) {
    res.render('efectividad-en-almacenes');
});
app.get('/formacion-de-coaching', function (req, res) {
    res.render('formacion-de-coaching');
});
app.get('/gestion-del-capital-humano', function (req, res) {
    res.render('gestion-del-capital-humano');
});
app.get('/proceso-akka-consulting', function (req, res) {
    res.render('proceso-akka-consulting');
});
app.get('/reestructuracion-areas-kpis', function (req, res) {
    res.render('reestructuracion-areas-kpis');
});
app.get('/solucion-de-conflictos', function (req, res) {
    res.render('solucion-de-conflictos');
});
app.get('/solucion-problemas-organizacionales', function (req, res) {
    res.render('solucion-problemas-organizacionales');
});
app.get('/team-development', function (req, res) {
    res.render('team-development');
});
app.get('/ventas-exitosas', function (req, res) {
    res.render('ventas-exitosas');
});
app.get('/gracias', function (req, res) {
    res.render('gracias');
});


// Nodemailer route

app.post("/ajax/email", function (request, response) {
    console.log(email);
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        secure: false,
        port: 25,
        auth: {
            user: email,
            pass: superSecretPwd
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    var textBody = `FROM: ${request.body.name}; EMAIL: ${request.body.email}; MESSAGE: ${request.body.message}`;
    var htmlBody = `<h2>Correo de contacto</h2>
    <p>Nombre: ${request.body.name}</p>
     <p>Correo electrónico: <a href='mailto: ${request.body.email}'>${request.body.email}</a></p>
     <p>Número de contacto:${request.body.number}</p>
     <p>Message: ${request.body.message}</p>`;
    var mail = {
        from: '"Team: Xyncs Web Studio',
        to: 'hebrit_626@hotmail.com',
        subject: '¡Alguien ha dejado sus datos en tu sitio web!',
        html: htmlBody
        // jhosue@akkaconsulting.com.mx
    };
    transporter.sendMail(mail, function (err, info) {
        if (err) {
            return console.log(err);
        } else {
            console.log("message sent!");
        };
    });
});


// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});