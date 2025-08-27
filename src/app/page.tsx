import { Container, Filters, ProductsGroupList, Title, TopBar } from '@/src/components/shared'
import { CATEGORIES, PIZZAS } from '@/src/data'

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className="pb-14 mt-10">
        <div className="flex gap-16">
          <div className="w-[250px]">
            <Filters />
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              {CATEGORIES.map(({ id, name }) => (
                <ProductsGroupList key={id} title={name} items={PIZZAS} categoryId={id} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
