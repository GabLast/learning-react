function TaskList(props) {

  if (props.tasks.length === 0) {
    return <h1>No data</h1>;
  }

  return (
    <>
      {props.tasks.map((it) => (
        <div key={it.id}>
          <h1>{it.title}</h1>
          <p>{it.description}</p>
        </div>
      ))}
    </>
  );
}

export default TaskList;
