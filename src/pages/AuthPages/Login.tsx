import { Input } from "@/components/ui/input";
import { Form, FormControl, FormItem, FormLabel } from "@/components/ui/form";
import AuthCard from "@/components/auth/AuthCard";
import { useForm } from "react-hook-form";

const Login = () => {
  const form = useForm();

  return (
    <div className="h-full flex items-center justify-center">
      <AuthCard>
        <Form {...form}>
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input type="email" placeholder="Email" />
            </FormControl>
          </FormItem>
        </Form>
      </AuthCard>
    </div>
  );
};

export default Login;
