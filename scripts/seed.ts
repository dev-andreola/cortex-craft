import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

import * as schema from "../db/schema";

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log("Seeding database");
    await db.delete(schema.courses);
    await db.delete(schema.userProgress);

    await db.insert(schema.courses).values([
      {
        id: 1,
        title: "Quiz 1",
        imageSrc: "/quiz1.svg",
      },
      {
        id: 2,
        title: "Quiz 2",
        imageSrc: "/quiz2.svg",
      },
      {
        id: 3,
        title: "Quiz 3",
        imageSrc: "/quiz3.svg",
      },
      {
        id: 4,
        title: "Quiz 4",
        imageSrc: "/quiz4.svg",
      },
      {
        id: 5,
        title: "Bandeiras",
        imageSrc: "/flag.svg",
      },
    ]);

    console.log("Seeding finished");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed the database");
  }
};

main();
