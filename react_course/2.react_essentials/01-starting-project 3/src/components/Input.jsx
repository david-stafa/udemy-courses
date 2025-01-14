export default function Input({ name, id, setUserData, userData, ...props }) {

  function handleInputChange(inputId, newValue) {
    setUserData((prevUserData) => ({
      ...prevUserData,
      [inputId]: +newValue,
    }));
  }

  return (
    <p>
      <label htmlFor={id}>{name}</label>
      <input
        type="number"
        id={id}
        value={userData[id]}
        onChange={(e) => handleInputChange(id, e.target.value)}
        required
      />
    </p>
  );
}
