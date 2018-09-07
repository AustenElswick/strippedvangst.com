const express = require("express");
const next = require("next");
const port = 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const bodyParser = require('body-parser');
const axios = require('axios');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');

app
    .prepare()
    .then(() => {
        const server = express();

server.use(bodyParser.json());

	server.get('/jobs', (req, res) => {
	  axios.get('https://vangsters.com/api/v1/companies/job-postings')
	  .then(json => res.send(json.data))
	})

	server.post('/sendgrid', (req, res) => {
	  console.log(req.body)
	  const body = req.body
	  const msg = {
 	    to: body.name,
  	    from: 'info@vangst.com',
  	    subject: body.subject,
  	    text: body.content,
  	    html: '<strong>' + body.content + '</strong>',
	 };
	 sgMail.send(msg);
	})

        server.get('/', (req, res) => {
            res.redirect(302, '/vangst-main-page')
        })

        server.get("/post/:slug", (req, res) => {
            const actualPage = "/post";
            const queryParams = { slug: req.params.slug, apiRoute: "post" };
            app.render(req, res, actualPage, queryParams);
        });

        server.get("/page/:slug", (req, res) => {
            const actualPage = "/post";
            const queryParams = { slug: req.params.slug, apiRoute: "page" };
            app.render(req, res, actualPage, queryParams);
        });

        server.get("/category/:slug", (req, res) => {
            const actualPage = "/category";
            const queryParams = { slug: req.params.slug };
            app.render(req, res, actualPage, queryParams);
        });

        server.get("/_preview/:id/:wpnonce", (req, res) => {
            const actualPage = "/preview";
            const queryParams = { id: req.params.id, wpnonce: req.params.wpnonce };
            app.render(req, res, actualPage, queryParams);
        });

        server.get("*", (req, res) => {
            return handle(req, res);
        });

        server.listen(port, err => {
            if (err) throw err;
            console.log("> Ready on http://localhost:3000");
        });
    })
    .catch(ex => {
        console.error(ex.stack);
        process.exit(1);
    });
