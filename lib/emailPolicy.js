export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const PERSONAL_EMAIL_DOMAINS = new Set([
  "gmail.com",
  "googlemail.com",
  "yahoo.com",
  "yahoo.co.uk",
  "yahoo.co.jp",
  "yahoo.ca",
  "yahoo.com.au",
  "outlook.com",
  "hotmail.com",
  "live.com",
  "msn.com",
  "icloud.com",
  "me.com",
  "mac.com",
  "aol.com",
  "proton.me",
  "protonmail.com",
  "gmx.com",
  "gmx.net",
  "yandex.com",
  "yandex.ru",
  "mail.ru",
  "qq.com",
  "163.com",
  "126.com",
  "sina.com",
  "fastmail.com"
]);

const PERSONAL_EMAIL_DOMAIN_PREFIXES = [
  "yahoo.",
  "hotmail.",
  "outlook.",
  "live.",
  "msn.",
  "gmx.",
  "yandex."
];

const getEmailDomain = (email) => {
  if (typeof email !== "string") {
    return "";
  }

  const atIndex = email.lastIndexOf("@");
  if (atIndex === -1) {
    return "";
  }

  return email.slice(atIndex + 1).toLowerCase();
};

const isPersonalDomain = (domain) => {
  if (!domain) {
    return false;
  }

  if (PERSONAL_EMAIL_DOMAINS.has(domain)) {
    return true;
  }

  return PERSONAL_EMAIL_DOMAIN_PREFIXES.some((prefix) =>
    domain.startsWith(prefix)
  );
};

export const isWorkEmail = (email) => {
  const domain = getEmailDomain(email);
  if (!domain) {
    return false;
  }

  return !isPersonalDomain(domain);
};
