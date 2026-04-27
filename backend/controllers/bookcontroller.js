const pgPool = require("../pgdb");

exports.bookcontroller = async (req, res) => {
  try {
    const { first_name, seats, email, gender } = req.body;

    const insertvalue = await pgPool.query(
      'INSERT INTO book(first_name, seats, email, gender) VALUES($1, $2, $3, $4)',
      [first_name, seats, email, gender]
    );

    res.json({ message: "values sent successfully" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "internal server error" });
  }
};


