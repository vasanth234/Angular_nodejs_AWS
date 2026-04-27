const express = require("express");
const router = express.Router();

const { PutCommand } = require("@aws-sdk/lib-dynamodb");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
  try {
    const db = req.app.get("db");
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // ✅ hash password BEFORE saving
    const hashedPassword = await bcrypt.hash(password, 10);

    const params = {
      TableName: "usernew",
      Item: {
        id: uuidv4(),
        name,
        email,
        password: hashedPassword
      }
    };

    await db.send(new PutCommand(params));

    res.json({ message: "User registered successfully" });

  } catch (err) {
    console.error("DynamoDB ERROR:", err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;