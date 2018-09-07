const express = require("express");
const next = require("next");
const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const bodyParser = require('body-parser');
const axios = require('axios');
const sgMail = require('@sendgrid/mail');
const multiparty = require('multiparty');
const fs = require('fs');
sgMail.setApiKey('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');

app
    .prepare()
    .then(() => {
        const server = express();

server.use(bodyParser.json());

	server.get('/jobs', (req, res) => {
	  axios.get('https://vangsters.com/api/v1/companies/job-postings?keyword=vangst&match=1')
	  .then(json => res.send(json.data))
	})

	server.post('/sendgrid', (req, res) => {
        const formData = new multiparty.Form();
        formData.parse(req, async (err, fields, files) => {
          if (err) {
            console.log(err)
          }
          console.log(files)
          const path = files.file[0].path;
          const name = files.file[0].originalFilename;
          const buffer = fs.readFileSync(path);
          const base64 = new Buffer(buffer).toString('base64')
          const email = fields.email[0];
          const subject = fields.subject[0];
          const firstName = fields.firstName[0];
          const lastName = fields.lastName[0];
          const jobTitle = fields.jobTitle[0];
          const jobUrl = fields.jobUrl[0];
          const msg = {
            to: 'info@vangst.com',
            from: email,
            subject: subject,
            text: `${firstName} ${lastName} is applying to ${jobTitle} at this link ${jobUrl}`,
            html: `<strong>${firstName} ${lastName} is applying to ${jobTitle} at this link ${jobUrl}</strong>`,
            attachments: [{
              content: base64,
              filename: name,
              disposition: 'attachment',
              content_id: 'mytext'
            }]
          };
          sgMail.send(msg);
        })
        res.status(200).send('success')
      })

      server.post('/sendgridcontact', (req, res) => {
        const formData = new multiparty.Form();
        formData.parse(req, async (err, fields, files) => {
          if (err) {
            console.log(err)
          }
          const email = fields.email[0];
          const subject = fields.subject[0];
          const firstName = fields.firstName[0];
          const lastName = fields.lastName[0];
          const content = fields.content[0];
          const state = fields.state[0];
          const msg = {
            to: 'info@vangst.com',
            from: email,
            subject: subject,
            text: `${firstName} ${lastName} from ${state} is reaching out with this message: "${content}"`,
            html: `<strong>${firstName} ${lastName} from ${state} is reaching out with this message: "${content}"</strong>`
          };
          sgMail.send(msg);
        })
        res.status(200).send('success')
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