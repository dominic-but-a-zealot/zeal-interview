# zeal-interview
The payroll runner app for a new frontier

## TODO

There are a few things preventing us from running payroll;

### 1. Create check button is permanently disbaled

Users are currently unable to create a payroll run after selecting employees.

### 2. Complete EmployeeCheck component using Status component

The current EmployeeCheck component doesn't render anything. It should show:
- Employee name
- Gross pay
- Hours worked
- Check status; the existing Status component should be helpful.

### 3. Add features to show paystub histories for a provided employee

We wanna show a list of already created check for a provided user.
There are 2 existing apis to help with this:

- getAllEmployees
- getUserPayrollHistory
