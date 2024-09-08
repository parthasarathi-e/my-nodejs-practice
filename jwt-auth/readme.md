This is a modular JWT based Authentication API built in Expressjs

#Libraries used
- **Express** for creating server
- **joi** for valdating user data
- **bcrypt** for hashing user passwords
- **jsonwebtoken** for creating and parsing jwt(S)
- **mongoose** for accessing mongo database
- **cookie-parser** for reading cookies from user request
- **dotenv** for accessing environment variables

#Routes
- "/" Home Route
- "/profile" To display user profile
- "/api/auth/register" To create a new user 
- "/api/auth/login" To log in the user
- "/api/auth/logout" To logout the user
- "/api/auth/change/password" To change the password

Note: This is just an API it doesnt have any forms or it cannot be used in bowser, is should be used in API development platforms
like Postman or insomnia

Features:
- Modular
- Encrypted
- Easy
- Code is explained line by line using comments

Todo: (Not sure if i will do all these)
- Implement middleware insted of utility function
- Add frontend forms using ejs
- use multiple hasing techniques to further encrypt password