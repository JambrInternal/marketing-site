import Footer from "../../components/Footer";
import BookCallLink from "../../components/BookCallLink";

export const metadata = {
  title: "How it works | Agent Maple",
  description:
    "How the on-call agent handles routine requests, escalates when needed, and follows your rules."
};

export default function HowItWorksPage() {
  return (
    <>
      <main id="main">
        <section className="section hero reveal" data-reveal>
        <div className="wrap">
          <h1>Simple setup. Familiar use.</h1>
          <p className="lead">
            A dedicated number your crew can use for scheduling, documentation, and
            quick answers. Set it up once, then use it like a reliable coworker.
          </p>
        </div>
      </section>

      <section className="section reveal" data-reveal>
        <div className="wrap">
          <div className="grid cols-3">
            <div className="card">
              <h3>1. Get a phone number</h3>
              <p>We set up a dedicated number for your business.</p>
            </div>
            <div className="card">
              <h3>2. Save it as a contact</h3>
              <p>Add it to your phone so it is easy to reach.</p>
            </div>
            <div className="card">
              <h3>3. Call or text it like a coworker</h3>
              <p>
                It knows who you are and learns how you work over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt reveal" data-reveal>
        <div className="wrap">
          <div className="grid cols-2">
            <div className="card">
              <h3>Prevent on-site delays</h3>
              <p>Field questions get answered so crews can keep moving.</p>
            </div>
            <div className="card">
              <h3>Free up leadership time</h3>
              <p>Routine requests are handled without pulling leaders off the job.</p>
            </div>
            <div className="card">
              <h3>Stay aligned with other teams</h3>
              <p>Updates and answers stay consistent across crews.</p>
            </div>
            <div className="card">
              <h3>Keep generational knowledge</h3>
              <p>Key answers and decisions stay available when experienced staff leave.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section reveal" data-reveal>
        <div className="wrap cta-panel">
          <div>
            <h2>Book a 25-min call.</h2>
            <p className="lead">
              Tell us where your crew gets stuck on scheduling, documentation, or
              urgent questions. We&apos;ll see if there&apos;s a fit.
            </p>
          </div>
          <BookCallLink className="btn" href="/book" location="how_it_works_cta">
            Book a 25-min call
          </BookCallLink>
        </div>
      </section>
      </main>
      <Footer />
    </>
  );
}
