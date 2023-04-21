import { defineConfig } from "tinacms";
import { blog_templateFields } from "./templates";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "master";

export default defineConfig({
  branch,
  clientId: process.env.TINA_PUBLIC_CLIENT_ID!, // Get this from tina.io
  token: process.env.TINA_TOKEN!, // Get this from tina.io
  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
        format: "toml",
        label: "Site Settings",
        name: "site_settings",
        path: "data",
        frontmatterFormat: "toml",
        frontmatterDelimiters: "+++",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "config",
        },
        fields: [
          {
            name: "author",
            label: "Author",
            type: "string",            
          },
          {
            name: "description",
            label: "Description",
            type: "string",            
          },
          {
            name: "email",
            label: "Email",
            type: "string",            
          },
          {
            name: "googleMapsApiKey",
            label: "Maps API Key",
            type: "string",            
          },
          {
            name: "custom_css",
            label: "Custom CSS Files",
            type: "string",
            list: true,
            description:
              "Relative path to css files from root of website.",
          },
          {
            name: "footer",
            label: "Footer",
            type: 'object',
            fields: [
              {
                name: "enable",
                label: "Enable",
                type: "boolean"
              },
              {
                name: "copyright",
                label: "Copyright",
                type: "string"
              }
            ]
          },
          {
            name: "hero",
            label: "Hero",
            type: 'object',
            fields: [
              {
                name: "title",
                label: "Title",
                type: "string"
              },
              {
                name: "subtitle",
                label: "subtitle",
                type: "string"
              }
            ]
          },
          {
            name: "navigation",
            label: "Navigation",
            type: 'object',
            fields: [
              {
                name: "about",
                label: "About",
                type: "string"
              },
              {
                name: "brand",
                label: "Brand",
                type: "string"
              },
              {
                name: "contact",
                label: "Contact",
                type: "string"
              },
              {
                name: "home",
                label: "Home",
                type: "string"
              },
              {
                name: "services",
                label: "Services",
                type: "string"
              },
              {
                name: "testimonials",
                label: "Testimonials",
                type: "string"
              },
              {
                name: "work",
                label: "Work",
                type: "string"
              }
            ]
          },
        ],
      },
      {
        format: "toml",
        label: "About",
        name: "about_settings",
        path: "data/config",
        frontmatterFormat: "toml",
        frontmatterDelimiters: "+++",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "about",
        },
        fields: [
          {
            name: "enable",
            label: "Enable",
            type: "boolean"
          },
          {
            name: "description",
            label: "Description",
            type: "string"
          },
          {
            name: "title",
            label: "Title",
            type: "string"
          },
          {
            name: "item",
            label: "Items",
            type: "object",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.name };
              },
            },
            fields: [
              {
                name: "alt",
                label: "alt",
                type: "string"
              },
              {
                name: "name",
                label: "Name",
                type: "string"
              },
              {
                name: "position",
                label: "Position",
                type: "string"
              },
              {
                name: "description",
                label: "Description",
                type: "string"
              },
              {
                name: "img",
                label: "Image Path",
                type: "string"
              }
            ]
          }
        ]
      },
      {
        format: "toml",
        label: "Contact",
        name: "contact_settings",
        path: "data/config",
        frontmatterFormat: "toml",
        frontmatterDelimiters: "+++",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "contact",
        },
        fields: [
          {
            name: "enable",
            label: "Enable",
            type: "boolean"
          },
          {
            name: "button",
            label: "button",
            type: "string"
          },
          {
            name: "description",
            label: "description",
            type: "string"
          },
          {
            name: "form",
            label: "Enable Contact Form",
            type: "boolean"
          },
          {
            name: "map",
            label: "Enable Map",
            type: "boolean"
          },
          {
            name: "details",
            label: "Contact Details",
            type: "object",
            list:true,
            ui: {
              itemProps: (item) => {
                return { label: item?.text };
              },
            },
            fields: [
              {
                name: "icon",
                label: "Icon",
                type: "string"
              },
              {
                name: "text",
                label: "Text",
                type: "string"
              }
            ]
          }
        ]
      },
      {
        format: "toml",
        label: "Services",
        name: "services_settings",
        path: "data/config",
        frontmatterFormat: "toml",
        frontmatterDelimiters: "+++",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "services",
        },
        fields: [
          {
            name: "enable",
            label: "Enable",
            type: "boolean"
          },
          {
            name: "description",
            label: "Description",
            type: "string"
          },
          {
            name: "title",
            label: "Title",
            type: "string"
          },
          {
            name: "item",
            label: "Items",
            type: "object",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.title };
              },
            },
            fields: [
              {
                name: "title",
                label: "title",
                type: "string"
              },
              {
                name: "description",
                label: "description",
                type: "string"
              },
              {
                name: "icon",
                label: "icon",
                type: "string"
              }
            ]
          }
        ]
      },
      {
        format: "toml",
        label: "Counters",
        name: "counter_settings",
        path: "data/config",
        frontmatterFormat: "toml",
        frontmatterDelimiters: "+++",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "counters",
        },
        fields: [
          {
            name: "enable",
            label: "Enable",
            type: "boolean"
          },
          {
            name: "background",
            label: "background",
            type: "string"
          },
          {
            name: "title",
            label: "Title",
            type: "string"
          },
          {
            name: "item",
            label: "Items",
            type: "object",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.description };
              },
            },
            fields: [
              {
                name: "description",
                label: "Description",
                type: "string"
              },
              {
                name: "icon",
                label: "icon",
                type: "string"
              },
              {
                name: "from",
                label: "from",
                type: "number"
              },
              {
                name: "to",
                label: "to",
                type: "number"
              },
              {
                name: "interval",
                label: "interval",
                type: "number"
              },
              {
                name: "speed",
                label: "speed",
                type: "number"
              }
            ]
          }
        ]
      }
    ],
  },
});
