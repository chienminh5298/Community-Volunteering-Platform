import cors from "cors";
import express, { json } from "express";
import { readProfilesFromFile, writePostToFile, writeProfilesToFile } from "./fileUtils.js";

// Create an instance of an Express app
const app = express();
app.use(express.json());
app.use(cors());

app.post("/signIn", async (req, res) => {
    const { username, password } = req.body;
    const jsonData = await readProfilesFromFile();
    if (jsonData.account[username] && password === jsonData.account[username].password) {
        res.status(200).send();
    } else {
        res.status(400).send();
    }
});

app.post("/signUp", async (req, res) => {
    const { username, password, firstname, lastname } = req.body;
    const jsonData = await readProfilesFromFile();
    if (jsonData.account[username]) {
        res.status(400).send();
    } else {
        await writeProfilesToFile({ username, password, firstname, lastname });
        res.status(200).send();
    }
});

app.post("/createPost", async (req, res) => {
    const { title, donation, member, description } = req.body;
    const temp = await writePostToFile({ title, donation, member, description });
    res.status(200).json({ data: temp });
});

app.get("/allPost", async (req, res) => {
    const jsonData = await readProfilesFromFile();
    res.status(200).json({ data: jsonData.post });
});

// Define a route for the root URL
app.get("/", (req, res) => {
    res.send("Welcome to your Express server!");
});

// Start the server on port 3001
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
