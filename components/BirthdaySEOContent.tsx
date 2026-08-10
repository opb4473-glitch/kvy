import { Flower2, Heart } from 'lucide-react'

const WEBSITE_URL = 'https://kavya-happy-birthday.vercel.app'

const faqs = [
  {
    question: 'How do I wish a Happy Birthday to Kavya?',
    answer:
      'You can wish Kavya a happy birthday by visiting the Happy Birthday Kavya website, where a personal birthday message, memories and a beautiful candle-blowing celebration have been created just for her. Share the link with friends and family so they can add their own birthday wishes for Kavya too.',
  },
  {
    question: 'What is the best birthday wish for Kavya?',
    answer:
      'The best birthday wish for Kavya is one that comes from the heart. Simple, warm wishes like "Happy Birthday Kavya, may this year bring you endless happiness, love and beautiful memories" are perfect, and this birthday website adds a special personal touch with messages and memories made just for her.',
  },
  {
    question: 'What makes this Kavya birthday website special?',
    answer:
      'This Happy Birthday Kavya website is a one-of-a-kind celebration built entirely for Kavya. It includes a personal birthday message, a make-a-wish cake you can blow out with candles, cherished memories, sunflowers and heartfelt wishes that make her special day unforgettable.',
  },
]

const wishes = [
  'Happy Birthday Kavya — may your day be as bright and beautiful as a field of golden sunflowers.',
  'Wishing Kavya a year filled with joy, laughter, love and unforgettable memories.',
  'May every candle you blow out turn a dream into reality. Happy Birthday, Kavya.',
  'Here’s to the kindest heart, the warmest smile and the most wonderful person. Happy Birthday Kavya!',
  'Happy Birthday to Kavya — a truly special soul who makes the world around her warmer.',
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Kavya',
  description:
    'Happy Birthday Kavya - a special birthday celebration website created with love for Kavya.',
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Happy Birthday Kavya',
  alternateName: 'Kavya Birthday Website',
  url: WEBSITE_URL,
  description:
    'A heartfelt Happy Birthday Kavya website with special birthday wishes, memories and a personal celebration made just for Kavya.',
  inLanguage: 'en',
}

export default function BirthdaySEOContent() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      <section
        aria-labelledby="birthday-main-heading"
        className="sr-only border-t border-rose-100 bg-gradient-to-b from-rose-50/80 via-white to-amber-50/60"
      >
        <div className="mx-auto max-w-3xl px-5 py-16 sm:py-20">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/70 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-rose-500 font-medium">
              <Flower2 className="w-3.5 h-3.5" />
              A birthday surprise
            </span>

            <h1
              id="birthday-main-heading"
              className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold font-display text-foreground"
            >
              Happy Birthday Kavya
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-foreground/70 font-light leading-relaxed">
              A heartfelt celebration made just for Kavya — filled with birthday wishes,
              memories, love and everything that makes her so special.
            </p>
          </div>

          <div className="space-y-10">
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>
                If you searched for <strong>&ldquo;Happy Birthday Kavya&rdquo;</strong> or{' '}
                <strong>&ldquo;birthday wishes for Kavya&rdquo;</strong>, you&rsquo;ve found the
                right place. This page is a little corner of the internet created with love
                to celebrate Kavya&rsquo;s special day. From the very first message to the
                last wish, every part of this birthday website was designed to make Kavya
                smile.
              </p>
              <p>
                This Kavya birthday celebration includes a personal welcome message, a
                beautiful make-a-wish cake with candles to blow out, cherished memories, and
                a finale filled with love, sunflowers and lots of happy birthday wishes for
                Kavya.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-foreground mb-5">
                Birthday Wishes for Kavya
              </h2>
              <ul className="space-y-4">
                {wishes.map((wish, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 rounded-2xl border border-rose-100 bg-white/70 p-5 leading-relaxed text-muted-foreground shadow-sm"
                  >
                    <Heart className="mt-0.5 w-5 h-5 shrink-0 text-rose-400" aria-hidden="true" />
                    <span>{wish}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-foreground mb-4">
                Why This Birthday Website Was Made
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                Some people light up the lives of everyone around them, and Kavya is one of
                them. This happy birthday website is a small way of saying thank you — for
                the kindness, the laughter, the love for animals and the way she appreciates
                the little beauties of life, just like sunflowers. It&rsquo;s a birthday
                surprise made from the heart, so that Kavya always remembers how truly
                special she is on her birthday.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-foreground mb-5">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {faqs.map((faq) => (
                  <div
                    key={faq.question}
                    className="rounded-2xl border border-rose-100 bg-white/70 p-6 shadow-sm"
                  >
                    <h3 className="text-lg sm:text-xl font-semibold font-display text-foreground mb-2">
                      {faq.question}
                    </h3>
                    <p className="leading-relaxed text-muted-foreground">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            <p className="pt-4 text-center text-sm text-muted-foreground/80">
              Happy Birthday Kavya — from a friend.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
