const Person = ({ firstName, userName, color, number, dailyA }) => {
  return (
    <div>
      <h3>{firstName}</h3>
      <h3>{userName}</h3>
      <h3>{color}</h3>
      <h3>{number}</h3>
      <p>{dailyA}</p>
      <button>delete</button>
    </div>
  );
};

export default Person;
