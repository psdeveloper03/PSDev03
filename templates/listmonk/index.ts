import { Output, Services } from "~templates-utils";
import { Input } from "./meta";

export function generate(input: Input): Output {
  const services: Services = [];

  services.push({
    type: "app",
    data: {
      projectName: input.projectName,
      serviceName: input.appServiceName,
      env: [
        `LISTMONK_app__address=${input.appAddress}`,
        `LISTMONK_app__admin_username=${input.adminUser}`,
        `LISTMONK_app__admin_password=${input.adminPassword}`,
        `LISTMONK_db__host=${input.host}`,
        `LISTMONK_db__port=${input.port}`,
        `LISTMONK_db__password=${input.password}`,
        `LISTMONK_db__database=${input.projectName}`,
        `LISTMONK_db__ssl_mode=${input.SSLMode}`,
      ].join("\n"),
      source: {
        type: "image",
        image: input.appServiceImage,
      },
      proxy: {
        port: 80,
        secure: true,
      },
    },
  });

  services.push({
    data: {
      projectName: input.projectName,
      appServiceName: input.appServiceName,
      appServiceImage: input.appServiceImage,
      databaseServiceName: input.DatabaseName,
      appAddress: input.appAddress,
      adminUser: input.adminUser,
      adminPassword: input.adminPassword,
      host: input.host,
      port: input.port,
      SSLMode: input.SSLMode,
      user: input.user,
      password: input.password,
    },
  });

  return { services };
}
