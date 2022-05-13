export const QuizReducer = (state, action) => {
  switch (action.type) {
    case "Load_Report":
      return {
        ...state,
        Report: action.payload,
      };
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
            correct_answer: state.Result.correct_answer + 1,
            attempt: state.Result.attempt + 1,
          },
        };
      } else {
        return {
          ...state,
          Result: {
            ...state.Result,
            score: state.Result.score - 3,
            wrong_answer: state.Result.wrong_answer + 1,
            attempt: state.Result.attempt + 1,
          },
        };
      }
    case "categoryReport":
      return {
        ...state,
        Report: {
          ...state.Report,
          Category_Report: state.Report.Category_Report.map((item) =>
            item.category === action.payload
              ? {
                  ...item,
                  score: state.Result.score + item.score,
                  correct_answer: state.Result.correct_answer + item.correct_answer,
                  wrong_answer: state.Result.wrong_answer + item.wrong_answer,
                  attempt: item.attempt + 1,
                }
              : { ...item }
          ),
        },
      };

    case "finalReport":
      return {
        ...state,
        Report: {
          ...state.Report,
          Final_Report: [
            state.Report.Category_Report.reduce(
              (pre, curr) => ({
                ...pre,
                score: pre.score + curr.score,
                attempt: pre.attempt + curr.attempt,
                correct_answer: pre.correct_answer + curr.correct_answer,
                wrong_answer: pre.wrong_answer + curr.wrong_answer,
              }),
              {
                score: 0,
                attempt: 0,
                correct_answer: 0,
                wrong_answer: 0,
              }
            ),
          ],
        },
      };
    case "reset":
      return {
        ...state,
        CurrentQuiz: {},
        Result: {
          ...state.Result,
          score: 0,
          correct_answer: 0,
          wrong_answer: 0,
          attempt: 0,
        },
      };
    case "resetPreviousData":
      return {
        ...state,
        Result: {
          ...state.Result,
          score: 0,
          correct_answer: 0,
          wrong_answer: 0,
          attempt: 0,
        },
      };
    default:
      return state;
  }
};
