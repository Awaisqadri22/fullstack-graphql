import { useState, useEffect } from "react";

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const StatisticLine = ({ text, value, percentage }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{text}</td>
            <td>{isNaN(value) ? "" : value}</td>
            <td>{percentage}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, SetAll] = useState(0);
  const [positive, setPositive] = useState(0);

  const calculatePositive = () => {
    setPositive((good / all) * 100);
  };

  useEffect(() => {
    calculatePositive();
  }, [good, neutral, bad]);

  const handleGood = () => {
    setGood(good + 1);
    SetAll(all + 1);
  };

  const handleNeutral = () => {
    setNeutral(neutral + 1);
    SetAll(all + 1);
  };

  const handleBad = () => {
    setBad(bad + 1);
    SetAll(all + 1);
  };

  return (
    <>
      <div>
        <b>Give Feedback</b>
      </div>
      <Button onClick={handleGood} text="good"></Button>
      <Button onClick={handleNeutral} text="neutral"></Button>
      <Button onClick={handleBad} text="bad"></Button>
      <div>
        <h2>Statistics</h2>
      </div>
      {all === 0 ? (
        "No Stastistics Yet.."
      ) : (
        <div>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={all} />
          <StatisticLine text="positive " value={positive} percentage="%" />
        </div>
      )}
    </>
  );
};

export default App;
