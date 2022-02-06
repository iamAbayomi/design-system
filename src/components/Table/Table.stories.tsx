import { ComponentMeta, ComponentStory } from "@storybook/react";
import Table from "./Table";

export default {
    title: 'Table',
    component: Table
} as ComponentMeta <typeof Table>

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />

export const Normal = Template.bind({})
Normal.args = {tableColums: ['Name', 'User'], tableData: [['John', 'Admin']]}