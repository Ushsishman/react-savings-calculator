/* eslint-disable react/prop-types */
import InputItem from "./InputItem";
import { useState } from "react";

const CalculateInput = ({ setData }) => {
  const [currentSavingsInput, setCurrentSavingsInput] = useState(0);
  const [yearlySavingsInput, setYearlySavingsInput] = useState(0);
  const [expectedInterestInput, setExpectedInterestInput] = useState(0);
  const [investmentDurationInput, setInvestmentDurationInput] = useState(0);

  const calculateHandler = () => {
    const yearlyData = [];

    let currentSavings = +currentSavingsInput;
    const yearlyContribution = +yearlySavingsInput;
    const expectedReturn = +expectedInterestInput / 100;
    const duration = +investmentDurationInput;

    let previousYearlyInterest = 0;
    let totalInterest = 0;

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      totalInterest = yearlyInterest + previousYearlyInterest;
      previousYearlyInterest = totalInterest;

      currentSavings += yearlyInterest + yearlyContribution;
      const investmentCapital = currentSavings - totalInterest;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }),
        totalInterest: totalInterest.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }),
        savingsEndOfYear: currentSavings.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }),
        yearlyContribution: yearlyContribution.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }),
        investmentCapital: investmentCapital.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }),
      });
    }

    setData(yearlyData);
  };

  return (
    <div className="w-full md:w-3/4 lg:w-2/4 flex flex-col items-center  bg-[#1F7A5B] px-12 py-10 rounded">
      <div className="flex flex-row">
        <InputItem
          name="CURRENT SAVINGS ($)"
          setInput={setCurrentSavingsInput}
          inputVal={currentSavingsInput}
        />
        <InputItem
          name="YEARLY SAVINGS ($)"
          setInput={setYearlySavingsInput}
          inputVal={yearlySavingsInput}
        />
      </div>
      <div className="flex flex-row">
        <InputItem
          name="EXPECTED INTEREST (%, PER YEAR)"
          setInput={setExpectedInterestInput}
          inputVal={expectedInterestInput}
        />
        <InputItem
          name="INVESTMENT DURATION (YEARS)"
          setInput={setInvestmentDurationInput}
          inputVal={investmentDurationInput}
        />
      </div>
      <div className="text-center mt-4 text-slate-200">
        <button onClick={() => setData([])} className="mx-4 p-2 bg-[#1F7A5B]">
          Reset
        </button>
        <button
          onClick={calculateHandler}
          className="mx-4 py-2 px-5 bg-[#2e3033] rounded">
          Calculate
        </button>
      </div>
    </div>
  );
};
export default CalculateInput;
