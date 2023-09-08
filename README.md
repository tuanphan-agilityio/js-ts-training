# TypeScript Practice

## Overview

- This document provides requirements and estimation for JavaScript, TypeScript practice.
- Refer to the detailed design here: [Project Management](https://www.figma.com/file/0BNPS8zBHzjnRhwqAd7DQb/Practice?node-id=0%3A1&mode=dev).

## Timeline

- 14 days

## Team size

- 1 Developer

## Targets

- Understand and apply knowledge of HTML5, CSS3, and JavaScript (with ES6 syntax)

- Get familiar with and understand the power of the TypeScript language

- Understanding and applying MVC (or any MV model or module concept) (optional)

- DOM manipulation and form validation

- Understand how asynchronous code works and apply it in practice (API calls or any place we can mock APIs in code)

- Get familiar with DevTools

- Apply localStorage

## Technical Stack

- HTML5/CSS3

- JavaScript/TypeScript ES6

- JSON Server

- JSON Server Auth

- MVC

- LocalStorage

- Parcel

## Task Management

[Trello](https://trello.com/b/RhPcgcnJ/javascript-typescript-training)

## Requirements

- Build a website management project

  - Authentication:

    - Admin login to the dashboard with their email and password

    - Admin logout of the dashboard

  - Project

    - Admin can view the list of projects

    - Admin can view the details of a project

    - Admin can search projects by name

    - Admin can filter the projects by status

    - Admin can create a new project by name, logo, status, start date, end date, project manager, and team member

      - Name, Client, Status, Project Manager, and Start Date are required

      - Team member, End Date and Logo aren’t required

        - Display a logo default for the project if the admin doesn’t upload a logo when creating a new project

      - There are three statuses for the project: In-progress, Completed, and Cancelled

    - Admin can edit the information on any existing project

    - Admin can remove a project from the system

      - Show a confirmation message before deleting a project

## Getting started

- Step 1: Cloning the repo

  - HTTPS: `git clone https://gitlab.asoft-python.com/tuan.phan/javascript-training.git`

  - SSH: `git clone git@gitlab.asoft-python.com:tuan.phan/javascript-training.git`

- Step 2: Go to the folder practice `cd javascript-training`

- Step 3: Checkout branch `git checkout practice`

- Step 4: Add an .env file in the project with the following content:

  `API_URL = "http://localhost:3000/"`

- Step 5: Install package `yarn install`

- Step 6: Run server `yarn start:server`

- Step 7: Run client `yarn start`

- Step 8: Open <http://localhost:1234/> in your browser to see the HTML file.

## Account

```bash
  email: tuan.phan@asnet.com.vn
  password: 12345678
```

## Author

[tuanphan@asnet.com.vn](tuanphan@asnet.com.vn)
