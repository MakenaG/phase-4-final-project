# KenyaFlix
This movie web application is developed with React to showcase a list of movies, allowing users to browse through them, upload movies, and add comments. It retrieves data from the Movie API backend, which is built using Ruby.

## Features
* User registeration
* User Login
* Browse all movies
* Upload new videos
* Update video description
* Delete video movie
* Add, update and delete Comments 
* Add Favorite movie 
* Delete a favorite movie


# Usage
### Viewing movies
The main page of the application displays a list of movies retrieved from the Ruby API backend. You can scroll through the list and click on any movie to view its details.


### View one movie and adding to Favorites
Click on a movie image to go to the page for that specific movie and watch its trailer.Add a movie to your favorites by clicking on the like button on the movie page.


### Favorites page
On the favorites you will find a list of all the favorite movies you have added.
If you click on the movie image, you will be redirected to the movie itself where you can watch.
On the favorite page, below the trailer there is a delete button that will delete the movie from the favorites list


### Uploading videos
To upload a new movie, click on the "Upload Video" button in the navigation bar. You will be redirected to a form where you can enter the details of the movie, including its title, director, release date, and description. Once you submit the form, the movie will be added to the list of movies displayed on the main page.


### Adding comments
To add a comment to a movie, navigate to the movie's detail page by clicking on its image. Scroll down to the comments section and enter your comment in the input field. Once you submit the comment, it will be added to the list of comments displayed on the page.

### Restrictions
 A user needs to be logged in to:
 * add a favorite movie.
 * access the profile page.
 * add a like to a video.
 * add edit or delete a comment to a movie
 * upload, edit or delete a video


# Links
[Backend Repository](https://github.com/Black-Male/Phase-4-project-backend)


## installation and Usage
To run the application locally, you need to have Node.js and npm installed on your machine. You also need to have the Movie API backend running on http://localhost:3000.

Clone this repository and navigate to the project directory:
```
 https://github.com/MakenaG/phase-4-final-project.git
 ```
navigate to the project directory
```
cd phase-4-final-project
```
Install dependencies:
```
 npm install
 ```
Start the development server:
```
npm start
```
Open http://localhost:3000 in your web browser to access the application.

Note: If the Movie API backend is not running, you need to update the REACT_APP_API_URL variable in the .env file to match the actual backend URL.

# Dependencies
This movie site depends on the following libraries and tools:

* React - JavaScript library for building user interfaces
* Bootsrap - CSS framework for responsive design
* ionic icons - Icon toolkit for web applications Credits

# Authors
* [Gregory](https://github.com/elvismabisi)
* [Grace](https://github.com/Grace-aloo)
* [George](https://github.com/Black-Male)
* [Makena](https://github.com/MakenaG)

# Contributing
If you would like to contribute to this project, please follow the standard Gitflow workflow:

* Fork the repository and create a new branch.
* Make your changes and commit them to your branch.
* Create a pull request from your branch to the main repository.

# License
This project is licensed under the MIT License - 
```
MIT License

Copyright (c) 2023 
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
