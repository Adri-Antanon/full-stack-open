import { useState } from 'react';
import Statistics from './components/Statistics';
import Button from './components/Button';

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
  });

  const handleClickGood = () => setGood((prevValue) => prevValue + 1);
  const handleClickNeutral = () => setNeutral((prevValue) => prevValue + 1);
  const handleClickBad = () => setBad((prevValue) => prevValue + 1);

  const allFeedback = good + neutral + bad;

  const averageFeedback = (good - bad) / allFeedback;

  const positiveFeedback = (good / allFeedback) * 100;

  const statisticHandlers = [
    { handleClick: handleClickGood, text: 'good' },
    { handleClick: handleClickNeutral, text: 'neutral' },
    { handleClick: handleClickBad, text: 'bad' },
  ];

  const statisticsArray = [
    { text: 'Good', value: good },
    { text: 'Neutral', value: neutral },
    { text: 'Bad', value: bad },
    { text: 'All', value: allFeedback },
    { text: 'Average', value: averageFeedback },
    { text: 'Positive', value: `${positiveFeedback}%` },
  ];

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.',
  ];

  const handleAnecdote = () => {
    const newAnecdote = Math.floor(Math.random() * anecdotes.length);
    setSelected(newAnecdote);
  };

  const handleVote = () => {
    setVotes((prevValues) => ({
      ...prevValues,
      [selected]: prevValues[selected] + 1,
    }));
  };

  const maxVote = Math.max(...Object.values(votes));

  const anecdoteWithMostVotes = Object.keys(votes).find(
    (vote) => votes[vote] === maxVote,
  );

  return (
    <div>
      <h2>Give feedback</h2>
      {statisticHandlers.map((handler) => (
        <Button
          key={handler.text}
          text={handler.text}
          onClick={handler.handleClick}
        />
      ))}
      <Statistics allFeedback={allFeedback} stats={statisticsArray} />
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <p>Has {votes[selected]} votes</p>
      <Button text={'Vote'} onClick={handleVote} />
      <Button text={'Next anecdote'} onClick={handleAnecdote} />
      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[anecdoteWithMostVotes]}</p>
      <p>Has {maxVote || 0} votes</p>
    </div>
  );
};

export default App;
