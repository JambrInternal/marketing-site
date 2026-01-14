import "./globals.css";
import Header from "../components/Header";
import SiteEffects from "../components/SiteEffects";
import { withBasePath } from "../lib/basePath";

const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const posthogHost =
  process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com";
const posthogDebug = process.env.NEXT_PUBLIC_POSTHOG_DEBUG === "true";

const posthogSnippet = posthogKey
  ? `!function(t,e){var o,n,p,r;e.__SV||(window.posthog&&window.posthog.__loaded)||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init rs ls yi ns us ts ss capture Hi calculateEventProperties vs register register_once register_for_session unregister unregister_for_session gs getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags updateFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSurveysLoaded onSessionId getSurveys getActiveMatchingSurveys renderSurvey displaySurvey cancelPendingSurvey canRenderSurvey canRenderSurveyAsync identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException startExceptionAutocapture stopExceptionAutocapture loadToolbar get_property getSessionProperty fs ds createPersonProfile ps Qr opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing get_explicit_consent_status is_capturing clear_opt_in_out_capturing hs debug O cs getPageViewId captureTraceFeedback captureTraceMetric Kr".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);posthog.init(${JSON.stringify(
      posthogKey
    )}, {api_host: ${JSON.stringify(
      posthogHost
    )}, defaults: "2025-11-30", person_profiles: "identified_only"});`
  : "";

const posthogDebugSnippet = posthogDebug
  ? `(function(){var prefix="[PostHog]";var hasKey=${posthogKey ? "true" : "false"};var host=${JSON.stringify(
      posthogHost
    )};if(!hasKey){console.info(prefix,"disabled (missing key)");return;}console.info(prefix,"key present","host",host);var checks=0;var interval=setInterval(function(){checks+=1;var ph=window.posthog;if(checks===1){console.info(prefix,"stub present",!!ph);}if(ph&&ph.__loaded){console.info(prefix,"library loaded");clearInterval(interval);return;}if(checks>=20){console.warn(prefix,"not loaded after 10s");clearInterval(interval);}},500);})();`
  : "";

export const metadata = {
  title: "Agent Maple",
  description:
    "Internal support for trades and field teams. Answers crew calls and texts, handles scheduling and documentation requests, and escalates when needed."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="icon"
          type="image/svg+xml"
          href={withBasePath("/favicon/favicon.svg")}
          media="(prefers-color-scheme: light)"
        />
        <link
          rel="icon"
          type="image/svg+xml"
          href={withBasePath("/favicon/favicon-dark.svg")}
          media="(prefers-color-scheme: dark)"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={withBasePath("/favicon/apple-touch-icon.png")}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={withBasePath("/favicon/favicon-32x32.png")}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={withBasePath("/favicon/favicon-16x16.png")}
        />
        <link rel="icon" href={withBasePath("/favicon/favicon.ico")} />
        <link rel="manifest" href={withBasePath("/favicon/site.webmanifest")} />
        <link
          rel="mask-icon"
          href={withBasePath("/favicon/safari-pinned-tab.svg")}
          color="#25263b"
        />
        <meta name="msapplication-TileColor" content="#25263b" />
        <meta name="theme-color" content="#25263b" />
        {posthogSnippet && (
          <script
            dangerouslySetInnerHTML={{
              __html: posthogSnippet
            }}
          />
        )}
        {posthogDebugSnippet && (
          <script
            dangerouslySetInnerHTML={{
              __html: posthogDebugSnippet
            }}
          />
        )}
      </head>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        {children}
        <SiteEffects />
      </body>
    </html>
  );
}
