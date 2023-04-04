import { ComponentProps } from 'react'
import {
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
  TooltipPortal,
  TooltipContent,
  TooltipArrow,
} from './styles'

export interface TooltipProps extends ComponentProps<typeof TooltipRoot> {
  content: string
  available: boolean
}

export function Tooltip({ content, available }: TooltipProps) {
  return (
    <TooltipProvider>
      <TooltipRoot>
        <TooltipTrigger available={available}>{content}</TooltipTrigger>
        <TooltipPortal>
          <TooltipContent className="TooltipContent" sideOffset={5}>
            {available
              ? `${content} de Outubro - Disponível`
              : `${content} de Outubro - Indisponível`}
            <TooltipArrow className="TooltipArrow" />
          </TooltipContent>
        </TooltipPortal>
      </TooltipRoot>
    </TooltipProvider>
  )
}

Tooltip.displayName = 'Tooltip'
