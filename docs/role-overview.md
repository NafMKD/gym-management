# User Role Overview - Gym Management System

## 1. Admin

**Core responsibilities:** Full system control, configuration, and financial/operational oversight.

**Capabilities:**

* Manage all users and employees (create/edit/delete)
* Configure packages, inventory, and expenses
* View all financial reports (invoices, payments, salaries, commissions)
* Approve or grant membership day extensions
* Manage class schedules and assign trainers
* Set trainer performance ratings
* Handle equipment and maintenance tracking
* Review and audit logs (audit trail)
* Approve expenses and salary payments

---

## 2. Reception

**Core responsibilities:** Daily front-desk operations, member handling, payment processing.

**Capabilities:**

* Register new members (create `people` + optional `user`)
* Assign or renew memberships
* Record and process payments
* Generate invoices
* Check membership status
* Book classes on behalf of members
* Mark class attendance
* View available inventory and sell products
* Notify admin of issues (manual entry or via system)
* View schedules and availability
* Basic reporting (daily check-ins, sales summary)

> Note: Receptionists should not have access to sensitive actions like performance ratings, employee payroll, or trainer commissions.

---

## 3. Member

**Core responsibilities:** Use gym services, track progress, book classes.

**Capabilities:**

* Sign up & log in
* View personal membership details and status
* Book available classes
* View upcoming class schedules
* Receive notifications (membership expiry, payment reminders, class updates)
* View attendance history
* View payment history (if self-paid)
