CREATE TABLE employees (
  id INTEGER PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  employees_role VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE employees_role (
  id INTEGER PRIMARY KEY,
  employees_role VARCHAR(30) NOT NULL,
  salary DECIMAL,
  PRIMARY KEY (id)
);

CREATE TABLE department (
  id INTEGER PRIMARY KEY,
  department_name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);




