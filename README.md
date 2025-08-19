<!-- Scratchy Nib Project  -->
# Introduction

Scratchy Nib is a responsive single-page application (SPA) designed to showcase the art of calligraphy. It allows users to explore different calligraphy styles, learn about the history of the craft, and provide feedback. The platform demonstrates modern web design principles, smooth navigation, and engaging UI/UX.

# Objectives

•	Design and develop a responsive web application using React.js.
•	Implement smooth scrolling navigation and multiple pages using React Router.
•	Showcase various calligraphy categories with a visually appealing gallery.
•	Provide a feedback system for users to share testimonials.
•	Enhance usability with a structured header, footer, and consistent design.

# Features

•	Home Page ‒ Hero section, about section, and highlights of Scratchy Nib.
•	Gallery Page ‒ Smooth scrolling navigation to Modern, Contemporary, Hand Lettering, and Traditional calligraphy categories.
•	About Page ‒ Detailed background and information about calligraphy.
•	Feedback Page ‒ Allows users to submit testimonials.
•	Contact Page ‒ Displays essential contact details and social media links.
•	Header and Footer ‒ Provide consistent navigation and search functionality.

# Technologies Used

•	React.js ‒ For building the frontend SPA.
•	React Router DOM ‒ For client-side routing. 
•	HashLink ‒ For smooth scrolling navigation.
•	CSS3 ‒ For custom styling and responsiveness.
•	React Icons / SVG Icons ‒ For UI icons and social media links.

# Setup

•	Navigate into the project folder: cd scratchy-nib
•	Run the development server: npm run dev
•	Follow the Link to the browser page

or visit [scratchy-nib-a.vercel.app] to view the website

# Project Structure

scratchy-nib --|
    |
    |_ public <!-- contains the favicon used in the project -->
    |
    |_ src
        |
        |_ assets <!-- Contains the images, fonts and icons used in the project -->
        |_componens <!-- Contains the reusable components and their stylesheets [header and footer] -->
        |_pages <!-- Contains all the pages of the project [actually called components, but they simulate different pages for our SPA]-->
        |_style <!-- Contains all the necessary stylesheets [CSS files] for our project -->
    |
    |_ App.jsx <!-- Our Project's Main entry -->
    |_package.json
    |_README.md