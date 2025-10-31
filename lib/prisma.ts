import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg"
import { env } from "process";

const adapter = new PrismaPg({ connectionString: env.DATABASE_URL });
declare global {
  var prisma: PrismaClient | undefined;
}

const prisma = global.prisma || new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") {
  global.prisma = prisma;
}

export default prisma;
