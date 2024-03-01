const Form = ({
  handleSubmit,
  nameInput,
  setNameInput,
  userNameInput,
  setUserNameInput,
  favouriteColor,
  setFavouriteColor,
  favouriteNumber,
  setFavouriteNumber,
  dailyActivity,
  setDailyActivity,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your name:
        <input
          type="text"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
        />
      </label>
      <label>
        Enter your username:
        <input
          type="text"
          value={userNameInput}
          onChange={(e) => setUserNameInput(e.target.value)}
        />
      </label>
      <label>
        Enter your favourite color:
        <input
          type="text"
          value={favouriteColor}
          onChange={(e) => setFavouriteColor(e.target.value)}
        />
      </label>
      <label>
        Enter your favourite number:
        <input
          type="text"
          value={favouriteNumber}
          onChange={(e) => setFavouriteNumber(e.target.value)}
        />
      </label>
      <label>
        {" "}
        Tell us about your daily activity:
        <input
          type="text"
          value={dailyActivity}
          onChange={(e) => setDailyActivity(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};
export default Form;
