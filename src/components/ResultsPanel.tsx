import './ResultsPanel.css'
import FilterPills from './FilterPills'
import MessageResult from './MessageResult'
import FileResult from './FileResult'

const imgMessageIcon = "https://www.figma.com/api/mcp/asset/3c0647db-4a69-46ec-af29-3b7ea4ac739f";
const imgFilesIcon = "https://www.figma.com/api/mcp/asset/841733d7-0023-484d-af32-ca0255c547c4";

function CanvasIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="36" height="36" rx="9" fill="#0E9DD3"/>
      <path d="M10 13.5C10 12.12 11.12 11 12.5 11H23.5C24.88 11 26 12.12 26 13.5V22.5C26 23.88 24.88 25 23.5 25H12.5C11.12 25 10 23.88 10 22.5V13.5Z" stroke="white" strokeWidth="1.5" fill="none"/>
      <circle cx="15" cy="15.5" r="1.75" fill="white"/>
      <path d="M10 21.5L14 18.5L17.5 21L20.5 19L26 23" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function ListsIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="36" height="36" rx="9" fill="#ECB22E"/>
      <rect x="10" y="11" width="16" height="2.5" rx="1.25" fill="white"/>
      <rect x="10" y="16.75" width="16" height="2.5" rx="1.25" fill="white"/>
      <rect x="10" y="22.5" width="11" height="2.5" rx="1.25" fill="white"/>
    </svg>
  );
}

function DocIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="36" height="36" rx="9" fill="#4A154B"/>
      <path d="M13 11H20L25 16V25C25 25.55 24.55 26 24 26H13C12.45 26 12 25.55 12 25V12C12 11.45 12.45 11 13 11Z" stroke="white" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
      <path d="M20 11V16H25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="15" y1="20" x2="23" y2="20" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="15" y1="23" x2="20" y2="23" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function SlidesIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="36" height="36" rx="9" fill="#E8710A"/>
      <rect x="10" y="12" width="16" height="12" rx="1.5" stroke="white" strokeWidth="1.5" fill="none"/>
      <circle cx="18" cy="18" r="3" stroke="white" strokeWidth="1.5" fill="none"/>
      <line x1="18" y1="24" x2="18" y2="27" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="15" y1="27" x2="21" y2="27" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

interface ResultsPanelProps {
  selectedCategory: 'messages' | 'files'
}

