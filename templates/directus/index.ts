import {
  Output,
  randomPassword,
  randomString,
  Services,
} from "~templates-utils";
import { Input } from "./meta";

export function generate(input: Input): Output {
  const services: Services = [];
  const appKey = randomString(48);
  const appSecret = randomString(48);
  const databasePassword = randomPassword();
  const redisPassword = randomPassword();
  const adminPassword = input.adminPassword ?? randomPassword();

  services.push({
    type: "app",
    data: {
      projectName: input.projectName,
      serviceName: input.appServiceName,
      env: [
        `KEY=${appKey}`,
        `SECRET=${appSecret}`,
        `DB_CLIENT=${input.databaseType}`,
        `DB_HOST=${input.projectName}_${input.databaseServiceName}`,
        `DB_PORT=${input.databaseType === "postgres" ? "5432" : "3306"}`,
        `DB_DATABASE=${input.projectName}`,
        `DB_USER=${input.databaseType === "postgres" ? "postgres" : "mysql"}`,
        `DB_PASSWORD=${databasePassword}`,
        `CACHE_ENABLED=true`,
        `CACHE_STORE=redis`,
        `CACHE_REDIS=redis://default:${redisPassword}@${input.projectName}_${input.redisServiceName}:6379`,
        `ADMIN_EMAIL=${input.adminEmail}`,
        `ADMIN_PASSWORD=${adminPassword}`,
      ].join("\n"),
      source: {
        type: "image",
        image: input.appServiceImage,
      },
      proxy: {
        port: 8055,
        secure: true,
      },
      mounts: [
        {
          type: "volume",
          name: "uploads",
          mountPath: "/directus/uploads",
        },
        {
          type: "volume",
          name: "extensions",
          mountPath: "/directus/extensions",
        },
      ],
    },
  });

  if (input.databaseType === "postgres") {
    services.push({
      type: "postgres",
      data: {
        projectName: input.projectName,
        serviceName: input.databaseServiceName,
        password: databasePassword,
      },
    });
  }

  if (input.databaseType === "mysql") {
    services.push({
      type: "mysql",
      data: {
        projectName: input.projectName,
        serviceName: input.databaseServiceName,
        image: "mysql:5",
        password: databasePassword,
      },
    });
  }

  services.push({
    type: "redis",
    data: {
      projectName: input.projectName,
      serviceName: input.redisServiceName,
      password: redisPassword,
    },
  });

  return { services };
}
