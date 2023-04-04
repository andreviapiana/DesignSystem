import * as Tooltip from '@radix-ui/react-tooltip'
import { styled } from '../../styles'

export const TooltipProvider = Tooltip.Provider

export const TooltipRoot = Tooltip.Root

export const TooltipPortal = Tooltip.Portal

export const TooltipTrigger = styled(Tooltip.Trigger, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: '4.125rem',
  height: '3.625rem',
  padding: '$4 $6',
  borderRadius: '$sm',
  border: 'none',

  color: '$white',
  backgroundColor: '$gray600',

  fontFamily: '$default',
  lineHeight: '$base',
  fontSize: '$md',

  variants: {
    available: {
      false: {
        backgroundColor: 'transparent',
      },
    },
  },
})

export const TooltipContent = styled(Tooltip.Content, {
  borderRadius: '$sm',
  padding: '$3 $4',

  color: '$gray100',
  backgroundColor: '$gray900',

  fontSize: '$sm',
  fontFamily: '$default',
  fontWeight: '$medium',
  lineHeight: '$short',
})

export const TooltipArrow = styled(Tooltip.Arrow, {
  width: '$4',
  height: '$2',
  fill: '$gray900',
  marginBottom: -10,
})
