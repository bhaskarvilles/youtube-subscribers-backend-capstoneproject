# Get YouTube Subscribers - Backend Capstone Project

This is a backend project that allows users to view and manage a list of YouTube subscribers.

Features
- Add subscribers to the database
- View a list of all subscribers
- View a list of subscribers with only their names and subscribed channels
- View a specific subscriber by their _id
- Delete a subscriber from the database

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose

## Getting Started

1. Clone the repository
```git clone https://github.com/bhaskarvilles/youtube-subscribers-backend-capstoneproject.git```

2. Install the dependencies
```npm install```

3. Connect to your MongoDB database

4. Start the server ```npm start``` or ```node /app.js```

5. Use the API
    The API can be accessed at http://localhost:3000/.

**Endpoints:**

- GET /: Homepage
- GET /subscribers: Get an array of all subscribers
- GET /subscribers/names: Get an array of subscribers with only their names and subscribed channels
- GET /subscribers/:id: Get a specific subscriber by their _id
- POST /subscribers: Add a new subscriber to the database
- DELETE /subscribers/:id: Delete a subscriber from the database

## Example Requests

Get an array of all subscribers:

```curl --request GET \ --url https://backend-rux8.onrender.com/subscribers```

Get a specific subscriber by their _id:

```curl --request GET \ --url https://backend-rux8.onrender.com/subscribers/5f5d5c5b5a5a5a5a5a5a5a```

Add a new subscriber to the database:

```bash
curl --request POST \ --url https://backend-rux8.onrender.com/subscribers \ (we can use mangooose application url here or MongodbShell or Compass)
  --header 'content-type: application/json' \
  --data '{
	"name": "John Smith",
	"subscribedChannel": "Tech Tips"
}'
```
Delete a subscriber from the database:

```curl --request DELETE \ --url https://backend-rux8.onrender.com/subscribers/5f5d5c5b5a5a5a5a5a5a5a```
