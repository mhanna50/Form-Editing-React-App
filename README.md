

# React Table & Form App

This React application allows users to create, display, and manage data in a table. Users can add new entries via a form and view them in an interactive table. This app demonstrates how to work with state management in React, handle form submissions, and display dynamic content.

## Table of Contents

1. [What it is] (#What-it-is)
2. [Features](#features)
3. [Installation](#installation)
4. [How to Use](#how-to-use)
5. [Development Process](#development-process)
6. [Technologies Used](#technologies-used)
7. [Contributing](#contributing)

## What it is

This project is a simple React application that allows users to:

* Input data through a form.
* Display that data in a dynamically updated table.
* Edit or delete data from the table.

It is a great starting point for understanding React fundamentals, such as state management, form handling, and rendering lists dynamically.

## Features

* **Form to Input Data**: Users can add rows of data via an HTML form.
* **Dynamic Table**: A table that automatically updates to reflect the input data.
* **Editable Rows**: Users can edit data in the table.
* **Delete Functionality**: Users can delete rows of data.
* **State Management**: Utilizes React's `useState` and `useEffect` hooks to manage and display data.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/react-table-form.git
   ```

2. Navigate to the project directory:

   ```bash
   cd react-table-form
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

   Your application will now be running on [http://localhost:3000](http://localhost:3000).

## How to Use

1. **Adding Data**:

   * Enter data in the form fields.
   * Click the "Add" button to add the new entry to the table.

2. **Editing Data**:

   * Click on the table row you want to edit.
   * Update the fields and click "Save" to save the changes.

3. **Deleting Data**:

   * Click the "Delete" button next to the row you want to remove.

4. **Viewing Data**:

   * The table will automatically refresh and display the current list of data.

## Development Process

### 1. Initial Setup

The app was started using `create-react-app`, which is the default tool to quickly scaffold a new React project.

```bash
npx create-react-app react-table-form
```

### 2. State Management

State is managed using React's `useState` hook to store data for the table rows. The state is updated when the form is submitted or when rows are edited or deleted.

### 3. Table Rendering

The table dynamically renders rows from the state using the `map()` function. Each row is editable, and buttons are provided for adding, saving, and deleting rows.

### 4. Form Handling

A form component was created with controlled components for the input fields. The form includes validation for empty fields to ensure that only valid data is submitted.

### 5. Add/Edit/Delete Functionality

* **Adding Data**: The form is submitted using a function that updates the state, adding a new row.
* **Editing Data**: Each row has an edit button that populates the form with the existing row data. Once edited, the form will update that row in the state.
* **Deleting Data**: Each row has a delete button that removes it from the state.

### 6. Testing and Debugging

Various edge cases were tested, such as ensuring the table updates correctly when rows are added, edited, or deleted. Additionally, form validation was implemented to ensure that no empty fields are submitted.

## Technologies Used

* **React**: The core library used for building the user interface.
* **JavaScript (ES6)**: For app logic and functionality.
* **CSS**: For styling the form and table components.
* **React Hooks**: For state management with `useState` and `useEffect`.

## Contributing

Feel free to fork the repository, make improvements, and submit pull requests. Contributions are always welcome!

To contribute:

1. Fork the repository.
2. Clone your fork to your local machine.
3. Create a new branch (`git checkout -b feature/your-feature`).
4. Make your changes.
5. Push to your branch (`git push origin feature/your-feature`).
6. Submit a pull request.

Author: Michael Hanna
Date: 5/4/25
