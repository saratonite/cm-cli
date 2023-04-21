import chalk from "chalk";
import ora from "ora";
import Table from "cli-table3";

export const t = chalk;

export function createSpinner(text: string) {
  let spinner = ora();
  spinner.start(text);
  return spinner;
}

export function createTable(options: Table.TableConstructorOptions) {
  return new Table(options);
}
