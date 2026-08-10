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
      'Main tumhare baare mein abhi itna kuch nahi jaanta, shayad jitna jan na chahiye utna bhi nahi. Bas itna dekha hai ki tumhe animals se kitna pyaar hai... aur sach kahun, kisi be zubaan jaan ke liye itni softness dekhkar aap muje aur bhi achhi lagti ho.',
    icon: Dog,
    bg: '/dog.jpg',
    accent: 'from-amber-500/70 to-amber-700/60',
  },
  {
    title: 'The Way You Bloom',
    description:
      'Tumhe shayad khud bhi nahi pata, but there is something warm about you. Jaise sunflower bina kuch kahe roshni ki taraf mudta hai... waise hi tumhari kuch chhoti-chhoti baatein mujhe tumhari taraf kheenchti hain. There is a certain warmth in the way you carry yourself, and somehow, it feels really nice to notice.',
    icon: Sun,
    bg: '/sunflowers.jpg',
    accent: 'from-rose-500/70 to-rose-700/60',
  },
  {
    title: 'A Beautiful Soul',
    description: 'Tumhari khoobsurti sirf tumhari hasi ya looks mein nahi, balki tumhare dil mein bhi hai. Ummeed ke saath bachchon ke liye apna waqt dena, aur animals ke liye tumhari care... yeh sab dekhkar bas itna lagta hai ki tumhara heart genuinely bahut pure hai.',
    icon: Sparkles,
    bg: '/soul.jpg',
    accent: 'from-violet-500/70 to-purple-700/60',
  },
  {
    title: 'A Journey I’d Like to Know',
    description:
      'Zindagi ke baare mein tumhari kahani mujhe abhi bahut kam pata hai. Tumhari pasand, tumhare dreams, tumhari khushiyan, tumhari chhoti si duniya, there is still so much I don’t know. But maybe that is what makes it beautiful... kyunki jo thoda sa jaana hai, usne mujhe baaki sab jan ne ki khwahish de di.',
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
            In The Little Things
          </p>

          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-800">
            I Found Something Beautiful
          </h1>

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
            Main tumhare baare mein itna sab nahi jaanta.
            <br />
            Shayad jitna jaanna chahiye, utna bhi nahi...
          </p>

          <p className="mt-7 text-lg md:text-xl text-rose-600 font-display leading-relaxed">
            Par jitna bhi jaana hai,
            <br />
            <span className="italic">
              you already seem really special to me.
            </span>
          </p>

          <div className="my-10 flex justify-center">
            <div className="h-px w-16 bg-rose-200" />
          </div>

          <p className="text-gray-500 leading-relaxed font-light">
            Shayad tum soch rahi hogi...
            <br />
            <span className="text-gray-700">
              ki main tumhare liye yeh sab kyun kar raha hoon,
              <br />
              jabki humne abhi itni baat bhi nahi ki hai.
            </span>
          </p>

          <p className="mt-6 text-gray-500 leading-relaxed font-light">
            Aur honestly, iska koi perfect jawab mere paas bhi nahi hai.
            <br />
            Bas itna jaanta hoon ki tum mujhe achhi lagi...
            <br />
            tumhari smile, tumhari looks,
            <br />
            aur jis tarah tum apne aas paas ki cheezon, logon aur animals ke liye care karti ho.
            <br />
            Shayad inhi chhoti-chhoti cheezon ne
            <br />
            mujhe tumhe thoda aur jaanne ki curiosity di.
          </p>

          <p className="mt-7 text-gray-500 leading-relaxed font-light">
            Hum sirf garba class mein mile hain,
            <br />
            aur main waise bhi offline thoda introvert hoon,
            <br />
            isliye tumse kabhi properly baat nahi kar paya.
            <br />
            Lekin jo thoda sa dekha aur jaana,
            <br />
            woh mujhe genuinely achha laga.
          </p>

          <p className="mt-7 text-gray-500 leading-relaxed font-light">

            Shayad main woh insaan bhi nahi hoon
            <br />
            jo tumhare liye perfect ho.
            <br />
            Aur shayad isi wajah se,
            <br />
            yeh sab kehne mein thoda darr bhi lagta hai.
          </p>

          <p className="mt-6 text-gray-500 leading-relaxed font-light">
            Lekin ek cheez aur zyada darrati hai...
            <br />
            <span>
              ki mere andar iska regret na reh jaye,
              <br />
              ki maine kabhi tumhe bataya hi nahi.
            </span>
          </p>

          <p className="mt-6 text-gray-500 leading-relaxed font-light">
            Isliye aaj bas itna kehna tha...
            <br />
            bina kisi expectation ke,
            <br />
            bina kisi pressure ke,
            <br />
            aur bina tumse kisi jawab ki umeed rakhe.
          </p>

          <p className="mt-7 text-lg md:text-xl text-rose-600 font-display leading-relaxed">
            <span className="italic">
              I would simply like to know you a little more,
              <br />
              if you're comfortable with that.
            </span>
          </p>

          <p className="mt-7 text-gray-500 leading-relaxed font-light">
            Aur agar waqt ke saath,
            <br />
            hum bas ek achhi si dosti tak hi pahunch paaye...
            <br />
            toh bhi main usse kam khoobsurat nahi samjhunga.
          </p>

          <p className="mt-7 text-gray-500 leading-relaxed font-light">
            Tumhe kuch kehna zaroori nahi hai.
            <br />
            Jo tum feel karti ho,
            <br />
            uski apni jagah hai.
            <br />
            <span className="text-rose-500/90">
              And whatever it is, I will respect it.
            </span>
          </p>

          <p className="mt-8 text-gray-600 font-display italic text-base md:text-lg">
            I just wanted you to know.
            <br />
            That's all.
          </p>
        </div>

        {/* 
        <div
          className="max-w-3xl mx-auto text-center mt-16 animate-bloom mb-16"
          style={{
            animationDelay: '700ms',
          }}
        >

          <p className="text-gray-500 leading-relaxed font-light">
            Main tumhare baare mein itna sab nahi jaanta.
            <br />
            Shayad jitna jaanna chahiye, utna bhi nahi...
          </p>

          <p className="mt-7 text-lg md:text-xl text-rose-600 font-display leading-relaxed">
            Par jitna bhi jaana hai,
            <br />
            <span className="italic">
              you already seem really special to me.
            </span>
          </p>

          <div className="my-10 flex justify-center">
            <div className="h-px w-16 bg-rose-200" />
          </div>

          <p className="text-gray-500 leading-relaxed font-light">
            Aur...
            <br />
            <span className="text-gray-700">
              I want to share something with you.
            </span>
          </p>

          <p className="mt-6 text-gray-500 leading-relaxed font-light">
            Main perfect nahi hoon.
            <br />
            Shayad main woh insaan bhi nahi hoon
            <br />
            jo tumhare liye perfect ho.
            <br />
            Aur shayad isi wajah se,
            <br />
            yeh kehne mein thoda darr bhi lagta hai.
          </p>

          <p className="mt-6 text-gray-500 leading-relaxed font-light">
            Lekin ek cheez aur zyada darrati hai...
            <br />
            <span>
              ki mere andar iska regret na reh jaye,
              <br />
              ki maine kabhi tumhe bataya hi nahi.
            </span>
          </p>

          <p className="mt-6 text-gray-500 leading-relaxed font-light">
            Isliye aaj bas itna kehna tha...
            <br />
            bina kisi expectation ke,
            <br />
            bina kisi pressure ke,
            <br />
            aur bina tumse kisi jawab ki umeed rakhe.
          </p>

          <p className="mt-7 text-lg md:text-xl text-rose-600 font-display leading-relaxed">
            <br />
            <span className="italic">
              I would simply like to know you a little more,
              <br />
              if you're comfortable with that.
            </span>
          </p>

          <p className="mt-7 text-gray-500 leading-relaxed font-light">
            Aur agar waqt ke saath,
            <br />
            hum bas ek achhi si dosti tak hi pahunch paaye...
            <br />
            toh bhi main usse kam khoobsurat nahi samjhunga.
          </p>


          <p className="mt-7 text-gray-500 leading-relaxed font-light">
            Tumhe kuch kehna zaroori nahi hai.
            <br />
            Jo tum feel karti ho,
            <br />
            uski apni jagah hai.
            <br />
            <span className="text-rose-500/90">
              And whatever it is, I will respect it.
            </span>
          </p>

          <p className="mt-8 text-gray-600 font-display italic text-base md:text-lg">
            I just wanted you to know.
            <br />
            That's all.
          </p>
        </div> */}


      </div>
    </div>
  )
}
