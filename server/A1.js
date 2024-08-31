const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const multer = require("multer");

const app = express();

// Middleware
app.use("/imgupload", express.static(path.join(__dirname, 'imgupload')));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// MySQL Connection
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "test"
});

con.connect(function (error) {
    if (error) throw error;
    console.log("DB is Connected");
});

// Multer Storage Configuration
const storage = multer.diskStorage({
    destination: path.join(__dirname, 'imgupload'), // Store in 'imgupload' folder
    filename: function(req, file, callback){
        const uniqueName = Date.now() + '-' + file.originalname; // Unique name with original file extension
        callback(null, uniqueName);
    }
});

// Fetch data route
app.get("/api/data_list", (req, res) => {
    const fetch_data = "SELECT * FROM dest";
    con.query(fetch_data, (err, result) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).send({ message: "Error fetching data" });
        }
        console.log(result);
        res.send(result);
    });
});

// Insert data route
app.post("/api/insert", (req, res) => {
    console.log("Insert route hit");
    const upload = multer({ storage: storage }).single('image');

    upload(req, res, function(err) {
        if (err) {
            console.error("Multer error:", err);
            return res.status(500).send({ message: "File upload failed" });
        }
        
        if (!req.file) {
            console.error("No file uploaded");
            return res.status(400).send({ message: "No file uploaded" });
        }
        
        const { desti_name, stay_night, stay_price } = req.body;
        const img = req.file.filename; 
        console.log("Form data received:", { desti_name, stay_night, stay_price, img });

        const query = "INSERT INTO dest (desti_name, stay_night, stay_price, img) VALUES (?, ?, ?, ?)";
        con.query(query, [desti_name, stay_night, stay_price, img], (err, result) => {
            if (err) {
                console.error("Database error:", err);
                return res.status(500).send({ message: "Error inserting data" });
            }
            console.log("Data inserted successfully");
            res.send({ message: "Data submitted successfully" });
        });
    });
});

// Verify data route
app.post("/api/data_verify", (req, resp) => {
    var email=req.body.email;
    var name=req.body.password;
    const qu = "SELECT * FROM info WHERE email = ? AND name = ?";
    
    con.query(qu, [email, name], (err, result) => {
        if (result.length > 0) {
            resp.send(result);
        }else{
            resp.send({message:"Wrong Email or password"});
        }
    });
});


// Start Server
const port = 1338;
app.listen(port, () => {
    console.log("Server is running on port", port);
});
