// Generated using "yarn build-templates"

export const meta = {
  name: "OpenSpeedTest",
  description: "Pure HTML5 Network Performance Estimation Tool.",
  instructions: null,
  changeLog: [{ date: "2022-11-30", description: "first release" }],
  links: [
    { label: "Website", url: "https://openspeedtest.com/" },
    { label: "Github", url: "https://github.com/openspeedtest/Speed-Test" },
  ],
  contributors: [{ name: "Migu2k", url: "https://github.com/migu2k" }],
  schema: {
    type: "object",
    required: ["projectName", "appServiceName", "appServiceImage"],
    properties: {
      projectName: { type: "string", title: "Project Name" },
      appServiceName: {
        type: "string",
        title: "App Service Name",
        default: "openspeedtest",
      },
      appServiceImage: {
        type: "string",
        title: "App Service Image",
        default: "openspeedtest/latest",
      },
    },
  },
  logo: null,
  screenshots: [],
};

export type ProjectName = string;
export type AppServiceName = string;
export type AppServiceImage = string;

export interface Input {
  projectName: ProjectName;
  appServiceName: AppServiceName;
  appServiceImage: AppServiceImage;
}
