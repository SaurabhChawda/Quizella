import { Server, Model, RestSerializer } from "miragejs";
import { loginHandler, signupHandler } from "./backend/controllers/AuthController";
import { addReportHandler, getReportHandler } from "./backend/controllers/ReportController";
import { getAllQuestionsHandler, getQuestionHandler } from "./backend/controllers/QuestionController";
import { questions } from "./backend/db/questions";
import { users } from "./backend/db/users";

export function makeServer({ environment = "development" } = {}) {
  return new Server({
    serializers: {
      application: RestSerializer,
    },
    environment,
    models: {
      question: Model,
      user: Model,
      report: Model,
    },

    // Runs on the start of the server
    seeds(server) {
      // disballing console logs from Mirage
      server.logging = false;
      questions.forEach((item) => {
        server.create("question", { ...item });
      });

      users.forEach((item) =>
        server.create("user", {
          ...item,
          report: {
            Category_Report: [
              {
                category: "History",
                score: 0,
                correct_answer: 0,
                wrong_answer: 0,
                attempt: 0,
              },
              {
                category: "Politics",
                score: 0,
                correct_answer: 0,
                wrong_answer: 0,
                attempt: 0,
              },
              {
                category: "Geography",
                score: 0,
                correct_answer: 0,
                wrong_answer: 0,
                attempt: 0,
              },
              {
                category: "Sports",
                score: 0,
                correct_answer: 0,
                wrong_answer: 0,
                attempt: 0,
              },
              {
                category: "Technical",
                score: 0,
                correct_answer: 0,
                wrong_answer: 0,
                attempt: 0,
              },
            ],
            Final_Report: [
              {
                score: 0,
                attempt: 0,
                correct_answer: 0,
                wrong_answer: 0,
              },
            ],
          },
        })
      );
    },

    routes() {
      this.namespace = "api";
      // auth routes (public)
      this.post("/auth/signup", signupHandler.bind(this));
      this.post("/auth/login", loginHandler.bind(this));

      // Questions routes (public)
      this.get("/questions", getAllQuestionsHandler.bind(this));
      this.get("/questions/:questionId", getQuestionHandler.bind(this));

      // report routes (private)
      this.get("/user/report", getReportHandler.bind(this));
      this.post("/user/report", addReportHandler.bind(this));
    },
  });
}
