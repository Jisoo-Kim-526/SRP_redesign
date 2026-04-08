import { useState } from 'react'
import './App.css'
import TopBar from './components/TopBar'
import NavBar from './components/NavBar'
import TitleBar from './components/TitleBar'
import TopResultsSection from './components/TopResultsSection'
import AllResultsSection from './components/AllResultsSection'
import SlackbotPane from './components/SlackbotPane'

const pages = ['SRP mostly 1', 'SRP mostly 2']

export default function App() {
  const [splitViewOpen, setSplitViewOpen] = useState(false)
  const [activePage, setActivePage] = useState(0)

  return (
    <div className="page-wrapper">
      <nav className="page-nav">
        {pages.map((page, i) => (
          <button
            key={i}
            className={`page-nav__tab ${activePage === i ? 'page-nav__tab--active' : ''}`}
            onClick={() => setActivePage(i)}
          >
            {page}
          </button>
        ))}
      </nav>

      {activePage === 0 ? (
        <div className="slack-window">
          <TopBar />
          <div className="slack-body">
            <NavBar />
            <div className="main-content">
              <TitleBar />
              <div className="main-content__scroll">
                <TopResultsSection
                  splitViewOpen={splitViewOpen}
                  onOpenSplitView={() => setSplitViewOpen(true)}
                />
                <AllResultsSection />
              </div>
            </div>
            {splitViewOpen && (
              <SlackbotPane onClose={() => setSplitViewOpen(false)} />
            )}
          </div>
        </div>
      ) : (
        <div className="page-placeholder">
          <span className="page-placeholder__label">{pages[activePage]}</span>
        </div>
      )}
    </div>
  )
}
