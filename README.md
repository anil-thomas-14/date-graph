📅 Date Graph Calendar

A React application that integrates React Big Calendar with a bar graph visualization using Redux for state management. The calendar displays event data and allows users to select dates to view detailed information in a popup.

🚀 Features

📆 Interactive Calendar - Displays event data using react-big-calendar.

📊 Graph Visualization - Shows user data in a bar chart popup.

🎨 Dynamic Date Highlighting - Selected dates are visually distinguished.

🏗 State Management - Uses Redux for managing selected dates and event data.

🔄 View & Navigation Controls - Supports month, week, day, and agenda views.

📂 Project Structure

📦 date-graph
├── 📁 src
│   ├── 📁 components
│   │   ├── 📄 Calendar.jsx  # Main calendar component
│   │   ├── 📄 UserChart.jsx  # Chart component for user data
│   ├── 📁 redux
│   │   ├── 📄 calendarSlice.js  # Redux slice for managing calendar state
        ├── 📄 store.js  # Store Configuration
│   ├── 📁 assets
│   ├── 📄 App.jsx  # Main application component
    ├── 📄 App.css  # Application CSS file
│   ├── 📄 index.css  # Global CSS file
├── 📄 README.md  # Project documentation
├── 📄 package.json  # Dependencies & scripts
├── 📄 .gitignore  # Git ignored files
├── 📄 index.html  # Entry page

🛠 Installation & Setup

1️⃣ Clone the Repository

git clone https://github.com/anil-thomas-14/date-graph.git
cd date-graph

2️⃣ Install Dependencies

npm install

3️⃣ Start the Application

npm run dev

This will start the Vite development server.

🎨 Dependencies

Core Dependencies:

React 19 - Frontend library

Redux Toolkit - State management

React Big Calendar - Calendar component

Moment.js - Date manipulation

Material UI - UI components (Dialog, Buttons)

Recharts - Charting library

Development Dependencies:

Vite - Fast build tool

ESLint & Prettier - Code formatting

🎯 Usage

Selecting a Date

Click on any date in the calendar to open a popup.

If user data exists, a bar chart will be displayed.

If no data is available, a "No Data" message appears.

Navigating Views

Use the Today, Next, Back, Month, Week, Day, Agenda buttons to switch views.

Event Click

Clicking an event also opens the popup with user data.

🔄 API & Data Format

Example Dummy Data:

export const dummyData = {
  "01-02-2025": [
    { "user_1": 1 },
    { "user_2": 2 },
    { "user_3": 3 },
    { "user_4": 4 },
  ],
  "10-02-2025": [
    { "user_1": 1 },
    { "user_2": 3 },
    { "user_3": 5 },
    { "user_4": 1 },
  ],
};

🛠 Available Scripts

Start Dev Server

npm run dev

Build for Production

npm run build

Lint Code

npm run lint

🙌 Contributing

Feel free to submit issues or pull requests to improve the project.

📜 License

This project is licensed under the MIT License.

💡 Happy Coding! 🎉