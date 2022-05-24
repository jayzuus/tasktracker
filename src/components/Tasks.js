import Task from "./Task";
export const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      {/* map creates a new array from calling a function for every array element, in this case each task*/}
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </>
  );
};

export default Task;
