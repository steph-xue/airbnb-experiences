# Airbnb Experiences

A web application recreating the Airbnb Experiences page. The interface displays a horizontally scrollable row of experience cards, with every card rendered dynamically from a single shared data file.

<br>

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [How It Works](#how-it-works)
- [Getting Started](#getting-started)
- [Future Improvements](#future-improvements)

<br>

## Overview

This project recreates the Airbnb Experiences page with a hero section and a horizontally scrollable collection of activity listings. It is built with React, JavaScript, HTML, and CSS, and uses Vite as the build tool. The experience cards are dynamically rendered from shared data through reusable components and display details such as ratings, locations, prices, and availability. Conditional badges indicate whether an experience is sold out or available online.


<br>

## Features

### Hero Section and Experience Cards
A hero section sits at the top of the page beneath the navigation bar, featuring a header image, the title "Online Experiences," and a short description introducing the kinds of activities available. Below it, every experience is displayed on its own card showing a cover image, star rating, number of reviews, location, title, and price per person, and the full row of cards can be scrolled through horizontally. A badge automatically appears on a card marked "SOLD OUT" when there are no spots left, or "ONLINE" when the experience takes place virtually.

<p align="center"><img src="./images/airbnb.png?raw=true" alt="Airbnb Experiences" width="700"></p>

<br>

## Tech Stack

| Layer | Technologies |
|---|---|
| Frontend | React, JavaScript, HTML, CSS |
| Build Tool | Vite |

<br>

## How It Works

The interface is built from three components, a navigation bar, a hero section, and a card, all rendered from a single root component. Rather than writing out each experience by hand, the root component loops through an array of experience objects stored in a separate data file and renders one Card component per entry, passing each item's details in as props. Inside the Card component, conditional logic checks the number of open spots and the location to decide whether to display a "SOLD OUT" or "ONLINE" badge, so the badge logic stays centralized in one place rather than being repeated for every listing. Vite handles the local development server and production build, compiling the React components into files that can be deployed anywhere.

<br>

## Getting Started

Follow the steps below to set up and run the application on your own machine.

**Prerequisites**

Make sure Node.js and npm are installed before you begin. You can check both by running the commands below, which should each print a version number.
```bash
node --version
npm --version
```

**1. Clone the repository**

This downloads a copy of the project to your computer and moves you into the project folder.
```bash
git clone https://github.com/steph-xue/airbnb-experiences-clone.git
cd airbnb-experiences-clone
```

**2. Install the dependencies**

This installs React and everything else the project needs to run.
```bash
npm install
```

**3. Start the development server**

This runs the application locally with Vite.
```bash
npm run dev
```

Once the server is running, open the local URL shown in the terminal to start using the application.

<br>

## Future Improvements
Several enhancements are planned to extend the functionality of the application:
- Working search and filtering by location, price, or category
- A functional booking flow for reserving a spot in an experience
- Fetching experience data from an API instead of a local data file
- A live hosted demo to allow users to try the application without a local setup
