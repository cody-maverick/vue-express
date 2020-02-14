const express = require('express');
const server = express();
const compression = require('compression');

const path = require('path');
const fs = require('fs');

const {createBundleRenderer} = require('vue-server-renderer');
const template = fs.readFileSync(path.join(__dirname, 'ssrhtml.html'), 'utf-8');

const favicon = require('serve-favicon');

const createRenderer = (bundle) => createBundleRenderer(bundle, {
    runInNewContext: false,
    template
});

let renderer = createRenderer(require('./dist/vue-ssr-server-bundle.json'));

server.use(compression());
server.use(express.static(path.join(__dirname, '/dist')));
server.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

server.get('*', async (req, res) => {
    console.log(req.url)
    const context = {
        url: req.url || '/',
        state: {
            title: 'Vue SSR Simple setup'
        }
    }

    let html;

    try {
        html = await renderer.renderToString(context);
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