const express = require("express");
const route = express.Router();


postList = [
  { 'id': '1', 'titre': "Premier post", 'contenu': 'détails premier post' },
  { 'id': '2', 'titre': "Deuxième post", 'contenu': 'détails deuxième post' },
  { 'id': '3', 'titre': "Troisième post", 'contenu': 'détails troisième post' },
  ];


  route.get("/", (req, res) => {
    res.status(200).json(postList);
  });

  module.exports = route;
