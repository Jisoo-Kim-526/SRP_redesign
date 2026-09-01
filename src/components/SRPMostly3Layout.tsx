import { useState } from 'react'
import './SRPMostly3Layout.css'
import AIAnswerCard from './AIAnswerCard'
import MessageResult from './MessageResult'
import FileResult from './FileResult'
import ChannelResult from './ChannelResult'
import PersonResult from './PersonResult'

const imgMessageIcon = "https://www.figma.com/api/mcp/asset/3c0647db-4a69-46ec-af29-3b7ea4ac739f";
const imgFilesIcon = "https://www.figma.com/api/mcp/asset/841733d7-0023-484d-af32-ca0255c547c4";
const imgChannelIcon = "https://www.figma.com/api/mcp/asset/32dbb40d-1a7a-45b7-8916-eaceaa17dd1c";
const imgAvatarGeeta = "https://www.figma.com/api/mcp/asset/48a17787-21f3-44e3-9fa9-d82892d782c6";
const imgAvatarHao = "https://www.figma.com/api/mcp/asset/9e1a0d45-9e2d-4b61-9643-461477056da2";

function PeopleIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="7" cy="4.2" r="2.2" stroke="currentColor" strokeWidth="1.3" />
      <path d="M2 12c0-2.5 2.2-4 5-4s5 1.5 5 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  )
}

function AllIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="4" height="4" rx="1" stroke="currentColor" strokeWidth="1.3" />
      <rect x="8" y="2" width="4" height="4" rx="1" stroke="currentColor" strokeWidth="1.3" />
      <rect x="2" y="8" width="4" height="4" rx="1" stroke="currentColor" strokeWidth="1.3" />
      <rect x="8" y="8" width="4" height="4" rx="1" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  )
}

type Kind = 'message' | 'file' | 'channel' | 'person'
type Tab = 'all' | 'messages' | 'files' | 'people' | 'channels'

const tabs: { id: Tab; label: string; icon: React.ReactNode }[] = [
  { id: 'all', label: 'All', icon: <AllIcon /> },
  { id: 'messages', label: 'Messages', icon: <img src={imgMessageIcon} alt="" width={14} height={14} /> },
  { id: 'files', label: 'Files', icon: <img src={imgFilesIcon} alt="" width={14} height={14} /> },
  { id: 'people', label: 'People', icon: <PeopleIcon /> },
  { id: 'channels', label: 'Channels', icon: <img src={imgChannelIcon} alt="" width={14} height={14} /> },
]

