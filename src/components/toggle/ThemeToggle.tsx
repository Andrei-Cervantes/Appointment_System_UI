import { useTheme } from "@/hooks/useTheme";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
interface ThemeToggleProps {
  className?: string;
}

const ThemeToggle = ({ className }: ThemeToggleProps) => {
  const { theme, setTheme } = useTheme();

  return (
    <Switch
      className={cn(className)}
      checked={theme === "dark"}
      onCheckedChange={() => setTheme(theme === "dark" ? "light" : "dark")}
    />
  );
};

export default ThemeToggle;
