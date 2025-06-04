import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface AuthInputProps {
  label: string;
  type: string;
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const AuthInput = ({
  label,
  type,
  value,
  placeholder,
  onChange,
}: AuthInputProps) => {
  return (
    <div className="flex flex-col gap-2">
      <Label>{label}</Label>
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default AuthInput;
