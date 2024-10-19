/** @type {import("drizzle-kit").Config} */

export default {
  schema: "./configs/schema.jsx",
  dialect: "postgresql",
  dbCredentials: {
    // url: process.env.NEXT_PUBLIC_DB_CONNECTION_STRING,
    url: "postgresql://neondb_owner:EXP7irTM2bek@ep-withered-pond-a5my1f3q.us-east-2.aws.neon.tech/Ai-Course-Generator?sslmode=require",
  },
};
