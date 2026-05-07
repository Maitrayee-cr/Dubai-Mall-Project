const progressBar = document.querySelector("#progressBar");
const navLinks = [...document.querySelectorAll(".nav a")];
const railLinks = [...document.querySelectorAll(".section-rail a")];
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);
const menuButton = document.querySelector("#menuButton");
const reelDialog = document.querySelector("#reelDialog");
const closeReel = document.querySelector("#closeReel");
const inlinePlay = document.querySelector("#inlinePlay");
const inlineReelVideo = document.querySelector("#inlineReelVideo");
const modalReelVideo = document.querySelector("#modalReelVideo");
const platformDisplay = document.querySelector("#platformDisplay");
const platformButtons = [...document.querySelectorAll("[data-platform]")];
const modulePanel = document.querySelector("#modulePanel");
const moduleButtons = [...document.querySelectorAll("[data-module]")];
const audienceStage = document.querySelector("#audienceStage");
const audienceButtons = [...document.querySelectorAll("[data-audience]")];
const zoneButtons = [...document.querySelectorAll("[data-zone]")];
const timeline = document.querySelector("#timeline");
const deckSections = [...document.querySelectorAll("main > .panel")];
const prevSection = document.querySelector("#prevSection");
const nextSection = document.querySelector("#nextSection");
const daysInput = document.querySelector("#daysInput");
const visitorsInput = document.querySelector("#visitorsInput");
const rateInput = document.querySelector("#rateInput");
const daysOutput = document.querySelector("#daysOutput");
const visitorsOutput = document.querySelector("#visitorsOutput");
const rateOutput = document.querySelector("#rateOutput");
const actionsOutput = document.querySelector("#actionsOutput");
const brandNameInput = document.querySelector("#brandNameInput");
const brandMoodInput = document.querySelector("#brandMoodInput");
const brandMarquee = document.querySelector("#brandMarquee");
const revealItems = [...document.querySelectorAll(".reveal")];
const countItems = [...document.querySelectorAll("[data-count]")];
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const platformContent = {
  events: {
    kicker: "Event platform",
    title: "Global footfall becomes a programmable launch platform.",
    body:
      "Dubai Mall can package Fashion Avenue, aquarium frontage, fountain-adjacent moments, retail routes, and social-first activations into one measurable campaign.",
  },
  sponsorship: {
    kicker: "Brand partnerships",
    title: "Own the journey before, during, and after the visit.",
    body:
      "Partners can connect media, physical placement, digital wayfinding, guest programming, and category exclusivity across a high-intent audience.",
  },
  entertainment: {
    kicker: "Destination anchors",
    title: "Entertainment changes the sales conversation from traffic to gravity.",
    body:
      "Dubai Aquarium, Dubai Ice Rink, Dubai Fountain access, cinema, dining, and family attractions create repeatable reasons for guests to stay longer.",
  },
};

const moduleContent = {
  leasing: {
    kicker: "Leasing module",
    title: "Segment the pitch by category.",
    body:
      "Luxury, mass retail, food, entertainment, and pop-up prospects each get a tailored case: audience, adjacency, sample formats, launch timeline, and next action.",
    bullets: ["Category-specific positioning", "Tenant adjacency snapshots", "Inquiry CTA for leasing team"],
  },
  sponsors: {
    kicker: "Sponsorship module",
    title: "Translate visitors into campaign value.",
    body:
      "Give brand partners audience data, activation zones, previous moment types, media extensions, and sample packages that can be sold as tiers.",
    bullets: ["Activation zone menu", "Audience and dwell-time story", "Partnership package CTA"],
  },
  events: {
    kicker: "Events module",
    title: "Make booking feel concrete.",
    body:
      "Show courts, theaters, expo-style areas, security flow, production support, past formats, and the operational path from idea to booked date.",
    bullets: ["Venue capability matrix", "Past event highlights", "Booking request CTA"],
  },
};

const audienceContent = {
  tenant: {
    kicker: "Retail tenant path",
    title: "Use Dubai Mall as a flagship, launch stage, and tourism magnet.",
    body:
      "A tenant pitch should lead with audience scale, adjacency, dwell time, category fit, and a launch plan that makes opening day feel like an event.",
    details: [
      ["Best for", "Flagship, luxury, pop-up, F&B"],
      ["Proof needed", "Traffic, audience mix, adjacencies"],
      ["Next action", "Schedule leasing walkthrough"],
    ],
  },
  sponsor: {
    kicker: "Sponsor path",
    title: "Own a destination moment instead of buying another ad slot.",
    body:
      "A sponsor pitch should connect physical visibility with measurable participation: sampling, creator moments, digital extensions, lead capture, and category exclusivity.",
    details: [
      ["Best for", "CPG, auto, telecom, beauty, finance"],
      ["Proof needed", "Reach, impressions, activation zones"],
      ["Next action", "Build sponsorship package"],
    ],
  },
  producer: {
    kicker: "Producer path",
    title: "Bring the audience, venue, and surrounding itinerary together.",
    body:
      "An event pitch should show how production, guest arrival, food, retail, talent, and social capture can happen inside one controlled destination.",
    details: [
      ["Best for", "Launches, concerts, conventions"],
      ["Proof needed", "Venue flow, safety, production support"],
      ["Next action", "Hold event date"],
    ],
  },
};

