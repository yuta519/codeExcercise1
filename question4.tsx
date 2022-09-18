const evalAvgScore = (score1, score2, score3, score4) => {
  if (!score1 || !score2 || !score3 || !score4) {
    return console.log("Please set 4 scores!");
  }

  if (
    detectInvalidScore(score1)
    || detectInvalidScore(score2)
    || detectInvalidScore(score3)
    || detectInvalidScore(score4)
  ) {
    return console.log("Invalid scores!");
  }
  const averageScore = (score1 + score2 + score3 + score4) / 4
  if (averageScore >= 90) {
    return console.log("grade A")
  }
  if (averageScore >= 70) {
    return console.log("grade B")
  }
  if (averageScore >= 50) {
    return console.log("grade C")
  }
  return console.log("grade F")
}

const detectInvalidScore = (num) => {
  return 100 < num || num < 0
}


evalAvgScore(1, 31, 42, 1)
evalAvgScore(1, 31, 42, -1)
evalAvgScore(1, 31, 42, 199)
evalAvgScore(90, 91, 92, 91)
evalAvgScore(71, 81, 82, 71)
evalAvgScore(50, 51, 62, 51)
