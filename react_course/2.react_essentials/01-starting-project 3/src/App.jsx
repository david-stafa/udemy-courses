import { useState } from "react";
import Header from "./components/Header";
import UserInputs from "./components/UserInputs";
import ResultTable from "./components/ResultTable";

function App() {
  const [userData, setUserData] = useState({
    initialInvestment: 15000,
    annualInvestment: 900,
    expectedReturn: 6,
    duration: 15,
  });

  let validInput = true;
  if (userData.duration <= 0) validInput = false;

  return (
    <>
      <Header />
      <UserInputs setUserData={setUserData} userData={userData} />
      {validInput && <ResultTable userData={userData} />}
      {!validInput && (
        <h3 className="center">
          Please enter positive number in duration input.
        </h3>
      )}
    </>
  );
}

export default App;
