# Simple Calendar

This is a simple JavaScript calendar with several features:

1. Highlighting the current date by default.
2. Changing the month and year using dropdowns.
3. Highlighting a custom date.
4. Automatically highlighting the current date when the month or year changes.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
- [Usage](#usage)
- [Features](#features)
- [Customization](#customization)

## Getting Started

To use this calendar, simply open the `index.html` file in a web browser.

### Prerequisites

You need a modern web browser that supports HTML5 and JavaScript.

## Usage

1. Use the "Month" dropdown to select a month.
2. Use the "Year" input field to enter a year.
3. Use the "Custom Date" input field to select a specific date. The selected date will be highlighted in blue.
4. Click the "Reset" button to update the calendar based on your selections.

## Features

- **Highlighting Today**: The calendar highlights the current date by default with a green background.

- **Month and Year Selection**: You can change the month and year using the respective dropdown and input fields. When you do so, the calendar will automatically update to the selected month and year.

- **Custom Date Highlighting**: You can also highlight a custom date by selecting it in the "Custom Date" input field. The custom date will be highlighted in blue.

- **Dynamic Today Highlighting**: The calendar automatically highlights the current date when you change the month or year, ensuring that the "today" date is always up-to-date.

## Customization

You can customize the calendar's appearance by modifying the CSS in the `style` section of the `index.html` file. You can change colors, fonts, and other styles to match your preferences.

```css
/* CSS for calendar */
table {
    border-collapse: collapse;
}
td {
    border: 1px solid #ddd;
    padding: 5px;
    text-align: center;
}
.highlight-today {
    background-color: green;
    color: white;
}
.highlight-custom {
    background-color: blue;
    color: white;
}
