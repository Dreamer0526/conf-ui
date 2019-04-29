import { ICON, TABS } from "../../constants/componentTypes";

export const tabsField = {
  type: TABS,
  width: 24,
  offset: 0,
  tabs: [
    {
      key: "home",
      title: "home", // could be a string or a renderer-field
      children: [
        // Array of fields
      ]
    },
    {
      key: "profile",
      title: {
        type: ICON,
        icon: "users"
      },
      children: [
        // Array of fields
      ]
    }
  ]
};
