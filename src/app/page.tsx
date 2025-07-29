import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <>
      <div className="bg-background text-foreground border border-border p-4 rounded-lg animate-in fade-in slide-in-from-bottom-4">Tailwind работает 🎉</div>

      <h1>Home</h1>
      <Button variant="outline">Корзина</Button>
    </>
  )
}
