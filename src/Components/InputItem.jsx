/* eslint-disable react/prop-types */
const InputItem = ({ name, setInput, inputVal }) => {
  return (
    <div className="m-4">
      <p className="text-slate-200 text-xs font-semibold">{name}</p>
      <input
        className="bg-[#1F7A5B] p-2 mt-1 rounded border-solid border border-[#93aaa2] text-slate-200"
        type="number"
        onChange={(e) => {
          setInput(e.target.value);
        }}
        value={inputVal}
      />
    </div>
  );
};
export default InputItem;
