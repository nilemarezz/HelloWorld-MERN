const express = require("express");
const router = express.Router();

const Item = require("../../models/Item");

router.get("/", async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.json({ success: false });
  }
});

router.post("/", async (req, res) => {
  try {
    const newItem = { name: req.body.name };
    const items = await Item.create(newItem);
    res.json(items);
  } catch (err) {
    res.json({ success: false });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Item.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.json({ success: false });
  }
});

module.exports = router;
