// Generated using "yarn build-templates"

export const meta = {
  name: "Plex",
  description:
    "organizes video, music and photos from personal media libraries and streams them to smart TVs, streaming boxes and mobile devices.",
  instructions: "If you get a libusb error, please ignore it.",
  changeLog: [{ date: "2022-11-23", description: "first release" }],
  links: [
    {
      label: "Documentation",
      url: "https://support.plex.tv/articles/catagories/plex-media-server",
    },
    { label: "Github", url: "https://github.com/plexinc/pms-docker" },
  ],
  contributors: [
    { name: "Supernova3339", url: "https://github.com/Supernova3339" },
  ],
  schema: {
    type: "object",
    required: ["projectName", "appServiceName", "appServiceImage"],
    properties: {
      projectName: { type: "string", title: "Project Name" },
      appServiceName: {
        type: "string",
        title: "App Service Name",
        default: "plex",
      },
      appServiceImage: {
        type: "string",
        title: "App Service Image",
        default: "lscr.io/linuxserver/plex:latest",
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
