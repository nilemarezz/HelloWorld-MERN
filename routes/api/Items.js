const express = require("express");
const router = express.Router();

const Item = require("../../models/Item");

const auth = require('../../middleware/auth');
router.get("/", async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.json({ success: false });
  }
});

router.post("/", auth ,async (req, res) => {
  try {
    const newItem = { name: req.body.name };
    console.log(newItem)
    const items = await Item.create(newItem);
    res.json(items);
  } catch (err) {
    res.json({ success: false });
  }
});

router.delete("/:id", auth,async (req, res) => {
  try {
    await Item.findByIdAndDelete(req.params.id);
    res.json({ success: true , id: req.params.id});
  } catch (err) {
    res.json({ success: false });
  }
});

module.exports = router;
