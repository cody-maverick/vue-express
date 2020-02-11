const express = require('express');
const server = express();
const compression = require('compression');

const path = require('path');
const fs = require('fs');

const {createBundleRenderer} = require('vue-server-renderer');
// const bundle = require('./dist/server.bundle.js');
const template = fs.readFileSync(path.join(__dirname, 'ssrhtml.html'), 'utf-8');
const setupDevServer = require('./config/setup-dev-server');

const favicon = require('serve-favicon');

const createRenderer = (bundle) => createBundleRenderer(bundle, {
    runInNewContext: false,
    template
});

let renderer;

if (process.env.NODE_ENV === 'development') {
    setupDevServer(app, (serverBundle) => {
        renderer = createRenderer(serverBundle);
    });
} else {
    renderer = createRenderer(require('./dist/vue-ssr-server-bundle.json'));
}

server.use(compression());
server.use(express.static(path.join(__dirname, '/dist')));
server.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// server.get('*', (req, res) => {
//     bundle.default({url: req.url}).then((app) => {
//         const context = {
//             title: 'Vue JS - Server Render',
//             meta: `<meta description="vuejs server side render">`
//         };
//
//         renderer.renderToString(app, context, function (err, html) {
//             // обработка ошибок...
//             if (err) {
//                 if (err.code === 404) {
//                     res.status(404).end('Page not found')
//                 } else {
//                     res.status(500).end('Internal Server Error')
//                 }
//             } else {
//                 res.end(html)
//             }
//         }, err => {
//             console.log(err)
//         })
//     })
// })

server.get('*', async (req, res) => {
    console.log(req.url)
    const context = {
        url: req.url || '/',
        // state: {
        //     title: 'Vue SSR Simple setup'
        // }
    }

    let html;

    try {
        html = await renderer.renderToString(context);
        console.log(html)
    } catch (err) {
        console.log(err)
        if (err.code === 404) {
            return res.status(404).send('404 | Page Not Found');
        }
        return res.status(500).send('500 | Internal Server Error');
    }

    res.end(html)
})


server.listen(5000, () => {
    console.log('Сервер запущен')
});