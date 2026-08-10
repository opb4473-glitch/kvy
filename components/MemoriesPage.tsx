
// 'use client'

// import Image from 'next/image'
// import { Dog, Sun, Sparkles, Compass, type LucideIcon } from 'lucide-react'

// interface Memory {
//   title: string
//   description: string
//   icon: LucideIcon
//   bg: string
//   accent: string
// }

// const memories: Memory[] = [
//   {
//     title: 'A Heart for Every Soul',
//     description:
//       'Tumhara dil sirf insaano ke liye nahi, har be-zubaan jaan ke liye dhadakta hai. Animals ke liye tumhari woh chhoti si care bhi bata deti hai ki tumhare andar kitni khoobsurat rooh basti hai.',
//     icon: Dog,
//     bg: '/dog.jpg',
//     accent: 'from-amber-500/70 to-amber-700/60',
//   },
//   {
//     title: 'Where You Bloom',
//     description:
//       'Like a sunflower quietly turning towards the light, tum bhi apni roshni lekar chalti ho. Tum jahan hoti ho, wahan thoda sa sukoon, thodi si warmth aur bahut saari positivity khud-ba-khud aa jaati hai.',
//     icon: Sun,
//     bg: '/sunflowers.jpg',
//     accent: 'from-rose-500/70 to-rose-700/60',
//   },
//   {
//     title: 'Ek Bahut Khaas Rooh',
//     description:
//       'Kuch log khoobsurat dikhte hain, aur kuch log apni rooh se khoobsurat hote hain. Tum unmein se ho. Tumhari kindness, tumhari hasi, aur tumhara dil — these are the little things that make you unforgettable.',
//     icon: Sparkles,
//     bg: '/soul.jpg',
//     accent: 'from-violet-500/70 to-purple-700/60',
//   },
//   {
//     title: 'Dil Se Jeene Wali',
//     description:
//       'Zindagi ko sirf jeena nahi, mehsoos karna tum jaanti ho. Har nayi jagah, har chhota adventure, har unexpected moment — tum unhe ek yaad bana deti ho. Shayad isi liye tumhare saath guzra hua waqt, waqt nahi lagta... ek khoobsurat memory ban jaata hai.',
//     icon: Compass,
//     bg: '/advanture.jpg',
//     accent: 'from-emerald-500/70 to-teal-700/60',
//   },
// ]

// export default function MemoriesPage() {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-amber-50">
//       <div className="max-w-6xl mx-auto px-5 py-16 md:py-20">

//         {/* Header */}
//         <div className="text-center mb-14 animate-bloom">
//           <p className="text-sm uppercase tracking-[0.35em] text-rose-500 font-medium mb-3">
//             Through the little things
//           </p>

//           <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-800">
//             Moments of Joy
//           </h1>

//           <p className="mt-5 text-gray-600 max-w-2xl mx-auto leading-relaxed">
//             Kuch baatein kehne ki zaroorat nahi hoti...
//             <br />
//             bas kisi ko thoda aur dhyaan se dekho,
//             aur samajh aa jaata hai ki woh kitni khaas hai.
//           </p>

//           <p className="mt-7 text-xl md:text-2xl font-display text-rose-600">
//             What makes you, absolutely wonderful
//           </p>
//         </div>

//         {/* Memory Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {memories.map((memory, index) => {
//             const Icon = memory.icon

//             return (
//               <div
//                 key={index}
//                 className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-white/70 animate-bloom"
//                 style={{
//                   animationDelay: `${200 + index * 120}ms`,
//                 }}
//               >
//                 {/* Background Image */}
//                 <div
//                   className="absolute inset-0 bg-cover bg-center transition-transform duration-[2.5s] ease-out group-hover:scale-110"
//                   style={{
//                     backgroundImage: `url(${memory.bg})`,
//                   }}
//                 />

//                 {/* Gradient Overlay */}
//                 <div
//                   className={`absolute inset-0 bg-gradient-to-t ${memory.accent} transition-opacity duration-500 opacity-90 group-hover:opacity-80`}
//                 />

