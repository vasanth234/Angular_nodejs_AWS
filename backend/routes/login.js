const express = require("express");
const router = express.Router();

const { GetCommand } = require("@aws-sdk/lib-dynamodb");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
  try {
    const db = req.app.get("db");
    const { email, password } = req.body;

    const params = {
      TableName: "usernew",
      Key: { email }
    };

    const result = await db.send(new GetCommand(params));

    if (!result.Item) {
      return res.status(404).json({ message: "User not found" });
    }

    // ✅ compare hashed password
    const isMatch = await bcrypt.compare(password, result.Item.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // ✅ create JWT token
    const token = jwt.sign(
      {
        email: result.Item.email,
        name: result.Item.name
      },
      process.env.JWT_SECRET,   // keep this in .env
      { expiresIn: "1h" }
    );

    // ✅ send token + user
    res.json({
      message: "Login successful",
      token,
      user: {
        email: result.Item.email,
        name: result.Item.name
      }
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Login failed" });
  }
});

module.exports = router;