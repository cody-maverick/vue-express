const express = require('express');
const app = express();
const path = require('path');
const {createBundleRenderer} = require('vue-server-renderer')
const clientManifest = require('./dist/vue-ssr-client-manifest.json')
const template = require('fs').readFileSync(path.join(__dirname,'./public/ssrhtml.html'), 'utf-8')

app.use(express.static(path.join(__dirname, '/dist')));

const JSONforServer = require('./dist/vue-ssr-server-bundle.json')

const renderer = createBundleRenderer(JSONforServer, {
    runInNewContext: false, // рекомендуется
    inject: false,
    template,
    clientManifest
})


// app.use((error, req, res, next) => {
//     // Ошибка, выдаваемая в ответ на неправильно сформированный запрос
//     console.log(error, req, res, next);
// });

app.get('*', (req, res) => {
    const context = {url: req.url}
    // const appVue = createApp(context)

    renderer.renderToString(context, (err, html) => {

        // обработка ошибок...
        console.log("Ошибка:", err)
        console.log("Html:", html)
        res.end(html)
    })
})


app.listen(2000, () => {
    console.log('Сервер запущен')
});