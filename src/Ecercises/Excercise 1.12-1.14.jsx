import React, { useState } from "react";
//TODO

const anecdotes = [
  "The first computer bug was an actual bug—a moth found in a relay of the Mark II computer in 1947.",
  "Grace Hopper, a pioneer in computer programming, popularized the term 'debugging' after removing a moth from a computer.",
  "The Y2K bug was a result of programmers using two-digit years to save memory, leading to concerns that computers would interpret 00 as 1900 instead of 2000.",
  "The 'Hello, World!' program is often the first program written by beginners learning a new programming language.",
  "Ken Thompson, one of the creators of Unix, once embedded a backdoor into the early C compiler, demonstrating the risks of trusting software compilers.",
];

const AnecdoteApp = () => {
  const [anecdote, setAnecdote] = useState("");
  const [votes, setVotes] = useState(
    anecdotes.reduce((acc, _, index) => ({ ...acc, [index]: 0 }), {})
  );
  const [currentIndex, setCurrentIndex] = useState(null);

  const showRandomAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setAnecdote(anecdotes[randomIndex]);
    setCurrentIndex(randomIndex);
    console.log("random number", randomIndex);
    console.log("current index", currentIndex);
  };

  const getTopAnecdote = () => {
    const maxVotes = Math.max(...Object.values(votes));
    const topIndex = Object.keys(votes).find(
      (index) => votes[index] === maxVotes
    );
    return topIndex !== undefined ? anecdotes[topIndex] : "No votes yet.";
  };
  const voteAnecdote = () => {
    if (currentIndex !== null) {
      setVotes((prevVotes) => ({
        ...prevVotes,
        [currentIndex]: prevVotes[currentIndex] + 1,
      }));
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <h3 className="text-xl font-bold mb-4">
          Software Engineering Anecdote
        </h3>
        <p className="mb-4">
          {anecdote || "Click the button to see an anecdote!"}
        </p>
        {currentIndex !== null && (
          <p className="mb-4">Votes: {votes[currentIndex]}</p>
        )}
        <button onClick={showRandomAnecdote} className="mt-2">
          Show Anecdote
        </button>
        {currentIndex !== null && (
          <button onClick={voteAnecdote} className="mt-2 ml-2">
            Vote
          </button>
        )}
        <h2 className="text-lg font-bold mb-4">Top Anecdote</h2>
        <p className="mb-4">{getTopAnecdote()}</p>
      </div>
      <div>
        <h2>Reduced Object</h2>
        <ul>
          {Object.entries(votes).map(([key, value]) => (
            <li key={key}>
              {key}: {value}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default AnecdoteApp;
