import { ComponentMeta, ComponentStory } from "@storybook/react";
import Table from "./Table";

export default {
    title: 'Table',
    component: Table
} as ComponentMeta <typeof Table>

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />