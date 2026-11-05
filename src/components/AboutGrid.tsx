import { ArrowUpRight, MapPin } from '@/components/slab'
import { profile } from '@/data/profile'

type Capability = { index: string; title: string; detail: string }

const CAPABILITIES: Capability[] = [
  {
    index: '01',
    title: 'Social media & content',
    detail: 'Content planning, scheduling, short-form editing, publishing, and day-to-day channel support.',
  },
  {
    index: '02',
    title: 'Virtual & executive assistance',
    detail: 'Administrative coordination, inbox and calendar support, research, and keeping tasks moving.',
  },
  {
    index: '03',
    title: 'Recruitment support',
    detail: 'Candidate sourcing, job ad support, interview coordination, and initial screening.',
  },
  {
    index: '04',
    title: 'Technical & operations support',
    detail: 'Experience supporting testing workflows, monitoring batch jobs, handling data, and solving operational snags.',
  },
]

export default function AboutGrid() {
  return (
    <section className="pgrid agrid" aria-labelledby="about-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Behind Duls</span>
        <h1 className="pgrid__title" id="about-title">
          A little resourceful. A lot hands-on.
        </h1>
        <p className="pgrid__lede">
          The person behind Duls brings together creative, administrative, recruitment, and technical support to help good work keep moving.
        </p>
      </header>

      <div className="home__glass agrid__glass">
        <div className="agrid__copy">
          <p className="agrid__lead">
            I like making work feel lighter.
            <span> Whether that means organizing the details, supporting the team, or getting the content out the door.</span>
          </p>

          <p className="agrid__note">
            My experience moves between <strong>social media and content</strong>, virtual assistance, recruitment, and technical operations. I've supported PR and marketing work, handled executive and administrative tasks, helped source candidates, and worked in a software environment supporting testing operations. Different settings, same instinct: notice what needs doing, get organized, and follow through.
          </p>

          <ul className="agrid__caps" role="list">
            {CAPABILITIES.map((c) => (
              <li key={c.index} className="agrid__cap">
                <span className="agrid__cap-marks" aria-hidden="true">
                  <span className="agrid__mark">{c.index}</span>
                </span>
                <span className="agrid__cap-title">
                  <strong>{c.title}</strong>
                  <small>{c.detail}</small>
                </span>
                <span className="agrid__cap-index" aria-hidden="true">{c.index}</span>
              </li>
            ))}
          </ul>

          <div className="agrid__bar">
            <span className="agrid__cell">
              <span className="agrid__cell-mark agrid__cell-mark--plain">D</span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">Duls</span>
                <span className="agrid__cell-meta">Independent creative support</span>
              </span>
            </span>

            <span className="agrid__cell">
              <span className="agrid__cell-mark">
                <MapPin size={16} weight="fill" aria-hidden="true" />
              </span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">{profile.location}</span>
                <span className="agrid__cell-meta">Remote support · GMT+8</span>
              </span>
            </span>

            <a className="agrid__cell agrid__cell--wide" href="/projects">
              <span className="agrid__cell-mark agrid__cell-mark--plain">↗</span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">Selected work</span>
                <span className="agrid__cell-meta">See examples and work samples</span>
              </span>
              <ArrowUpRight className="agrid__cell-go" size={15} weight="bold" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="agrid__portrait">
          <img
            src={profile.avatarSrc}
            alt="Duls brand mark"
            loading="eager"
            decoding="async"
            width={400}
            height={400}
          />
        </div>
      </div>
    </section>
  )
}
