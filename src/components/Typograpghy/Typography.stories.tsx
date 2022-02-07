import { ComponentMeta, ComponentStory } from "@storybook/react";
import Typography from "./Typography";


export default {
    title: 'Typography',
    compoent: Typography
} as ComponentMeta <typeof Typography>

export const xLarge : ComponentStory <typeof Typography> = () => <Typography fontSize={"42px"} text={"x-Large"} fontWeight={"500"} lineHeight={"44px"} />
export const Large : ComponentStory <typeof Typography> = () => <Typography fontSize={"28px"} text={"Large"} fontWeight={"500"} lineHeight={"32px"} />
export const Medium : ComponentStory <typeof Typography> = () => <Typography fontSize={"26px"} text={"Medium"} fontWeight={"400"} lineHeight={"32px"} />
export const displaySmall : ComponentStory <typeof Typography> = () => <Typography fontSize={"20px"} text={"Small"} fontWeight={"400"} lineHeight={"24px"} />
export const pageHeading : ComponentStory <typeof Typography> = () => <Typography fontSize={"20px"} text={"PageHeading"} fontWeight={"600"} lineHeight={"24px"} />
export const heading : ComponentStory <typeof Typography> = () => <Typography fontSize={"16px"} text={"Heading"} fontWeight={"500"} lineHeight={"24px"} />
export const subheading : ComponentStory <typeof Typography> = () => <Typography fontSize={"12px"} text={"SubHeading"} fontWeight={"600"} lineHeight={"16px"} />
export const button : ComponentStory <typeof Typography> = () => <Typography fontSize={"14px"} text={"Button"} fontWeight={"500"} lineHeight={"16px"} />
export const primary : ComponentStory<typeof Typography> = ()=> <Typography fontSize={"16px"} text={'Primary'} fontWeight={"400"} lineHeight="24px" />
export const body : ComponentStory<typeof Typography> = ()=> <Typography fontSize={"16px"} text={'Primary'} fontWeight={"400"} lineHeight="24px" />
export const caption : ComponentStory <typeof Typography> = () => <Typography fontSize={"12px"} text={"Caption"} fontWeight={"400"} lineHeight={"16px"} />


