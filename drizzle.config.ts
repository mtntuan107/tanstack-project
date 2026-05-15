import 'dotenv/config'; // Thêm dòng này ở đầu file
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './src/db/schema.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!, // Lúc này process.env mới có giá trị
  },
});