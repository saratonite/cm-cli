import { resolve } from "node:path";
import { existsSync } from "node:fs";
import { homedir } from "node:os";
import knexPgm, { Knex } from "knex";

export const DB_FILE = resolve(homedir(), "contact-manager.db");

const knex: any = knexPgm;
export const db: Knex = knex({
  client: "better-sqlite3",
  connection: {
    filename: DB_FILE,
  },
  useNullAsDefault: true,
});

export function isDBFileExists() {
  return existsSync(DB_FILE);
}
