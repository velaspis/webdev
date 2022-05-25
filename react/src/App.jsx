import "./App.css";
import { useState, useEffect } from "react";
import Modal from "./component/modal";
function App() {
  const [value, setvalue] = useState("");
  const [value1, setvalue1] = useState("");
  const [list, setlist] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [activeState, setactiveState] = useState(null);
  const submit = (e) => {
    e.preventDefault();
    console.log(value.length, value1);
    if (value1.length < 5 || value.length < 15) {
      alert(
        "username has to be more than 5 and note has to longer than 15 chars"
      );
    } else {
      console.log(value, value1);
      setlist([...list, { value, value1 }]);
    }
  };
  useEffect(() => {
    console.log(list);
  }, [list]);

  return (
    <div className="container">
      <h1>notes</h1>
      <main>
        {openModal && (
          <Modal closeModal={setOpenModal} activeState={activeState} />
        )}
        <form className="form" onSubmit={submit}>
          <input
            className="title1"
            type="text"
            maxLength={16}
            placeholder="title"
            name="todo-text1"
            value={value1}
            onChange={(e) => setvalue1(e.currentTarget.value)}
          ></input>
          <textarea
            maxLength={200}
            className="note1"
            placeholder="note"
            name="todo-text"
            value={value}
            onChange={(e) => setvalue(e.currentTarget.value)}
          ></textarea>
          <button className="submit"> submit</button>
        </form>
        <ul className="listed-items">
          {list.map((item, key) => (
            <li className="created-items" key={key}>
              <li className="title">{item.value1}</li>
              <li className="note">{item.value} </li>
              <button
                className="openModalBtn"
                onClick={() => {
                  setactiveState(item);
                  setOpenModal(true);
                }}
              >
                Open
              </button>
            </li>
          ))}
        </ul>
      </main>
    </div>

    // <div className="App">
    //   <h1>Hey,click on the button to open the modal.</h1>
    //   <button
    //     className="openModalBtn"
    //     onClick={() => {
    //       setOpenModal(true);
    //     }}
    //   >
    //     Open
    //   </button>
    //   {openModal && <Modal closeModal={setOpenModal} />}
    // </div>
  );
}
export default App;
