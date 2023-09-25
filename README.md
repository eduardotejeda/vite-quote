# React + Vite

Testig how **React** work with **Vite** and HMR and some ESLint rules.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [License](#license)

## Installation

Vite requiere Node.js version ^14.18+

```bash
$ Node.js hhttps://nodejs.org/en/download
$ cd yourproject
$ npm create vite@latest
$ npm run dev
```

## Usage

- After `npm run dev` open browser localhost. 
- The parent file, App.jsx, is where all of the children are displayed. 
- To close use Ctrl+C.

```
import './App.css'
import QuoteFecher from './QuoteFecher'

function App() {
  

  return (
    <>
      <QuoteFecher/>
    </>
  )
}

export default App
```

## Features

1. Display a random quote.
2. Using the buttom, fecth random quote from API.

## License

This project is licensed under the MIT License.