// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCfflLx3_Bews6BH-GaTgvuUX19bMGNJ6I",
    authDomain: "toolbox-2644a.firebaseapp.com",
    databaseURL: "https://toolbox-2644a.firebaseio.com",
    projectId: "toolbox-2644a",
    storageBucket: "toolbox-2644a.appspot.com",
    messagingSenderId: "118707216949",
    appId: "1:118707216949:web:29a66da21503ffee"
  },

  menu: {
    default: [
      {
        text: "Dashboard",
        order: 0,
        path: "/index/dashboard",
        children: []
      },
      {
        text: "Devices and Material",
        order: 1,
        path: "/index/devices",
        children: [
          {
            text: "Devices",
            order: 1,
            path: "/index/devices",
            children: []
          },
          {
            text: "Device Licenses",
            order: 1,
            path: "/index/devices",
            children: []
          },
          {
            text: "New Device",
            order: 1,
            path: "/index/devices/new",
            children: []
          },
          {
            text: "Material",
            order: 1,
            path: "/index/devices/new",
            children: []
          },
        ]
      },
      {
        text: "CMS",
        order: 1,
        path: "/index/cms",
        children: [
          {
            text: "Pages",
            order: 1,
            path: "/index/cms/pages",
            children: []
          },
          {
            text: "Blog",
            order: 1,
            path: "/index/cms/pages",
            children: []
          },
          {
            text: "Announcements",
            order: 1,
            path: "/index/cms/pages",
            children: []
          },
          {
            text: "Themes",
            order: 1,
            path: "/index/cms/themes",
            children: []
          },
        ]
      },
      {
        text: "Workshops",
        order: 1,
        path: "/index/workshops",
        children: [
          {
            text: "Kalendar",
            order: 1,
            path: "/index/cms/pages",
            children: []
          },
          {
            text: "Registrations",
            order: 1,
            path: "/index/cms/themes",
            children: []
          },
        ]
      },
      {
        text: "Space Control",
        order: 1,
        path: "/index/workshops",
        children: [
          {
            text: "Light",
            order: 1,
            path: "/index/cms/pages",
            children: []
          },
          {
            text: "Music",
            order: 1,
            path: "/index/cms/themes",
            children: []
          },
          {
            text: "Statistics",
            order: 1,
            path: "/index/cms/themes",
            children: []
          },
        ]
      },
      {
        text: "Users",
        order: 1,
        path: "/index/admin",
        children: [
          {
            text: "Me",
            order: 1,
            path: "/index/cms/pages",
            children: []
          },
          {
            text: "All",
            order: 1,
            path: "/index/cms/pages",
            children: []
          },
          {
            text: "Presence",
            order: 1,
            path: "/index/cms/pages",
            children: []
          },
        ]
      },
      {
        text: "Administration",
        order: 1,
        path: "/index/admin",
        children: [
          {
            text: "General",
            order: 1,
            path: "/index/cms/pages",
            children: []
          },
          {
            text: "Users",
            order: 1,
            path: "/index/cms/pages",
            children: []
          },
          {
            text: "Usergroups",
            order: 1,
            path: "/index/cms/pages",
            children: []
          },
        ]
      }
    ]
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
