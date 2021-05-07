# greener grass ATL


<br>


![alt text](https://thechungreport.com/content/images/2020/06/Legacy-GardenWorks-10.JPG)


- [Purpose](#purpose)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)

<br>


## Purpose
<br>

This is a fullstack application that will allow users to post their day-to-day exploits as urban gardeners/farmers in Atlanta, as well as allow other users to comment on these posts, fostering a dialogue (tips, tricks, glass content in the soil) between local growers.  
<br>

## MVP

- Sign Up/Login
- A place to post about yr daily routine and the nature of growing and foraging in the city wilds
- Comments from other users relating their experiences of the day
- A fitting aesthetic for the content

<br>

### Post-MVP

- A way to visually map the locations of gardens and food forests in Atlanta (if a user is so inclined to disclose this info, or if it is public)
- A quick-guide to what grows best in our zone that can be edited by users
- A field-guide for foraging connected to an identification app

<br>

### Client 

#### Wireframes

- Landing

![alt text](https://i.imgur.com/eSSQuWu.png)

-Logged in Landing

![alt text](https://i.imgur.com/Ehm4ul4.png)

- Post Page 

![alt text](https://i.imgur.com/3kq1lmE.png)

- View All Posts

![alt text](https://i.imgur.com/J9TBsAb.png)

- Edit/Delete

![alt text](https://i.imgur.com/1G8N5SG.png)

- Comment

![alt text](https://i.imgur.com/YLi0Gmq.png)


#### Component Tree

![alt text](https://i.imgur.com/mlbYcmz.png)


#### Component Architecture

``` 

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
|__ components/
      |__ Header.jsx
      |__ Footer.jsx
|__ screens
      |__Home.jsx
      |__SignInUp.jsx
      |__CreatePost.jsx
      |__EditPost.jsx
      |__DeletePost.jsx
      |__ViewAllPost.jsx
      |__PostDetail.jsx
|__ services/

```

## Project Timetable

|          | Reviewing/Studying    | General                       | Coding       | Styling           | Total Hours Day | Total Hours Days |
| -------- | --------------------- | -----------------------------| ------------ | ----------------- | --------------- | ---------------- |
| May 7    | 4 hours               | 2 hours                      | 3 hours      | 0.5 hour(initial) | 9.5             | 9.5              |
| May 8    | 1 hour                | 1 hour                       | 5 hours      | 1 hour            | 8               | 17.5             |
| May 9    | 1 hours(review)       | 1 hour                       | 6 hours      | 1.5 hours         | 8.5             | 26               |
| May 10   | 0                     | 1 hour                       | 6 hours      | 1.5 hours         | 8.5             | 34.5             |
| May 11   | 0                     | 1 hour                       | 4 hours      | 4 hours           | 9               | 43.5             |
| May 12   | 0                     | 1 hour                       | 5 hours      | 2 hours           | 8               | 51.5             |
| May 13   | 0                     | 1 hour                       | 4 hours      | 3 hours           | 8               | 59.5             |
| May 14   | PRESENTATION          | PRES DAY                     | PRES DAY     | PRES DAY          | PRES DAY        | PRES DAY         |


<br>

### Server

#### ERD Model

![alt text](https://i.imgur.com/WWcDw5Y.png)


<br>

***
