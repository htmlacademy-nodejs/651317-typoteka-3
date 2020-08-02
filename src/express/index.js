"use strict";

const express = require(`express`);
const path = require(`path`);

const articleRoutes = require(`./routes/article-routes`);
const mainRoutes = require(`./routes/main-routes`);
const myRoutes = require(`./routes/my-routes`);

const {HttpCode, EXPRESS_DEFAULT_PORT, PUBLIC_DIR } = require(`../constants`);

const app = express();

app.use(express.static(path.resolve(__dirname, PUBLIC_DIR)));
app.set(`views`, path.resolve(__dirname, `templates`));
app.set(`view engine`, `pug`);

app.use(`/articles`, articleRoutes);
app.use(`/`, mainRoutes);
app.use(`/my`, myRoutes);

app.use((req, res) => {
  res.status(HttpCode.NOT_FOUND).render(`404`);
});

app.use((req, res) => {
  res.status(HttpCode.INTERNAL_SERVER_ERROR).render(`500`);
});

app.listen(EXPRESS_DEFAULT_PORT);
