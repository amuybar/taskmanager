// Generated by Xata Codegen 0.29.5. Please do not edit.
import { buildClient } from "@xata.io/client";
import type {
  BaseClientOptions,
  SchemaInference,
  XataRecord,
} from "@xata.io/client";

const tables = [
  {
    name: "Tasks",
    columns: [
      { name: "name", type: "string", notNull: true, defaultValue: "null" },
      { name: "status", type: "bool", notNull: true, defaultValue: "false" },
      { name: "user", type: "string", notNull: true, defaultValue: "null" },
    ],
  },
] as const;

export type SchemaTables = typeof tables;
export type InferredTypes = SchemaInference<SchemaTables>;

export type Tasks = InferredTypes["Tasks"];
export type TasksRecord = Tasks & XataRecord;

export type DatabaseSchema = {
  Tasks: TasksRecord;
};

const DatabaseClient = buildClient();

const defaultOptions = {
  databaseURL:
    "https://Barrack-Amuyunzu-s-workspace-bq01mc.eu-west-1.xata.sh/db/task-manager",
};

export class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions) {
    super({ ...defaultOptions, ...options }, tables);
  }
}

let instance: XataClient | undefined = undefined;

export const getXataClient = () => {
  if (instance) return instance;

  instance = new XataClient();
  return instance;
};
