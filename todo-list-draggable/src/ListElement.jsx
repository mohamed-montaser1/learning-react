export default function ListElement({ title, id, mode }) {
  const handleDragStart = (e) => {
    console.dir(e.target);
    e.dataTransfer.setData("text/plain", id);
  };
  return (
    <>
      <li draggable="true" onDragStart={handleDragStart} id={id} mode={mode}>
        {title}
      </li>
    </>
  );
}
