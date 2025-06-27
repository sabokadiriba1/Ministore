import { ChevronDown } from 'lucide-react'
import React, { useState } from 'react'

interface Item {
  title: string
  content: string
}

interface FaqProps {
  items: Item[]
}

const Faq: React.FC<FaqProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number[]>([])

  const toggleFaq = (index: number) => {
    setActiveIndex((prevActiveIndex) => {
      const indexExists = prevActiveIndex.includes(index)

      if (indexExists) {
        return prevActiveIndex.filter((activeIdx) => activeIdx !== index)
      }

      return [...prevActiveIndex, index]
    })
  }

  return (
    <section className="mx-auto mt-10 max-w-4xl px-3">
      <div className="mb-8 text-center">
        <h3 className="mb-2 text-3xl font-bold text-primary">F.A.Q</h3>
        <p className="text-lg font-semibold text-secondary">
          Questions on your mind? We've got the answers you need.
        </p>
      </div>
      {items.map(({ title, content }, index) => (
        <div key={index} className="mb-3 rounded-2xl border border-gray-300 p-4 hover:bg-slate-50">
          <button
            onClick={() => toggleFaq(index)}
            className="flex w-full items-center justify-between focus:outline-none">
            <h4 className="flex-1 text-left text-lg font-semibold text-primary">{title}</h4>
            <ChevronDown
              className={`h-6 w-6 transition-transform ${
                activeIndex.includes(index) ? 'rotate-180 transform' : ''
              }`}
            />
          </button>
          {activeIndex.includes(index) && (
            <div className="mt-3">
              <p className="text-base text-secondary">{content}</p>
            </div>
          )}
        </div>
      ))}
    </section>
  )
}

export default Faq
