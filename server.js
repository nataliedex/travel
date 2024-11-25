import express from "express";
import ejs from "ejs";

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 


app.get("/", (req, res) => {
    res.render("index", data);
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});


