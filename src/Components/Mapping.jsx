/* eslint-disable react/prop-types */
const Mapping = ({ data }) => {
  return (
    <div className="w-full lg:w-2/4 overflow-x-auto">
      {data.length > 0 ? (
        <table className="min-w-full table-auto text-slate-200 text-right my-16">
          <thead>
            <tr>
              <th className="py-2 px-1 text-center">Year</th>
              <th className="py-2 px-1 text-center">Total Savings</th>
              <th className="py-2 px-1 text-center">Interest (Year)</th>
              <th className="py-2 px-1 text-center">Total Interest</th>
              <th className="py-2 px-1 text-center">Invested Capital</th>
            </tr>
          </thead>
          {data.map((item) => {
            return (
              <tbody key={item}>
                <tr>
                  <td className="py-2 px-1 text-center">{item.year}</td>
                  <td className="py-2 px-1 text-center">${item.savingsEndOfYear}</td>
                  <td className="py-2 px-1 text-center">${item.yearlyInterest}</td>
                  <td className="py-2 px-1 text-center">${item.totalInterest}</td>
                  <td className="py-2 px-1 text-center">${item.investmentCapital}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      ) : (
        <p className="text-slate-200 my-6 text-lg">
          No investment calculated yet.
        </p>
      )}
    </div>
  );
};
export default Mapping;
