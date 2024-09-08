# Sanghyup Lee Portfolio

This project is a personal portfolio website showcasing Sanghyup Lee's professional experience, skills, and projects. The website features an interactive 3D home section and a responsive design with smooth navigation across different sections.

## Features

- **3D Text Interaction**: Home section includes interactive 3D text built using Three.js and React Three Fiber.
- **Dynamic Projects**: Showcases key projects, each project card dynamically displays details and links to GitHub repositories.
- **Resume Viewer**: Integrated PDF viewer for viewing the resume directly on the site.
- **Experiences Section**: Highlights past internships, research roles, and key contributions in various fields.
- **Footer with Social Links**: Social media and GitHub links presented with icons in the footer.

## Technologies Used

- **React.js**: For building the frontend UI.
- **React Router**: For managing navigation between different sections (Home, Projects, Resume, Experiences).
- **Three.js & @react-three/fiber**: For 3D interactions in the Home section.
- **CSS**: Custom styling for the website with a black-and-white theme.

## Getting Started

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sanghyuplee20/portfolio-website.git
   cd portfolio-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the application:
   ```bash
   npm start
   ```

4. Open your browser and go to `http://localhost:3000`.

## Folder Structure

- `src/components`: Contains the React components like `Home`, `Projects`, `Resume`, `Experiences`, and `Navbar`.
- `public/fonts`: Stores custom fonts (e.g., HelveticaNeueRoman.ttf) for use across the site.
- `src/App.js`: The main file that manages routes and includes global components like the Navbar and Footer.

## Future Enhancements

- Add animations and transitions between sections for smoother navigation.
- Implement more detailed project showcases with live demos.

