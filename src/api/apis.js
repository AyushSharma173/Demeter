import { api_instance } from "./axios.config";

import tasksMock from "./tasksMock.json";

export async function getProducts(params, cancelToken) {
  return await api_instance.post(
    "/get_recommendations",
    {
      ...params,
    },
    {
      cancelToken,
    }
  );
}

export async function getProductsForTasks(taskId, storeName, cancelToken) {
  let response = await api_instance.get("/task/" + taskId, {
    cancelToken,
  });

  // Update with Mock for testing
  if (!response?.output) {
    response = {
      output: tasksMock[storeName],
    };
  }

  return response;
}

export async function getRecipe(params, cancelToken) {
  return await api_instance.post(
    "/get_recipe_dishes",
    {
      ...params,
    },
    {
      cancelToken,
    }
  );
}

export async function getRecipeDetail(params, cancelToken) {
  return await api_instance.get(
    "/get_recipe_dishes/" + params.categoryId + "/" + params.recipeId,
    {
      cancelToken,
    }
  );
}
