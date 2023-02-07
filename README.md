# MERN Travel Blog
![license](https://img.shields.io/badge/license-MIT-black)

Deployed site on Heroku:
I am still working on this deployment although the project is complete and runs fine locally
     
## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Features](#features)
- [How-to-Contribute](#how-to-contribute)
- [Tests](#tests)
- [Questions](#questions)

## Description
```md
This project was to build a responsive, interactive application using GraphQL with a node.js and express.js server, and JWT (JSON Web Token) for authentication.  We used MongoDB and the Mongoose ODM for the database, and queries and mutations for retrieving, adding, updating, and deleting data.  The application was deployed to Heroku with seed data.
```

**User Story**
```md
As a person who loves to travel
I want to share my travel experiences and learn from others’ travel experiences
SO THAT I can plan my future travel destinations
```
**Acceptance Criteria**

```md
GIVEN a MERN-stack single-page application
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes all existing reviews, as well as homepage links and navigation buttons to log in or sign up
WHEN I choose to sign up
THEN I am prompted to enter my email address, username and password, 
WHEN I complete the sign up process
THEN I am automatically logged into the site
WHEN I revisit the site at a later time and choose to log in
THEN I am prompted to enter my email and password 
WHEN I am signed into the site
THEN I am taken to the homepage that displays existing reviews, with a user profile button, a logout button and a screen to add a new review,
WHEN I enter data into the new review screen and click on the Add Review button
THEN the homepage is refreshed so I see my new review data has been saved
WHEN I click on my profile button in the navigation,
THEN I am presented with a dashboard that displays any reviews I have already created
WHEN I click on the "Edit this Review" link on any of my existing reviews
THEN I am presented with a new screen so I can change my review or I can delete the review entirely
WHEN I click on the delete review button
THEN I am able to delete my review
WHEN I return to my profile page
THEN I see my deleted review no longer exists
WHEN I click on the logout button in the navigation
THEN I am signed out of the site
WHEN I logged in but am idle on the site for more than 5 minutes
THEN I am automatically logged out and must log in again to be able to add new reviews and update/delete my existing reviews
```

## Installation  (if you are going to clone my repo)
<!-- audience is other developers -->

1. Clone this GitHub repo https://github.com/abrownstein2022/mern-travel-blog 
<!-- Check out the gh cli tool from github -->
```bash  
$ gh repo clone https://github.com/abrownstein2022/mern-travel-blog  
```

2. From the terminal, install npm:
```bash
$ npm i
``` 

<!-- [] implies user input 
 mysql> restaurant_mgr < C:\[filename].sql
-->


## Usage  
This application will be deployed on Heroku with initial seed data.  Click on the Heroku link below to start the application.  Or clone and use from your vs-code.

1. Open the app using Heroku (still working on Heroku deployment)


Or to run localling, create 2 terminal sessions in VS Code

First terminal session to run MongoDB/Mongoose ODM
```bash
$ mongod
```

Second terminal session to run node and seed data
```bash
$ npm run seed
$ npm run develop
```

**The screenshots below show the functionality of the application:**<br>
Homepage opens for all users showing all blog reviews but no one can create reviews, or update or delete their own reviews without logging in.
![example image 1 homepage](./client/src/images/travel-blog1-homepage.png)

User must register on the website to enter reviews, update and delete their reviews.
![example image 2 signup or login](./client/src/images/travel-blog1-homepage.png)

New user signup.
![example image 3 new user signup](./client/src/images/travel-blog1-homepage.png)

Dashboard displays after user login, showing the logged in user's posts.
![example image 4 new user dashboard](./client/src/images/travel-blog1-homepage.png)

New user's first blog post.
![example image 5 new user first blog post](./client/src/images/travel-blog1-homepage.png)

New user's second blog post.
![example image 6 new user dashboard after first blog post](./client/src/images/travel-blog1-homepage.png)

Dashboard display of new user after 2 new posts added.
![example image 7 dashboard after blog post 2](./client/src/images/travel-blog1-homepage.png)

New user comments on another user's post.
![example image 8 comment on another post](./client/src/images/travel-blog1-homepage.png)

Homepage display after new user entered comments on another user's post.
![example image 9 comment on someone else's post](./client/src/images/travel-blog1-homepage.png)

Display posted comment.
![example image 10 posted comment](./client/src/images/travel-blog1-homepage.png)

New user updates their own post.
![example image 11 update data](./client/src/images/travel-blog1-homepage.png)

Display shows latest update works.
![example image 12 update screen works](./client/src/images/travel-blog1-homepage.png)

The new user deletes one of their posts.<br>
![example image 13 delete post](./client/src/images/travel-blog1-homepage.png)

Display dashboard after new post has been deleted.
![example image 14 dashboard after delete own post](./client/src/images/travel-blog1-homepage.png)
  
Display dashboard after new post has been deleted.
![example image 15 page after user logs out](./client/src/images/travel-blog15-after-click-logout-button.png)

## Credits

```md
Alexis Brownstein, Bootcamp tutor: Phil, Wyzant tutor: Mike
```

## License

 ```md
 MIT 
```

Link to license text:
https://opensource.org/licenses/mit-license


![badge](https://img.shields.io/badge/license-mit-black)


## Features 

<!-- 
# h1
###### h6
**bold**
*italic*
_underline_

| key | value |
|-|-|
| name | 'bob' |


- list
- items

1. numberd
1. list
1. all ones - automatic numbering
Features for *future* development
 -->
**The main features in this project are:**<br> 
1. MERN stack: uses MongoDB/Mongoose ODM, Express.js, React, Node.js, JWT for authentication, Heroku for deployed website
1. Example screenshots with description of application functionality 
1. Necessary MERN folder structure and setup with client/server 
1. Professional README
1. User credentials saved to log into the site
1. Timeout after 5 minutes of inactivity
## How-to-Contribute

N/A

## Tests
N/A

## Questions

Feel free to contact me with any questions.

I can be reached at alexis@drdatabase.com.

This GitHub repo can be found at:
  
https://github.com/abrownstein2022/react-travel-blog  ***change to MERN-travel-blog****


