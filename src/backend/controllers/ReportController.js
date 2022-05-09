import { Response } from "miragejs";
import { formatDate, requiresAuth } from "../utils/authUtils";

/**
 * All the routes related to Cart are present here.
 * These are private routes.
 * Client needs to add "authorization" header with JWT token in it to access it.
 * */

/**
 * This handler handles getting items to user's cart.
 * send GET Request at /api/user/cart
 * */
export const getReportHandler = function (schema, request) {
  const userId = requiresAuth.call(this, request);
  if (!userId) {
    return new Response(
      404,
      {},
      {
        errors: ["The email you entered is not Registered. Not Found error"],
      }
    );
  }
  const userReport = schema.users.findBy({ _id: userId }).report;
  return new Response(200, {}, { report: userReport });
};

/**
 * This handler handles adding items to user's cart.
 * send POST Request at /api/user/cart
 * body contains {product}
 * */

export const addReportHandler = function (schema, request) {
  const userId = requiresAuth.call(this, request);
  try {
    if (!userId) {
      return new Response(
        404,
        {},
        {
          errors: ["The email you entered is not Registered. Not Found error"],
        }
      );
    }
    const userReport = schema.users.findBy({ _id: userId }).report;
    const product = JSON.parse(request.requestBody);
    this.db.users.update({ _id: userId }, { report: product });
    return new Response(201, {}, { report: userReport });
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