import { useState, useRef, useEffect, useCallback } from 'react'
import './AllResultsSection.css'
import MessageResult from './MessageResult'

const imgUnion8 = "https://www.figma.com/api/mcp/asset/9f4e9614-38a8-4cb5-a122-ba3c0a747767";
const imgUnion9 = "https://www.figma.com/api/mcp/asset/4dbccfae-3bc2-417d-a47f-1f0392e132dc";
const imgUnion10 = "https://www.figma.com/api/mcp/asset/09f864d0-d1f6-4dfd-a8c4-d7d77d828dc5";
const imgUnion11 = "https://www.figma.com/api/mcp/asset/658e21ac-b5e1-4b83-a34b-b80c12cfb1dd";
const imgUnion12 = "https://www.figma.com/api/mcp/asset/28bbb1bf-dd4a-42d3-b382-c9d3732ccc98";
const imgUnion13 = "https://www.figma.com/api/mcp/asset/f79f0bf5-a48c-4831-a140-7176decd392f";
const imgUnion14 = "https://www.figma.com/api/mcp/asset/7aae6e69-f419-4129-ad2b-605667b5597c";
const imgUnion15 = "https://www.figma.com/api/mcp/asset/b02b09ff-57df-4f16-8a50-4a5248802865";
const imgUnion16 = "https://www.figma.com/api/mcp/asset/d4dd924f-2180-435b-9fa8-a7bcff455e8c";
const imgRectangle = "https://www.figma.com/api/mcp/asset/168a1886-1981-4042-a246-d9abaa11c25e";
const imgGitHub = "https://www.figma.com/api/mcp/asset/d4c82a4b-a80a-4dad-9429-58db753a981b";

interface Tab {
  icon: string | null
  iconImg?: boolean
  iconApp?: boolean
  label: string
  active?: boolean
}

const tabs: Tab[] = [
  { icon: imgUnion8, label: 'Message', active: true },
  { icon: imgUnion9, label: 'Files' },
  { icon: imgUnion10, label: 'Channels' },
  { icon: imgUnion11, label: 'People' },
  { icon: imgRectangle, label: 'Google Drive', iconImg: true, iconApp: true },
  { icon: imgGitHub, label: 'GitHub', iconImg: true },
]

interface FilterPill {
  icon: string | null
  label: string
}

const filters: FilterPill[] = [
  { icon: imgUnion13, label: 'From me' },
  { icon: imgUnion13, label: 'Includes me' },
  { icon: imgUnion14, label: 'Has a link' },
  { icon: imgUnion15, label: 'Threads only' },
  { icon: imgUnion16, label: 'Last 7 days' },
]

function useOverflowCount(
  containerRef: React.RefObject<HTMLDivElement | null>,
  itemSelector: string,
  moreWidth: number,
  gap: number,
  deps: unknown[] = [],
) {
  const [visibleCount, setVisibleCount] = useState(Infinity)

  const measure = useCallback(() => {
    const container = containerRef.current
    if (!container) return
    const items = container.querySelectorAll(itemSelector)
    if (items.length === 0) return

    const containerWidth = container.clientWidth
    let used = 0
    let count = 0

    for (let i = 0; i < items.length; i++) {
      const itemWidth = (items[i] as HTMLElement).scrollWidth
      const widthNeeded = used + itemWidth + (count > 0 ? gap : 0)
      const remaining = items.length - count
      const needsMore = remaining > 1
      if (widthNeeded + (needsMore ? gap + moreWidth : 0) > containerWidth && count > 0) {
        break
      }
      used = widthNeeded
      count++
    }

    setVisibleCount(count >= items.length ? Infinity : count)
  }, [containerRef, itemSelector, moreWidth, gap])

  useEffect(() => {
    measure()
    const container = containerRef.current
    if (!container) return
    const ro = new ResizeObserver(measure)
    ro.observe(container)
    return () => ro.disconnect()
  }, [measure, ...deps])

  return visibleCount
}

