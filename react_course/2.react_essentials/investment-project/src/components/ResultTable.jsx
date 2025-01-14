import { calculateInvestmentResults, formatter } from "../util/investment";

export default function ResultTable({ userData }) {
  const annualData = calculateInvestmentResults({ ...userData });

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment value</th>
          <th>Interest(Year)</th>
          <th>Total Interest</th>
          <th>Invested capital</th>
        </tr>
      </thead>
      <tbody>
        {annualData.map((data) => (
          <tr key={data.year}>
            <td>{data.year}</td>
            <td>{formatter.format(data.valueEndOfYear)}</td>
            <td>{formatter.format(data.interest)}</td>
            <td>{formatter.format(data.interestSum)}</td>
            <td>{formatter.format(data.investedCapital)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
