/* eslint-disable react/prop-types */
import Data from './Data';

const Statistics = ({ stats, allFeedback }) => {
  return (
    <>
      <h2>Statistics</h2>
      {allFeedback === 0 ? (
        <p>No feedback given</p>
      ) : (
        <table>
          <tbody>
            {stats.map((stat) => (
              <Data key={stat.text} text={stat.text} value={stat.value} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Statistics;
