import './SlackbotPane.css'

const imgSlackbotAvatar = "https://www.figma.com/api/mcp/asset/2a23c938-d363-403c-9637-65cf6a4db833";
const imgGeetaAvatar = "https://www.figma.com/api/mcp/asset/e2c40ad1-140a-42de-b5ae-a60f84669bd2";

function ComposeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.85 2.65a2.2 2.2 0 0 1 3.12 0l-.01.01a2.2 2.2 0 0 1 0 3.12l-8.49 8.49-4.12 1-0.01.01a.5.5 0 0 1-.59-.59l1-4.12 8.49-8.49.01.01ZM3.5 4.5A1.5 1.5 0 0 0 2 6v10.5A1.5 1.5 0 0 0 3.5 18H14a1.5 1.5 0 0 0 1.5-1.5V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function MoreIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="4" r="1.5" fill="currentColor"/>
      <circle cx="10" cy="10" r="1.5" fill="currentColor"/>
      <circle cx="10" cy="16" r="1.5" fill="currentColor"/>
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.5 5.5L14.5 14.5M14.5 5.5L5.5 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.5 7a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM10.6 10.6L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

function HistoryIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 3.5V8L10.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M2.5 4.5V2M2.5 4.5H5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function PlusIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 2V14M2 8H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

function SendIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 9L16 2L9 16V9H2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function CaretDownIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.5 7.5L10 12.5L14.5 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

interface SlackbotPaneProps {
  onClose: () => void
}

export default function SlackbotPane({ onClose }: SlackbotPaneProps) {
  return (
    <div className="slackbot-pane">
      {/* Header */}
      <div className="slackbot-pane__header">
        <div className="slackbot-pane__titlebar">
          <div className="slackbot-pane__titlebar-left">
            <div className="slackbot-pane__name">
              <div className="slackbot-pane__avatar-wrap">
                <img src={imgSlackbotAvatar} alt="" className="slackbot-pane__avatar" />
              </div>
              <span className="slackbot-pane__title">Slackbot</span>
            </div>
          </div>
          <div className="slackbot-pane__actions">
            <div className="slackbot-pane__action-btn">
              <ComposeIcon />
            </div>
            <div className="slackbot-pane__action-btn" style={{ border: 'none' }}>
              <MoreIcon />
            </div>
          </div>
          <button className="slackbot-pane__close-btn" onClick={onClose}>
            <CloseIcon />
          </button>
        </div>

        {/* Tabs */}
        <div className="slackbot-pane__tabs">
          <div className="slackbot-pane__tab slackbot-pane__tab--active">
            <div className="slackbot-pane__tab-icon">
              <SearchIcon />
            </div>
            <span className="slackbot-pane__tab-label">Messages</span>
          </div>
          <div className="slackbot-pane__tab">
            <div className="slackbot-pane__tab-icon">
              <HistoryIcon />
            </div>
            <span className="slackbot-pane__tab-label slackbot-pane__tab-label--inactive">History</span>
          </div>
          <div className="slackbot-pane__tab-add">
            <div className="slackbot-pane__tab-add-btn">
              <PlusIcon />
            </div>
          </div>
        </div>
      </div>

      {/* Conversation */}
      <div className="slackbot-pane__conversation">
        {/* Geeta's message */}
        <div className="slackbot-pane__message">
          <img src={imgGeetaAvatar} alt="" className="slackbot-pane__msg-avatar" />
          <div className="slackbot-pane__msg-content">
            <div className="slackbot-pane__msg-header">
              <span className="slackbot-pane__msg-sender">Geeta Joshi</span>
              <span className="slackbot-pane__msg-time">12:32 PM</span>
            </div>
            <div className="slackbot-pane__msg-text">
              <p>Can you find results for &ldquo;Search strategy&rdquo;?</p>
            </div>
          </div>
        </div>

        {/* Reply divider */}
        <div className="slackbot-pane__reply-divider">
          <span className="slackbot-pane__reply-count">1 reply</span>
          <div className="slackbot-pane__reply-line" />
        </div>

        {/* Slackbot reply */}
        <div className="slackbot-pane__reply">
          <img src={imgSlackbotAvatar} alt="" className="slackbot-pane__msg-avatar" />
          <div className="slackbot-pane__msg-content">
            <div className="slackbot-pane__msg-header">
              <span className="slackbot-pane__msg-sender">Slackbot</span>
              <span className="slackbot-pane__msg-time">12:32 PM</span>
            </div>
            <div className="slackbot-pane__msg-text">
              <p>
                Based on recent messages in your workspace, the latest search strategy is the Agentic Search Prototype, documented by{' '}
                <a href="#" className="slackbot-pane__mention">@Markee Smith</a>{' '}
                on March 23rd.
              </p>
              <p>Here's the key approach:</p>
              <p>
                <strong>Architecture</strong><br />
                The new strategy uses a search subagent that handles multi-step retrieval and synthesis internally, decoupled from Slackbot's orchestration layer. This solves three main problems:
              </p>
              <p>Context window inflation from raw search results</p>
              <p>Lack of modularity in search logic</p>
              <p>Limited observability into search performance metrics</p>
              <p>
                Three-Tier Depth System<br />
                The strategy classifies searches into three depths:
              </p>
              <p>QUICK - Single-query plan with direct Solr search (no LLM call)</p>
              <p>STANDARD - Multi-query plan generated by Haiku for broader coverage</p>
              <p>DEEP - Advanced multi-step retrieval for complex research queries</p>
              <p>Key Benefits</p>
              <p>Trustworthy citations validated against actual evidence</p>
              <p>Better observability with phase-level latency tracking</p>
              <p>Modular design that doesn't affect other Slackbot concerns</p>
              <p>
                There's also recent work on a hybrid search strategy for huddles that combines targeted keyword search with broad semantic search for file discovery.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Message input */}
      <div className="slackbot-pane__input-area">
        <div className="slackbot-pane__input">
          <div className="slackbot-pane__input-text">
            <span className="slackbot-pane__input-placeholder">Message Slackbot</span>
          </div>
          <div className="slackbot-pane__input-bar">
            <div className="slackbot-pane__input-attach">
              <div className="slackbot-pane__attach-btn">
                <div className="slackbot-pane__attach-circle" />
                <div className="slackbot-pane__attach-icon">
                  <PlusIcon />
                </div>
              </div>
            </div>
            <div className="slackbot-pane__input-right">
              <div className="slackbot-pane__send-btn">
                <div className="slackbot-pane__send-icon-wrap">
                  <div className="slackbot-pane__send-icon">
                    <SendIcon />
                  </div>
                </div>
                <div className="slackbot-pane__send-divider-wrap">
                  <div className="slackbot-pane__send-divider" />
                </div>
                <div className="slackbot-pane__send-caret">
                  <CaretDownIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
