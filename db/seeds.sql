USE thc_db;
INSERT INTO department (name)
    VALUES
        ('Management'),
        ('Marketing'),
        ('Sales'),
        ('Human Resources');

INSERT INTO role (title, salary, department_id)
  VALUES
    ('Store Manager', 4500, 1),
    ('Assistant Manager', 1750, 1),
    ('Marketing Manager', 3200, 2),
    ('Marketing Coordinator', 1550, 2),
    ('Sales Manager', 3200, 3),
    ('Sales Associate', 1880, 3),
    ('HR Manager', 2280, 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
  ('Ronald', 'Firbank', 1, NULL),
  ('Virginia', 'Woolf', 2, 1),
  ('Piers', 'Gaveston', 3, 1),
  ('Charles', 'LeRoi', 4, 3),
  ('Katherine', 'Mansfield', 5, 1),
  ('Dora', 'Carrington', 6, 5),
  ('Edward', 'Bellamy', 7, 1);
   

