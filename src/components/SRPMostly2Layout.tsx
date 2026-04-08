import { useState } from 'react'
import './SRPMostly2Layout.css'
import CategorySidebar from './CategorySidebar'
import ResultsPanel from './ResultsPanel'

type Category = 'messages' | 'files'

export default function SRPMostly2Layout() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('messages')

  return (
    <div className="srp2-layout">
      <CategorySidebar
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <ResultsPanel selectedCategory={selectedCategory} />
    </div>
  )
}