//                 {/* Content */}
//                 <div className="relative z-10 text-white px-7 py-9">
//                   <div className="flex items-center gap-3 mb-4">
//                     <span className="flex items-center justify-center w-11 h-11 rounded-2xl bg-white/20 backdrop-blur border border-white/30 shadow-inner">
//                       <Icon className="w-5 h-5" />
//                     </span>

//                     <h3 className="text-2xl font-bold font-display drop-shadow-sm">
//                       {memory.title}
//                     </h3>
//                   </div>

//                   <p className="leading-relaxed text-white/90 font-light">
//                     {memory.description}
//                   </p>

//                   <div className="mt-5 h-0.5 w-12 bg-white/40 rounded-full transition-all duration-500 group-hover:w-24 group-hover:bg-white/70" />
//                 </div>
//               </div>
//             )
//           })}
//         </div>

//         {/* Sunflower Image */}
//         <div
//           className="mt-12 mb-12 group animate-bloom"
//           style={{
//             animationDelay: '150ms',
//           }}
//         >
//           <div className="relative w-full h-64 md:h-80 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/70 ring-1 ring-amber-200/60">
//             <Image
//               src="/sunflower.jpg"
//               alt="A field of golden sunflowers"
//               fill
//               className="object-cover transition-transform duration-[2.5s] ease-out group-hover:scale-110"
//             />

//             <div className="absolute inset-0 bg-gradient-to-t from-rose-900/25 via-transparent to-transparent" />

//             <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/90 text-sm tracking-[0.3em] uppercase font-light text-center whitespace-nowrap">
//               Some souls simply make the world warmer
//             </div>
//           </div>
//         </div>

//       </div>
//     </div>
//   )
// }

'use client'

import Image from 'next/image'
import { Dog, Sun, Sparkles, Compass, type LucideIcon } from 'lucide-react'

interface Memory {
  title: string
  description: string
  icon: LucideIcon
  bg: string
  accent: string
}

const memories: Memory[] = [
  {
    title: 'A Heart for Every Soul',
    description:
      'Main tumhare baare mein abhi itna kuch nahi jaanta, shayad jitna jan na chahiye utna bhi nahi. Bas itna dekha hai ki tumhe animals se kitna pyaar hai... aur sach kahun, kisi be-zubaan jaan ke liye itni softness dekhkar tum aur bhi achhi lagti ho. Shayad isi chhoti si baat ne mujhe tumhe thoda aur jan ne ki khwahish di.',
    icon: Dog,
    bg: '/dog.jpg',
    accent: 'from-amber-500/70 to-amber-700/60',
  },
  {
    title: 'The Way You Bloom',
    description:
      'Tumhe shayad khud bhi nahi pata, but there is something warm about you. Jaise sunflower bina kuch kahe roshni ki taraf mudta hai... waise hi tumhari kuch chhoti-chhoti baatein mujhe tumhari taraf kheenchti hain. I know only little bit about you, but somehow, that little has been enough to make me curious about the rest.',
    icon: Sun,
    bg: '/sunflowers.jpg',
    accent: 'from-rose-500/70 to-rose-700/60',
  },
  {
    title: 'A Beautiful Soul',
    description:
      'Main yeh nahi keh sakta ki main tumhe poori tarah jaanta hoon... But Jitna dekha hai, jitna samjha hai, usmein ek ajeeb si khoobsurti hai. Tumhari hasi, tumhari little things, tumhara way of being... pata nahi kyun, par dil ko achha lagta hai. Aur shayad isi liye main tumhe aur jan na chahta hoon.',
    icon: Sparkles,
    bg: '/soul.jpg',
    accent: 'from-violet-500/70 to-purple-700/60',
  },
  {
    title: 'A Journey I’d Like to Know',
    description:
      'Zindagi ke baare mein tumhari kahani mujhe abhi bahut kam pata hai. Tumhari pasand, tumhare dreams, tumhari khushiyan, tumhari chhoti si duniya, there is still so much I don’t know. But maybe that is what makes it beautiful... kyunki jo thoda sa jaana hai, usne mujhe baaki sab jaan-ne ki khwahish de di.',
    icon: Compass,
    bg: '/advanture.jpg',
    accent: 'from-emerald-500/70 to-teal-700/60',
  },
]

