const router = require("express").Router();
const auth = require("../middleware/auth");
const Todo = require("../models/todoModel");

module.exports = router;

router.post("/", auth, async (req, res) => {
  try {
    const { title } = req.body;
    //validation
    if (!title)
      return res
        .status(400)
        .json({ msg: "Title is required to create new todo item!!!" });
    const newTodo = new Todo({
      title,
      userId: req.user,
    });
    const savedTodo = await newTodo.save();
    res.json(savedTodo);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

router.get("/all", auth, async (req, res) => {
  try {
    const todos = await Todo.find({ userId: req.user });
    res.json(todos);
  } catch (err) {
    return res.status(500).json({ error: err });
  }
});

router.delete("/:id", auth, async (req, res) => {
  try {
    const todo = await Todo.findOne({ userId: req.user, _id: req.params.id });
    if (!todo) {
      return res
        .status(400)
        .json({ msg: "No such todo associated to this account!" });
    }
    const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
    return res.json(deletedTodo);
  } catch (err) {
    return res.status(500).json({ error: err });
  }
});
