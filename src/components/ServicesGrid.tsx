import type { CSSProperties } from 'react'
import { MagnetStraight, Timer, Trophy, CheckCircle } from '@/components/slab'
import type { Icon } from '@/components/slab'

type Stage = {
  index: string
  label: string
  body: string
  Icon: Icon
  chips: string[]
}

const STAGES: Stage[] = [
  {
    index: '01',
    label: 'Get the picture',
    body: 'We talk through the priorities, the moving parts, and what would make your week easier.',
    Icon: MagnetStraight,
    chips: ['Goals', 'Context', 'Priorities'],
  },
  {
    index: '02',
    label: 'Get things moving',
    body: 'I organize the details, take on the agreed tasks, and keep communication clear.',
    Icon: Timer,
    chips: ['Plan', 'Action', 'Updates'],
  },
  {
    index: '03',
    label: 'Keep it moving',
    body: 'You get dependable follow-through, useful updates, and room to focus on the bigger picture.',
    Icon: Trophy,
    chips: ['Follow-through', 'Clarity', 'Momentum'],
  },
]

type Service = {
  index: string
  title: string
  description: string
  chip: string
  bullets: string[]
}

const SERVICES: Service[] = [
  {
    index: '01',
    title: 'Social Media Management',
    description: 'Thoughtful day-to-day support to keep your social channels active, organized, and on-brand.',
    chip: 'Social presence',
    bullets: ['Content scheduling and publishing', 'Channel monitoring and engagement support', 'Content calendars and coordination'],
  },
  {
    index: '02',
    title: 'Content Creation & Editing',
    description: 'Useful, audience-aware content shaped into clear posts and short-form assets.',
    chip: 'Creative support',
    bullets: ['Canva graphics and carousels', 'Short-form video and Reels editing', 'Captions, copy, and content research'],
  },
  {
    index: '03',
    title: 'Virtual Assistance',
    description: 'Flexible behind-the-scenes help with the recurring tasks that compete for your attention.',
    chip: 'Everyday support',
    bullets: ['Online research and information gathering', 'Task coordination and documentation', 'General day-to-day business support'],
  },
  {
    index: '04',
    title: 'Executive Assistance',
    description: 'Organized, discreet support that helps leaders protect their time and stay on top of priorities.',
    chip: 'Leadership support',
    bullets: ['Calendar and schedule coordination', 'Meeting preparation and follow-ups', 'Inbox and priority support'],
  },
  {
    index: '05',
    title: 'Administrative & Operations Support',
    description: 'Reliable help keeping information, processes, and small operational details in order.',
    chip: 'Operations',
    bullets: ['Data entry and file organization', 'Process and task tracking', 'Administrative coordination'],
  },
  {
    index: '06',
    title: 'Recruitment Support',
    description: 'Practical assistance through the early stages of finding and coordinating candidates.',
    chip: 'People support',
    bullets: ['Candidate sourcing and job ad support', 'Initial screening and background checks', 'Interview coordination and follow-ups'],
  },
  {
    index: '07',
    title: 'Email & Calendar Management',
    description: 'A calmer, clearer way to keep communication and commitments from slipping through the cracks.',
    chip: 'Time & communication',
    bullets: ['Inbox sorting and organization', 'Calendar updates and appointment coordination', 'Reminders and follow-up tracking'],
  },
]

function Marks({ label }: { label: string }) {
  return (
    <span className="bento__logos" aria-hidden="true">
      <span className="bento__logo">{label.slice(0, 1)}</span>
    </span>
  )
}

export default function ServicesGrid() {
  return (
    <section className="pgrid sgrid" aria-labelledby="services-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">What Duls can take off your plate</span>
        <h1 className="pgrid__title" id="services-title">
          Your unsolicited solution.
        </h1>
        <p className="pgrid__lede">
          Creative, administrative, and operational support for busy people and growing teams. Bring the to-do list; let's make it manageable.
        </p>
      </header>

      <div className="home__glass sgrid__glass">
        <div className="sgrid__method" aria-labelledby="method-title">
          <div className="sgrid__method-copy">
            <span className="sgrid__method-eyebrow">How we work</span>
            <h2 className="sgrid__method-title" id="method-title">
              Clear the clutter.
              <br />
              <span>Keep the good work going.</span>
            </h2>
            <p className="sgrid__method-sub">
              No complicated process. Just clear expectations, thoughtful support, and dependable follow-through.
            </p>
          </div>

          <ol className="sgrid__stages" role="list">
            {STAGES.map((s, i) => {
              const StageIcon = s.Icon
              return (
                <li key={s.index} className="sgrid__stage" style={{ '--i': i } as CSSProperties}>
                  <span className="sgrid__stage-ghost" aria-hidden="true">{s.index}</span>
                  <span className="sgrid__stage-icon" aria-hidden="true">
                    <StageIcon size={22} weight="duotone" />
                  </span>
                  <h3 className="sgrid__stage-label">{s.label}.</h3>
                  <p className="sgrid__stage-body">{s.body}</p>
                  <ul className="sgrid__stage-chips" role="list" aria-label={`${s.label} details`}>
                    {s.chips.map((c) => (
                      <li key={c} className="sgrid__stage-chip">{c}</li>
                    ))}
                  </ul>
                </li>
              )
            })}
          </ol>
        </div>

        <div className="sgrid__offers">
          <div className="sgrid__offers-head">
            <h2 className="sgrid__offers-title">A little help where it matters.</h2>
            <p className="sgrid__offers-sub">Pick one area or mix a few. We can shape the support around your priorities.</p>
          </div>
          <ul className="bento sgrid__services" role="list">
            {SERVICES.map((s) => (
              <li key={s.title} className="bento__card sgrid__service">
                <span className="bento__head">
                  <span className="sgrid__service-top">
                    <Marks label={s.title} />
                    <span className="sgrid__service-index" aria-hidden="true">{s.index} / 07</span>
                  </span>
                  <span className="bento__title">{s.title}</span>
                  <span className="bento__desc">{s.description}</span>
                </span>
                <span className="sgrid__chip" aria-hidden="true">{s.chip}</span>
                <ul className="sgrid__bullets" role="list">
                  {s.bullets.map((b) => (
                    <li key={b} className="sgrid__bullet">
                      <CheckCircle size={15} weight="duotone" aria-hidden="true" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
