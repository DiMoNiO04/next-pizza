import { Container, Filters, ProductsGroupList, Title, TopBar } from '@/components/shared'
import { PIZZAS } from '@/data/pizzas'

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
              <ProductsGroupList title="Пиццы" items={PIZZAS} categoryId={1} />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
