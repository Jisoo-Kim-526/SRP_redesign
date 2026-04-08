import './CategoryCard.css'

interface CategoryCardProps {
  icon: string
  label: string
  selected?: boolean
  selectable?: boolean
  onClick?: () => void
  children: React.ReactNode
}

export default function CategoryCard({ icon, label, selected, selectable, onClick, children }: CategoryCardProps) {
  return (
    <div
      className={`cat-card${selected ? ' cat-card--selected' : ''}`}
      onClick={selectable ? onClick : undefined}
      style={selectable ? { cursor: 'pointer' } : undefined}
    >
      <div className={`cat-card__header${selected ? ' cat-card__header--selected' : ''}`}>
        <div className="cat-card__header-left">
          <img src={icon} alt="" className="cat-card__icon" />
          <span className="cat-card__label">{label}</span>
        </div>
        <div className="cat-card__caret">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.5 4.5L11.5 9L6.5 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
      <div className={`cat-card__collapsible${selected ? ' cat-card__collapsible--collapsed' : ''}`}>
        <div className="cat-card__collapsible-inner">
          <div className="cat-card__divider" />
          <div className="cat-card__items">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
