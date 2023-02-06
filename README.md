# MERN Travel Blog
![license](https://img.shields.io/badge/license-MIT-black)

Deployed site on Heroku:
https://cms-tech-blog.herokuapp.com/ ******************************update this************
     
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
The task for this assignment was to build a responsive, interactive application using GraphQL with a node.js and express.js server, and JWT (JSON Web Token) for authentication.  We used MongoDB and the Mongoose ODM for the database, and queries and mutations for retrieving, adding, updating, and deleting data.  The application was deployed to Heroku with seed data.
```

**User Story**
```md
As a person who loves to travel
I want a website to create reviews to share my travel experiences and learn from the travel experiences of others
SO THAT I can plan my future travel destinations

```

**Acceptance Criteria**

```md
GIVEN a MERN-stack single-page application
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing reviews if any have been posted, and navigation buttons to login or signup
WHEN I click on the Edit Review button on any existing reviews
THEN I am taken to a page indicating I must log in or signup
WHEN I choose to sign up
THEN I am prompted to enter my email address, username and password, and then I am logged into the site
WHEN I choose to log in
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my email and password
WHEN I am signed in to the site
THEN I am taken to my user profile page and presented with a screen to add new reviews or update existing reviews that I created (if any)
WHEN I click on the "Edit this Review" link on my existing reviews
THEN I am presented with an update screen so I can change my review or I can delete the review entirely
WHEN I click on the Add Review button
THEN I see all the information fields for which I can enter data, including rating the place I am reviewing
WHEN I click on the Add Review button to create a new review
THEN all my review data is saved and I am taken back to my profile page and can see the new review I just created
WHEN I click on the delete review button
THEN I am able to delete my review and am taken back to my updated profile page
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I logged in but am idle on the site for more than 5 minutes
THEN I am automatically logged out and must log in again to be able to add new reviews and update/delete my existing reviews
```

## Installation  (if you are going to clone my repo)
<!-- audience is other developers -->

1. Clone this GitHub repo https://github.com/abrownstein2022/react-travel-blog  ***change to MERN-travel-blog****
<!-- Check out the gh cli tool from github -->
```bash  
$ gh repo clone https://github.com/abrownstein2022/react-travel-blog   ***change to MERN-travel-blog****
```

2. From the terminal, install npm:
```bash
$ npm i
``` 

<!-- [] implies user input 
 mysql> restaurant_mgr < C:\[filename].sql
-->


## Usage  
This application has been deployed on Heroku and has initial seed data.  Click on the Heroku link below to start the application.  Or clone and use from your vs-code.

1. Open the app using Heroku https://XXXXXXXX.herokuapp.com *******************************update this


Or to run in terminal with 2 terminal sessions

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
Homepage opens for all users showing all posts and comments but no one can update data without logging in.
![example image 1 homepage](./public/images/ch14-screen1-homepage.png)

User must register on the website to enter posts, update and delete their posts, and add comments to other user posts.
![example image 2 signup or login](./public/images/ch14-screen2-signup-or-login.png)

New user signup.
![example image 3 new user signup](./public/images/ch14-screen3-new-user-signup.png)

Dashboard displays after user login, showing the logged in user's posts.
![example image 4 new user dashboard](./public/images/ch14-screen4-new-user-dashboard.png)

New user's first blog post.
![example image 5 new user first blog post](./public/images/ch14-screen5-new-user-first-blog-post.png)

New user's second blog post.
![example image 6 new user dashboard after first blog post](./public/images/ch14-screen6-new-user-dashboard-after-first-blog-post.png)

Dashboard display of new user after 2 new posts added.
![example image 7 dashboard after blog post 2](./public/images/ch14-screen7-dashboard-after-post-2.png)

New user comments on another user's post.
![example image 8 comment on another post](./public/images/ch14-screen8-comment-on-another-post.png)

Homepage display after new user entered comments on another user's post.
![example image 9 comment on someone else's post](./public/images/ch14-screen9-comment-on-someone-elses-post.png)

Display posted comment.
![example image 10 posted comment](./public/images/ch14-screen10-posted-comment.png)

New user updates their own post.
![example image 11 update data](./public/images/ch14-screen11-update-data.png)

Display shows latest update works.
![example image 12 update screen works](./public/images/ch14-screen12-update-works.png)

The new user deletes one of their posts.<br>
![example image 13 delete post](./public/images/ch14-screen13-delete-post.png)

Display dashboard after new post has been deleted.
![example image 14 dashboard after delete own post](./public/images/ch14-screen14-dashboard-after-delete.png)
  

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


