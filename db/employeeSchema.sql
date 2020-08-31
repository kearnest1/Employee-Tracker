DROP DATABASE IF EXISTS employees;
CREATE DATABASE employees;
USE employees;

CREATE TABLE department (
  id INTEGER,
  department_name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE employee_role (
  id INTEGER,
  role_name VARCHAR(30) NOT NULL,
  salary DECIMAL,
  department_id VARCHAR(30) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (department_id) REFERENCES department (id)
);

CREATE TABLE employees (
  id INTEGER,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id VARCHAR(30) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (role_id) REFERENCES employee_role (id)
);



