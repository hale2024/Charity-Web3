import { createCampaign, dashboard, logout, profile } from "../assets";

export const navlinks = [
  {
    name: "dashboard",
    imgUrl: dashboard,
    link: "/",
  },
  {
    name: "campaign",
    imgUrl: createCampaign,
    link: "/create-campaign",
  },
  {
    name: "profile",
    imgUrl: profile,
    link: "/profile",
  },
  {
    name: "logout",
    imgUrl: logout,
    link: "/logout",
  },
];

export const palette = {
  common: {
    black: "#000000",
    white: "#ffffff",
    transparent: "rgba(0,0,0,0)",
  },
  black: "#000000",
  white: "#ffffff",
  primaryLight: "#C6DAED",
  primaryMain: "#3d8add",
  primaryDark: "#346191",
  background: {
    main: "#e6eaef",
    light: "#EEF2F6",
    dark: "#C4CFDD",
  },
  grey100: "#121212",
  grey200: "#323232",
  grey300: "#616161",
  grey400: "#919191",
  grey500: "#bdbdbd",
  grey600: "#f1f1f1",
};
