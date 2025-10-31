import { betterAuth } from "better-auth";
import { env } from "process";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "@src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg"
const adapter = new PrismaPg({ connectionString: env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });
export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },
  database: prismaAdapter(prisma, {
    provider: "postgresql", // or "mysql", "postgresql", ...etc
  }),
});
