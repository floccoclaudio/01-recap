import React from "react";
import Button from "./components/Button";
import Input from "./components/Input";

const fetchTargetList = async () => {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    return response.json();
  } catch (err) {
    return err as string;
  }
};
// const target: Target = {};
function App() {
  return (
    <div className="App">
      <Input placeholder="Write something here" />
      <Button label="Press me" onClick={fetchTargetList} />
    </div>
  );
}

export default App;
