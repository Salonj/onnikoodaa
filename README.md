<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/Salonj/onnikoodaa">
    <img src="public/oklogo.svg" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Portfolio website</h3>

  <p align="center">
    Portfolio page to display my programming skills
    <br />
    <br />
    <a href="https://github.com/Salonj/onnikoodaa"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://onnikoodaa.fi">View site</a>
  </p>
</div>


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#folder-structure">Folder Structure</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#available-scripts">Available Scripts</a></li>
      </ul>
    </li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>


<!-- ABOUT THE PROJECT -->
## About The Project

This portfolio website showcases my programming skills and projects. It's built with modern web technologies like React, Vite, and Tailwind CSS, providing a responsive and visually appealing interface.

[![Product Name Screen Shot][product-screenshot]](https://onnikoodaa.fi)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Folder Structure

```
onnikoodaa
├── public
│   ├── cplusplus.svg
|   ├── css.svg
|   ├── figma.svg
|   ├── git.svg
|   ├── html5.svg
|   ├── java.svg
|   ├── js.svg
|   ├── oklogo.svg
|   ├── python.svg
|   ├── react.svg
|   ├── vite.svg
│   └── wordpress.svg
├── src
|    ├──  assets
|    |   ├── app.png
|    |   ├── kone.png
|    |   ├── metsä.png
|    |   ├── minä.png
|    |   ├── nuotio.png
|    |   ├── postimies.png
|    |   └── varasto.png
|    ├── components
|    |   ├── About.jsx
|    |   ├── Contact.jsx
|    |   ├── Footer.jsx
|    |   ├── Main.jsx
|    |   ├── ProjectInfo.jsx
|    |   ├── ProjectItem.jsx
|    |   ├── Projects.jsx
|    |   ├── Sidenav.jsx
|    |   ├── Work.jsx
|    |   └── WorkItem.jsx
|    ├── App.jsx
|    ├── index.css
|    └── main.jsx
├── eslintrc.cjs
├── .gitignore
├── LICENSE
├── README.md
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── tailwind.config.js
└──  vite.config.js
```

### Built With

* [![React][react-logo]][react-link]
* [![Git][git-logo]][git-link]
* [![Vite][vite-logo]][vite-link]
* [![Tailwindcss][tailwindcss-logo]][tailwindcss-link]
* [![Html][html-logo]][html-link]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

Before you start, you need to have npm installed.

[![Npm][npm-logo]][npm-link]

### Installation

To get a local copy of the code, clone it using git:

1. Clone the repo:
   ```sh
   git clone https://github.com/Salonj/onnikoodaa.git
   ```
2. Move to repo:
   ```sh
   cd onnikoodaa
   ```
3. Make it your own:
   ```sh
   rm -rf .git && git init && npm init
   git add .
   git commit -m "Initial commit"
   ```
4. Install dependencies:
   ```sh
   npm i
   ```
5. Start local web server by running:
   ```sh
   npm run dev
   ```
6. Open http://localhost:5173/

### Available Scripts

In this project, you can run the following scripts:

| Script        | Description                                             |
| ------------- | ------------------------------------------------------- |
| npm run dev   | Runs the app in the development mode.                   |
| npm run build      | Builds the app for production to the `dist` folder. |
| npm run lint | Lints the code based on specified linting rules.     |
| npm run preview | Launches the test runner in the interactive watch mode.     |


<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Onni Salomaa - [![LinkedIn][linkedin-shield]][linkedin-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- IMAGES -->
[linkedin-shield]: https://img.shields.io/badge/Linkedin-Linkedin?style=flat-square&logo=Linkedin&logoColor=%23FFFFFF&labelColor=%230A66C2&color=%230A66C2
[linkedin-url]: https://linkedin.com/in/onnisalomaa
[product-screenshot]: src/assets/app.png

<!-- React -->
[react-logo]: https://img.shields.io/badge/React-React?style=flat-square&logo=react&logoColor=%2361DAFB&labelColor=black&color=%2361DAFB
[react-link]: https://react.dev/
<!-- Vite -->
[vite-logo]: https://img.shields.io/badge/Vite-vite?style=flat-square&logo=vite&logoColor=%23646CFF&labelColor=black&color=%23646CFF
[vite-link]: https://vitejs.dev/

<!-- Git -->
[git-logo]: https://img.shields.io/badge/Git-Git?style=flat-square&logo=git&logoColor=%23F05032&labelColor=black&color=%23F05032
[git-link]: https://git-scm.com/

<!-- HTML -->
[html-logo]: https://img.shields.io/badge/Html5-Html5?style=flat-square&logo=Html5&logoColor=%23E34F26&labelColor=black&color=%23E34F26
[html-link]: https://html.com/

<!-- Tailwindcss -->
[tailwindcss-logo]: https://img.shields.io/badge/Tailwindcss-tailwindcss?style=flat-square&logo=tailwind%20css&logoColor=%2306B6D4&labelColor=black&color=%2306B6D4
[tailwindcss-link]: https://tailwindcss.com/

<!-- NPM -->
[npm-logo]: https://img.shields.io/badge/Npm-npm?style=flat-square&logo=npm&logoColor=%23FFFFFF&labelColor=%23CB3837&color=%23CB3837
[npm-link]: https://www.npmjs.com/