const feed: { kind: Kind; key: string; node: React.ReactNode }[] = [
  {
    kind: 'message',
    key: 'm1',
    node: (
      <MessageResult
        author="Geeta Joshi"
        channel="#project-srp-exploration"
        timestamp="Today at 11:30 AM"
        content="Wanted to sanity check something: I was expecting to see this reflected in the Search strategy, but didn't really find it. Should I assume it's no longer a priority, or is it just being tracked somewhere else?"
        reactions={[{ emoji: '🍿', count: 3 }]}
        fullContent="Wanted to sanity check something: I was expecting to see this reflected in the Search strategy, but didn't really find it. Should I assume it's no longer a priority, or is it just being tracked somewhere else? I've been looking through the latest planning docs and couldn't find a clear mention of it."
      />
    ),
  },
  {
    kind: 'file',
    key: 'f1',
    node: (
      <FileResult
        title="Enterprise Search Strategy"
        author="Geeta Joshi"
        readTime="1 min read"
        timestamp="Today at 11:30 AM"
        content="Search often works well for known-item retrieval inside Slack, but it becomes harder when users are trying to find information spread across multiple syst..."
        fullContent="Search often works well for known-item retrieval inside Slack, but it becomes harder when users are trying to find information spread across multiple systems. Users frequently know something exists but can't locate it efficiently."
      />
    ),
  },
  {
    kind: 'channel',
    key: 'c1',
    node: (
      <ChannelResult
        name="#project-srp-exploration"
        memberCount={62}
        timestamp="Active today"
        content="Workspace for exploring redesigns of the Slack search results page — strategy docs, prototypes, and open questions live here."
      />
    ),
  },
  {
    kind: 'message',
    key: 'm2',
    node: (
      <MessageResult
        author="Geeta Joshi"
        channel="#project-srp-exploration"
        timestamp="Today at 11:30 AM"
        content="I may just be missing context, but I wanted to ask directly: is this functionality still in scope? I didn't see much signal of it in the strategy materials."
        reactions={[{ emoji: '🙌', count: 3 }]}
        fullContent="I may just be missing some context, but I wanted to ask directly whether this functionality is still in scope. I was looking through the strategy materials expecting to see a bit more signal around it, but didn't really come across much."
      />
    ),
  },
  {
    kind: 'person',
    key: 'p1',
    node: (
      <PersonResult
        name="Markee Smith"
        title="Search · Engineering"
        status="Documented the Agentic Search Prototype strategy on March 23rd."
        timestamp="Active now"
        avatar={imgAvatarGeeta}
      />
    ),
  },
  {
    kind: 'file',
    key: 'f2',
    node: (
      <FileResult
        title="Search Roadmap Q2"
        author="Geeta Joshi"
        readTime="2 min read"
        timestamp="Yesterday at 3:15 PM"
        content="This document outlines the key initiatives and milestones for the Search team in Q2, including improvements to relevance ranking and cross-system indexing..."
        fullContent="This document outlines the key initiatives and milestones for the Search team in Q2, including improvements to relevance ranking, cross-system indexing, and surfacing results in context."
      />
    ),
  },
  {
    kind: 'channel',
    key: 'c2',
    node: (
      <ChannelResult
        name="#search-team"
        memberCount={32}
        timestamp="Active yesterday"
        content="Home base for the Search team — sprint planning, relevance metrics, and roadmap discussion."
      />
    ),
  },
  {
    kind: 'person',
    key: 'p2',
    node: (
      <PersonResult
        name="Hao Chen"
        title="Search · Data Science"
        status="Owns the relevance metrics dashboard and quality benchmarks."
        timestamp="Active yesterday"
        avatar={imgAvatarHao}
      />
    ),
  },
  {
    kind: 'message',
    key: 'm3',
    node: (
      <MessageResult
        author="Geeta Joshi"
        channel="#project-srp-exploration"
        timestamp="Today at 11:30 AM"
        content="Hey, just checking in on this — are we still planning to move forward with this functionality? I was looking through the Search strategy and didn't see much about it."
        reactions={[{ emoji: '❤️', count: 3 }]}
        fullContent="Hey, just checking in on this — are we still planning to move forward with this functionality? I was looking through the Search strategy and didn't see much about it, so wanted to make sure I'm not missing any context."
      />
    ),
  },
  {
    kind: 'file',
    key: 'f3',
    node: (
      <FileResult
        title="Agentic Search Technical Spec"
        author="Geeta Joshi"
        readTime="5 min read"
        timestamp="Mar 28 at 2:00 PM"
        content="Technical specification for the agentic search prototype, covering architecture decisions, the three-tier depth system, and integration points with existing..."
        fullContent="Technical specification for the agentic search prototype, covering architecture decisions, the three-tier depth system, and integration points with existing search infrastructure."
      />
    ),
  },
]

const kindByTab: Record<Tab, Kind | null> = {
  all: null,
  messages: 'message',
  files: 'file',
  people: 'person',
  channels: 'channel',
}

export default function SRPMostly3Layout() {
  const [activeTab, setActiveTab] = useState<Tab>('all')

  const kind = kindByTab[activeTab]
  const visible = kind ? feed.filter((item) => item.kind === kind) : feed

  return (
    <div className="srp3-layout">
      <div className="srp3-card">
        <div className="srp3-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`srp3-tab ${activeTab === tab.id ? 'srp3-tab--active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className="srp3-tab__icon">{tab.icon}</span>
              <span className="srp3-tab__label">{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="srp3-scroll">
          {activeTab === 'all' && (
            <div className="srp3-ai-wrap">
              <AIAnswerCard />
            </div>
          )}

          <div className="srp3-feed">
            {visible.map((item, i) => (
              <div key={item.key}>
                {item.node}
                {i < visible.length - 1 && <div className="srp3-feed__divider" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
