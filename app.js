const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const expressLayouts = require('express-ejs-layouts');
const userRoutes = require('./routes/userRoutes');
const indexRoutes = require('./routes/indexRoutes');
const playRoutes = require('./routes/playRoutes');
<<<<<<< HEAD
const session = require('express-session');
const flash = require('connect-flash');
=======
>>>>>>> 15614a6d740f4c151c7474df2fbea76496f6e5ad
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;


app.use(session({
    secret: 'danielGostosu',
    resave: true,
    saveUninitialized: true

}));

app.use(flash());

app.use((req, res, next) => {
    res.locals.sucess_msg = req.flash('sucess_msg');
    res.locals.error_msg = req.flash('error_msg');
});

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(expressLayouts);

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));


app.use('/users', userRoutes);
app.use('/', indexRoutes);
app.use('/', playRoutes);

const renderAllViews = (dirPath, baseRoute = '') => {
    fs.readdirSync(dirPath).forEach(file => {
        const fullPath = path.join(dirPath, file);
        const route = path.join(baseRoute, file.replace('.ejs', ''));

        if (fs.statSync(fullPath).isDirectory()) {
            renderAllViews(fullPath, route);
        } else if (file.endsWith('.ejs')) {
            app.get(route === '/index' ? '/' : route, (req, res) => {
                res.render(path.join(baseRoute, file.replace('.ejs', '')));
            });
        }
    });
};

renderAllViews(path.join(__dirname, 'views'));

app.listen(PORT, () => {
    console.log(`Servidor ligado na porta ${PORT}`);
});