const zoneContent = {
  launch: [
    ["10:00", "Fashion Avenue arrival moment", "VIP welcome, creator check-in, and first social capture."],
    ["13:00", "Center court product reveal", "Live demo, sampling, and guided guest flow into the luxury retail zone."],
    ["18:00", "Evening performance hook", "Music, talent appearance, or influencer finale designed for replay."],
  ],
  family: [
    ["09:30", "Aquarium arrival preview", "Family-first partner check-in, ticket bundle, and first discovery moment."],
    ["12:30", "Dining passport route", "Timed offers that move families between food, retail, and entertainment."],
    ["16:00", "Dubai Aquarium closing chapter", "Ticketed aquarium add-on with sponsor photo capture and giveaway."],
  ],
  luxury: [
    ["11:00", "Private styling appointments", "Invite-only guest list, concierge route, and premium retail adjacency."],
    ["14:00", "Hospitality suite", "Partner lounge for clienteling, product education, and high-value meetings."],
    ["19:00", "After-hours preview", "Controlled access moment designed for press, VIPs, and creator content."],
  ],
  expo: [
    ["08:00", "Production load-in", "Vendor arrival, signage checks, and operational briefing."],
    ["11:00", "Trade-show floor opens", "Expo booths, live demos, lead capture, and scheduled partner talks."],
    ["17:30", "Public-facing finale", "Main-stage announcement with retail and dining routes around the event."],
  ],
};

function updateProgress() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
  progressBar.style.width = `${Math.min(progress * 100, 100)}%`;
}

function updateActiveNav() {
  const midpoint = window.scrollY + window.innerHeight * 0.42;
  const trackedSections = deckSections.length ? deckSections : sections;
  let current = trackedSections[0]?.id;

  trackedSections.forEach((section) => {
    if (section.offsetTop <= midpoint) current = section.id;
  });

  navLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
  });

  railLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
  });
}

function renderPlatform(type) {
  const content = platformContent[type];
  platformDisplay.innerHTML = `
    <p class="display-kicker">${content.kicker}</p>
    <h3>${content.title}</h3>
    <p>${content.body}</p>
  `;
}

function renderModule(type) {
  const content = moduleContent[type];
  modulePanel.innerHTML = `
    <div>
      <p class="eyebrow">${content.kicker}</p>
      <h3>${content.title}</h3>
      <p>${content.body}</p>
    </div>
    <ul>
      ${content.bullets.map((item) => `<li>${item}</li>`).join("")}
    </ul>
  `;
}

function renderAudience(type) {
  const content = audienceContent[type];
  audienceStage.innerHTML = `
    <p class="eyebrow">${content.kicker}</p>
    <h3>${content.title}</h3>
    <p>${content.body}</p>
    <dl>
      ${content.details
        .map(([label, value]) => `<div><dt>${label}</dt><dd>${value}</dd></div>`)
        .join("")}
    </dl>
  `;
}

function renderTimeline(type) {
  timeline.innerHTML = zoneContent[type]
    .map(
      ([time, title, body]) => `
        <article>
          <span>${time}</span>
          <strong>${title}</strong>
          <p>${body}</p>
        </article>
      `,
    )
    .join("");
}

function updateCalculator() {
  const days = Number(daysInput.value);
  const visitors = Number(visitorsInput.value);
  const rate = Number(rateInput.value);
  const actions = Math.round(days * visitors * (rate / 100));

  daysOutput.value = `${days} ${days === 1 ? "day" : "days"}`;
  visitorsOutput.value = `${visitors.toLocaleString()} visitors`;
  rateOutput.value = `${rate}%`;
  actionsOutput.textContent = actions.toLocaleString();
}

function getCurrentDeckIndex() {
  const midpoint = window.scrollY + window.innerHeight * 0.46;
  let currentIndex = 0;

  deckSections.forEach((section, index) => {
    if (section.offsetTop <= midpoint) currentIndex = index;
  });

  return currentIndex;
}

function goToDeckSection(direction) {
  const nextIndex = Math.max(0, Math.min(deckSections.length - 1, getCurrentDeckIndex() + direction));
  smoothScrollTo(deckSections[nextIndex]);
}

