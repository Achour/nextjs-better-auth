import { LoginForm } from "@/components/auth/login-form";


import { auth } from "@/lib/auth"; // path to your Better Auth server instance
import { headers } from "next/headers";

import { redirect } from "next/navigation";


export default async function Page() {


  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });

  if (session?.user) {
    redirect('/dashboard');
  }

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  );
}
