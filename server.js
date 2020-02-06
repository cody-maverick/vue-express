const express = require('express');
const app = express();
const path = require('path');
const renderer = require('vue-server-renderer').createRenderer();

app.use(express.static(path.join(__dirname, '/dist')));


app.use((error, req, res, next) => {
    // Ошибка, выдаваемая в ответ на неправильно сформированный запрос
    console.log(error, req, res, next);
});

app.get('*', function (req, res) {
    // res.render('./js/app.4c75190.js')

    renderer.renderToString(app, (err, html) => {
        if (err) {
            res.status(500).end('Внутренняя ошибка сервера')
            return
        }
        res.end(`
      <!DOCTYPE html>
      <html lang="en">
        <head><title>Привет</title></head>
        <body>${html}</body>
      </html>
    `)
    })
});


app.listen(2000, () => {
    console.log('Сервер запущен')
});