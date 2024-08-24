# News App

A Next.js application for displaying trending news articles with dynamic search functionality and custom styling.

## Features

- **Dynamic Search**: Search for news articles based on user input.
- **API Integration**: Fetch news from [NewsAPI](https://newsapi.org/).
- **Custom Styling**: Use of Tailwind CSS for custom styling.
- **Responsive Design**: Layout adapts to different screen sizes.
- **Loading State**: Show loading indicators while fetching data.
- **Error Handling**: Display error messages if the API call fails.

##Usage
- **Search for News: Enter keywords into the search input to find news articles.
- **View Articles: Click on articles to read more details.

##Components
- **AppSkeleton
  Displays a loading skeleton while the news data is being fetched.

- **AppFooter
  Displays the footer of the application with copyright information.

- **AppHeader
  Displays the header of the application with the title and navigation.

- **NewsCard
  Displays individual news articles with an image, title, description, and a link to read more.

- **API Integration
  The application uses NewsAPI to fetch news articles. The API key is required for authentication and should be stored in the .env.local file.
