# Capstone-Project-Group-5-Week-8

# Airbnb-Inspired Web Application

A full-stack Airbnb-inspired web application built for class project presentation. The app allows users to sign up, sign in, browse property listings from MongoDB, open dynamic property details pages, search and filter listings, switch between light and dark mode, and test a demo reservation flow.

## Features

- User authentication (Sign Up / Sign In)
- Password hashing with bcrypt
- Protected routes for authenticated users
- Public routes for guest-only pages
- Dynamic listings loaded from MongoDB
- Property details page loaded by property ID
- Search listings by location
- Filter listings by category
- Empty state when no listings match filters
- Dark mode support
- Demo reserve button message
- Logout from navbar

## Tech Stack

### Frontend
- React
- React Router
- CSS
- LocalStorage

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- bcrypt
- dotenv

## Project Structure

```bash
client/
  src/
    components/
    Pages/
    styles/
    utils/
server/
  src/
    models/
    routes/
    server.js
    seed.js
```

## Authentication Flow

### Sign Up
- User enters full name, email, and password
- Frontend validates input
- Backend validates input again
- Password is hashed with bcrypt
- User is saved in MongoDB

### Sign In
- User enters email and password
- Backend checks credentials
- Logged-in user is stored in localStorage
- Protected pages become accessible

## Listings Flow

- Listings are fetched from the backend API
- Backend reads data from MongoDB
- Home page shows dynamic listing cards
- Clicking a card opens a property details page by ID

## Property Details

- Property details are fetched dynamically using the listing ID
- Loading state is shown while data is loading
- Error state is shown if the request fails
- Demo reserve message is shown when the user clicks **Reserve**

## Search and Filter

Users can:
- Search listings by location
- Filter listings by category
- Reset filters by clicking the logo
- See an empty state when no results are found

## Dark Mode

- Theme is stored in localStorage
- Dark mode works on both home page and property details page

## Setup Instructions

### 1. Clone the repository
```bash
git clone <your-repository-url>
cd <your-project-folder>
```

### 2. Install frontend dependencies
```bash
cd client/airbnb
npm install
```

### 3. Install backend dependencies
```bash
cd ../../server
npm install
```

### 4. Create environment variables
Create a `.env` file inside the `server` folder:

```env
MONGO_URI=mongodb://127.0.0.1:27017/airbnb
PORT=5000
```

### 5. Seed the database
```bash
node src/seed.js
```

### 6. Start the backend server
```bash
npm run dev
```

### 7. Start the frontend
Open a new terminal:

```bash
cd client/airbnb
npm run dev
```

## API Endpoints

### Auth
- `POST /api/auth/signup`
- `POST /api/auth/signin`

### Listings
- `GET /api/listings`
- `GET /api/listings/:id`

## Demo Flow for Presentation

1. Open home page
2. Show listings from database
3. Search by location
4. Filter by category
5. Click a property card
6. Show property details page
7. Click **Reserve** to show demo message
8. Show Sign Up and Sign In pages
9. Show protected route behavior
10. Show logout
11. Show dark mode

## Validation Rules

### Sign Up
- Full name is required
- Full name must be at least 2 characters
- Email must be valid
- Password must be at least 6 characters

### Sign In
- Email is required
- Password is required
- Email must be valid

## Future Improvements

- Real booking backend
- Real calendar selection
- Real guest selection
- Payment integration
- Better review and host data from database
- Full responsive polish

## Author

Created as a class project by the development team.
