const express = require('express')
const next = require('next')
const { parse } = require('url');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const getRoutes = require('./routes')

const routes = getRoutes()
app.prepare()
  .then(() => {
    const server = express()

    server.get('/detail-film', (req, res) => {
      const actualPage = '/detail-film';
      app.render(req, res, actualPage, req.query);
    });


    server.get('*', (req, res) => {
      const parsedUrl = parse(req.url, true)
      const { pathname, query = {} } = parsedUrl
      const route = routes[pathname]
      if (route) {
        return app.render(req, res, route.page, route.query)
      }
      return handle(req, res)
    })

    server.listen(3000, (err) => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
  })
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  })
