export interface Testimonial {
  quote: string;
  author: string;
  location: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "My apartment has never smelled better. Purrify is a game-changer!",
    author: "Sarah L.",
    location: "Montreal",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
  },
  {
    quote:
      "I've cut my litter expenses in half. My cats and wallet are both happier.",
    author: "Michael T.",
    location: "Toronto",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
  },
  {
    quote:
      "As a vet, I recommend Purrify to all my cat-owning clients. It's simply the best.",
    author: "Dr. Jennifer K.",
    location: "Vancouver",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
  },
  {
    quote:
      "The odor control is unbelievable. My guests can't even tell I have three cats!",
    author: "David R.",
    location: "Calgary",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    quote:
      "I was skeptical at first, but after trying Purrify, I'll never go back to regular litter again.",
    author: "Emma S.",
    location: "Ottawa",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
  },
  {
    quote:
      "My cat is very picky, but she took to Purrify immediately. That's all the endorsement I need!",
    author: "James W.",
    location: "Edmonton",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80",
  },
];

export default testimonials;
