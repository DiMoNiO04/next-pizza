import { cn } from '@/src/lib/utils'
import { ReactNode } from 'react'

interface IContainerProps {
  className?: string
  children: ReactNode
}

export const Container = ({ className, children }: IContainerProps) => {
  return <div className={cn('mx-auto max-w-[1280px]', className)}>{children}</div>
}
