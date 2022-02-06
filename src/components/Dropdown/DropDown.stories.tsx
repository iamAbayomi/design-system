import { ComponentMeta, ComponentStory } from "@storybook/react";
import DropDown from "./DropDown";

export default {
    title: 'Dropdown',
    component: DropDown
} as ComponentMeta <typeof DropDown>


const Template: ComponentStory<typeof DropDown> = (args) => <DropDown {...args} />

//export const Primary = Template.bind({})

export const Primary : ComponentStory<typeof DropDown> = () => <DropDown menuTitle={"work"} menuItem={['place', 'house']} />