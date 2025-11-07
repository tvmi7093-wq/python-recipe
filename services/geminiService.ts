
export const generateRecipeFromImage = async (imageFile: File, language: string): Promise<string> => {
  const formData = new FormData();
  formData.append('image', imageFile);
  formData.append('language', language);

  try {
    // In a real application, this URL should be configurable via environment variables.
    // This points to the Python Flask server.
    const response = await fetch('http://127.0.0.1:8080/api/generate-recipe', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      let errorMsg = 'Failed to generate recipe from backend.';
      try {
        const errorData = await response.json();
        errorMsg = errorData.error || errorMsg;
      } catch (e) {
        // Ignore if response is not json
      }
      throw new Error(errorMsg);
    }

    const data = await response.json();
    if (!data.recipe) {
      throw new Error("Backend response did not contain a recipe.");
    }
    return data.recipe;
  } catch (error) {
    console.error("Error calling backend service:", error);
    // Re-throw a more user-friendly error to the UI component
    throw new Error("Failed to communicate with the recipe generation service.");
  }
};
