# Loan Calculator React Application

This project was created as part of a technical assessment for the React JS Developer position at Novel Office.

## Features

- Calculate loan payments based on principal amount, interest rate, loan term, and payment frequency
- Display payment amount, total payment, and total interest
- Generate and display an amortization schedule
- Responsive design for various screen sizes
- Clean and intuitive user interface

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository or extract the ZIP file
2. Navigate to the project directory
3. Install dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm start
   ```
5. Open [http://localhost:3000](http://localhost:3000) to view it in your browser

## Project Structure

- `src/App.js` - Main application component
- `src/components/` - React components used in the application
  - `Header.jsx` - Application header with About button
  - `Footer.jsx` - Application footer
  - `LoanForm.jsx` - Form for inputting loan details
  - `ResultsDisplay.jsx` - Display for loan calculation results
  - `AmortizationTable.jsx` - Table displaying the amortization schedule
  - `AboutModal.jsx` - Modal with assessment information
- `src/App.css` - Application styles

## Deployment

To build the application for production:

```
npm run build
```

The build files will be created in the `build` folder, ready to be deployed.

## Assessment Submission

This project is submitted as part of the React JS Developer position assessment for Novel Office.
