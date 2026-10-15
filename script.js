/*
  For Malu, with love 💗
  Edit the text in this file to personalize your story.
  The playful "No" buttons dodge the pointer, but remain harmless and non-blocking.
*/
const storyCard = document.getElementById("storyCard");
const eyebrow = document.getElementById("eyebrow");
const illustration = document.getElementById("illustration");
const title = document.getElementById("title");
const copy = document.getElementById("copy");
const note = document.getElementById("note");
const actions = document.getElementById("actions");
const progress = document.getElementById("progress");
const pageCount = document.getElementById("pageCount");
const confetti = document.getElementById("confetti");

const pages = [
  { type: "intro", eyebrow: "Officially unofficial love business", icon: "💌", title: "Maluuu… come here 👀", paragraphs: ["Ichaa has prepared a very serious, very scientific, absolutely-not-cheesy presentation.", "Your mission: tap through honestly. Your other mission: do NOT judge the developer. He is emotionally attached to this project."], note: "Warning: excessive cuteness and shameless flirting ahead.", button: "Fine, show me" },
  { type: "question", eyebrow: "Question 1 of 3", icon: "😌", title: "Am I your favourite person?", paragraphs: ["Please think carefully. There is only one answer that keeps the peace in this household."], yes: "Obviously, Ichaa 💗", no: "Nope", afterYes: "Correct answer! Your prize is… me being annoying forever. 🎉", note: "The committee has reviewed your answer and is very pleased." },
  { type: "question", eyebrow: "Question 2 of 3", icon: "🚗", title: "One more drive with me?", paragraphs: ["No destination. Good music. Random talks. Maybe snacks. Probably me asking, “Are you hungry?” five minutes after eating."], yes: "Take me now 🚗", no: "Absolutely not", afterYes: "Seatbelt on, playlist ready. Co-driver Malu has been promoted. 🫡", note: "Fuel not included. Love included in unlimited quantity." },
  { type: "question", eyebrow: "Question 3 of 3", icon: "💍", title: "Will you keep choosing us?", paragraphs: ["Even when life gets complicated? Even while we're still working toward getting our parents to agree to our marriage?"], yes: "Always, with you ❤️", no: "I refuse", afterYes: "That’s my girl. One step at a time, one team, one future we're working toward. ❤️", note: "No magic shortcuts. Just love, patience, honesty, and teamwork." },
  { type: "memory", eyebrow: "Chapter 1 · The beginning", icon: "🎓", title: "The day our story began", paragraphs: ["28 February 2026 — in college during graduation. Some days look ordinary while they're happening; later, they become dates you want to keep close.", "I’m glad our paths crossed, Malu. This little website is proof that Ichaa can be romantic… occasionally."], note: "Tiny factual note: you also told me “9 years together,” which doesn't match 28 February 2026. Fix the date or duration in script.js before sharing.", button: "Next, historian" },
  { type: "memory", eyebrow: "Chapter 2 · Us being us", icon: "🌷", title: "Nine years of growing", paragraphs: ["We've grown together, changed together, and shown up for each other. We’ve had fun, faced difficult days, and kept building our story.", "We don't have to be perfect. I just want us to keep learning, laughing, apologising when we need to, and choosing each other."], note: "Relationship status: still a work in progress. Cuteness status: dangerously high.", button: "Continue →" },
  { type: "memory", eyebrow: "Chapter 3 · Road-trip department", icon: "🛣️", title: "Remember our drives?", paragraphs: ["The drives, the dates, the conversations, the little moments that probably looked ordinary to everyone else.", "For me, the best part was never only the place. It was getting there with you. More drives, more dates, and more stories we’ll tell later."], note: "Future plan: drive somewhere. Get hungry. Find food. Repeat.", button: "One more memory" },
  { type: "tease", eyebrow: "A very important test", icon: "🧪", title: "How cute is Ichaa?", paragraphs: ["Choose your answer carefully. This test has been peer-reviewed by exactly one extremely biased person."], choices: ["A little cute 😏", "Annoyingly cute 🙄", "My favourite human 🥹"], note: "All answers mysteriously lead to the same conclusion: Ichaa is lucky to have you." },
  { type: "letter", eyebrow: "Top secret · For Malu only", icon: "✉️", title: "A letter is waiting…", paragraphs: ["This letter is shy. It will not open until you tap it.", "Go on. Tap the envelope. And when it asks again… tap once more. 👀"], note: "Psst. No actual paper was harmed in this production.", button: "Tap the letter 💌" },
  { type: "letter-open", eyebrow: "From Ichaa, with all my heart", icon: "💗", title: "Okay… now read this.", paragraphs: ["Malu,", "I don't know if I say it perfectly every time, but I hope you feel how much you mean to me. Thank you for being beside me through the growing, the fun, the difficult conversations, and the dreams we're still working toward.", "I can't promise that everything will always be easy. I can promise to keep showing up, to listen, to learn, and to keep choosing us with love and respect.", "I want more drives, more dates, more laughter, and more ordinary days that become our favourite memories. I want us to keep facing the hard things as a team.", "Thank you for being you. I'm grateful for our story — and excited for the chapters still waiting for us."], note: "Love, your Ichaa ♡", button: "There's one last thing…" },
  { type: "final", eyebrow: "The part I wanted you to reach", icon: "💞", title: "I LOVE YOU, MALU.", paragraphs: ["Not just for the easy days, but for the real ones too.", "I love the life we're growing, the memories we've made, and the future we're still working toward.", "Today, tomorrow, and through all the chapters still waiting for us."], note: "Always your Ichaa. ❤️", button: "Again? From the beginning ↺" }
];

