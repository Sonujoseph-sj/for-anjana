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
  { type: "intro", eyebrow: "Officially unofficial love business", icon: "💌", title: "Maluuu… come here 👀", paragraphs: ["I have prepared a very serious, very scientific, absolutely-not-cheesy presentation.", "Your mission: tap through honestly. Your other mission: do NOT judge the developer. He is emotionally attached to this project."], note: "Warning: excessive cuteness, old wounds and shameless flirting ahead.", button: "Fine, show me" },
  { type: "question", eyebrow: "Warm-up question", icon: "😌", title: "Am I your favourite person?", paragraphs: ["Please think carefully. There is only one answer that keeps the peace in this household."], yes: "Obviously 💗", no: "Nope", afterYes: "Correct answer! Your prize is… me being annoying forever. 🎉", note: "The committee has reviewed your answer and is very pleased." },
  { type: "memory", eyebrow: "Chapter 1 · How it started", icon: "🤝", title: "Just two NSS volunteers…", paragraphs: ["College. NSS. Camps, activities, and a lot of “social service”. We were friends. Just friends. Totally normal. Totally innocent.", "(It was not innocent on my side. I was serving the society and secretly serving my feelings too.)"], note: "NSS motto: Not Me But You. I took it a little too personally.", button: "And then? 👀" },
  { type: "memory", eyebrow: "Chapter 2 · The tragic era", icon: "💔", title: "Proposal #1: Rejected.", paragraphs: ["I gathered all my courage. I proposed. You said no.", "So I did what any sensible person would do. I proposed again. You said no. Again.", "Any normal person would have given up after that. Luckily for you, I am not a normal person."], note: "Rejection count: 2. Hope count: still full. 😤", button: "I'm sorry 🥲" },
  { type: "question", eyebrow: "A question for the accused", icon: "🧑‍⚖️", title: "Was rejecting me twice a mistake?", paragraphs: ["Look me in the eyes (through the screen) and answer honestly."], yes: "Biggest mistake of my life 😭", no: "Not at all", afterYes: "Thank you for admitting it. Took you only two rejections and a few years. 😌", note: "Apology accepted. Still bringing it up forever, though." },
  { type: "memory", eyebrow: "Chapter 3 · Attempt #3", icon: "🎯", title: "The sneaky one worked.", paragraphs: ["Third time, I changed strategy. No direct question. Just an indirect proposal, carefully hidden, so you could not reject it properly. 😏", "And it worked. 28 February became our anniversary, and the boy with two rejections finally got his yes."], note: "Lesson learned: if the front door is closed, try the side window. 🪟", button: "Smart, right? 😎" },
  { type: "memory", eyebrow: "Chapter 4 · The far-away years", icon: "📱", title: "Long distance, long time.", paragraphs: ["Then came the distance. Calls instead of coffees. Good-night texts instead of good-night hugs. Missing you in ways that don't fit in a message.", "We had hard times too. Days we didn't understand each other. Days that were heavy. But we never let go. We worked through it, and we came out stronger."], note: "Distance: many kilometres. Network issues: too many. Us: still here. 💪", button: "Still here ❤️" },
  { type: "tease", eyebrow: "Long distance enquiry", icon: "🥺", title: "Who misses who more?", paragraphs: ["A very fair survey. Conducted by the person who obviously wins."], choices: ["Me, obviously 🙋‍♀️", "You, obviously 🙋‍♂️", "Same same 🤝"], replies: ["Cute claim. Wrong, but cute. 😌", "Finally, the truth. Thank you for your honesty. 🫡", "Very diplomatic. Suspicious. Accepted. 🤨"], note: "Results will be ignored if they don't favour me." },
  { type: "memory", eyebrow: "Chapter 5 · Road-trip department", icon: "🛣️", title: "Our drives (all few of them)", paragraphs: ["Let's be honest. We haven't had a hundred drives. We've had… some. A countable number. Thanks to the distance, not to me.", "But I remember every single one. The music, the random talks, the snack stops. Short list, big memories."], note: "Current drive count: embarrassingly low. Target: unlimited.", button: "Let's fix that 🚗" },
  { type: "question", eyebrow: "Official booking request", icon: "🚗", title: "One more drive with me?", paragraphs: ["No destination. Good music. Random talks. Maybe snacks. Probably me asking, “Are you hungry?” five minutes after eating."], yes: "Take me now 🚗", no: "Absolutely not", afterYes: "Seatbelt on, playlist ready. Co-driver Malu has been promoted. 🫡", note: "Fuel not included. Love included in unlimited quantity." },
  { type: "question", eyebrow: "The serious one", icon: "💍", title: "Will you keep choosing us?", paragraphs: ["Even when life gets complicated? Even while we're still working toward getting our parents to agree to our marriage?"], yes: "Always, with you ❤️", no: "I refuse", afterYes: "That’s my girl. One step at a time, one team, one future we're working toward. ❤️", note: "No magic shortcuts. Just love, patience, honesty, and teamwork." },
  { type: "tease", force: true, eyebrow: "A very important test", icon: "🧪", title: "Am I cute?", paragraphs: ["One question. Three options. Choose wisely… or don't. It won't matter. 😏"], choices: ["No 😐", "Hmm, a little 🤏", "The cutest human alive 🥹"], replies: ["Wrong answer. That option has been deleted. 🗑️", "“A little”?? Rejected. You have rejected me enough already. 😤", "Correct! See, that wasn't so hard. 🥹"], note: "Incorrect options may disappear without notice." },
  { type: "letter", eyebrow: "Top secret · For Malu only", icon: "✉️", title: "A letter is waiting…", paragraphs: ["This letter is shy. It will not open until you tap it.", "Go on. Tap the envelope. And when it asks again… tap once more. 👀"], note: "Psst. No actual paper was harmed in this production.", button: "Tap the letter 💌" },
  { type: "letter-open", eyebrow: "From me, with all my heart", icon: "💗", title: "Okay… now read this.", paragraphs: ["Malu,", "We started as friends in NSS. You said no twice, and I am very glad I was stubborn enough to try a third time. That yes on 28 February is still one of my favourite things that ever happened to me.", "Thank you for staying through the long distance, the missed moments, the bad network, and the hard days. We had times that tested us, and we came through them together. That means everything to me.", "I can't promise that everything will always be easy. I can promise to keep showing up, to listen, to learn, and to keep choosing us with love and respect.", "I want more drives (many more, we are behind schedule), more dates, more laughter, and more ordinary days side by side, with no distance in between.", "Thank you for being you. I'm grateful for our story, and excited for the chapters still waiting for us."], note: "Love, your Ichaa ♡", button: "There's one last thing…" },
  { type: "final", eyebrow: "The part I wanted you to reach", icon: "💞", title: "I LOVE YOU, MALU.", paragraphs: ["From NSS friends, to two rejections, to one sneaky yes.", "Through the distance and the hard days, you're still my favourite person.", "Today, tomorrow, and through all the chapters still waiting for us."], note: "Always yours. ❤️", button: "Again? From the beginning ↺" }
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
    page.choices.forEach((choice, i) => {
      const btn = makeButton(choice, "choice-button", () => {
        showFeedback(page.replies[i]);
        // forced pages: every option except the last one gets deleted on click
        if (page.force && i < page.choices.length - 1) {
          btn.remove();
          storyCard.classList.remove("shake"); void storyCard.offsetWidth; storyCard.classList.add("shake");
          return;
        }
        area.querySelectorAll("button").forEach(b => b.disabled = true);
        actions.appendChild(makeButton("Okay, continue 💗", "next-button", advance));
      });
      area.appendChild(btn);
    });
    actions.appendChild(area);
  } else if (page.type === "letter") {
    storyCard.classList.add("letter-card");
    const envelope = makeButton(letterTap === 0 ? "💌 Tap to open" : letterTap === 1 ? "🥹 One more tap…" : "💗 Click… just once more", "envelope-button", () => {
      letterTap++;
      if (letterTap === 1) { envelope.textContent = "💌 It moved a little! Tap again"; showFeedback("You have to be persistent with this letter. Much like I was with you. Three tries, remember? 😏"); }
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
