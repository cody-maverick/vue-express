const express = require('express');
const server = express();
const compression = require('compression');
const path = require('path');
const {createRenderer} = require('vue-server-renderer');
const bundle = require('./dist/server.bundle.js');
const fs = require('fs');
const template = fs.readFileSync(path.join(__dirname, 'ssrhtml.html'), 'utf-8');
const favicon = require('serve-favicon');

server.use(compression())
server.use(express.static(path.join(__dirname, '/dist')));
server.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
const renderer = createRenderer({
    // runInNewContext: true, // рекомендуется
    // // inject: false,
    template,
})

server.get('*', (req, res) => {
    // const context = {url: req.url}
    // const appVue = createApp(context)

    bundle.default({url: req.url}).then((app) => {
        const context = {
            title: 'Vue JS - Server Render',
            meta: `
        <meta description="vuejs server side render">
      `
        };

        renderer.renderToString(app, context, function (err, html) {
            // обработка ошибок...
            if (err) {
                if (err.code === 404) {
                    res.status(404).end('Page not found')
                } else {
                    res.status(500).end('Internal Server Error')
                }
            } else {
                res.end(html)
            }
        }, err => {
            console.log(err)
        })
    })


})


server.listen(4000, () => {
    console.log('Сервер запущен')
});