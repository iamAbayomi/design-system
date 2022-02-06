import { ComponentStory, ComponentMeta } from "@storybook/react";
import OverviewCard from "./OverviewCard";

export default {
    title: 'OverviewCard',
    component: OverviewCard
} as ComponentMeta<typeof OverviewCard>


const Template: ComponentStory<typeof OverviewCard>= (args) => <OverviewCard {...args}/>

export const Normal = Template.bind({})
Normal.args = {percentageText: 'No of Transactions', percentage: 30}



