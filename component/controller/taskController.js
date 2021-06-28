let { data, idCount } = require("../data");

const getToDoList = (req, res) => {
  res.status(200).json({ success: true, data: data });
};

const getOneTask = (req, res) => {
  const id = req.params.id;

  const item = data.find((element) => element.id === Number(id));
  if (item) {
    return res.status(200).json({ success: true, data: item });
  }
  return res
    .status(400)
    .json({ success: false, messsage: `No Task with id: ${id}.` });
};

const createNewTask = (req, res) => {
  const toDoName = req.body.name;
  console.log(req.body);
  idCount++;
  if (!toDoName) {
    return res
      .status(400)
      .json({ success: false, message: `Please proide the task Name!` });
  }
  data.push({
    id: idCount,
    name: toDoName,
  });
  return res.status(201).json({ success: true, data: data });
};

const updateTask = (req, res) => {
  const toDoId = req.params.id;

  const item = data.find((element) => element.id === Number(toDoId));
  if (!item) {
    return res
      .status(200)
      .json({ success: false, message: `Please provide the valid Task Id!` });
  }

  const toDoName = req.body.name;
  if (!toDoName) {
    return res.status(400).json({
      success: true,
      message: `Please provide the task Name to Update`,
    });
  }

  data.forEach((element) => {
    if (element.id === Number(toDoId)) {
      element.name = toDoName;
    }
  });
  return res.status(200).json({ success: true, data: data });
};

const deleteTask = (req, res) => {
  const toDoId = req.params.id;
  const item = data.find((element) => element.id === Number(toDoId));
  if (!item) {
    return res
      .status(400)
      .json({ success: false, message: `Please provide valid id!` });
  }

  data = data.filter((element) => element.id !== Number(toDoId));
  return res.status(200).json({ success: true, data: data });
};

const invalidUrl = (req, res) => {
  res.status(404).json({ success: false, message: `Invalid Url!!!` });
};

module.exports = {
  getToDoList,
  getOneTask,
  createNewTask,
  updateTask,
  deleteTask,
  invalidUrl,
};
