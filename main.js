class Team extends React.Component {
  constructor(props) {
    super(props);
    this.shotSound = new Audio("audio/Back+Board.mp3");
    this.scoreSound = new Audio("audio/bball+crowd.mp3");

    this.state = {
      shots: 0,
      score: 0,
    };
  }

  shotHandler = () => {
    this.shotSound.play();

    if (Math.random() > 0.5) {
      this.state.score += 1;

      setTimeout(() => {
        this.scoreSound.play();
      }, 100);
    }
    this.setState((state, props) => ({
      shots: state.shots + 1,
    }));
  };

  render() {
    let shotPercentageDiv;

    if (this.state.shots) {
      const shotPercentage = Math.round(
        (this.state.score / this.state.shots) * 100
      );
      shotPercentageDiv = (
        <div>
          <strong>Shooting Percentage:</strong> {shotPercentage}
        </div>
      );
    }
    return (
      <div className="Team">
        <h2>{this.props.name}</h2>
        <div className="Identity">
          <img src={this.props.logo}></img>
        </div>
        <div>
          <strong>Shots:</strong> {this.state.shots}
        </div>
        <div>
          <strong>Score:</strong> {this.state.score}
        </div>

        {shotPercentageDiv}

        <button onClick={this.shotHandler}>Shoot!</button>
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      homeTeamStats: {
        shots: 0,
        score: 0
      },
      visitingTeamStats: {
        shots: 0,
        score: 0
      }
    }
  }

  render() {
    return (
      <div className="Game">
        <div className="stats">
          <Team
            name={props.visitingTeam.name}
            logo={props.visitingTeam.logo}
            stats={this.state.visitingTeamStats}
          />

          <div className="versus">
            <h1>VS</h1>
          </div>

          <Team
            name={props.homeTeam.name}
            logo={props.homeTeam.logo}
            stats={this.state.homeTeamStats}
          />
        </div>
      </div>
    )
  }
}

function App(props) {
    const Miami = {
        name: 'Miami Heat',
        logo: 'data:image/png;base64,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'
    }
    const Bulls = {
        name: 'Chicago Bulls',
        logo: 'data:image/jpeg;base64,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'
    }
  return (
    <div className="App">
        <Game 
        venue="USSR"
        homeTeam={Miami}
        visitingTeam={Bulls} 
        />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
