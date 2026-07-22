import { clamp } from "../utils/helpers";

const hairstyleOptions = [
  {
    title: "Textured crop with tapered sides",
    description:
      "A structured crop sharpens the silhouette while keeping the styling modern and effortless.",
    items: ["Use matte clay for separation", "Keep the fringe slightly forward", "Ask for soft tapering around the temples"],
  },
  {
    title: "Medium-length layered shape",
    description:
      "If your hair density is strong, a layered shape adds movement and keeps the profile balanced.",
    items: ["Blow-dry with low heat", "Add lightweight texture spray", "Maintain clean neckline edges"],
  },
  {
    title: "Side-part with controlled volume",
    description:
      "A refined side part works well for professional settings and reads polished in portraits.",
    items: ["Keep volume concentrated at the top", "Use a flexible hold product", "Avoid excessive shine"],
  },
];

const beardOptions = [
  {
    title: "Light stubble refinement",
    description:
      "A short, even stubble line can improve jaw perception without adding heavy visual weight.",
    items: ["Define the cheek line", "Keep the neck line low and clean", "Trim every 2-3 days"],
  },
  {
    title: "Short boxed beard",
    description:
      "A short boxed beard works well when the jawline can support a tighter frame around the face.",
    items: ["Keep the sides slightly shorter", "Use beard oil for a polished finish", "Shape the chin without over-extending"],
  },
  {
    title: "Clean-shaven focus",
    description:
      "If your lower face already reads clean and defined, a clean shave preserves that premium look.",
    items: ["Use a precision trimmer", "Finish with a soothing balm", "Maintain crisp sideburn transitions"],
  },
];

const fashionOptions = [
  {
    title: "Minimal monochrome layers",
    description:
      "Structured neutrals create a strong visual frame and keep attention on your face.",
    items: ["Use premium fabrics", "Keep silhouettes clean", "Choose one accent color max"],
  },
  {
    title: "Smart-casual tailored basics",
    description:
      "A fitted overshirt, elevated tee, and tapered trouser combo is flexible and polished.",
    items: ["Match necklines to jaw openness", "Prefer natural drape", "Invest in good shoulder fit"],
  },
  {
    title: "Sharp layered outerwear",
    description:
      "A coat or structured jacket adds presence and frames the portrait with stronger lines.",
    items: ["Choose clean lapels", "Keep proportions balanced", "Avoid overly busy patterns"],
  },
];

const skincareOptions = [
  {
    title: "Barrier repair routine",
    description:
      "A simple cleanser, moisturizer, and SPF stack is enough to elevate skin clarity fast.",
    items: ["Use a gentle cleanser", "Apply SPF daily", "Keep actives low and consistent"],
  },
  {
    title: "Clarity-first morning routine",
    description:
      "Focus on reducing shine, maintaining hydration, and protecting the skin throughout the day.",
    items: ["Use niacinamide if tolerated", "Keep skin hydrated", "Avoid overwashing"],
  },
  {
    title: "Night recovery routine",
    description:
      "A nighttime recovery routine helps the face look fresher and more even over time.",
    items: ["Double cleanse if needed", "Use a retinoid gradually", "Lock in moisture before bed"],
  },
];

function hashString(value) {
  let hash = 0;

  for (let index = 0; index < value.length; index += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(index);
    hash |= 0;
  }

  return Math.abs(hash);
}

function pickTemplate(seed, templates, offset) {
  return templates[(seed + offset) % templates.length];
}

function scoreFromSeed(seed, offset, floor, ceiling) {
  const span = ceiling - floor;
  return clamp(floor + ((seed + offset) % span), floor, ceiling);
}

function bandFromScore(score) {
  if (score >= 90) return "Elite";
  if (score >= 82) return "Strong";
  if (score >= 74) return "Balanced";
  if (score >= 66) return "Developing";
  return "Needs work";
}

export async function analyzeAppearance(file) {
  const seed = hashString(`${file.name}|${file.size}|${file.type}`);
  const wait = 1200 + (seed % 600);

  await new Promise((resolve) => {
    setTimeout(resolve, wait);
  });

  const overallScore = scoreFromSeed(seed, 7, 72, 96);
  const metrics = {
    facialSymmetry: scoreFromSeed(seed, 3, 74, 97),
    jawline: scoreFromSeed(seed, 11, 70, 95),
    eyes: scoreFromSeed(seed, 19, 73, 96),
    hair: scoreFromSeed(seed, 27, 68, 97),
    skin: scoreFromSeed(seed, 35, 69, 95),
    presence: scoreFromSeed(seed, 43, 72, 98),
  };

  const summary =
    overallScore >= 88
      ? "A polished baseline with standout structure and strong styling potential."
      : overallScore >= 80
        ? "A balanced appearance profile with a few clear areas to sharpen for a premium finish."
        : "A solid starting point that would benefit from a tighter grooming and styling system.";

  return {
    id: `mogify-${seed}`,
    fileName: file.name,
    fileSize: file.size,
    fileType: file.type,
    createdAt: new Date().toISOString(),
    overallScore,
    band: bandFromScore(overallScore),
    summary,
    metrics,
    hairstyle: pickTemplate(seed, hairstyleOptions, 0),
    beard: pickTemplate(seed, beardOptions, 1),
    fashion: pickTemplate(seed, fashionOptions, 2),
    skincare: pickTemplate(seed, skincareOptions, 3),
  };
}