export default function AllResultsSection() {
  const tabsRef = useRef<HTMLDivElement>(null)
  const filtersRef = useRef<HTMLDivElement>(null)
  const [tabMenuOpen, setTabMenuOpen] = useState(false)
  const [filterMenuOpen, setFilterMenuOpen] = useState(false)

  const visibleTabCount = useOverflowCount(tabsRef, ':scope > .tab:not(.tab--more)', 70, 8)
  const visibleFilterCount = useOverflowCount(filtersRef, ':scope > .filter-pill:not(.filter-pill--more)', 60, 8)

  const visibleTabs = visibleTabCount === Infinity ? tabs : tabs.slice(0, visibleTabCount)
  const overflowTabs = visibleTabCount === Infinity ? [] : tabs.slice(visibleTabCount)
  const visibleFilters = visibleFilterCount === Infinity ? filters : filters.slice(0, visibleFilterCount)
  const overflowFilters = visibleFilterCount === Infinity ? [] : filters.slice(visibleFilterCount)

  return (
    <div className="all-results">
      {/* Tab Bar */}
      <div className="all-results__tabs-wrap">
        <div className="all-results__tabs-row">
          <div className="all-results__tabs" ref={tabsRef}>
            {visibleTabs.map((tab, i) => (
              <div key={i} className={`tab ${tab.active ? 'tab--active' : ''}`}>
                {tab.icon && (
                  tab.iconApp ? (
                    <div className="tab__icon-app">
                      <img src={tab.icon} alt="" />
                    </div>
                  ) : tab.iconImg ? (
                    <img src={tab.icon} alt="" className="tab__icon-img" />
                  ) : (
                    <div className="tab__icon">
                      <img src={tab.icon} alt="" className="tab__icon-svg" />
                    </div>
                  )
                )}
                <span className="tab__label">{tab.label}</span>
              </div>
            ))}
            {overflowTabs.length > 0 && (
              <div className="tab tab--more" onClick={() => setTabMenuOpen(!tabMenuOpen)}>
                <span className="tab__label">More</span>
                {tabMenuOpen && (
                  <div className="overflow-menu" onClick={(e) => e.stopPropagation()}>
                    {overflowTabs.map((tab, i) => (
                      <div key={i} className="overflow-menu__item">
                        {tab.icon && (
                          tab.iconApp ? (
                            <div className="tab__icon-app">
                              <img src={tab.icon} alt="" />
                            </div>
                          ) : tab.iconImg ? (
                            <img src={tab.icon} alt="" className="tab__icon-img" />
                          ) : (
                            <div className="tab__icon">
                              <img src={tab.icon} alt="" className="tab__icon-svg" />
                            </div>
                          )
                        )}
                        <span>{tab.label}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
            <div className="tab tab--add">
              <div className="tab__add-btn">
                <img src={imgUnion12} alt="" className="tab__add-icon" />
              </div>
            </div>
          </div>
        </div>
        <div className="all-results__tabs-divider" />
      </div>

      {/* Filter Pills */}
      <div className="all-results__filters" ref={filtersRef}>
        {visibleFilters.map((filter, i) => (
          <div key={i} className="filter-pill">
            {filter.icon && (
              <img src={filter.icon} alt="" className="filter-pill__icon" />
            )}
            <span className="filter-pill__label">{filter.label}</span>
          </div>
        ))}
        {overflowFilters.length > 0 && (
          <div className="filter-pill filter-pill--more" onClick={() => setFilterMenuOpen(!filterMenuOpen)}>
            <span className="filter-pill__label">More</span>
            {filterMenuOpen && (
              <div className="overflow-menu" onClick={(e) => e.stopPropagation()}>
                {overflowFilters.map((filter, i) => (
                  <div key={i} className="overflow-menu__item">
                    {filter.icon && (
                      <img src={filter.icon} alt="" className="filter-pill__icon" />
                    )}
                    <span>{filter.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Results */}
      <MessageResult
        author="Geeta Joshi"
        channel="#project-srp-exploration"
        timestamp="Today at 11:30 AM"
        content="Hey, just checking in on this — are we still planning to move forward with this functionality? I was looking through the Search strategy and didn't see much about it, so wanted to make sure I'm not missing any context. Made me wonder if it's still part of the plan, got deprioritized, or is being discussed elsewhere. Wanted to double check before I assume anything"
        reactions={[{ emoji: '❤️', count: 3 }]}
        fullContent="Hey, just checking in on this — are we still planning to move forward with this functionality? I was looking through the Search strategy and didn't see much about it, so wanted to make sure I'm not missing any context. Made me wonder if it's still part of the plan, got deprioritized, or is being discussed elsewhere. Wanted to double check before I assume anything. I know things shift around a lot, so no worries either way — just want to make sure my understanding is up to date so I can plan accordingly."
      />

      <div className="all-results__divider" />

      <MessageResult
        author="Geeta Joshi"
        channel="#project-srp-exploration"
        timestamp="Today at 11:30 AM"
        content="I may just be missing context, but I wanted to ask directly: is this functionality still in scope? I didn't see much signal of it in the strategy materials."
        reactions={[{ emoji: '🙌', count: 3 }]}
        fullContent="I may just be missing some context, but I wanted to ask directly whether this functionality is still in scope. I was looking through the strategy materials expecting to see a bit more signal around it, but didn't really come across much, so I wasn't sure how to interpret that. It made me wonder whether it's still part of the plan, has become less of a priority, or is just being discussed somewhere else that I haven't seen. Wanted to check directly before I draw the wrong conclusions."
      />
    </div>
  )
}
