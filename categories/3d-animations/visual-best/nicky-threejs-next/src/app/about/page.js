export const metadata = {
    title: 'About | Three.js + Next.js',
    description: 'Learn more about this 3D web app.',
};

export default function AboutPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-200 px-6 text-center">
            <h1 className="text-4xl font-extrabold mb-6 text-blue-400">
                About This Project
            </h1>
            <p className="mb-6 text-lg leading-relaxed max-w-2xl">
                This project demonstrates how to integrate <span className="font-semibold text-green-400">Three.js</span> with <span className="font-semibold text-purple-400">Next.js</span> using the modern <span className="font-semibold text-yellow-400">App Router</span>. It showcases features such as 3D rendering, textures, animations, and user interactions through OrbitControls.
            </p>
            <h2 className="text-2xl font-bold mb-4 text-teal-400">Features</h2>
            <ul className="list-disc list-inside text-left mb-6 max-w-xl">
                <li>Dynamic 3D rendering with <span className="font-semibold text-green-400">Three.js</span></li>
                <li>Client-side animations using <span className="font-semibold text-blue-400">GSAP</span></li>
                <li>Interactive controls via <span className="font-semibold text-yellow-400">OrbitControls</span></li>
                <li>Responsive design for all screen sizes</li>
            </ul>
            <h2 className="text-2xl font-bold mb-4 text-teal-400">Technologies Used</h2>
            <ul className="list-disc list-inside text-left mb-6 max-w-xl">
                <li><span className="font-semibold text-purple-400">Next.js</span>: A modern React framework for web applications</li>
                <li><span className="font-semibold text-green-400">Three.js</span>: A 3D graphics library for rendering and animations</li>
                <li><span className="font-semibold text-blue-400">GSAP</span>: A robust JavaScript animation library</li>
            </ul>
            <p className="text-lg">
                Navigate back to the <a href="/" className="text-blue-400 hover:underline">Home Page</a> to see the 3D scene in action!
            </p>
        </div>
    );
}
