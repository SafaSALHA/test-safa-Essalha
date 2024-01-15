const express = require("express");
const path = require("path");

routePoste = require("./backend/routes/posts.route")
const app = express();

// Serve static files from the 'dist' folder
app.use(express.static(path.join(__dirname, 'backend/www')));



app.get('/posts', (req, res) => {
  res.sendFile(path.join(__dirname, 'backend/www/index.html'));
});
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'backend/www/index.html'));
});

// Route
app.use("/api/postList", routePoste);






const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
