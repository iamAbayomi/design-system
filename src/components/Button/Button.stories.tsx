import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "./Button";

export default {
    title: 'Button',
    component: Button
} as ComponentMeta <typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />
// export const Normal: ComponentStory<typeof Button> = () => <Button buttonText={""} />

export const Primary  = Template.bind({})
Primary.args = {width: '134px', height: '42px', color: 'white', margin: '20px' , backgroundColor: 'blue', buttonText: 'Primary', onClick: () =>{}}

export const Secondary = Template.bind({})
Secondary.args = {width: '134px', height: '42px', color: 'blue', margin: '20px' , backgroundColor: 'white', buttonText: 'Secondary', onClick: () =>{}}