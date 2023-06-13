# Project Specifications

## Overview
The objective is to develop a portfolio website with the following characteristics:

- Showcases a wide array of artworks while establishing a distinctive personal brand.
- Presents detailed artist information in an intuitive "About Me" section.
- Incorporates easy-to-navigate, intuitive, and seamless navigation (scrolling and arrow key navigation).
- Loads rapidly even with heavy media content, and is fully responsive across different screen sizes.
- Contains clear contact information in the "About Me" section, alongside a prompt for newsletter subscription.
- Multilingual support (English, Russian, German, French, Spanish, Italian).

## Technology Stack
- HTML, CSS, JavaScript (ES6)
- Vue.js as the core JavaScript framework, supplemented by Vue Router for SPA navigation, Vuex for state management, and Vue i18n for language support.
- Swiper.js for implementing carousel sliders.
- Git for version control.
- Tiny Letter for managing newsletter subscriptions.
- Webpack for module bundling and asset management.

## Performance
- Integration of lazy loading and image optimization techniques to ensure rapid media loading times.
- Use of caching methods and browser caching optimization to enhance subsequent page loading times.
- Utilization of Webpack for efficient JS module bundling, asset management, and enhancing load times.

## Design
- Utilization of a dark theme to highlight content, with orange as a contrasting color to denote creativity. 
- Use of rounded corners to appear more welcoming.
- Application of serif fonts to exude trust and respectability.

## Navigation Bar
- Divided into a top and bottom part.
- The top section comprises the artist's name on the left, language selection dropdown, and other relevant links as icons on the right.
- The bottom segment provides a listing of portfolio categories, with the active category highlighted.

## Background Music Player Bar
- Equipped with navigation and volume controls.
- The background music is paused when a video or other audio content starts playing within a section, and resumes when they stop.

## Sections and Navigation
- Development of full-page sections with scroll or arrow key navigation.
- Overlay button for easy navigation to preceding or subsequent sections.
- Various sections, including a Splashscreen, Category Selector, Portfolio Sections, Jukebox Section, and an "About Me" section.
- Implement a circular navigation where the About Me section leads back to the Splashscreen and vice versa, ensuring a loop of continuous navigation.

## Splashscreen
- Features the artist's name, title, introductory copywriting
- links to external links in the top left corner as well as a language selection dropdown.
- A field for newsletter subscription.
- Controls for background music on the top right corner.
- Parallax effect for the bgImage when scrolling down.
- Buttons to portfolio, blog, and about section in a bottom bar.

## Category Selector Screen
- Categories represented as large, equally spaced buttons horizontally.
- Category selection can be toggled using the left and right mouse buttons.
- Upon selection, the next section corresponds to the chosen category.

## Portfolio Sections
- These sections can contain carousel sliders for images and videos, dual layouts comprising text and media, centered one-item layouts, and multiple item layouts.
- Navigation within each section is facilitated through left and right arrow keys.

## Jukebox Section
- This section serves as a control hub for the background music, displaying a cover image for each track, and an interactive list of all available tracks.

## About Me Section
- Artist's image is showcased alongside a Q&A section presented in drop-downs to save space, a downloadable CV link, and a visible email link.

## Localization
- Leverage Vue i18n for efficient website translation and store user's language preference using Vuex.

## SEO
- Utilize Vue Meta for the management of meta-information to improve search engine optimization.

## Responsiveness
- Ensure a responsive design that displays correctly across different screen sizes.
- If the device is in a vertical orientation, an overlay message prompts the user to switch to a horizontal orientation for optimal viewing experience.

## Build Process
- Webpack manages the build process, including transpiling modern JavaScript to ES5 for backward compatibility (via Babel) and minifying the code for production deployment.

## Version Control
- Use Git for version control and tracking changes. This enables efficient collaboration and maintains a history of code modifications.
