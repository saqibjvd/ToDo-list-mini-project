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



elephentsql_based_environment
# USER = pzlwkqtr
# HOST = flora.db.elephantsql.com
# PASSWORD = Xj58-HEBGKHUwU-_1M_EPAyHElAP8NDg
# DATABASE = todos
# DATABASE_URL = postgres://pzlwkqtr:Xj58-HEBGKHUwU-_1M_EPAyHElAP8NDg@flora.db.elephantsql.com/pzlwkqtr
# DB_PORT = 5432
# API_KEY = 281fa6bb-7fd1-4a9c-8254-28d15344e6bf

# DATA_SOURCE_URL
# DATA_API_KEY= 281fa6bb-7fd1-4a9c-8254-28d15344e6bf
# DB_HOST=localhost
# DB_USER=myuser
# DB_PASS=mypassword





vercel_based_environment
# POSTGRES_URL="postgres://default:I2K5tifEjOdU@ep-shrill-morning-a4lv516a-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require"
# POSTGRES_PRISMA_URL="postgres://default:I2K5tifEjOdU@ep-shrill-morning-a4lv516a-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require&pgbouncer=true&connect_timeout=15"
# POSTGRES_URL_NO_SSL="postgres://default:I2K5tifEjOdU@ep-shrill-morning-a4lv516a-pooler.us-east-1.aws.neon.tech:5432/verceldb"
# POSTGRES_URL_NON_POOLING="postgres://default:I2K5tifEjOdU@ep-shrill-morning-a4lv516a.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require"
# POSTGRES_USER="default"
# POSTGRES_HOST="ep-shrill-morning-a4lv516a-pooler.us-east-1.aws.neon.tech"
# POSTGRES_PASSWORD="I2K5tifEjOdU"
# POSTGRES_DATABASE="verceldb"
# POSTGRES_PORT = 5432
#   psql "postgres://default:I2K5tifEjOdU@ep-shrill-morning-a4lv516a.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require"


  # connectionString: process.env.POSTGRES_URL ,
  # POSTGRES_URL: process.env.POSTGRES_URL,
  # POSTGRES_PRISMA_URL: process.env.POSTGRES_PRISMA_URL,
  # POSTGRES_URL_NO_SSL: process.env.POSTGRES_URL_NO_SSL,
  # POSTGRES_URL_NON_POOLING: process.env.POSTGRES_URL_NON_POOLING,
  # POSTGRES_USER: process.env.POSTGRES_USER,
  # POSTGRES_HOST: process.env.POSTGRES_HOST,
  # POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
  # POSTGRES_DATABASE: process.env.POSTGRES_DATABASE,