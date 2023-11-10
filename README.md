# EzyLink - MERN Stack URL Shortener Project

Efficiently manage and shorten URLs with our MERN stack URL Shortener. This project leverages MongoDB, Express.js, React, and Node.js to provide a streamlined solution for creating and managing shortened links. Enhance your web navigation experience with ease and simplicity.

## Tech Stack

- **Frontend (Client):**
  - React
  - Vite

- **Backend (Server):**
  - Node.js
  - Express.js
  - Passport.js (Google OAuth 2.0 strategy)

- **Database:**
  - MongoDB

- **Deployment:**
  - Render (Live Deployment: [https://ezylink.onrender.com](https://ezylink.onrender.com))

- **Authentication:**
  - Google OAuth 2.0 using Passport.js

- **API and Data:**
  - IP Data from [ipapi](https://ipapi.co/)

- **Redis (Local Deployment):**
  - WSL (Windows Subsystem for Linux)

- **Redis (Upstash Deployment):**
  - [Upstash](https://upstash.com/)

## Local Setup

To run this project locally, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/KnixSpace/EzyLink.git
    cd EzyLink
    ```

2. Install dependencies:

    ```bash
    cd client
    npm install

    cd ../server
    npm install
    ```

3. Start the Redis server locally using WSL on Windows:

    - Make sure you have WSL configured on your Windows system.
    - Open WSL terminal.
    - Run the following command to start the Redis server:

    ```bash
    sudo service redis-server start
    ```

4. Configure the server:

    - Update the `.env` file in the `server` folder for local Redis settings:

    ```env
    MONGO_CONNECTION_STRING = "mongodb://localhost:27017/your_db_name"
    CLIENT_DASHBOARDHBOARD = "http://localhost:5173"
    CLIENT_HOME = "http://localhost:5173"
    SERVER_HOST = "http://localhost:3000/"
    AUTH_CLIENT_ID = "google_oauth_client_id"
    AUTH_CLIENT_SECRET = "google_oauth_client_secret"
    IP_DATA = "https://ipapi.co/json"
    IP_DATA_BACKUP = "http://ip-api.com/json/?fields=status,country"
    NODE_ENV = "development"
    ```

    - For Upstash deployment, add the following to the `.env` file:

    ```env
    UPSTASH_REDIS_REST_URL = "your_upstash_redis_rest_url"
    UPSTASH_REDIS_REST_TOKEN = "your_upstash_redis_rest_token"
    ```

    - Configure `redis.js` in the `server` folder:

    For local Redis, comment:

    ```javascript
    const { Redis } = require("@upstash/redis");
    const redis = new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL,
      token: process.env.UPSTASH_REDIS_REST_TOKEN,
    });
    ```

    And uncomment:

    ```javascript
    const { Redis } = require("ioredis");
    const redis = new Redis();
    ```

    For Upstash, comment the local Redis configuration and uncomment the Upstash configuration.

Now you can access the URL Shortener locally at [http://localhost:5173/](http://localhost:5173/).
