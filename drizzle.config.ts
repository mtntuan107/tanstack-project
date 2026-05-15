import 'dotenv/config'; 
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './src/db/schema.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    // DATABASE_URL này lấy từ Supabase Settings -> Database
    url: process.env.DATABASE_URL!, 
  },
});