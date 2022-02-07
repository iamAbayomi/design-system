import { ComponentMeta, ComponentStory } from "@storybook/react";
import Badge from "./Badge";


export default {
    title: 'Badge',
    component: Badge
} as ComponentMeta <typeof Badge>


const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />

export const active = Template.bind({})
active.args = {BadgeText: 'active'}

export const block: ComponentStory<typeof Badge> = () => <Badge BadgeText={'block'} />

export const successful: ComponentStory<typeof Badge> = () => <Badge BadgeText={'successful'} />

export const cancelled: ComponentStory<typeof Badge> = () => <Badge BadgeText={'cancelled'} />

export const pending: ComponentStory<typeof Badge> = () => <Badge BadgeText={'pending'} />

export const processing: ComponentStory<typeof Badge> = () => <Badge BadgeText={'processing'} />

export const decline: ComponentStory<typeof Badge> = () => <Badge BadgeText={'decline'} />

export const failed: ComponentStory<typeof Badge> = () => <Badge BadgeText={'failed'} />

export const inProgess: ComponentStory<typeof Badge> = () => <Badge BadgeText={'in progress'} />

export const completed: ComponentStory<typeof Badge> = () => <Badge BadgeText={'completed'} />
