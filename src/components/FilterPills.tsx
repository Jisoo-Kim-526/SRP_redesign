import './FilterPills.css'

// Filter pill icons from Figma
const imgUserIcon = "https://www.figma.com/api/mcp/asset/11183536-a020-4d94-bff4-70245a3c47f5";
const imgLinkIcon = "https://www.figma.com/api/mcp/asset/eb6aeb4b-2158-4141-b6ea-cea5bb47bd41";
const imgThreadsIcon = "https://www.figma.com/api/mcp/asset/4956690d-99ab-4978-99fb-7fa2aec9eed1";
const imgCalendarIcon = "https://www.figma.com/api/mcp/asset/ab29446d-986e-4f53-80b4-0f0947533150";
// imgRefineIcon replaced with inline SVG below
const imgSortIcon = "https://www.figma.com/api/mcp/asset/d1c9c8c0-f0d6-4cef-a8d1-3ef0b5782947";

function RefineIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="2" y1="4" x2="12" y2="4" stroke="#1D1C1D" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="4" y1="7" x2="10" y2="7" stroke="#1D1C1D" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="5.5" y1="10" x2="8.5" y2="10" stroke="#1D1C1D" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

interface FilterPill {
  icon?: string
  iconNode?: React.ReactNode
  label: string
}

const messageFilters: FilterPill[] = [
  { icon: imgUserIcon, label: 'From me' },
  { icon: imgLinkIcon, label: 'Has a link' },
  { icon: imgThreadsIcon, label: 'Threads only' },
  { icon: imgCalendarIcon, label: 'Last 7 days' },
  { iconNode: <RefineIcon />, label: 'More filters' },
]

const fileFilters: FilterPill[] = [
  { icon: imgUserIcon, label: 'From me' },
  { icon: imgCalendarIcon, label: 'Last 7 days' },
  { iconNode: <RefineIcon />, label: 'More filters' },
]

interface FilterPillsProps {
  category: 'messages' | 'files'
}

export default function FilterPills({ category }: FilterPillsProps) {
  const filters = category === 'messages' ? messageFilters : fileFilters

  return (
    <div className="filter-pills-row">
      <div className="filter-pills-row__pills">
        {filters.map((filter, i) => (
          <div key={i} className="fpill">
            {filter.iconNode || <img src={filter.icon} alt="" className="fpill__icon" />}
            <span className="fpill__label">{filter.label}</span>
          </div>
        ))}
      </div>
      <div className="fpill fpill--sort">
        <img src={imgSortIcon} alt="" className="fpill__icon" />
      </div>
    </div>
  )
}
