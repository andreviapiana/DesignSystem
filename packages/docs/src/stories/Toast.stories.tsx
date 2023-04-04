import type { Meta, StoryObj } from '@storybook/react'
import { Toast, ToastProps } from '@ignite-andre/react'

export default {
  title: 'Overlay/Toast',
  component: Toast,
  args: {
    title: 'Agendamento realizado',
    description: 'Sexta-feira, 11 de Agosto às 16h',
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
