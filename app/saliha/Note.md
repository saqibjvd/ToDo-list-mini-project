1. To create a new db need to type createdb (database name); in the terminal.
2. Then type the psql -d database_name -f paste the sql file relative path like (app/sql/schema.sql) or psql -d database_name -f app/sql/schema.js. Should be like psql -d todos -f app/sql/schema.sql
3. \dt to show the database
-d is the name of the database
-f run the file rather then the terminal
\conninfo uses to get information about the database connection. = 
You are connected to database "salihapopal" as user "salihapopal" via socket in "/tmp" at port "5432".
result is postgresql://[user[:password]@][netloc][:port][/dbname]
const pool_options = { connectionString: process.env.DATABASE_URL }
const pool_options = { connectionString: "postgresql://tmp@localhost:5432/todos" }

await is added before each function call to connect to the database server.  (return Response.json(await db.getTodos(), { status: 200 })).
await is added before each callback function to ensure that they are executed synchronously and avoid the need for double clicking on buttons or any other actions.(await db.AddTodo(data.task);)

supabase for saving data 
1. Creating an account
2. Copying url link and paste it instead of the postgresql://tmp@localhost:5432/todos
3. Creating new table and inserting new data
4. To view the table and its columns click the database, click the three dots and then view table

