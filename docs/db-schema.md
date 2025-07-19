# Database Schema - Gym Management System (Final Clean Version)

## Tables

### 1. users:

```
- id int (pk)
- first_name char
- last_name char
- phone int unique -- login
- password char -- login
- role enum ('admin', 'reception', 'member') -- default 'member'
- created_at datetime
- updated_at datetime
- deleted_at datetime
```

### 2. people:

```
- id int (pk)
- user_id int nullable (fk → users.id)
- type enum('trainer', 'employee', 'member')
- email char nullable
- created_at datetime
- updated_at datetime
- deleted_at datetime
```

### 3. memberships:

```
- id int (pk)
- person_id int (fk → people.id)
- package_id int nullable (fk → packages.id)
- start_date date
- end_date date
- granted_extension_days int default 0
- status enum ('active', 'inactive', 'cancelled')
- created_at datetime
- updated_at datetime
- deleted_at datetime
```

### 4. packages:

```
- id int (pk)
- name char
- price decimal
- duration int -- in days
- description text
- created_at datetime
- updated_at datetime
- deleted_at datetime
```

### 5. invoices:

```
- id int (pk)
- people_id int nullable (fk → people.id) -- if null, treated as N/A
- invoice_number char unique
- source_type enum('membership', 'inventory_sale', 'other')
- source_id int -- references the origin table's id
- amount decimal
- status enum('unpaid', 'paid', 'cancelled')
- issued_date datetime
- due_date datetime
- created_at datetime
- updated_at datetime
- deleted_at datetime
```

### 6. payments:

```
- id int (pk)
- invoice_id int (fk → invoices.id)
- amount decimal
- payment_method enum('cash', 'bank')
- status enum('pending', 'completed', 'failed')
- payment_date datetime
- created_at datetime
- updated_at datetime
- deleted_at datetime
```

### 7. trainers:

```
- id int (pk)
- person_id int (fk → people.id)
- specialization char
- commission_percentage decimal
- performance_rating int -- manually set (1–5)
- created_at datetime
- updated_at datetime
- deleted_at datetime
```

### 8. classes:

```
- id int (pk)
- trainer_id int (fk → trainers.id)
- name char
- description text
- capacity int
- start_time datetime
- end_time datetime
- available_days set('mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun')
- created_at datetime
- updated_at datetime
- deleted_at datetime
```

### 9. class\_bookings:

```
- id int (pk)
- class_id int (fk → classes.id)
- person_id int (fk → people.id)
- status enum('booked', 'cancelled', 'attended')
- created_at datetime
- updated_at datetime
- deleted_at datetime
```

### 10. trainer\_commissions:

```
- id int (pk)
- trainer_id int (fk → trainers.id)
- class_id int (fk → classes.id)
- attendees_count int
- commission_amount decimal
- status enum('pending', 'paid')
- payout_date datetime nullable
- created_at datetime
- updated_at datetime
- deleted_at datetime
```

### 11. inventory:

```
- id int (pk)
- item_name char
- stock_quantity int
- price decimal
- low_stock_threshold int
- created_at datetime
- updated_at datetime
- deleted_at datetime
```

### 12. inventory\_sales:

```
- id int (pk)
- inventory_id int (fk → inventory.id)
- person_id int nullable (fk → people.id)
- quantity int
- single_amount decimal
- total_amount decimal
- sale_date datetime
- created_at datetime
- updated_at datetime
- deleted_at datetime
```

### 13. employee\_salary\_logs:

```
- id int (pk)
- person_id int (fk → people.id)
- base_salary decimal
- bonus decimal
- total_paid decimal
- payment_date date
- status enum('pending', 'paid')
- created_at datetime
- updated_at datetime
- deleted_at datetime
```

### 14. expenses:

```
- id int (pk)
- category enum('inventory_purchase', 'maintenance', 'utility', 'other')
- description text
- amount decimal
- incurred_by int nullable (fk → users.id)
- expense_date datetime
- created_at datetime
- updated_at datetime
- deleted_at datetime
```

### 15. equipment:

```
- id int (pk)
- name char
- status enum('available', 'under_maintenance', 'out_of_order')
- last_maintenance_date datetime
- next_maintenance_date datetime
- created_at datetime
- updated_at datetime
- deleted_at datetime
```

### 16. attendance:

```
- id int (pk)
- membership_id int (fk → memberships.id)
- entry_date datetime
- created_at datetime
- updated_at datetime
- deleted_at datetime
```

### 17. notifications:

```
- id int (pk)
- user_id int (fk → users.id)
- message text
- type enum('payment', 'class', 'membership', 'system')
- status enum('pending', 'sent', 'read')
- created_at datetime
- updated_at datetime
- deleted_at datetime
```

### 18. audit\_trail:

```
- id int (pk)
- table_name char
- record_id int
- user_id int (fk → users.id)
- action enum('insert', 'update', 'delete')
- changed_data json
- created_at datetime
- deleted_at datetime
```
