# Task Two
## Installation (PHP, NodeJS, and Composer Required - Ensure these are installed)

### Git Clone
```bash
git clone https://github.com/CanisCyril/yordas_group_task.git
```

1. Run terminal as administrator (may cause issues if not ran as admin).
2. Path to project folder.
3. Run the command: composer install
4. Run the command: npm install
5. Run the command: npm run dev
6. Rename .env.example to .env.
7. Run the command: php artisan key:generate
8. Configure database settings in the .env file. (Shown below)
9. Run the query from the yordas_group_db_query folder to create the database and populate tables.
10. Run the command: php artisan serve
11. Follow the localhost link provided (127.0.0.1:8000).

## Database Settings

### Example

DB_CONNECTION=mysql  
DB_HOST=127.0.0.1  
DB_PORT=3306  
DB_DATABASE=yordas_group_db  
DB_USERNAME=root  
DB_PASSWORD=  

## Database Changes

I have changed all the IDs to ints for database performance.

## Files that I have Written.

### routes

- web.php  
- yordas_group_task.php  

### Models

- Substance.php  
- TSDSubstanceList.php  
- ReachSVHCCandidSubstance.php  

### Controllers

- ApiController

### Views

- app.blade.php  
- index.blade.php  

### Javascript (VueJS)

- app.js  
- dashboard.js  

### CSS

- dashboard.css

### Webpack

- webpack.mix.js





