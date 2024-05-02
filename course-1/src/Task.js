import './task.css'

export function TaskCard({ready}) {
  const headerStyle = { background: "#lightblue", color: "yellow" };

  const done = {color: 'lightgreen'}
  const pending = {color: 'red'}

  return (
    <div style={{ background: "#20202020" }}>
      <h1 style={headerStyle}>algo</h1>
      <p className='paragraphs'>algo mas</p>
      <p className= {ready ? 'bgGreen' : 'bgRed'}>algo mas</p>
      <span style={ready ? done : pending}>{ready ? 'completado' : 'pendiente'}</span>
    </div>
  );
}
