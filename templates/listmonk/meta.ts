// Generated using "yarn build-templates"

export const meta = {
  name: "Listmonk",
  description:
    "Listmonk is a self-hosted, high performance mailing list and newsletter manager. It comes as a standalone binary and the only dependency is a Postgres database.",
  instructions: null,
  changeLog: [{ date: "2023-01-24", description: "first release" }],
  links: [
    { label: "Website", url: "https://listmonk.app/" },
    { label: "Documentation", url: "https://listmonk.app/doc" },
  ],
  schema: {
    type: "object",
    required: ["projectName", "appServiceName", "appServiceImage"],
    properties: {
      projectName: { type: "string", title: "Project Name" },
      appServiceName: {
        type: "string",
        title: "App Service Name",
        default: "listmonk",
      },
      appServiceImage: {
        type: "string",
        title: "App Service Image",
        default: "listmonk",
      },
      appAddress: {
        type: "string",
        title: "App Address",
        default: "0.0.0.0:9000",
      },
      adminUser: {
        type: "string",
        title: "App Admin User",
        default: "listmonk",
      },
      adminPassword: {
        type: "string",
        title: "App Admin Password",
        default: "listmonk",
      },
      host: {
        type: "string",
        title: "Host",
        default: "listmonk_db",
      },
      port: {
        type: "string",
        title: "Port",
        default: "9432",
      },
      user: {
        type: "string",
        title: "User",
        default: "listmonk",
      },
      password: {
        type: "string",
        title: "Password",
        default: "listmonk",
      },
      databaseName: {
        type: "string",
        title: "DatabaseName",
        default: "listmonk",
      },
    },
  },
  logo: "logo.svg",
  screenshots: ["screenshot.png"],
};

export type ProjectName = string;
export type AppServiceName = string;
export type AppServiceImage = string;
export type AppAddress = string;
export type AdminUser = string;
export type AdminPassword = string;
export type Host = string;
export type Port = string;
export type User = string;
export type Password = string;
export type DatabaseName = string;
export type SSLMode = string;

export interface Input {
  projectName: ProjectName;
  appServiceName: AppServiceName;
  appServiceImage: AppServiceImage;
  DatabaseName: DatabaseName;
  appAddress: AppAddress;
  adminUser: AdminUser;
  adminPassword: AdminPassword;
  host: Host;
  port: Port;
  SSLMode: SSLMode;
  user: User;
  password: Password;
}
