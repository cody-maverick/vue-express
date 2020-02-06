const express = require('express');
const app = express();
const path = require('path');
const renderer = require('vue-server-renderer').createRenderer();
// const App = require(path.join(__dirname, './src/components/App/App.vue'))



app.use(express.static(path.join(__dirname, '/dist')));


app.use((error, req, res, next) => {
    // Ошибка, выдаваемая в ответ на неправильно сформированный запрос
    console.log(error, req, res, next);
});

// app.get('/', function (req, res) {
//     res.render('js/app.4c75190.js')
// });

app.get('/about', function (req, res) {
    renderer.renderToString(App, (err, html) => {
        console.log(err)
        if (err) {
            res.status(500).end('internal error')
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