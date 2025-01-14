import Input from "./Input";

export default function UserInputs({ setUserData, userData }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <Input
          setUserData={setUserData}
          name="INITIAL INVESTMENT"
          id="initialInvestment"
          userData={userData}
        />
        <Input
          setUserData={setUserData}
          name="ANNUAL INVESTMENT"
          id="annualInvestment"
          userData={userData}
        />
      </div>
      <div className="input-group">
        <Input
          setUserData={setUserData}
          name="EXPECTED RETURN"
          id="expectedReturn"
          userData={userData}
        />
        <Input
          setUserData={setUserData}
          name="DURATION"
          id="duration"
          userData={userData}
        />
      </div>
    </section>
  );
}
