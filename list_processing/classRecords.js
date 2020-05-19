const GRADE_SCHEME = {
  'A': '93-100',
  'B': '85-92',
  'C': '77-84',
  'D': '69-76',
  'E': '60-68',
  'F': '0-59'
};
const LETTER_GRADES = {}
const WEIGHTS = {
  'exams': 65/100,
  'exercises': 35/100
};

Object.keys(GRADE_SCHEME).forEach(letter => {
  let grades = [];
  let bounds = GRADE_SCHEME[letter].split('-');
  for (let i = Number(bounds[0]); i <= Number(bounds[1]); i++) {
    grades.push(i);
  }
  LETTER_GRADES[letter] = grades;
});

let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

function generateClassRecordSummary(scores) {
  let scoreData = Object.keys(scores).map(student => scores[student].scores);
  let examData = scoreData.map(score => score.exams);

  return {
    studentGrades: getStudentScore(scoreData),
    exams: getExamSummary(examData)
  }
}

function getStudentScore(scoreObj) {
  let scoreSummary = [];

  Object.keys(scoreObj).forEach(score => {
    let examAverage = average(scoreObj[score].exams);
    let exerciseTotal = total(scoreObj[score].exercises);
    let finalGrade = Math.round(weight(examAverage, exerciseTotal, WEIGHTS));
    let letterGrade = lookup(finalGrade);
    scoreSummary.push(`${finalGrade} (${letterGrade})`);
  });

  return scoreSummary;
}

function getExamSummary(examData) {
  let scoresPerExam = transpose(examData);

  return scoresPerExam.map(examScores => {
    return {
      average: average(examScores),
      minimum: min(examScores),
      maximum: max(examScores),
    };
  });
}

function average(arr) {
  return total(arr) / arr.length;
}

function total(arr) {
  return arr.reduce((el, sum) => el + sum);
}

function min(arr) {
  return arr.sort(numSort)[0];
}

function max(arr) {
  return arr.sort(numSort)[arr.length - 1];
}

function numSort(num1, num2) {
  if (num1 < num2) {
    return -1;
  } else if (num1 > num2) {
    return 1;
  } else {
    return 0;
  }
}

function weight(exams, exercises, weight) {
  return weight.exams * exams + weight.exercises * exercises;
}

function lookup(grade) {
  return Object.keys(LETTER_GRADES).filter(letter => {
    return LETTER_GRADES[letter].includes(grade);
  });
}

function transpose(array) {
  return array[0].map((col, columnIdx) => {
    return array.map(row => row[columnIdx]);
  });
}

console.log(generateClassRecordSummary(studentScores));

// returns:
// {
//   studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
//   exams: [
//     { average: 75.6, minimum: 50, maximum: 100 },
//     { average: 86.4, minimum: 70, maximum: 100 },
//     { average: 87.6, minimum: 60, maximum: 100 },
//     { average: 91.8, minimum: 80, maximum: 100 },
//   ],
// }