export default function ResultsPanel({ selectedCategory }: ResultsPanelProps) {
  const isMessages = selectedCategory === 'messages'

  return (
    <div className="results-panel">
      <div className="results-panel__header">
        <img
          src={isMessages ? imgMessageIcon : imgFilesIcon}
          alt=""
          className="results-panel__header-icon"
        />
        <span className="results-panel__header-label">
          {isMessages ? 'All messages' : 'All files'}
        </span>
      </div>

      <FilterPills category={selectedCategory} />

      <div className="results-panel__list">
        {isMessages ? (
          <>
            <MessageResult
              author="Geeta Joshi"
              channel="#project-srp-exploration"
              timestamp="Today at 11:30 AM"
              content="Wanted to sanity check something: I was expecting to see this reflected in the Search strategy, but didn't really find it. Should I assume it's no longer a priority, or is it just being tracked somewhere else?"
              reactions={[{ emoji: '🍿', count: 3 }]}
              fullContent="Wanted to sanity check something: I was expecting to see this reflected in the Search strategy, but didn't really find it. Should I assume it's no longer a priority, or is it just being tracked somewhere else? I've been looking through the latest planning docs and couldn't find a clear mention of it. Would love to know if there's a different place I should be looking, or if this has been deprioritized."
            />
            <div className="results-panel__divider" />
            <MessageResult
              author="Geeta Joshi"
              channel="#project-srp-exploration"
              timestamp="Today at 11:30 AM"
              content="Wanted to sanity check something: I was expecting to see this reflected in the Search strategy, but didn't really find it. Should I assume it's no longer a priority, or is it just being tracked somewhere else?"
              reactions={[{ emoji: '🍿', count: 3 }]}
              fullContent="Wanted to sanity check something: I was expecting to see this reflected in the Search strategy, but didn't really find it. Should I assume it's no longer a priority, or is it just being tracked somewhere else? I've been looking through the latest planning docs and couldn't find a clear mention."
            />
            <div className="results-panel__divider" />
            <MessageResult
              author="Geeta Joshi"
              channel="#project-srp-exploration"
              timestamp="Today at 11:30 AM"
              content="Wanted to sanity check something: I was expecting to see this reflected in the Search strategy, but didn't really find it. Should I assume it's no longer a priority, or is it just being tracked somewhere else?"
              reactions={[{ emoji: '🍿', count: 3 }]}
              fullContent="Wanted to sanity check something: I was expecting to see this reflected in the Search strategy, but didn't really find it. Should I assume it's no longer a priority, or is it just being tracked somewhere else?"
            />
            <div className="results-panel__divider" />
            <MessageResult
              author="Geeta Joshi"
              channel="#project-srp-exploration"
              timestamp="Today at 11:30 AM"
              content="Wanted to sanity check something: I was expecting to see this reflected in the Search strategy, but didn't really find it. Should I assume it's no longer a priority, or is it just being tracked somewhere else?"
              reactions={[{ emoji: '🍿', count: 3 }]}
              fullContent="Wanted to sanity check something: I was expecting to see this reflected in the Search strategy, but didn't really find it. Should I assume it's no longer a priority, or is it just being tracked somewhere else?"
            />
          </>
        ) : (
          <>
            <FileResult
              title="Enterprise Search Strategy"
              author="Geeta Joshi"
              readTime="1 min read"
              timestamp="Today at 11:30 AM"
              iconNode={<CanvasIcon />}
              content="Search often works well for known-item retrieval inside Slack, but it becomes harder when users are trying to find information spread across multiple syst..."
              fullContent="Search often works well for known-item retrieval inside Slack, but it becomes harder when users are trying to find information spread across multiple systems. Users frequently know something exists but can't locate it efficiently — especially when the content lives outside Slack."
            />
            <div className="results-panel__divider" />
            <FileResult
              title="Search Roadmap Q2"
              author="Geeta Joshi"
              readTime="2 min read"
              timestamp="Yesterday at 3:15 PM"
              iconNode={<ListsIcon />}
              content="This document outlines the key initiatives and milestones for the Search team in Q2, including improvements to relevance ranking and cross-system indexing..."
              fullContent="This document outlines the key initiatives and milestones for the Search team in Q2, including improvements to relevance ranking, cross-system indexing, and surfacing results in context. Priority areas include agentic search, external integrations, and mobile search improvements."
            />
            <div className="results-panel__divider" />
            <FileResult
              title="Search UX Research Findings"
              author="Markee Smith"
              readTime="3 min read"
              timestamp="Apr 1 at 9:00 AM"
              iconNode={<DocIcon />}
              content="Key findings from the latest round of user research on search behavior, including patterns around known-item retrieval, exploratory search, and cross-tool..."
              fullContent="Key findings from the latest round of user research on search behavior, including patterns around known-item retrieval, exploratory search, and cross-tool navigation. Users expressed frustration with having to remember which tool contains which information."
            />
            <div className="results-panel__divider" />
            <FileResult
              title="Agentic Search Technical Spec"
              author="Geeta Joshi"
              readTime="5 min read"
              timestamp="Mar 28 at 2:00 PM"
              iconNode={<SlidesIcon />}
              content="Technical specification for the agentic search prototype, covering architecture decisions, the three-tier depth system, and integration points with existing..."
              fullContent="Technical specification for the agentic search prototype, covering architecture decisions, the three-tier depth system, and integration points with existing search infrastructure. This document serves as the source of truth for implementation details."
            />
            <div className="results-panel__divider" />
            <FileResult
              title="Search Relevance Metrics Dashboard"
              author="Hao Chen"
              readTime="2 min read"
              timestamp="Mar 25 at 10:45 AM"
              iconNode={<CanvasIcon />}
              content="Overview of key relevance metrics tracked across search surfaces, including MRR, nDCG, and click-through rates broken down by query type and surface..."
              fullContent="Overview of key relevance metrics tracked across search surfaces, including MRR, nDCG, and click-through rates broken down by query type and surface. This canvas serves as the team's primary reference for understanding search quality trends over time."
            />
            <div className="results-panel__divider" />
            <FileResult
              title="Cross-System Search RFC"
              author="Markee Smith"
              readTime="4 min read"
              timestamp="Mar 20 at 1:30 PM"
              iconNode={<DocIcon />}
              content="Request for comments on the proposed architecture for cross-system search, covering federated query execution, result merging strategies, and latency budg..."
              fullContent="Request for comments on the proposed architecture for cross-system search, covering federated query execution, result merging strategies, and latency budgets. This RFC proposes a phased rollout starting with Google Drive and GitHub integrations."
            />
            <div className="results-panel__divider" />
            <FileResult
              title="Search Team Sprint Planning"
              author="Geeta Joshi"
              readTime="1 min read"
              timestamp="Mar 18 at 9:00 AM"
              iconNode={<ListsIcon />}
              content="Sprint goals and task breakdown for the current cycle, including search ranking improvements, external connector work, and performance optimization targe..."
              fullContent="Sprint goals and task breakdown for the current cycle, including search ranking improvements, external connector work, and performance optimization targets. Key deliverables include the new relevance model and the Google Drive connector MVP."
            />
            <div className="results-panel__divider" />
            <FileResult
              title="Search Onboarding Guide"
              author="Hao Chen"
              readTime="3 min read"
              timestamp="Mar 15 at 4:00 PM"
              iconNode={<DocIcon />}
              content="Getting started guide for new team members covering the search stack, key repositories, local development setup, and pointers to architectural decision r..."
              fullContent="Getting started guide for new team members covering the search stack, key repositories, local development setup, and pointers to architectural decision records. Includes a walkthrough of the indexing pipeline and query processing layers."
            />
          </>
        )}
      </div>
    </div>
  )
}
