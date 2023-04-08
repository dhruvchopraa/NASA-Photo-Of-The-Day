
### Env Variables
Create a .env file in then root and add the following
```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
```

### Install Dependencies (frontend & backend)
npm install
cd frontend
npm install

### Run
```
# Run frontend (:3000) & backend (:5000)
npm run dev

# Run backend only
npm run server
```

### Seed Database
You can use the following commands to seed the database with some sample users and products as well as destroy all data
```
# Import data
npm run data:import
```

```
Sample User Logins:

admin@example.com (Admin)
123456
