// src/db/queries/users.ts
import { db } from '../index';
import { users } from '../schema';

export async function createUser(name: string) {
  return await db.insert(users).values({ name }).returning();
}

export async function getAllUsers() {
  return await db.select().from(users);
}