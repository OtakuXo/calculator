function Buttons({ i, clickHandler }) {
  return (
    <button id={i.id} onClick={() => clickHandler(i)}>
      {i.text}
    </button>
  );
}

export default Buttons;
