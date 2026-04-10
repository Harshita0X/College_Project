# 🎭 AudiBook — Mini Auditorium Scheduling System

A full-stack web application for managing and booking auditorium slots for events,
performances, and institutional gatherings.

## 📌 Overview

AudiBook simplifies the process of scheduling and reserving auditorium time slots.
Administrators can manage the auditorium calendar, approve or reject booking requests,
and track upcoming events — while users can browse available slots and submit booking
requests in just a few clicks.

## ✨ Features

### For Users
- Browse available auditorium time slots by date
- Submit booking requests with event details (name, type, duration, attendees)
- View booking status (Pending / Approved / Rejected)
- Receive email notifications on status updates
- View upcoming events in the auditorium

### For Admins
- Dashboard with full calendar view of all bookings
- Approve or reject booking requests with remarks
- Manage auditorium settings (capacity, available hours, blackout dates)
- View booking history and generate reports

## 🛠️ Tech Stack

| Layer      | Technology                          |
|------------|--------------------------------------|
| Frontend   | React.js, Tailwind CSS, React Router |
| Backend    | Node.js, Express.js                  |
| Database   | MongoDB, Mongoose                    |
| Auth       | JWT, bcryptjs                        |
| Email      | Nodemailer                           |
| Deployment | Vercel (Frontend), Render (Backend)  |

## 🚀 Getting Started

### Prerequisites
- Node.js >= 18.x
- MongoDB (local or Atlas)

### Installation

# Clone the repository
git clone https://github.com/Harshita0X/College_Project/
cd College_Project

# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install

### Environment Variables

Create a `.env` file in the `/server` directory:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_password

### Running the App

# Start backend (from /server)
npm run dev

# Start frontend (from /client)
npm run dev

App runs at: http://localhost:5173

## 📁 Project Structure

audibook/
├── server/
│   ├── models/          # User, Booking, Auditorium
│   ├── routes/          # auth, bookings, admin
│   ├── controllers/
│   ├── middleware/       # authMiddleware, roleCheck
│   └── server.js
└── client/
    ├── src/
    │   ├── pages/        # Home, BookSlot, Dashboard, AdminPanel
    │   ├── components/   # Calendar, BookingCard, StatusBadge
    │   ├── redux/        # store, slices
    │   └── App.jsx

## 📅 Booking Flow

1. User registers / logs in
2. Selects a date and views available time slots
3. Fills in event details and submits a request
4. Admin reviews and approves / rejects the request
5. User receives an email notification with the decision

## 🔐 Roles

| Role  | Access                                      |
|-------|----------------------------------------------|
| User  | Browse slots, submit & track bookings        |
| Admin | Full dashboard, approve/reject, manage settings |

## 📬 Contact

Built with ❤️ by Mait students — feel free to open issues or contribute!
