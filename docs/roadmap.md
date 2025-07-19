# Development Roadmap

## Phase 1: Authentication & Access Control

* Configure Laravel Breeze/Inertia auth
* Set up role-based middleware (admin, reception, member)
* Create login/logout for all users
* Enable registration for members only
* Password reset functionality
* Seed default admin user

## Phase 2: Core Entities & Membership Lifecycle

* Create `users` module (admin, reception only)
* Create `people` module (members, trainers, employees)
* CRUD for membership packages
* Create/edit/delete memberships (linked to people)
* Membership status calculation logic
* Grant extension days for expired memberships with valid remaining\_days
* View membership details by role
* Generate invoice when membership is created (basic stub)
* Member dashboard to view membership

## Phase 3: Billing System

* Payment CRUD (linked to invoices)
* Select payment method (cash/bank)
* Update invoice status based on payment
* View invoices/payments (admin/reception)
* Member view of personal payments

## Phase 4: Class & Booking System

* CRUD for classes (admin only)
* Assign trainers to classes
* Define available days per class
* View class schedule (member/reception)
* Member class booking
* Reception booking on behalf of member
* Booking status updates (cancel/attended)

## Phase 5: Attendance Tracking

* QR scan or manual check-in for members
* Record class attendance per booking
* View member attendance history
* Daily check-in dashboard (reception)

## Phase 6: Inventory & Sales

* CRUD for inventory items (admin)
* Process sales (reception)
* Link sales to person (optional)
* Generate invoice from sale
* Handle low stock alerts

## Phase 7: Financial Features & Payroll

* CRUD for employee salary logs
* Calculate trainer commission based on class attendance
* Mark trainer commissions as paid/unpaid
* Record general expenses (admin)
* Filter expenses by category
* View salary/commission history

## Phase 8: Equipment Management

* CRUD for gym equipment
* Update equipment status (available, under maintenance, etc.)
* Track maintenance dates and schedule

## Phase 9: Notification System

* Manual notifications (admin)
* Auto alerts for:

    * Membership expiry
    * Class reminders
    * Unpaid invoices
* Notification panel for each user

## Phase 10: Reporting & Audit Trail

* Track model changes via audit trail
* Generate reports for:

    * Active vs expired memberships
    * Daily check-ins
    * Sales and income breakdown
    * Trainer performance
    * Payroll and expense summary
