import AuthInput from "@/components/auth/AuthInput";
import { useState, useCallback } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log(email, password);
    },
    [email, password]
  );

  const handleEmailChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
    },
    []
  );

  const handlePasswordChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
    },
    []
  );

  return (
    <div className="max-w-[400px] p-6 h-full flex flex-col gap-4 justify-center">
      <h1 className="text-2xl font-bold">Login</h1>
      <form onSubmit={onSubmit} className="flex flex-col gap-4">
        <AuthInput
          label="Email"
          type="email"
          value={email}
          placeholder="Enter your email"
          onChange={handleEmailChange}
        />
        <AuthInput
          label="Password"
          type="password"
          value={password}
          placeholder="Enter your password"
          onChange={handlePasswordChange}
        />
      </form>
    </div>
  );
};

export default Login;
