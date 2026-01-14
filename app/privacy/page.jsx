import Footer from "../../components/Footer";

export const metadata = {
  title: "Privacy | Agent Maple",
  description: "Privacy policy for the Agent Maple website."
};

export default function PrivacyPage() {
  return (
    <>
      <main id="main">
        <section className="section hero reveal" data-reveal>
        <div className="wrap">
          <h1>Privacy policy</h1>
          <p className="lead">Here is what we collect and why.</p>
        </div>
      </section>

      <section className="section reveal" data-reveal>
        <div className="wrap grid cols-2">
          <div className="card">
            <h3>What we collect</h3>
            <p>Name, email, phone, and any details you submit through forms or emails.</p>
          </div>
          <div className="card">
            <h3>How we use it</h3>
            <p>To respond to your request, schedule a call, and provide service updates.</p>
          </div>
          <div className="card">
            <h3>Sharing</h3>
            <p>We do not sell your data. We only share it with tools needed to run the site.</p>
          </div>
          <div className="card">
            <h3>Retention</h3>
            <p>We keep data only as long as needed for service or legal reasons.</p>
          </div>
        </div>
      </section>

      <section className="section alt reveal" data-reveal>
        <div className="wrap">
          <h2>Contact</h2>
          <p className="lead">
            Questions or requests? Email{" "}
            <a href="mailto:jeremy@jambr.ca">jeremy@jambr.ca</a> or{" "}
            <a href="mailto:logan@jambr.ca">logan@jambr.ca</a>.
          </p>
        </div>
      </section>
      </main>
      <Footer />
    </>
  );
}
