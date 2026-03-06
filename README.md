# WTWR (What to Wear)

**WTWR** is a React-based application designed to help users decide what to wear based on real-time weather data. By integrating with the OpenWeather API, the app provides personalized clothing suggestions from a digital wardrobe, ensuring you're always prepared for the day's temperature and conditions.

## Features

- **Real-Time Weather Updates:** Fetches live weather data for Mountain View, CA, using the OpenWeather API.
- **Smart Clothing Suggestions:** Automatically filters and displays clothing items appropriate for "Hot," "Warm," or "Cold" weather.
- **Interactive Wardrobe (CRUD):** Users can add new clothing items with specific weather tags and delete items they no longer need.
- **Temperature Unit Toggle:** Switch seamlessly between Fahrenheit and Celsius across the entire application using React Context.
- **User Profile:** A dedicated profile section to manage your personal clothing collection.
- **Dynamic Weather Cards:** Visual representations of current weather conditions (Clear, Cloudy, Fog, Rain, Snow, Storm) that adapt for day and night.
- **Responsive Design:** Built with a "mobile-first" approach, ensuring a clean experience across all devices.

## Technologies Used

- **Frontend:** React, Vite, React Router (HashRouter for GitHub Pages compatibility).
- **State Management:** React Context API (for temperature unit) and Hooks (`useState`, `useEffect`).
- **Styling:** Vanilla CSS following a modular BEM-like structure.
- **Backend:** Mock server using `json-server` (local development) and `my-json-server` (production preview).
- **API:** OpenWeather API for real-time meteorological data.
- **Deployment:** GitHub Pages.

## Project Structure

```text
src/
├── assets/             # Weather icons and static images
├── components/         # Modular React components (App, Header, Main, etc.)
├── contexts/           # React Context for global state (Temperature Unit)
├── hooks/              # Custom React hooks (useForm)
├── utils/              # API wrappers and constants
└── vendor/             # Fonts and normalized CSS
```

## How to Run

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/jamesgreen/se_project_react.git
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Start the Mock Server:**
    In a separate terminal, run:
    ```bash
    npm run server # Ensure you have json-server installed globally or configured
    ```
    *Note: If `npm run server` is not configured, you can run `json-server --watch db.json --port 3001`.*
4.  **Start the Application:**
    ```bash
    npm run dev
    ```
5.  **View in Browser:**
    Open [http://localhost:3000](http://localhost:3000) to see the app in action.

## Future Improvements

- **User Authentication:** Allow users to create personal accounts and private wardrobes.
- **Location Search:** Enable users to fetch weather data for any city in the world.
- **Advanced Filtering:** Add tags for "Rainy" or "Windy" conditions to provide even more precise suggestions. 

 ## Project Pitch Video
 
 Check out my video(https://drive.google.com/file/d/1m24VNLDeEzu5rW_CHdqa6gYM_6tcDdhV/view?usp=sharing, where I describe my project and some challenges I faced while building it.

