import Image from "next/image";
import Footer from "../components/Footer";
import BookCallLink from "../components/BookCallLink";
import { withBasePath } from "../lib/basePath";

export const metadata = {
  title: "Agent Maple | Get answers to your urgent on-site questions",
  description:
    "Internal support for trades and field teams. Answers crew calls and texts, handles scheduling and documentation requests, and escalates when needed."
};

export default function HomePage() {
  return (
    <>
      <main id="main">
        <section className="section hero reveal" data-reveal>
        <div className="wrap hero-grid">
          <div>
            <h1>Never wait on-site for info&nbsp;again.</h1>
            <p className="lead">
              Agent Maple is an on-site agent for trades and field teams. It
              answers calls and texts from your crew, handles scheduling and
              documentation inquiries, and escalates to a human when needed.
            </p>
            <div className="hero-actions">
              <BookCallLink className="btn" href="/book" location="home_hero">
                Book a 25-min call
              </BookCallLink>
              <p className="muted small">Talk with the founders.</p>
            </div>
            <ul className="checklist">
              <li>Fewer missed requests and stalled jobs</li>
              <li>Less after-hours stress</li>
              <li>Fewer interruptions for the crew</li>
            </ul>
          </div>
          <div className="hero-card">
            <div className="hero-card-header">SMS and Email support</div>
            <div className="media-frame has-media">
              <Image
                className="media-fit"
                src={withBasePath("/media/agent-maple-demo.gif")}
                alt="Short demo of Agent Maple email follow-ups."
                priority
                width={600}
                height={400}
                unoptimized
              />
            </div>
            <p className="muted small">
              Agent Maple works in parallel over phone, SMS, and Email.
            </p>
          </div>
        </div>
      </section>

      <section className="section reveal" data-reveal>
        <div className="wrap">
          <h2>On-site teams need answers fast.</h2>
          <p className="lead">
            Crews need scheduling, documentation, and job details while they
            work. When crews are blocked on information, they need answers.
          </p>
          <ul className="list">
            <li>Field questions pull supervisors and office staff off their work.</li>
            <li>Scheduling and documentation updates are scattered.</li>
            <li>After-hours questions still land on the owner.</li>
            <li>No reliable place for quick, accurate answers.</li>
          </ul>
        </div>
      </section>

      <section className="section alt reveal" data-reveal>
        <div className="wrap">
          <h2>Support that knows who you are.</h2>
          <p className="lead">
            A simple agent that answers your team, handles routine requests, and
            escalates when needed.
          </p>
          <div className="grid cols-3">
            <div className="card">
              <h3>Answer crew calls and texts</h3>
              <p>24/7 responses so field teams are not left waiting.</p>
            </div>
            <div className="card">
              <h3>Handle scheduling and documentation</h3>
              <p>Project scheduling, documentation, and status checks are handled fast.</p>
            </div>
            <div className="card">
              <h3>Escalate when it matters</h3>
              <p>Calls go to the right person based on your rules.</p>
            </div>
          </div>
          <div className="media-block">
            <div>
              <h3>Connect to the right human.</h3>
              <p className="muted">
                Agent Maple connects you the right person when it doesn&apos;t know the
                answer.
              </p>
            </div>
            <div className="media-frame has-media">
              <Image
                className="media-fit"
                src={withBasePath("/media/agent_maple_demo_vacation_policy_fixed2.gif")}
                alt="Agent Maple escalates calls to the right person when it doesn't know the answer."
                width={600}
                height={400}
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section reveal" data-reveal>
        <div className="wrap">
          <h2>Built for real operators.</h2>
          <div className="grid cols-2">
            <div className="card">
              <h3>Knows who you are</h3>
              <p>Knows who you are and learns how you work over time.</p>
            </div>
            <div className="card">
              <h3>Supports your staff</h3>
              <p>Handles the busy work so your team stays focused.</p>
            </div>
            <div className="card">
              <h3>Made for trades and field teams</h3>
              <p>Plain language, real scenarios, and practical coverage.</p>
            </div>
            <div className="card">
              <h3>Clear, predictable handoff</h3>
              <p>Escalations go to the right person at the right time.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt reveal" data-reveal>
        <div className="wrap">
          <h2>See how it works for your business.</h2>
          <p className="lead">
            No inflated claims. We will show you how it works with your own business
            context. We&apos;ll provide value before you pay anything.
          </p>
          <ul className="list">
            <li>See how it handles real crew requests.</li>
            <li>Review how scheduling and documentation would be used.</li>
            <li>Decide if it fits before anything changes.</li>
          </ul>
        </div>
      </section>

      <section className="section reveal" data-reveal>
        <div className="wrap cta-panel">
          <div>
            <h2>Book a 25-min call.</h2>
            <p className="lead">
              We love to chat. Ask any questions about the agent, and tell us where
              your crew gets stuck.
            </p>
          </div>
          <BookCallLink className="btn" href="/book" location="home_cta">
            Book a 25-min call
          </BookCallLink>
        </div>
      </section>
      </main>
      <Footer variant="home" />
    </>
  );
}
