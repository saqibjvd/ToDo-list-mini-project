CREATE TABLE todos (
  id SERIAL PRIMARY KEY,
  task VARCHAR(100),
  completed BOOLEAN DEFAULT false
);


INSERT INTO todos (task, completed) 
VALUES 
('learn react', false), 
('learn next.js', false), 
('learn about react props', false), 
('todo mini app', false), 
('shopping', false);