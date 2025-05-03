# 🏥 MEDHUB

[MEDHUB](https://med-hub-hazel.vercel.app) 🔗 is a web application designed to streamline and enhance the management of healthcare facilities. This application provides a centralized platform for managing data related to doctors, room admissions and patients.

---

## 📚 Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Folder Structure](#folder-structure)
- [Components](#components)
- [Styles](#styles)
- [API Integration](#api-integration)
- [Contributing](#contributing)
- [License](#license)

---

## 🚀 Getting Started

### 🔧 Prerequisites

- Node.js >= 16.x
- npm >= 8.x
- MongoDB instance (cloud)

### 📥 Installation

```bash
# Clone the repository
git clone https://github.com/Brayzonn/Hospital-Management-Web-App.git
cd Hospital-Management-Web-App

# Install server dependencies
cd server
npm install

# Install client dependencies
cd /client
npm install

# In one terminal, run the server
cd server
npm run dev

# In another terminal, run the client
cd client
npm run dev

```

### 🗂 Project Structure

The project is divided into two main folders:

- `client/` – The frontend built with React, Vite, and TypeScript.
- `server/` – The backend powered by Node.js, Express, and MongoDB.

```bash
Hospital-Management-Web-App/
├── README.md
├── client
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── public
│   ├── src
│   ├── tsconfig.json
│   ├── tsconfig.node.json
│   ├── vercel.json
│   └── vite.config.ts
└── server
    ├── src
    ├── .env
    ├── nodemon.json
    ├── package-lock.json
    ├── package.json
    └── tsconfig.json  

```     

## 🛠️ Technologies Used

- **Frontend**: React, Typescript, Tailwind CSS, Vite
- **Backend**: Node.js, Express.js, Typescript
- **Database**: MongoDB, Mongoose
- **Authentication**: JWT, bcrypt
- **File Uploads**: Cloudinary
- **Deployment**: Brimble (backend), Vercel (frontend)


## 🗂 Folder Structure

```bash
client/
├── public/ # Static assets (vite svg)
├── src/
│ ├── components/ # Reusable UI components
│ ├── context/ # React context providers 
│ ├── images/ # static images
│ ├── pages/ # Route-based page components
│ ├── routes/ # React Router route definitions
│ ├── style/ # tailwind css config
│ ├── types/ # TypeScript type definitions
│ ├── utils/ # Helper functions 
│ └── App.tsx             # Root React component 
│ └── main.tsx            # Entry point for the React app
│ └── vite-env.d.ts       # Type declarations specific to Vite 
├── .env                  # Environment variables
├── .eslintrc.cjs         # ESLint configuration for linting rules
├── index.html            # HTML entry point for the app 
├── package-lock.json     # Auto-generated dependency tree lock file for reproducible installs
├── package.json          # Project metadata, dependencies, and scripts
├── tsconfig.json         # Main TypeScript configuration for the client app
├── tsconfig.node.json    # TypeScript config for Node-related tooling 
├── vercel.json           # Vercel deployment configuration 
└── vite.config.ts        # Vite bundler configuration 

server/
├── src/
│   ├── config/           # Configuration files 
│   ├── controllers/      # Express route handlers 
│   ├── middleware/       # Custom Express middleware 
│   ├── models/           # Mongoose schema and model definitions
│   ├── routes/           # Express route definitions and grouping
│   ├── utils/            # Utility functions 
│   ├── app.ts            # Sets up Express app
├── .env                  # Server-side environment variables 
├── nodemon.json          # Nodemon config for auto-restarting the server during development
├── package-lock.json     # Lockfile for consistent installs across environments
├── package.json          # Project metadata, dependencies, and scripts for the backend
└── tsconfig.json         # TypeScript configuration for the server

``` 


## 🧱 Components

### 🧩 Input Form Components

This module exports two reusable and dynamic input form components used throughout the application:

- **`DoctorInputForm`**  
  A generic form component tailored for doctor data input. It takes in configuration via `InputFormData` and renders appropriate form fields with built-in support for change handlers and pre-filled values.

- **`PatientInputForm`**  
  A more flexible, generic version using TypeScript generics (`<T>`) to handle various patient data structures. It supports both input fields and textareas dynamically based on the configuration object.

Both components rely on shared type definitions from the `types/DataTypes` file to enforce strong typing and maintain consistency across forms.

#### ✅ Highlights
- Uses `InputFormData[]` to dynamically render fields  
- Strong TypeScript interfaces for type safety  
- Built-in support for pre-populated values and `onChange` callbacks  
- Shared and extendable form structure with flexible styling



### ⚠️ ConfirmationDialog Component

The `ConfirmationDialog` component is a reusable modal used to prompt users before performing a critical or irreversible action (e.g. delete).

#### 📦 Props
```ts
interface ConfirmationDialogProps {
  isOpen: boolean;       // Controls visibility of the dialog
  title: string;         // Header text
  message: string;       // Main body content/message
  onConfirm: () => void; // Called when user confirms the action
  onCancel: () => void;  // Called when user cancels the action
}
```

### 🔽 DropDown Components

Reusable dropdown UI components tailored for dynamic form handling in both doctor and patient registration forms.

---

#### 📘 DoctorDropDownList

`DoctorDropDownList` is a customizable dropdown list component for doctor form fields.

**Props:**

```ts
interface dropdownContainer {
  buttonName: string;      // The label to display on the dropdown button
  buttonId: string;        // The form field key to update
  listOptions: string[];   // Dropdown list items
}

interface DoctordropDownProps {
  allDropDownContainer: dropdownContainer[];             // Array of dropdown configs
  doctorInitialValues?: AddDoctorFormInterface;          // Default values for the form
  setSubmitFormDropdown: React.Dispatch<...>;            // State setter for parent form data
}
```

### 📗 PatientDropDownList

`PatientDropDownList` is a reusable dropdown component designed for use in patient form interfaces. It dynamically renders a list of dropdowns based on configuration, making it easy to manage multiple form fields with selection options.

---

#### 🧩 Props

```ts
interface dropdownContainer {
  buttonName: string;      // Display label for the dropdown button
  buttonId: string;        // Key to update in form state
  listOptions: string[];   // Available options for the dropdown
}

interface dropDownPropsPatient {
  allPatientDropDownContainer: dropdownContainer[];              // Dropdown configurations
  patientInitialValues?: AddPatientFormInterface;                // Initial form values (optional)
  setPatientSubmitFormDropdown: React.Dispatch<...>;             // Form state update function
}

```

## 🖌️ Styles

This project uses **Tailwind CSS** for styling, enhanced with custom configurations and global styles.


## 🔗 API Integration















