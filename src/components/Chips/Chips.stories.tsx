import { ComponentMeta, ComponentStory } from "@storybook/react";
import Chips from "./Chips";

// export default {
//     title: 'Chips',
//     component: Chips
// } as ComponentMeta <typeof Chips>


const Template: ComponentStory<typeof Chips> = (args) => <Chips {...args} />

export const active = Template.bind({})
active.args = {chipsText: 'active'}

export const block: ComponentStory<typeof Chips> = () => <Chips chipsText={'block'} />

export const successful: ComponentStory<typeof Chips> = () => <Chips chipsText={'successful'} />

export const cancelled: ComponentStory<typeof Chips> = () => <Chips chipsText={'cancelled'} />

export const pending: ComponentStory<typeof Chips> = () => <Chips chipsText={'pending'} />

export const processing: ComponentStory<typeof Chips> = () => <Chips chipsText={'processing'} />

export const decline: ComponentStory<typeof Chips> = () => <Chips chipsText={'decline'} />

export const failed: ComponentStory<typeof Chips> = () => <Chips chipsText={'failed'} />

export const inProgess: ComponentStory<typeof Chips> = () => <Chips chipsText={'in progress'} />

export const completed: ComponentStory<typeof Chips> = () => <Chips chipsText={'completed'} />