export default function MemoriesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-amber-50">
      <div className="max-w-6xl mx-auto px-5 py-16 md:py-20">

        {/* Header */}
        <div className="text-center mb-14 animate-bloom">
          <p className="text-sm uppercase tracking-[0.35em] text-rose-500 font-medium mb-3">
            Through the little things
          </p>

          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-800">
            Moments of Joy
          </h1>

          {/* <p className="mt-5 text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Shayad main tumhe abhi itna nahi jaanta...
            <br />
            par jitna bhi jaana hai, usmein tum mujhe bahut achhi lagi ho.
          </p> */}
          {/* 
          <p className="mt-7 text-xl md:text-2xl font-display text-rose-600">
            And maybe, I’d like to know you a little more...
          </p> */}
        </div>

        {/* Memory Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {memories.map((memory, index) => {
            const Icon = memory.icon

            return (
              <div
                key={index}
                className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-white/70 animate-bloom"
                style={{
                  animationDelay: `${200 + index * 120}ms`,
                }}
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-[2.5s] ease-out group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${memory.bg})`,
                  }}
                />

                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${memory.accent} transition-opacity duration-500 opacity-90 group-hover:opacity-80`}
                />

                {/* Content */}
                <div className="relative z-10 text-white px-7 py-9">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="flex items-center justify-center w-11 h-11 rounded-2xl bg-white/20 backdrop-blur border border-white/30 shadow-inner">
                      <Icon className="w-5 h-5" />
                    </span>

                    <h3 className="text-2xl font-bold font-display drop-shadow-sm">
                      {memory.title}
                    </h3>
                  </div>

                  <p className="leading-relaxed text-white/90 font-light">
                    {memory.description}
                  </p>

                  <div className="mt-5 h-0.5 w-12 bg-white/40 rounded-full transition-all duration-500 group-hover:w-24 group-hover:bg-white/70" />
                </div>
              </div>
            )
          })}
        </div>

        {/* Sunflower Image */}
        <div
          className="mt-12 mb-12 group animate-bloom"
          style={{
            animationDelay: '150ms',
          }}
        >
          <div className="relative w-full h-64 md:h-80 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/70 ring-1 ring-amber-200/60">
            <Image
              src="/sunflower.jpg"
              alt="A field of golden sunflowers"
              fill
              className="object-cover transition-transform duration-[2.5s] ease-out group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-rose-900/40 via-transparent to-transparent" />

            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/95 text-sm md:text-base tracking-[0.18em] uppercase font-light text-center">
              I may know only a little...
              <br />
              <span className="normal-case tracking-normal text-base md:text-lg">
                but I’d love to know the rest of your story.
              </span>
            </div>
          </div>
        </div>


        {/* Final Note */}
        <div
          className="max-w-3xl mx-auto text-center mt-16 animate-bloom mb-16"
          style={{
            animationDelay: '700ms',
          }}
        >
          <p className="text-gray-500 leading-relaxed font-light">
            <br />
            main tumhare baare mein itna sab nahi jaanta.
            <br />
          </p>

          <p className="mt-6 text-lg md:text-xl text-rose-600 font-display leading-relaxed">
            Par jitna bhi jaana hai,
            <br />
            <span className="italic">
              you already seem really special to me.
            </span>
          </p>

          <p className="mt-5 text-gray-500 leading-relaxed font-light">
            Aur shayad isi liye...
            <br />
            Agar aapko bhi theek lage, toh...
            <br />

            bina kisi jaldi ke,
            <br />
            bina kisi zid ke,
            <br />
            bina kisi haq ke,
            <br />
            bas dil se...
            <br />
            main aapko thoda aur jan na chahta hoon.
            <br />
            <span className="text-rose-500/90">
            </span>
          </p>
        </div>

      </div>
    </div>
  )
}