function smoothScrollTo(target) {
  if (prefersReducedMotion) {
    target.scrollIntoView({ block: "start" });
    return;
  }

  const start = window.scrollY;
  const end = target.getBoundingClientRect().top + window.scrollY;
  const distance = end - start;
  const duration = Math.min(1200, Math.max(520, Math.abs(distance) * 0.42));
  const started = performance.now();

  function frame(now) {
    const progress = Math.min((now - started) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 4);
    window.scrollTo(0, start + distance * eased);
    if (progress < 1) requestAnimationFrame(frame);
  }

  requestAnimationFrame(frame);
}

function animateCount(element) {
  if (element.dataset.counted) return;
  element.dataset.counted = "true";

  const target = Number(element.dataset.count);
  const suffix = element.dataset.suffix || "";
  const duration = 1200;
  const start = performance.now();

  function frame(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = Math.round(target * eased);
    element.textContent = `${value.toLocaleString()}${suffix}`;
    if (progress < 1) requestAnimationFrame(frame);
  }

  requestAnimationFrame(frame);
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      if (entry.target.matches("[data-count]")) animateCount(entry.target);
    });
  },
  { threshold: 0.18 },
);

function updateBrandLab() {
  const name = brandNameInput.value.trim() || "YOUR BRAND";
  const mood = brandMoodInput.value;
  const colors = {
    luxury: "#b88a44",
    family: "#006a6a",
    night: "#7a4cff",
  };

  brandMarquee.textContent = name;
  document.documentElement.style.setProperty("--brand-accent", colors[mood]);
}

function updateParallax() {
  const ratio = Math.min(window.scrollY / Math.max(window.innerHeight, 1), 1);
  document.documentElement.style.setProperty("--scroll-ratio", ratio.toFixed(3));
  document.documentElement.style.setProperty("--hero-scale", (1.02 + ratio * 0.035).toFixed(3));
}

window.addEventListener("scroll", () => {
  updateProgress();
  updateActiveNav();
  updateParallax();
});

window.addEventListener("resize", updateProgress);

menuButton.addEventListener("click", () => {
  document.body.classList.toggle("menu-open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    event.preventDefault();
    document.body.classList.remove("menu-open");
    smoothScrollTo(target);
  });
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  if (navLinks.includes(link)) return;
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    event.preventDefault();
    smoothScrollTo(target);
  });
});

window.addEventListener("pointermove", (event) => {
  if (prefersReducedMotion) return;
  const x = (event.clientX / window.innerWidth - 0.5) * 28;
  const y = (event.clientY / window.innerHeight - 0.5) * 28;
  document.documentElement.style.setProperty("--mouse-x", `${x}px`);
  document.documentElement.style.setProperty("--mouse-y", `${y}px`);
});

document.querySelector("[data-open-reel]").addEventListener("click", () => {
  if (typeof reelDialog.showModal === "function") {
    reelDialog.showModal();
    modalReelVideo.currentTime = 0;
    modalReelVideo.play().catch(() => {});
  }
});

inlinePlay.addEventListener("click", () => {
  inlinePlay.classList.add("is-hidden");
  inlineReelVideo.play().catch(() => {
    inlinePlay.classList.remove("is-hidden");
  });
});

closeReel.addEventListener("click", () => {
  reelDialog.close();
  modalReelVideo.pause();
  modalReelVideo.currentTime = 0;
});

reelDialog.addEventListener("close", () => {
  modalReelVideo.pause();
  modalReelVideo.currentTime = 0;
});

platformButtons.forEach((button) => {
  button.addEventListener("click", () => {
    platformButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderPlatform(button.dataset.platform);
  });
});

moduleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    moduleButtons.forEach((item) => {
      item.classList.remove("active");
      item.setAttribute("aria-selected", "false");
    });
    button.classList.add("active");
    button.setAttribute("aria-selected", "true");
    renderModule(button.dataset.module);
  });
});

audienceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    audienceButtons.forEach((item) => {
      item.classList.remove("active");
      item.setAttribute("aria-selected", "false");
    });
    button.classList.add("active");
    button.setAttribute("aria-selected", "true");
    renderAudience(button.dataset.audience);
  });
});

zoneButtons.forEach((button) => {
  button.addEventListener("click", () => {
    zoneButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderTimeline(button.dataset.zone);
  });
});

[daysInput, visitorsInput, rateInput].forEach((input) => {
  input.addEventListener("input", updateCalculator);
});

[brandNameInput, brandMoodInput].forEach((input) => {
  input.addEventListener("input", updateBrandLab);
});

prevSection.addEventListener("click", () => goToDeckSection(-1));
nextSection.addEventListener("click", () => goToDeckSection(1));

window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowDown" || event.key === "PageDown") goToDeckSection(1);
  if (event.key === "ArrowUp" || event.key === "PageUp") goToDeckSection(-1);
});

updateProgress();
updateActiveNav();
updateCalculator();
updateBrandLab();
updateParallax();
revealItems.forEach((item) => revealObserver.observe(item));
countItems.forEach((item) => revealObserver.observe(item));
