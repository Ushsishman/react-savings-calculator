import Logo from "../assets/investment-calculator-logo.png";

const Heading = () => {
  return (
    <div className="flex flex-col items-center">
      <img className="w-24 mb-6" src={Logo} alt="logo" />
      <h1 className="font-semibold text-2xl mb-10 text-slate-100">
        Investment Calculator
      </h1>
    </div>
  );
};
export default Heading;
