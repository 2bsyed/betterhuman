export type Post = {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  heroImage?: string;
  meta: string[];
  excerpt: string;
  content: string[];
};

export const posts: Post[] = [
  {
    slug: 'porn-and-compulsive-stimulation',
    title: 'Porn and Compulsive Stimulation',
    category: 'Mind',
    description: 'How the loop works, why shame makes it worse, and what realistic recovery looks like.',
    image: '/assets/thumb-mind.svg',
    heroImage: '/assets/thumb-mind.svg',
    meta: ['Recovery', 'Habits'],
    excerpt: 'Porn is often treated like a private moral issue, but for many people it becomes a compulsive system that reshapes attention, motivation, and stress response.',
    content: [
      'The real hook is not only sexual content. It is high-speed novelty, infinite access, emotional escape, and privacy. When someone feels lonely, stressed, bored, or empty, porn becomes a fast state-change button.',
      'The cycle usually looks like this: stress creates the urge for relief, novelty creates a strong reward response, relief teaches the brain to repeat the loop, and shame afterward raises stress again.',
      'What actually helps is reducing easy access, identifying triggers, replacing the urge with movement or social contact, protecting late-night hours, and building slower but more meaningful real-world rewards.',
      'Recovery works better when people stop saying “I am broken” and start saying “I built a loop, and I can build a new one.” Shame makes the loop stronger. Structure makes it weaker.'
    ]
  },
  {
    slug: 'reels-addiction',
    title: 'Reels Addiction',
    category: 'Attention',
    description: 'Why short-form video damages patience and how to rebuild focus without becoming a monk.',
    image: '/assets/thumb-attention.svg',
    heroImage: '/assets/thumb-attention.svg',
    meta: ['Attention', 'Digital Habits'],
    excerpt: 'Reels feel harmless because each video is tiny, but the feed is an endless machine designed to keep your brain in a cycle of novelty and anticipation.',
    content: [
      'Short-form platforms compress stimulation into a rapid loop. You barely choose, you barely think, and the app does most of the work to keep you interested.',
      'That speed lowers patience for slower tasks, reduces deep focus, and trains your brain to expect a constant drip of emotional randomness and novelty.',
      'A practical reset includes deleting or logging out for a fixed period, moving high-friction apps off the home screen, replacing passive feed time with intentional media, and letting boredom exist again.',
      'The real reward is not becoming perfect. It is becoming less controlled by the feed and more capable of choosing what gets your attention.'
    ]
  },
  {
    slug: 'plastic-dependence',
    title: 'Plastic Dependence',
    category: 'Lifestyle',
    description: 'Convenience culture teaches disposable thinking. This guide shows how to swap your defaults.',
    image: '/assets/thumb-lifestyle.svg',
    heroImage: '/assets/thumb-lifestyle.svg',
    meta: ['Environment', 'Daily Habits'],
    excerpt: 'Plastic became normal because it is cheap and easy, but convenience also trains habits and teaches people to stop noticing the cost of their defaults.',
    content: [
      'Single-use plastic creates a large amount of waste from tiny daily decisions. More importantly, it trains a form of passive convenience thinking that leaks into food, shopping, and home routines.',
      'Better defaults are simple: carry a reusable bottle, keep a durable shopping bag nearby, reduce takeaway waste, buy fewer packaged snacks, and value repetition over perfection.',
      'This is not about purity. It is about becoming more awake to the hidden cost of what feels normal and changing the defaults you actually control.'
    ]
  },
  {
    slug: 'screens-and-sleep',
    title: 'How Screens Steal Sleep',
    category: 'Body',
    description: 'Late-night stimulation quietly wrecks recovery, mood, and self-control the next day.',
    image: '/assets/thumb-body.svg',
    heroImage: '/assets/thumb-body.svg',
    meta: ['Sleep', 'Recovery'],
    excerpt: 'Most people do not decide to damage sleep. They just keep the day alive too long with light, novelty, and stimulation.',
    content: [
      'Late-night scrolling keeps the nervous system engaged when it should be powering down. The result is weaker recovery, worse focus, more irritability, and more compulsive behavior the next day.',
      'The most useful changes are boring and effective: set a screen-off time, charge the phone away from the bed, lower the lights, and replace stimulation with one calmer ritual.',
      'Protecting sleep is one of the highest-leverage forms of self-respect because it quietly improves nearly everything else.'
    ]
  },
  {
    slug: 'doomscrolling',
    title: 'Doomscrolling and Learned Helplessness',
    category: 'Attention',
    description: 'When information turns into paralysis, anxiety, and passive despair.',
    image: '/assets/thumb-doomscrolling.svg',
    heroImage: '/assets/thumb-doomscrolling.svg',
    meta: ['Anxiety', 'Agency'],
    excerpt: 'Doomscrolling makes people feel informed while actually making them more passive, anxious, and mentally exhausted.',
    content: [
      'A constant stream of crisis without meaningful action creates a sense that everything is broken and nothing is fixable. Attention becomes a loop of scanning instead of doing.',
      'The fix is not total ignorance. It is structure: use fixed windows for news, choose slower sources, and pair information with one concrete real-world action.',
      'Information without agency becomes emotional pollution.'
    ]
  },
  {
    slug: 'self-improvement-without-self-hatred',
    title: 'Self-Improvement Without Self-Hatred',
    category: 'Identity',
    description: 'You do not need to bully yourself into becoming better. You need a better system.',
    image: '/assets/thumb-identity.svg',
    heroImage: '/assets/thumb-identity.svg',
    meta: ['Identity', 'Habits'],
    excerpt: 'A lot of self-improvement content teaches people to dislike themselves more efficiently. That creates instability, not growth.',
    content: [
      'A better model treats discipline as care instead of punishment. Use systems instead of emotional drama and measure progress in repeatable actions rather than mood swings.',
      'Replace insults with honest descriptions. Keep promises smaller and clearer. Build trust with yourself through repetition.',
      'You are more likely to become better when growth feels like craftsmanship, not punishment.'
    ]
  }
];

export const categories = [
  {
    name: 'Attention',
    description: 'Feeds, reels, doomscrolling, notifications, infinite novelty, and fragmented focus.',
    image: '/assets/thumb-attention.svg',
    slugs: ['reels-addiction', 'doomscrolling']
  },
  {
    name: 'Mind',
    description: 'Compulsive behavior, emotional escape loops, overstimulation, and recovery.',
    image: '/assets/thumb-mind.svg',
    slugs: ['porn-and-compulsive-stimulation']
  },
  {
    name: 'Body',
    description: 'Sleep, recovery, energy, and the physical cost of overstimulation.',
    image: '/assets/thumb-body.svg',
    slugs: ['screens-and-sleep']
  },
  {
    name: 'Lifestyle',
    description: 'Convenience culture, plastic dependence, passive consumption, and healthier defaults.',
    image: '/assets/thumb-lifestyle.svg',
    slugs: ['plastic-dependence']
  },
  {
    name: 'Identity',
    description: 'Self-respect, systems, and improvement that does not run on shame.',
    image: '/assets/thumb-identity.svg',
    slugs: ['self-improvement-without-self-hatred']
  }
];
