# Gracenote Front-End Engineering Assessment

## Getting Started / Installation

   1. `npm install` to install dependencies.
   2. `npm start` to run.
   3. The `./src` directory contains the starter code for you to build upon.

# Instructions

Your task is to build a React interface that renders information about popular movies (from the provided movies.json).

You have creative freedom to do this however you choose, within the constraints listed below.

## Requirements

   1. Use the included `bootstrap-react` [grid components](https://react-bootstrap.github.io/layout/grid/) to display the movies in a grid, or you can make your own grid using CSS (or SCSS, preferably). 
   2. For each movie being displayed in the grid, include the following details (all of the necessary sample data is included in `movies.json`):
      1. The movie's poster image
      2. The movie's title
      3. The movie's release date, dynamically formatted like: `January 23, 2021`
      4. The movie's vote average
   3. Each movie image should be clickable to reveal a [modal component](https://react-bootstrap.github.io/components/modal/) which renders the movie poster enlarged, the movie title and the movie overview. There should be a way to dismiss the modal window.

## What we're looking for

   1. Organize and nest your components logically.
   2. Use custom CSS to style your components as needed.
   3. Leverage react hooks to store state (for example, the state of a modal window being opened vs closed).
   4. Use props to pass your components the information they need to be rendered.
   5. All of the components you create should be functions, not classes.