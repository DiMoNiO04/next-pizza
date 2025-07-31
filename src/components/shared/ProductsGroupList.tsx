'use client'

import { cn } from '@/lib/utils'
import { Title } from './Title'
import { ProductCard } from './ProductCard'
import { useIntersection } from 'react-use'
import { RefObject, useEffect, useRef } from 'react'
import { useCategoryStore } from '@/store'

interface IProductsGroupListProps {
  title: string
  items: any[]
  categoryId: number
  className?: string
  listClassName?: string
}

export const ProductsGroupList = ({ title, items, listClassName, categoryId, className }: IProductsGroupListProps) => {
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId)

  const intersectionRef = useRef<HTMLDivElement | null>(null)
  const intersection = useIntersection(intersectionRef as RefObject<HTMLElement>, {
    threshold: 0.4,
  })

  useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryId(categoryId)
    }
  }, [categoryId, intersection?.isIntersecting, setActiveCategoryId, title])

  return (
    <div className={className} id={title} ref={intersectionRef}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />

      <div className={cn('grid grid-cols-3 gap-12', listClassName)}>
        {items.map(({ id, name, imageUrl, items }) => (
          <ProductCard key={id} id={id} name={name} imageUrl={imageUrl} price={items[0].price} />
        ))}
      </div>
    </div>
  )
}