let current = 0;
let letterTap = 0;
let answered = false;

function addParagraphs(paragraphs) {
  copy.replaceChildren();
  paragraphs.forEach((text) => {
    const p = document.createElement("p");
    p.textContent = text;
    copy.appendChild(p);
  });
}
function makeButton(label, className, handler) {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = className;
  btn.textContent = label;
  btn.addEventListener("click", handler);
  return btn;
}
function advance() { current = Math.min(current + 1, pages.length - 1); render(); }
function showFeedback(text) {
  note.textContent = text;
  note.classList.remove("pop");
  void note.offsetWidth;
  note.classList.add("pop");
  showerOfHearts(8);
}
function dodge(button) {
  const container = document.getElementById("choiceArea");
  if (!container || !button) return;
  const bounds = container.getBoundingClientRect();
  const btnRect = button.getBoundingClientRect();
  const maxX = Math.max(0, bounds.width - btnRect.width);
  const maxY = 105;
  button.style.position = "absolute";
  button.style.left = `${Math.random() * maxX}px`;
  button.style.top = `${Math.random() * maxY}px`;
  button.style.transform = `rotate(${Math.random() * 14 - 7}deg)`;
  button.textContent = ["Nope! 😜", "Too slow!", "Missed me!", "Try again 😂"][Math.floor(Math.random()*4)];
}
function render() {
  const page = pages[current];
  answered = false;
  storyCard.classList.remove("final", "letter-card", "shake");
  storyCard.style.animation = "none"; void storyCard.offsetWidth; storyCard.style.animation = "";
  eyebrow.textContent = page.eyebrow;
  illustration.textContent = page.icon;
  title.textContent = page.title;
  addParagraphs(page.paragraphs);
  note.textContent = page.note || "";
  actions.replaceChildren();
  pageCount.textContent = `${String(current + 1).padStart(2, "0")} / ${String(pages.length).padStart(2, "0")}`;
  progress.style.width = `${((current + 1) / pages.length) * 100}%`;

  if (current > 0) actions.appendChild(makeButton("← Back", "back-button", () => { current--; render(); }));

  if (page.type === "question") {
    const area = document.createElement("div");
    area.id = "choiceArea"; area.className = "choice-area";
    const yes = makeButton(page.yes, "yes-button", () => {
      if (answered) return; answered = true;
      showFeedback(page.afterYes);
      area.querySelectorAll("button").forEach(b => b.disabled = true);
      setTimeout(advance, 1250);
    });
    const no = makeButton(page.no, "no-button", () => dodge(no));
    no.addEventListener("pointerenter", () => dodge(no));
    no.addEventListener("touchstart", (e) => { e.preventDefault(); dodge(no); }, {passive:false});
    area.append(yes, no);
    actions.appendChild(area);
    const hint = document.createElement("div"); hint.className = "tiny-hint"; hint.textContent = "Psst… try catching the No button. I dare you."; actions.appendChild(hint);
  } else if (page.type === "tease") {
    const area = document.createElement("div"); area.className = "choice-area tease-area";
    page.choices.forEach((choice, i) => area.appendChild(makeButton(choice, "choice-button", () => {
      showFeedback(["An acceptable answer. Ichaa is blushing now. 🫣", "A scientifically valid result. Probably. 😌", "Awww. Screenshot this for the official records. 🥹"][i]);
      area.querySelectorAll("button").forEach(b => b.disabled = true);
      const next = makeButton("Okay, continue 💗", "next-button", advance); actions.appendChild(next);
    })));
    actions.appendChild(area);
  } else if (page.type === "letter") {
    storyCard.classList.add("letter-card");
    const envelope = makeButton(letterTap === 0 ? "💌 Tap to open" : letterTap === 1 ? "🥹 One more tap…" : "💗 Click… just once more", "envelope-button", () => {
      letterTap++;
      if (letterTap === 1) { envelope.textContent = "💌 It moved a little! Tap again"; showFeedback("You have to be persistent with this letter. Much like getting Ichaa to admit he’s cheesy."); }
      else if (letterTap === 2) { envelope.textContent = "💌 Almost open… one last click"; showFeedback("Okay okay, dramatic pause. The letter is shy. 😭"); }
      else { letterTap = 0; advance(); }
    });
    actions.appendChild(envelope);
    actions.appendChild(makeButton("← Back", "back-button", () => { current--; render(); }));
  } else {
    const label = page.button || "Next →";
    actions.appendChild(makeButton(label, "next-button", () => {
      if (page.type === "final") { current = 0; letterTap = 0; confetti.replaceChildren(); }
      else advance();
      render();
    }));
  }
  if (page.type === "final") {
    storyCard.classList.add("final");
    showerOfHearts(32);
  }
}
function showerOfHearts(count = 20) {
  const symbols = ["♡", "♥", "✦", "💕", "✧", "✨"];
  for (let i = 0; i < count; i++) {
    const piece = document.createElement("span");
    piece.className = "confetti-piece";
    piece.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.animationDelay = `${Math.random() * 1.5}s`;
    piece.style.animationDuration = `${3 + Math.random() * 4}s`;
    piece.style.fontSize = `${12 + Math.random() * 18}px`;
    confetti.appendChild(piece);
    setTimeout(() => piece.remove(), 8000);
  }
}
render();
