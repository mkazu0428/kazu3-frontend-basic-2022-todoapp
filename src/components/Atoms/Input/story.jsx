import React from "react";
import Component from "./index";

export default {
  component: Component,
  title: "Atoms/Input",
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

const Template = (args) => <Component {...args} />;

export const Default = Template.bind({});
Default.args = {
  onEditComplete: (inputtedValue) => {
    console.log("onEditCompleteを実行、値は" + inputtedValue);
  },
};
