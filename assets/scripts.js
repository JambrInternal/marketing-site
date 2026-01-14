(() => {
  const header = document.querySelector(".site-header");

  const toggleHeader = () => {
    if (!header) return;
    if (window.scrollY > 12) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
  };

  toggleHeader();
  window.addEventListener("scroll", toggleHeader, { passive: true });

  const posthogKeyMeta = document.querySelector('meta[name="posthog-key"]');
  const posthogKey = posthogKeyMeta
    ? (posthogKeyMeta.getAttribute("content") || "").trim()
    : "";

  if (posthogKey) {
    const posthogHostMeta = document.querySelector(
      'meta[name="posthog-host"]'
    );
    const posthogHost = posthogHostMeta
      ? (posthogHostMeta.getAttribute("content") || "").trim() ||
        "https://app.posthog.com"
      : "https://app.posthog.com";

    ((documentRef, posthogRef) => {
      let methods;
      let index;
      let script;
      let firstScript;

      if (posthogRef.__SV) return;

      window.posthog = posthogRef;
      posthogRef._i = [];
      posthogRef.init = (key, options, name) => {
        const createMethod = (target, method) => {
          const parts = method.split(".");
          let resolvedTarget = target;
          let resolvedMethod = method;

          if (parts.length === 2) {
            resolvedTarget = target[parts[0]];
            resolvedMethod = parts[1];
          }

          resolvedTarget[resolvedMethod] = function () {
            resolvedTarget.push(
              [resolvedMethod].concat(Array.prototype.slice.call(arguments, 0))
            );
          };
        };

        script = documentRef.createElement("script");
        script.type = "text/javascript";
        script.async = true;
        script.src = `${options.api_host}/static/array.js`;
        firstScript = documentRef.getElementsByTagName("script")[0];
        firstScript.parentNode.insertBefore(script, firstScript);

        let instance = posthogRef;
        if (name !== undefined) {
          instance = posthogRef[name] = [];
        } else {
          name = "posthog";
        }

        instance.people = instance.people || [];
        instance.toString = (isStub) => {
          let identifier = "posthog";
          if (name !== "posthog") {
            identifier += `.${name}`;
          }
          if (!isStub) {
            identifier += " (stub)";
          }
          return identifier;
        };
        instance.people.toString = () => `${instance.toString(1)}.people (stub)`;

        methods =
          "capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset get_distinct_id".split(
            " "
          );
        for (index = 0; index < methods.length; index += 1) {
          createMethod(instance, methods[index]);
        }
        posthogRef._i.push([key, options, name]);
      };
      posthogRef.__SV = 1;
    })(document, window.posthog || []);

    window.posthog.init(posthogKey, { api_host: posthogHost });
  }

  const revealItems = document.querySelectorAll("[data-reveal]");
  if (!revealItems.length) return;

  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  revealItems.forEach((item) => observer.observe(item));
})();
