import { ALL_INGREDIENTS, DEFAULT_INGREDIENTS } from '@/src/data'
import { Input } from '../ui'
import { CheckboxFiltersGroup } from './CheckboxFiltersGroup'
import { FilterCheckbox } from './FilterCheckbox'
import { RangeSlider } from './RangeSlider'
import { Title } from './Title'

interface IFiltersProps {
  className?: string
}

export const Filters = ({ className }: IFiltersProps) => {
  return (
    <div className={className}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Можно собирать" value="1" />
        <FilterCheckbox text="Новинки" value="2" />
      </div>

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input type="number" placeholder="0" min={0} max={1000} defaultValue={0} />
          <Input type="number" placeholder="1000" min={10} max={1000} />
        </div>
        <RangeSlider min={0} max={1000} step={10} value={[0, 1000]} />
      </div>

      <CheckboxFiltersGroup title="Ингредиенты" className="mt-5" limit={6} defaultItems={DEFAULT_INGREDIENTS} items={ALL_INGREDIENTS} />
    </div>
  )
}
