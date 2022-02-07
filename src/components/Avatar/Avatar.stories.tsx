import { ComponentMeta, ComponentStory } from "@storybook/react";
import Avatar from "./Avatar";


export default {
    title: 'Avatar',
    component: Avatar
} as ComponentMeta <typeof Avatar >

// This is the avatar documentation

/**
 *  This is the avatar documentation
 */

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />

export const Primary = Template.bind({})
Primary.args = {imageSrc: 'https://avatars2.githubusercontent.com/u/132554'}