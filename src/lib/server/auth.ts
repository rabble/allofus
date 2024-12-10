import { lucia } from "lucia";
import { prisma } from "@lucia-auth/adapter-prisma";
import { PrismaClient } from "@prisma/client";
import { sveltekit } from "lucia/middleware";

const client = new PrismaClient();

export const auth = lucia({
  adapter: prisma(client),
  env: process.env.NODE_ENV === "development" ? "DEV" : "PROD",
  middleware: sveltekit(),
  getUserAttributes: (data) => {
    return {
      username: data.username,
      role: data.role
    };
  }
});

export type Auth = typeof auth; 