# REST Countries API with Theme Switcher

A [Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca) challenge I tackled in my spare time 👨‍💻. This was a great opportunity to A) Challenge myself to learn some technologies / methodologies that I haven't been exposed to professionally and B) Utilize them all to build something small-scale with attention to detail and great UX.

[Live Demo](https://skiesxr.github.io/RESTCountriesApiThemeSwitcher/)

## Features

#### Data fetching from the REST Countries API

Fetching, loading, and error states are managed by a custom `useFetch` hook. `<Loader />` incorporates a spinner indicating data fetch is in progress. If an API error occurs, an `<ErrorMessage />` component is shown and prompts the user to try again.

#### Searching & filtering data

User's can run a blazing fast client-side search for a specific country or they can use the dropdown filter to select groups of countries by region.

#### Theme switching and persisting to Local Storage

Using the `Styled Components` library's `<ThemeProvider />` component and a custom `useTheme` hook, the user can toggle between dark & light themes. The selected theme is also persisted to Local Storage and is retained after page refresh.

![Theme Switching](https://drive.google.com/uc?export=view&id=1FmO9zjB-hINaYc8OvFMv09lX4dwb_GLm)

#### 100% responsive across desktop, mobile, tablet

A combination of CSS Grid, Flexbox, and media queries keep things responsive across all devices.

![Dark Theme](https://drive.google.com/uc?export=view&id=1nZyzBJAMocfdmovTSGbiwmyiLgbecB0a)

![Dark Theme iPhone](https://drive.google.com/uc?export=view&id=1XSMz1KIR4DuC40iQI1GkfsrA9zfNNWSI)

#### Support for keyboard navigation

The entire desktop application is accessible via keyboard navigation. Following accessibility guidelines, properties have been added to HTML elements to allow screen readers to assist users with visual impairments.

- `tab` ~ navigates forwards
- `shift + tab` ~ navigates backwards
- `enter` ~ Clicks on a link or button
- `space` ~ Used to toggle the "region" filter

![Keyboard navigation](https://drive.google.com/uc?export=view&id=1R4BVP-Fr1KV7CFaH4kfA3H8FuxTC5ssW)

#### Microinteractions

Used sparingly but purposefully, these help: guide the user's attention, communicate state changes, and (hopefully) increase engagement.

![Filtering by region](https://drive.google.com/uc?export=view&id=1LKyCZ5nN3IPzyF744ET6IQCL59xjR8M9)

![Card hover](https://drive.google.com/uc?export=view&id=13iUdQ84S3RKyfc-By-PlpLjScr1ZU35u)

![Back button hover](https://drive.google.com/uc?export=view&id=1KAK2T-uegyvUm-eobqE5NSS4-oSL16Yw)

## Technologies

- React v17
- React Router v5
- Styled Components v5

## Skills

- React Hooks
- React Router
- Styled Components
- Data Fetching, Searching, and Filtering
- CSS Grid
- CSS Flexbox
- CSS Mixins
- Keyframe Animations
- Microinteractions
- Theme switching
- Web Accessibility
- Keyboard Navigation
- Responsive design
- Icon design

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
