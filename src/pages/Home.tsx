import { useTheme } from "../hooks/useTheme";

const Home = () => {
  const { setTheme } = useTheme();

  return (
    <div className="bg-background text-text-primary">
      <h1>Home</h1>
      <button
        className="bg-accent p-2 rounded-md"
        onClick={() => setTheme("dark")}
      >
        Dark
      </button>
      <button
        className="bg-accent p-2 rounded-md"
        onClick={() => setTheme("light")}
      >
        Light
      </button>
      <button
        className="bg-accent p-2 rounded-md"
        onClick={() => setTheme("system")}
      >
        System
      </button>
    </div>
  );
};

export default Home;
