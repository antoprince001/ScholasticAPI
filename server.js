const express = require('express');
const app = express();
const router =  require('./routes/book.routes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const db = require("./models");
db.sequelize.sync();

app.get("/", (req, res) => {
    res.json({ message: "Welcome to Scholastic API." });
});

app.use('/api/books', router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
