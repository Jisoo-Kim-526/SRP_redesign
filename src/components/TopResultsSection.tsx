import './TopResultsSection.css'
import MessageResult from './MessageResult'
import FileResult from './FileResult'
import AIAnswerCard from './AIAnswerCard'

const imgUnion7 = "https://www.figma.com/api/mcp/asset/100dd764-4320-441e-b6ce-3ab15000ed71";

interface TopResultsSectionProps {
  splitViewOpen?: boolean
  onOpenSplitView?: () => void
}

export default function TopResultsSection({ splitViewOpen, onOpenSplitView }: TopResultsSectionProps) {
  return (
    <div className={`top-results${splitViewOpen ? ' top-results--stacked' : ''}`}>
      <div className="top-results__card">
        <div className="top-results__header">
          <img src={imgUnion7} alt="" className="top-results__header-icon" />
          <span className="top-results__header-label">Top results</span>
        </div>

        <div className="top-results__list">
          <MessageResult
            author="Geeta Joshi"
            channel="#project-srp-exploration"
            timestamp="Today at 11:30 AM"
            content="Wanted to sanity check something: I was expecting to see this reflected in the Search strategy, but didn't really find it. Should I assume it's no longer a priority, or is it just being tracked somewhere else?"
            reactions={[{ emoji: '🍿', count: 3 }]}
            fullContent="Wanted to sanity check something: I was expecting to see this reflected in the Search strategy, but didn't really find it. Should I assume it's no longer a priority, or is it just being tracked somewhere else? I've been looking through the latest planning docs and couldn't find a clear mention of it. Would love to know if there's a different place I should be looking, or if this has been deprioritized. Just want to make sure I'm aligned before I keep building on top of it."
          />

          <div className="top-results__divider" />

          <MessageResult
            author="Geeta Joshi"
            channel="#project-srp-exploration"
            timestamp="Today at 11:30 AM"
            content="I may just be missing context, but I wanted to ask directly: is this functionality still in scope? I didn't see much signal of it in the strategy materials."
            reactions={[{ emoji: '🙌', count: 3 }]}
            fullContent="I may just be missing some context, but I wanted to ask directly whether this functionality is still in scope. I was looking through the strategy materials expecting to see a bit more signal around it, but didn't really come across much, so I wasn't sure how to interpret that. It made me wonder whether it's still part of the plan, has become less of a priority, or is just being discussed somewhere else that I haven't seen. Wanted to check directly before I draw the wrong conclusions."
          />

          <div className="top-results__divider" />

          <FileResult
            title="Enterprise Search Strategy"
            author="Geeta Joshi"
            readTime="1 min read"
            timestamp="Today at 11:30 AM"
            content=",..Search often works well for known-item retrieval inside Slack, but it becomes harder when users are trying to find information spread across multiple syst..."
            fullContent="Search often works well for known-item retrieval inside Slack, but it becomes harder when users are trying to find information spread across multiple systems. Users frequently know something exists but can't locate it efficiently — especially when the content lives outside Slack in tools like Google Drive, Confluence, or GitHub. This strategy outlines how we can extend search to bridge these gaps, focusing on relevance ranking, cross-system indexing, and surfacing results in context."
          />
        </div>
      </div>

      <AIAnswerCard onClick={onOpenSplitView} />
    </div>
  )
}
