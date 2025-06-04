import { useState } from "react";
import { useTheme } from "@/hooks/useTheme";
import { SunIcon, MoonIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
}

const ThemeToggle = ({ className }: ThemeToggleProps) => {
  const { theme, setTheme } = useTheme();
  const [isChecked, setIsChecked] = useState(theme === "dark");

  const handleThemeToggle = () => {
    setIsChecked(!isChecked);
    setTheme(isChecked ? "dark" : "light");
  };

  return (
    <button
      onClick={handleThemeToggle}
      className={cn(className, "rounded-full")}
    >
      {isChecked ? (
        <SunIcon className="size-5 text-yellow-800 hover:text-yellow-600 hover:scale-110 transition-all duration-300" />
      ) : (
        <MoonIcon className="size-5 text-blue-500 hover:text-blue-700 hover:scale-110 transition-all duration-300" />
      )}
    </button>
  );
};

export default ThemeToggle;
