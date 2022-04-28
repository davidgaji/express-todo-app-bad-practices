export type Task = { index: number; value: string; done: boolean };

let TodoItems: Task[] = [];
let index = 0;

const insertTask = (task: Omit<Task, "index">) => {
  index += 1;
  const newTask: Task = { ...task, index };
  TodoItems.push(newTask);
  return newTask;
};

const deleteTask = (toDeleteIndex: number) => {
  TodoItems = TodoItems.filter(({ index }) => index === toDeleteIndex);
};

const modifyTask = (task: Task) => {
  deleteTask(task.index);
  TodoItems.push(task);
};

const findByIndex = (searchIndex?: number) =>
  TodoItems.find(({ index }) => index === searchIndex);

const find = () => [...TodoItems];

insertTask({ value: "learn react", done: false });
insertTask({ value: "Go shopping", done: true });
insertTask({ value: "buy flowers", done: true });

export const TaskModel = {
  insertTask,
  deleteTask,
  modifyTask,
  findByIndex,
  findAll: find,
};
