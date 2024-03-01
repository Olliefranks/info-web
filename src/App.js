import { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import Person from "./Components/Person";

function App() {
  const [person, setPerson] = useState([]);
  const [nameInput, setNameInput] = useState("");
  const [userNameInput, setUserNameInput] = useState("");
  const [favouriteColor, setFavouriteColor] = useState("");
  const [favouriteNumber, setFavouriteNumber] = useState("");
  const [dailyActivity, setDailyActivity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setPerson([
      ...person,
      {
        name: nameInput,
        userName: userNameInput,
        color: favouriteColor,
        number: favouriteColor,
        moreInfo: dailyActivity,
      },
    ]);
    setNameInput("");
    setUserNameInput("");
    setFavouriteColor("");
    setFavouriteNumber("");
    setDailyActivity("");
  };

  return (
    <div>
      <h1> Create a new Person:</h1>
      <Form
        nameInput={nameInput}
        userNameInput={userNameInput}
        favouriteColor={favouriteColor}
        favouriteNumber={favouriteNumber}
        dailyActivity={dailyActivity}
        setNameInput={setNameInput}
        setUserNameInput={setUserNameInput}
        setFavouriteColor={setFavouriteColor}
        setFavouriteNumber={setFavouriteNumber}
        setDailyActivity={setDailyActivity}
        handleSubmit={handleSubmit}
      />
      {person.map((person) => {
        return (
          <Person
            name={person.firstName}
            userName={person.userName}
            color={person.color}
            number={person.number}
            moreInfo={person.moreInfo}
          />
        );
      })}
    </div>
  );
}

export default App;
