import { cn } from '@/lib/utils'
import { Title } from './Title'
import { ProductCard } from './ProductCard'

interface IProductsGroupListProps {
  title: string
  items: any[]
  categoryId: number
  className?: string
  listClassName?: string
}

export const ProductsGroupList = ({ title, items, listClassName, categoryId, className }: IProductsGroupListProps) => {
  return (
    <div className={className}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />

      <div className={cn('grid grid-cols-3 gap-12', listClassName)}>
        {items.map(({ id, name, imageUrl, items }) => (
          <ProductCard key={id} id={id} name={name} imageUrl={imageUrl} price={items[0].price} />
        ))}
      </div>
    </div>
  )
}
