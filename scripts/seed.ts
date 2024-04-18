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
    await db.delete(schema.units);
    await db.delete(schema.lessons);
    await db.delete(schema.challenges);
    await db.delete(schema.challengeOptions);
    await db.delete(schema.challengeProgress);

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

    await db.insert(schema.units).values([
      {
        id: 1,
        courseId: 1,
        title: "Unit 1",
        description: "Quiz Nível Fácil",
        order: 1,
      },
    ]);

    await db.insert(schema.lessons).values([
      {
        id: 1,
        unitId: 1,
        order: 1,
        title: "Nouns",
      },
      {
        id: 2,
        unitId: 1,
        order: 2,
        title: "Verbs",
      },
      {
        id: 3,
        unitId: 1,
        order: 3,
        title: "Verbs",
      },
      {
        id: 4,
        unitId: 1,
        order: 4,
        title: "Verbs",
      },
      {
        id: 5,
        unitId: 1,
        order: 5,
        title: "Verbs",
      },
    ]);

    await db.insert(schema.challenges).values([
      {
        id: 1,
        lessonId: 1,
        type: "SELECT",
        order: 1,
        question: "Qual desses é uma cadeira?",
      },
      {
        id: 2,
        lessonId: 1,
        type: "ASSIST",
        order: 2,
        question: '"the man"',
      },
      {
        id: 3,
        lessonId: 1,
        type: "SELECT",
        order: 3,
        question: 'Which one of these is the "the robot"?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 1,
        imageSrc: "/chair.svg",
        correct: true,
        text: "Cadeira",
        audioSrc: "/cadeira.mp3",
      },
      {
        challengeId: 1,
        imageSrc: "/door.svg",
        correct: false,
        text: "Porta",
        audioSrc: "/porta.mp3",
      },
      {
        challengeId: 1,
        imageSrc: "/broom.svg",
        correct: false,
        text: "Vassoura",
        audioSrc: "/vassoura.mp3",
      },
    ]);

    console.log("Seeding finished");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed the database");
  }
};

main();
