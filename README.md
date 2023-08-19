# GSIV23_Mahendra_Singh

This project is a React application built using Next.js with TypeScript. It provides a user-friendly interface for listing movies and viewing their details. The application integrates with The Movie Database (TMDb) API to fetch movie data and uses Redux Toolkit for state management. The UI design is enhanced with the Bootstrap framework.

## Table of Contents

1. [Project Setup](#project-setup)
2. [API Setup](#api-setup)
3. [Redux Toolkit Setup](#redux-toolkit-setup)
4. [UI Design using Bootstrap](#ui-design-using-bootstrap)
5. [Movies Listing Page](#movies-listing-page)
6. [Movie Details Page](#movie-details-page)
7. [Getting Started](#getting-started)
8. [Conclusion](#conclusion)

## Project Setup <a name="project-setup"></a>

To set up this project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/Mahendra0006/GSIV23_Mahendra_Singh.git`
2. Navigate to the project directory: `cd GSIV23_Mahendra_Singh`
3. Install dependencies: `npm install`

## API Setup <a name="api-setup"></a>

For fetching movie data, this project uses The Movie Database (TMDb) API. To set up the API integration:

1. Sign up on [TMDb website](https://www.themoviedb.org/account/signup) and obtain an API key.
2. Add your API url to the `next.config.js` file: `API_URL=your_api_url_here`
3. Add your API key to the `next.config.js` file: `API_KEY=your_api_key_here`
4. Add your API access token to the `next.config.js` file: `ACCESS_TOKEN=your_api_token_here`

## Redux Toolkit Setup <a name="redux-toolkit-setup"></a>

This project utilizes Redux Toolkit for state management. Redux slices are set up to manage movie data.

## UI Design using Bootstrap <a name="ui-design-using-bootstrap"></a>

Bootstrap and React Bootstrap are employed to enhance the project's user interface and ensure a responsive design.

## Movies Listing Page <a name="movies-listing-page"></a>

The Movies Listing Page displays a list of movies fetched from the TMDb API. Redux Toolkit is used to manage state, and Bootstrap components style the page.

## Movie Details Page <a name="movie-details-page"></a>

The Movie Details Page provides comprehensive information about a selected movie. Data is fetched from the TMDb API, and Bootstrap components enhance the design.

## Getting Started <a name="getting-started"></a>

1. Configure your TMDb API key as described in the [API Setup](#api-setup) section.
2. Start the development server: `npm run dev`

## Conclusion <a name="conclusion"></a>

Congratulations! You've set up a dynamic Movies Listing and Details Page application. Customize and expand it to meet your specific requirements.

For additional details, refer to the project's documentation and source code.
