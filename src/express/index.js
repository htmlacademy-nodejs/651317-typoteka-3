'use strict';

const express = require(`express`);

const articleRoutes = require(`./routes/article-routes`);
const mainRoutes = require(`./routes/main-routes`);
const myRoutes = require(`./routes/my-routes`);

const {EXPRESS_DEFAULT_PORT} = require(`../constants`);

const app = express();

app.use(`/articles`, articleRoutes);
app.use(`/`, mainRoutes);
app.use(`/my`, myRoutes);

app.listen(EXPRESS_DEFAULT_PORT);
