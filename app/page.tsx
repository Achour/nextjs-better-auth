// app/page.jsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import {
  IconChevronRight,
  IconLockSquareRoundedFilled,
  IconShieldCheckFilled,
} from "@tabler/icons-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="border-b">
        <div className="container  flex h-16 items-center justify-between">
          <div className="flex items-center ">
            {/* <Lock size={24} className="text-primary" /> */}
            <span className="font-bold text-xl">Better-Auth</span>
          </div>
          <nav className="flex items-center gap-6">
            <Link
              href="/dashboard"
              className="text-sm font-medium hover:underline"
            >
              Dashboard
            </Link>
            {/* <Link
              href="/pricing"
              className="text-sm font-medium hover:underline"
            >
              Github
            </Link>
            <Link href="/blog" className="text-sm font-medium hover:underline">
              Portfolio
            </Link> */}
            <div className="flex items-center gap-2">
              <ModeToggle />
              <Link href="/login">
                <Button variant="outline" size="sm">
                  Log in
                </Button>
              </Link>
              <Link href="/signup">
                <Button size="sm">Sign up</Button>
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero section */}
      <section className="py-20">
        <div className="container flex flex-col items-center text-center gap-6">
          <IconShieldCheckFilled size={64} className="text-primary" />
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl">
            {/* //Modern Authentication for Next.js Applications */}
            Next.js + Better Auth + Prisma Starter Kit
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Better-Auth is a complete authentication solution for your Next.js
            projects, powered by Prisma and styled with Shadcn UI components.
          </p>
          <div className="flex gap-4 mt-4">
            <Link href="/signup">
              <Button size="lg" className="gap-2">
                Clone Repository <IconChevronRight size={18} />
              </Button>
            </Link>
            <Link href="/login">
              <Button size="lg" variant="outline">
                Try Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA section */}

      {/* Footer */}
      <footer className="border-t py-10 mt-auto">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <IconLockSquareRoundedFilled size={20} className="text-primary" />
            <span className="font-bold">Auth Starter Kit</span>
          </div>
          <div className="flex gap-8">
            <Link
              href="/docs"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Github
            </Link>
            <Link
              href="/#"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Portfolio
            </Link>
            <Link
              href="/contact"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Contact
            </Link>
          </div>
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Mr.Digitus
          </div>
        </div>
      </footer>
    </div>
  );
}
