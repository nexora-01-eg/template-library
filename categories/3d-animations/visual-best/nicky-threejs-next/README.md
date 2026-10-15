# Three.js + Next.js 3D Web App 🌐

A modern 3D web application built with Three.js, Next.js (App Router), Tailwind CSS, and GSAP for animations. This project demonstrates the integration of 3D rendering, post-processing effects, and interactive controls in a responsive and beautifully styled web app.

🚀 Features

Dynamic 3D Rendering: Built with Three.js for real-time graphics.

Post-Processing Effects: Includes bloom and depth-of-field effects using EffectComposer.

Interactive Controls: Users can pan, zoom, and rotate the 3D scene via OrbitControls.

Animations: Smooth client-side animations powered by GSAP.

Responsive Design: Styled with Tailwind CSS for a sleek, mobile-friendly UI.

Next.js App Router: Built using the modern file-based routing system introduced in Next.js 13.

🛠️ Technologies Used

Next.js: React-based framework for building fast, SEO-friendly web apps.

Three.js: 3D graphics library for creating stunning visuals.

Tailwind CSS: Utility-first CSS framework for responsive and scalable design.

GSAP: High-performance JavaScript animation library.

📂 Project Structure

⚙️ Getting Started

Follow these instructions to set up and run the project locally.

Prerequisites

Node.js (version 16 or later)

npm (or yarn)

✨ Usage

Navigate to the Home Page to view the 3D scene with interactive controls.

Replace the default texture (public/wood.jpeg) with your custom texture.

Update the texture path in ThreeScene.jsx:

javascript

bloom effect in ThreeScene.jsx:

javascript

const bloomPass = new UnrealBloomPass(

new THREE.Vector2(window.innerWidth, window.innerHeight),

);

Styling

Modify the styles in src/app/globals.css or directly in Tailwind CSS classes in components.

📜 License

This project is licensed under the MIT License. See the LICENSE file for more information.

🤝 Contributing

Contributions are welcome! To contribute:

Push to the branch (git push origin feature-branch).

Open a Pull Request.

📧 Contact

For questions or feedback, feel free to reach out:

AP Documentation