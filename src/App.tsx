import Select from "./Components/CSelect";
import {useState} from "react";
import {OptionData} from "./Components/CSelect/props.type.ts";

const options = [
  {id: 1, value: 'account'},
  {id: 2, value: 'wallet'},
  {id: 3, value: 'bonuses'},
  {id: 4, value: 'bets'},
  {id: 5, value: 'history'},
];

function App() {
  const [current, setCurrent] = useState(options[0]);

  const setOption = (option: OptionData) => setCurrent(option);

  return (
    <>
      <Select options={options} onChange={setOption} current={current} />
    </>
  )
}

export default App;