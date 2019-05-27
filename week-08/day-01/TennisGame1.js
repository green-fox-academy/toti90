class TennisGame1 {
  playerOneScore = 0;
  playerTwoScore = 0;

  constructor(player1Name, player2Name) {
    this.player1Name = player1Name;
    this.player2Name = player2Name;
  }

  wonPoint(playerName) {
    (playerName === "player1" ? this.playerOneScore++ : this.playerTwoScore++)
  }

  getScore() {
    if (this.playerOneScore === this.playerTwoScore) {
      return this.playerOneScore < 3 ? `${getScore(this.playerOneScore)}-All` : 'Deuce'
    } else if (this.playerOneScore >= 4 || this.playerTwoScore >= 4) {
      var minusResult = this.playerOneScore - this.playerTwoScore;
      if (minusResult === 1) return "Advantage player1";
      else if (minusResult === -1) return "Advantage player2";
      else if (minusResult >= 2) return "Win for player1";
      else return "Win for player2";
    } else {
      return `${getScore(this.playerOneScore)}-${getScore(this.playerTwoScore)}`
    }
  };
}

function getScore(score) {
  switch (score) {
    case 0:
      return "Love";
    case 1:
      return "Fifteen";
    case 2:
      return "Thirty";
    case 3:
      return "Forty";
  }
}

if (typeof window === "undefined") {
  module.exports = TennisGame1;
}