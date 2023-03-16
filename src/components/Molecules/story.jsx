import React from "react";
import Component from "./index";

export default {
  component: Component,
  title: "Molecules/Task",
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

const Template = (args) => <Component {...args} />;

export const Default = Template.bind({});
Default.args = {
  onTaskComplete: () => console.log("task completed"),
  onTaskChange: (value) => console.log("taskname changed:" + value),
  taskName: "taskname",
  defaultIsEditing: false,
};
