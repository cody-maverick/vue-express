const express = require('express');
const server = express();
const path = require('path');
const {createRenderer} = require('vue-server-renderer')
// const clientManifest = require('./dist/vue-ssr-client-manifest.json')
const bundle = require('./dist/server.bundle.js');
const template = require('fs').readFileSync(path.join(__dirname, 'ssrhtml.html'), 'utf-8')

server.use(express.static(path.join(__dirname, '/dist')));

// const JSONforServer = require('./dist/vue-ssr-server-bundle.json')


const renderer = createRenderer({
    // runInNewContext: true, // рекомендуется
    // inject: false,
    template,
})


// const createApp = require('./dist/main.js')

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
                console.log("Ошибка:", err)
            }
            // console.log("Html:", html)
            res.end(html)
        }, err => {
            console.log(err)
        })
    })


})


server.listen(4000, () => {
    console.log('Сервер запущен')
});