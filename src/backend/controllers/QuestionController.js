import { Response } from "miragejs";

/**
 * All the routes related to Product are present here.
 * These are Publicly accessible routes.
 * */

/**
 * This handler handles gets all products in the db.
 * send GET Request at /api/products
 * */

export const getAllQuestionsHandler = function () {
  return new Response(200, {}, { questions: this.db.questions });
};

/**
 * This handler handles gets all products in the db.
 * send GET Request at /api/user/products/:productId
 * */

export const getQuestionHandler = function (schema, request) {
  const questionId = request.params.questionId;
  try {
    const question = schema.products.findBy({ _id: questionId });
    return new Response(200, {}, { question });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};
