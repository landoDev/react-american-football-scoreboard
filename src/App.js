//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const [homeTeam, setHomeTeam] = useState('Tar Heels');
  const [awayTeam, setAwayTeam] = useState('Blue Devils');
  const scoreboardStyle = {
    backgroundColor: 'navy', 
    borderColor: 'skyblue'
  }
  const homeCardStyle = {
    backgroundColor: 'skyblue'
  }
  const awayCardStyle = {
    backgroundColor: 'blue'
  }
  return (
    <div className="container">
      <section className="scoreboard" style={scoreboardStyle}>
        <div className="topRow">
          <div className="home">
  <h2 className="home__name" style= {homeCardStyle}>{homeTeam}</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

  <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name" style ={awayCardStyle}>{awayTeam}</h2>
  <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick = {() => setHomeScore(homeScore + 7)}>{homeTeam} Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick = {() => setHomeScore(homeScore + 3)}>{homeTeam} Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick = {() => setAwayScore(awayScore + 7)}>{awayTeam} Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick = {() => setAwayScore(awayScore + 3)}>{awayTeam} Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
