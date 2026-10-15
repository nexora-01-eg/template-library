import ThreeScene from '../components/ThreeScene';

export default function HomePage() {
    return (
        <div className="relative">
            <h1 className="absolute top-4 left-4 z-10 text-4xl font-bold text-white">
                Welcome to the 3D World
            </h1>
            <ThreeScene />
        </div>
    );
}
