export const QuizReducer = (state, action) => {
  switch (action.type) {
    case "Category":
      return {
        ...state,
        CurrentQuiz: { ...action.payload.reduce((pre, curr) => pre) },
      };
    case "result":
      if (action.payload === action.correct_answer) {
        return {
          ...state,
          Result: {
            ...state.Result,
            score: state.Result.score + 10,
            correct: state.Result.correct + 1,
            attempt: state.Result.attempt + 1,
          },
        };
      } else {
        return {
          ...state,
          Result: {
            ...state.Result,
            score: state.Result.score - 3,
            wrong: state.Result.wrong + 1,
            attempt: state.Result.attempt + 1,
          },
        };
      }
    case "reset":
      return {
        ...state,
        CurrentQuiz: {},
        Result: { ...state.Result, score: 0, correct: 0, wrong: 0, attempt: 0 },
      };
  }
};
