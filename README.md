# Gym Management System

A full-featured Gym Management System built with **Laravel 12**, **React**, and **Inertia.js**. This system streamlines gym operations with modules for membership tracking, billing, class scheduling, staff management, and more.

## 🚀 Features

- **User Authentication** – Secure login and registration for members, staff, and admin.
- **Membership Management** – Registration, renewals, package tracking, and attendance.
- **Billing & Payments** – Invoice generation, payment tracking (including non-membership income).
- **Class Scheduling** – Manage trainers, classes, and availability.
- **Trainer & Staff Payroll** – Commission calculation and payroll handling.
- **Inventory Management** – Track and manage supplements and merchandise.
- **Facility & Equipment Tracking** – Maintenance and usage logs.
- **Reporting & Analytics** – Dashboard insights and financial summaries.
- **QR Code Attendance** – Scan-based check-ins with membership validation.
- **Mobile App Ready** – API endpoints structured for Flutter integration.

## 📁 Project Structure

```

gym-management-system/
├── docs/                   # Planning & documentation
├── wireframes/             # UI mockups and screenshots
├── src/                    # Laravel + React + Inertia code
└── README.md               # Project overview (this file)

````

## 🛠️ Tech Stack

- **Backend:** Laravel 12 (PHP)
- **Frontend:** React.js + Inertia.js
- **Database:** MySQL
- **UI Framework:** AdminLTE
- **Others:** QR Code generation, Role-based access control

## 📦 Setup Instructions

```bash
# Clone the repository
git clone https://github.com/NafMKD/gym-management.git

# Install backend dependencies
cd src
composer install

# Install frontend dependencies
npm install

# Setup environment
cp .env.example .env
php artisan key:generate

# Run migrations
php artisan migrate

# Start development servers
php artisan serve
npm run dev
````

## 📌 Notes

* Repository pattern is used for data handling.
* Agile development approach is followed.
* Role-based access for Admin, Staff, and Members.
* Subscription is time-based with support for valid extensions.

## 📄 License

This project is licensed under the MIT License.

