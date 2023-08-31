import CalculateInput from "./Components/CalculateInput";
import Heading from "./Components/Heading";
import Mapping from "./Components/Mapping";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#121314]">
      <Heading />
      <CalculateInput setData={setData} />
      <Mapping data={data} />
    </div>
  );
}

export default App;
