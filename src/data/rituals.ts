import ritualBath from "@/assets/ritual-bath.jpg";

export interface Ritual {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  steps: string[];
  safetyNotes: string[];
  duration: string;
  frequency: string;
  saltRecommendation: string;
  image: string;
}

export const rituals: Ritual[] = [
  {
    id: "bath-grounding",
    title: "The Grounding Bath",
    subtitle: "Return to your body after a long day",
    description: "This ritual is about slowing down. The warm water and mineral salt work together to ease physical tension, while the act of preparing and entering the bath becomes a deliberate transition from doing to being. It's not about fixing anything — it's about arriving.",
    steps: [
      "Fill your bath with warm water — not too hot. You want comfort, not shock.",
      "Add two to three scoops of Evening Calm or Pure Earth salt. Stir gently with your hand.",
      "Dim the lights or light a single candle. No screens, no music unless it's instrumental.",
      "Enter the bath slowly. Sit with your feet flat. Feel the warmth rise around you.",
      "Close your eyes. Breathe in through your nose for four counts, out through your mouth for six. Repeat ten times.",
      "Stay for at least twenty minutes. Let your thoughts move without following them.",
      "When you're ready, drain the water and sit for a moment before standing. Wrap yourself in something warm."
    ],
    safetyNotes: [
      "Always test water temperature before entering.",
      "If you have open wounds or sensitive skin conditions, consult a dermatologist before using bath salts.",
      "Stay hydrated — drink water before and after your bath.",
      "If you feel dizzy at any point, drain the water and sit until the feeling passes.",
      "This ritual is not a medical treatment. It is a self-care practice."
    ],
    duration: "20–30 minutes",
    frequency: "Once or twice per week",
    saltRecommendation: "Evening Calm or Pure Earth Rock Salt",
    image: ritualBath,
  },
  {
    id: "space-reset",
    title: "The Space Reset",
    subtitle: "Refresh your environment without smoke or ceremony",
    description: "Sometimes a room just feels off. Stale, heavy, or stuck. The Space Reset is a quiet alternative to smudging — using salt's natural absorbing properties to shift the feeling of a room without burning anything. It's simple, effective, and gentle.",
    steps: [
      "Choose a room that feels like it needs attention. Trust your instinct.",
      "Place four small bowls or saucers in the corners of the room. Ceramic or wood works best.",
      "Fill each bowl with a generous spoonful of Clear Space Reset Salt.",
      "Open a window if possible — even a crack. Fresh air supports the process.",
      "Leave the bowls in place for 24 to 48 hours. Go about your life normally.",
      "After the time has passed, gather the salt and discard it outdoors on bare earth or into running water.",
      "Wipe the bowls clean. Notice how the room feels different."
    ],
    safetyNotes: [
      "Keep salt bowls out of reach of children and pets.",
      "Do not reuse the salt after a space reset — it has done its work.",
      "If you're placing salt on wooden surfaces, use a bowl or saucer to prevent moisture marks.",
      "This practice is about intention and environmental awareness, not supernatural claims."
    ],
    duration: "5 minutes to set up, 24–48 hours passive",
    frequency: "Monthly, or whenever a space feels stagnant",
    saltRecommendation: "Clear Space Reset Salt",
    image: ritualBath,
  },
  {
    id: "meditation-corner",
    title: "The Meditation Corner",
    subtitle: "Create a grounding anchor in your daily space",
    description: "You don't need a meditation room. You need a corner — a small, intentional space where you can sit and be still. Salt has been used for centuries as a grounding element, and placing it in your meditation space adds a tactile, earthy presence that helps you arrive in the moment.",
    steps: [
      "Choose a corner of any room. It doesn't need to be large — a cushion's worth of space is enough.",
      "Place a small wooden or ceramic bowl in the corner. Fill it with River Stone Rock Salt or Pure Earth.",
      "Sit near the bowl. You can hold a salt stone in your hand if you like the weight and texture.",
      "Set a timer for five minutes if you're beginning. No pressure to go longer.",
      "Close your eyes. Focus on the feeling of your body against the floor. Notice gravity.",
      "If your mind wanders, bring your attention back to the weight of the salt or the feeling of the ground beneath you.",
      "When the timer sounds, open your eyes slowly. Place the salt stone back. Carry that stillness with you."
    ],
    safetyNotes: [
      "Salt stones are not for ingestion in this context.",
      "Replace the salt in your bowl every two weeks to keep it fresh.",
      "If you use salt stones, wash your hands after handling to avoid irritation to eyes.",
      "Meditation is a practice, not a performance. Five minutes is enough."
    ],
    duration: "5–20 minutes",
    frequency: "Daily or as needed",
    saltRecommendation: "River Stone Rock Salt or Pure Earth",
    image: ritualBath,
  },
];
