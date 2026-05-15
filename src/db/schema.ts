import { pgTable, uuid, text } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  // .defaultRandom() giúp database tự tạo UUID nếu bạn không truyền vào
  id: uuid('id').primaryKey().defaultRandom(), 
  name: text('name').notNull(),
});