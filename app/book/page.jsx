import Footer from "../../components/Footer";
<<<<<<< HEAD
import BookingForm from "../../components/BookingForm";
=======
import BookCallLink from "../../components/BookCallLink";
>>>>>>> origin/main

export const metadata = {
  title: "Book a call | Agent Maple",
  description:
    "Book a 25-min call to review your biggest operational problems and see if the agent fits."
};

export default function BookPage() {
  return (
    <>
      <main id="main">
        <section className="section hero reveal" data-reveal>
        <div className="wrap">
          <h1>Book a 25-min call.</h1>
          <p className="lead">
            Tell us where your crew gets stuck on scheduling, documentation, or
            urgent questions. We&apos;ll see if there&apos;s a fit. Talk to the founders.
          </p>
        </div>
      </section>

      <section className="section reveal" data-reveal>
        <div className="wrap grid cols-2">
          <div className="card">
            <h3>What we cover</h3>
            <ul className="list">
              <li>Your biggest operational pain points.</li>
              <li>Scheduling and documentation needs.</li>
              <li>When calls should be escalated.</li>
            </ul>
          </div>
          <div className="card" id="schedule">
            <h3>Scheduling</h3>
<<<<<<< HEAD
            <p>Enter a work email, then book a time.</p>
            <BookingForm />
=======
            <p>Use the link below to book a time.</p>
            <BookCallLink
              className="btn"
              href="https://calendar.app.google/48BjSXGNeWYYGK839"
              location="book_page_schedule"
            >
              Book a 25-min call
            </BookCallLink>
>>>>>>> origin/main
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </>
  );
}
