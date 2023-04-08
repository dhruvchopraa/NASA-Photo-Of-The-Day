## NASA Photo of the Day MERN Website

This repository focuses on building a SPA (Single Page Application) which shows the NASA Astronomy Photo of the Day of the browser's current date and time.
This is a MERN Stack based project and to run this on your local machine, the following steps have to be followed.
### Env Variables
Create a .env file in the root directory and add the following
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

john@example.com (John Doe)
123456

jane@example.com (Jane Doe)
123456
