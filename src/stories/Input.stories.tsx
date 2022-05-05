import { ComponentStory, ComponentMeta } from "@storybook/react";

import Input from "../components/Input";

export default {
  title: "Input",
  component: Input,
  argTypes: {},
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const standard = Template.bind({});
standard.args = {
  placeholder: "prova",
};
