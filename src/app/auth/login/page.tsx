// app/auth/page.tsx
import LoginForm from "./LoginForm";


export default function AuthPage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
        <h1 className="text-2xl font-semibold">Login</h1>
        <LoginForm />
      </div>
    </div>
  );
}
