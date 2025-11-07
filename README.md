
# AI Recipe Generator (Recipe Snap)

This is a SaaS application that generates recipes from photos of food, with multilingual support and placeholder subscription features.

## Architecture

The application now uses a modern client-server architecture:

*   **Frontend**: A responsive web application built with React and TypeScript. This remains the user-facing part of the application.
*   **Backend**: A new, lightweight Python server built with the Flask framework. It handles the core logic of communicating with the Google Gemini API.

This separation provides better security by keeping the API key on the server-side, preventing it from being exposed in the browser. It also allows for more complex backend logic to be added in the future.

## How to Run the Application

You need to run both the frontend and the backend servers simultaneously for the application to work.

### Backend (Python)

1.  **Navigate to the project directory in your terminal.**

2.  **Set up a virtual environment (recommended):**
    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
    ```

3.  **Install Python dependencies:**
    ```bash
    pip install -r requirements.txt
    ```

4.  **Set your API Key:**
    Create a file named `.env` in the root of the project. Add your Google API key to this file:
    ```
    API_KEY="YOUR_GOOGLE_API_KEY"
    ```
    The Flask server uses the `python-dotenv` library to automatically load this key.

5.  **Start the backend server:**
    ```bash
    flask run --port=8080
    ```
    The backend will now be running and listening for requests at `http://127.0.0.1:8080`.

### Frontend (React)

1.  **Open a second terminal, also in the project directory.**

2.  **Start the frontend development server.**
    This project is configured to run in a development environment like AI Studio, which may handle this step automatically. If you are running this locally with a standard React setup (like Vite), you would typically run:
    ```bash
    npm install
    npm run dev
    ```

3.  Access the web application in your browser at the address provided by your development server (e.g., `http://localhost:5173`). The frontend is configured to send requests to the Python backend running on port 8080.
