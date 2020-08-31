use employees;

INSERT INTO employees (first_name, last_name, role_id)
VALUES
  ('Bella', 'Person', 1),
  ('Tom', 'Rocket', 3),
  ('Lance', 'Rover', 2),
  ('Ashley', 'House', 2),
  ('Kim', 'Normal', 4);

  INSERT INTO department (department_name)
VALUES
  ('Engineering'),
  ('Sales'),
  ('Legal'),
  ('Management');

  INSERT INTO employee_role (role_name, salary, department_id)
VALUES
  ('Engineer', '85000', 1),
  ('Sales_person', '56000', 2),
  ('Sales_lead', '70000', 2),
  ('Manager', '96000', 4),
  ('Lawyer', '95000', 3);


