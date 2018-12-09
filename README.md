[!(https://imgur.com/a/85lhMYO)](https://ghills3620.github.io/capstone-react/#/)

## What is Wodify?

If you've ever been to a CrossFit box (aka gym) and taken part in a WOD (workout of the day), you'll know that the whiteboard is an integral part of the whole experience: It's where the WOD is written out beforehand and where everyone's results are recorded afterward. So why get rid of whiteboards at CrossFit facilities all over the country? Because, they say, they've got something better. Needless to say, we're intrigued.

It's called Wodify, and here's how it works: Gym owners can purchase the software that helps them manage their members, along with a digital kiosk and display screen that replaces the gym's traditional whiteboard. Gym members, meanwhile, all get a free app for their smartphone. They'll use that app to check into class, record their WOD results, and manage their account; they can even sync the app with their social networks, so it's easier to brag about, errrr, share out their latest accomplishments via social media. (Forgot your phone? You can also use the kiosk to enter your info.)

Now, this isn't the first program out there designed for CrossFitters to use for tracking their workouts; a quick look through the App store will verify that. But Wodify is different because it connects everyone at a specific box together with the same program that's tailored just for the particular group; you wouldn't have to tell your app what today's WOD is, for example, because it already knows. It also helps with more practical things, like paying your bill and tracking your attendance. And, unlike a white board that gets wiped clean every day, the app automatically stores everyone's results (and workouts, duh) for future reference.

## Technologies Used
[Ruby on Rails](https://rubyonrails.org/)
  - is a server-side web application framework written in Ruby under the MIT License. Rails is a model–view–controller (MVC) framework, providing default structures for a database, a web service, and web pages

[Heroku](https://heroku.com/)
  - is a cloud platform that lets companies build, deliver, monitor and scale apps.

[JSX](https://reactjs.org/docs/introducing-jsx.html)
  - is a preprocessor step that adds XML syntax to JavaScript. You can definitely use React without JSX but JSX makes React a lot more elegant.

[Bootstrap](https://getbootstrap.com/)
  - Bootstrap is an open source toolkit for developing with HTML, CSS, and JS. Quickly prototype your ideas or build your entire app with our Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful plugins built on jQuery.

## User Stories

Version 1

Non signed in User

 - As a non signed in user , I want to be able to sign up with user name, email, and password
 - As a non signed in user, I want to view other users result from past workouts
 - As a signed in user, I want to be able to sign in with user name and password

Signed In User

 - As a signed in user, I want to be able to add in, view, and update current/past workouts to my account.
 - As a signed in user, I want to view other users result from current/past workouts


## Unsolved Problems

Version 1
 - STYLING!!!!
 - Being able to style the site as I would like it to look
 - Giving the user the ability to have a user name displayed instead of their email
 - More user friendly UI experience

Version 2
 - Non signed in User

  - As a non signed in user, I want to be able to view the current workout of the day

 - Signed in User

  - As a signed in user, I want to be able to view the current workout of the day
  - As a signed in user, I want to be able to input pre-made/detailed results
    - type of workout
    - named or custom workout
  - As a signed in user, I want to be able to be able to see a table of named workouts

[ERD's/Wire Frame](https://imgur.com/a/tpN09xp)

## Project Planning

Planning
- []  Review full-stack-project-practice
- []  Review full-stack-project-modeling-lab
- []  Create User Stories
- []  Create Wire Frames
- []  Create ERD

Set Up
API
- []  Download Rails API Template
- []  Create a Github Repository
- []  Deploy to Heroku
Client
- []  Download Browser Template
- []  Create a Github Repository
- []  Deploy to Github Pages

API
- []  Review rails-api-one-to-many or rails-api-many-to-many
- []  Scaffold your resource
- []  Test your resource's end points with curl scripts
- []  Update resource controller to inherit from Protected or OpenRead controller
- []  Test your resource's end points with curl scripts
- []  Add the relationship to a User
- []  Add User ownership to resource controller

Client
- []  Review api-token-auth
- []  Sign Up (curl then web app)
- []  Sign In (curl then web app)
- []  Change Password (curl then web app)
- []  Sign Out (curl then web page)
- []  All API calls have success or failure messages
- []  Review query-ajax-post
- []  Create resource (curl then web app)
- []  Get all of their owned resources (curl then web app)
- []  Delete single resource (curl then web app)
- []  Update single resource (curl then web app)

Final Touches
- []  README
- []  Troubleshoot/Debug
- []  Style

## The Process

 The process of doing this project was a lot less painstaking than the last due to
 planning.  From the very begginning I started with knowing excatly what it was that
 I needed to get done and sticking to the task. Small goals large victories was how I
 was able to complete this project. One small step at a time, I have very ambitious goals
 with this project but at my level the first step was to find the simplest things and
 to do those and get it working. It doesnt matter how it looks at first it just needs to

I ran in to issues nearly everydary working on this application. To solve these
problems I looked back at the resources I had and was given. What toos are already
built for me that I can take advantage of is something I looked at for every issue.
Can I take 15 extra minutes to learn more about this and get it to work, so that my
code is more adaptable for future itterations. Also lets not forget I didnt have to
do this alone, fellow devs, stack overflow, and google were all at my finger tips
help. Ive learned alot during this process and feel more confident after finishing.

## Catalog of Routes:
## Authentication

| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| POST   | `/sign-up`             | `users#signup`    |
| POST   | `/sign-in`             | `users#signin`    |
| PATCH  | `/change-password/`    | `users#changepw`  |
| DELETE | `/sign-out/`           | `users#signout`   |
| GET    | `/users/:id`           | `users#show`      |


## Wods

| Verb   | URI Pattern       | Controller#Action  |
|--------|-------------------|--------------------|
| POST   | `/wods/new`       |  `wods#create`     |
| GET    | `/wods`           |  `wods#index`      |
| PATCH  | `/wods/:id/update`|  `wods#update`     |
| DELETE | `/wods/:id`       |  `wods#destroy`    |
| SHOW   | `/wods/:id/show`  |  `wods#show`       |

## Installation Guide

## Front End Installation (this repo)
1. Fork and Clone this repository.
2. Install dependencies with `npm install`.
3. Run the development server with npm start.

## Back end Installation
(https://arcane-woodland-92648.herokuapp.com/)

1. Fork and Clone this repository.
2. Install dependencies with `bundle install.`
3. Run the development server with npm start.
4. Create a .env for sensitive settings (`touch .env`).
5. Generate new development and test secrets (`bundle exec rails secret`).
6. Store them in .env with keys `SECRET_KEY_BASE_<DEVELOPMENT|TEST>` respectively.
7. Set up a Heroku server
8. Set up your database with the following:
  - `bin/rails db:drop` (if it already exists)
  - `bin/rails db:create`
  - `bin/rails db:migrate`
  - `bin/rails db:seed` (seeds the mountains csv in lib/seed)
9. Run the API server with `bin/rails server` or `bundle exec rails server.`

## Links

- [Client](https://ghills3620.github.io/capstone-react/#/)
- [Server](https://arcane-woodland-92648.herokuapp.com/)
- [Client Read Me](https://github.com/ghills3620/capstone-react)
- [Server Read Me](https://github.com/ghills3620/capstone-backend)
