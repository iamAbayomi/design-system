import { ComponentMeta, ComponentStory } from "@storybook/react";
import Modal from "./Modal";

export default {
    title: 'Modal',
    component: Modal
} as ComponentMeta <typeof Modal>


export const primary : ComponentStory<typeof Modal> = () => <Modal children={<p>Hello</p>} />