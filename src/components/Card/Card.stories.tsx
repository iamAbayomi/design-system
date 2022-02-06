import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "../Button/Button";
import Card from './Card'

export default{
    title: 'Card',
    component: Card
} as ComponentMeta <typeof Card>

const Template : ComponentStory<typeof Card> = (args) => <Card {...args} />

export const Normal = Template.bind({})
Normal.args = {children: <Button width={'132px'} height={'42px'} color={'white'} margin={'20px 0px'} backgroundColor={'blue'} buttonText={'Secondary'} />}