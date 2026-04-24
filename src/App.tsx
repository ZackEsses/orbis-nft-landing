import { ChevronRight, Github, Mail, Twitter } from "lucide-react"

const navLinks = ["Home", "Sources", "Lead Files", "FAQ", "Contact"]

const collectionCards = [
  {
    video:
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_053923_22c0a6a5-313c-474c-85ff-3b50d25e944a.mp4",
    score: "MCA intent / 8.7",
  },
  {
    video:
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_054411_511c1b7a-fb2f-42ef-bf6c-32c0b1a06e79.mp4",
    score: "High revenue / 9.0",
  },
  {
    video:
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055427_ac7035b5-9f3b-4289-86fc-941b2432317d.mp4",
    score: "Low competition / 8.2",
  },
]

const decorativeCopy =
  "Direct source lead files built from Google ads, Meta ads, email campaigns, and AI systems trained to surface cleaner MCA data with stronger response rates."

function SocialStack({ className = "", mobile = false }: { className?: string; mobile?: boolean }) {
  const baseButton = mobile
    ? "h-14 w-14 rounded-2xl"
    : "h-14 w-14 rounded-2xl"

  return (
    <div className={className}>
      <div className={`${mobile ? "flex items-center justify-center gap-4" : "flex flex-col gap-4"}`}>
        {[Mail, Twitter, Github].map((Icon, index) => (
          <a
            key={index}
            href="#"
            className={`liquid-glass ${baseButton} flex items-center justify-center text-cream transition hover:bg-white/10`}
            aria-label={`Social ${index + 1}`}
          >
            <Icon size={20} strokeWidth={2} />
          </a>
        ))}
      </div>
    </div>
  )
}

function FinalSocialStack() {
  return (
    <div className="liquid-glass rounded-[0.9rem] sm:rounded-[1.1rem] lg:rounded-[1.25rem]">
      {[Mail, Twitter, Github].map((Icon, index, items) => (
        <a
          key={index}
          href="#"
          className={`flex w-[14vw] min-w-[4.5rem] max-w-[16.77rem] items-center justify-center py-4 text-cream transition hover:bg-white/10 sm:w-[14.375rem] md:w-[10.78125rem] lg:w-[16.77rem] ${index !== items.length - 1 ? "border-b border-white/10" : ""}`}
          aria-label={`Footer social ${index + 1}`}
        >
          <Icon size={20} strokeWidth={2} />
        </a>
      ))}
    </div>
  )
}

function VideoBackground({
  src,
  className = "",
  objectCover = true,
}: {
  src: string
  className?: string
  objectCover?: boolean
}) {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className={className || `${objectCover ? "h-full w-full object-cover" : "block h-auto w-full"}`}
    >
      <source src={src} type="video/mp4" />
    </video>
  )
}

export default function App() {
  return (
    <div className="relative min-h-screen bg-background text-cream">
      <div
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.14]"
        style={{
          backgroundImage: "url('/texture.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <section className="relative min-h-screen overflow-hidden rounded-b-[32px]">
        <div className="absolute inset-0">
          <VideoBackground
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_045634_e1c98c76-1265-4f5c-882a-4276f2080894.mp4"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#010828]/25" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-shell flex-col px-5 pb-10 pt-6 sm:px-7 lg:px-10">
          <header className="flex items-center justify-between gap-6">
            <a href="#" className="font-grotesk text-[16px] uppercase tracking-[0.08em] text-cream">
              Signal Forge
            </a>

            <nav className="liquid-glass hidden rounded-[28px] px-[52px] py-[24px] lg:block">
              <ul className="flex items-center gap-9">
                {navLinks.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-grotesk text-[13px] uppercase tracking-[0.08em] text-cream transition hover:text-neon"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="w-14 lg:w-[72px]" />
          </header>

          <div className="relative flex flex-1 items-center py-12 sm:py-16">
            <div className="relative max-w-[780px] lg:ml-32">
              <h1 className="font-grotesk text-[40px] uppercase leading-[1.05] text-cream sm:text-[60px] md:text-[75px] md:leading-[1] lg:text-[90px] lg:leading-[1]">
                <span className="block">Direct source</span>
                <span className="block">mca lead files</span>
              </h1>
              <span className="pointer-events-none absolute -right-2 top-[18%] rotate-[-1deg] font-condiment text-[24px] text-neon opacity-90 mix-blend-exclusion sm:-right-6 sm:text-[32px] md:text-[40px] lg:right-[-7rem] lg:top-[26%] lg:text-[48px]">
                Google ads + AI
              </span>

              <SocialStack className="mt-10 lg:hidden" mobile />
            </div>

            <SocialStack className="absolute right-5 top-20 hidden lg:block" />
          </div>
        </div>
      </section>

      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0">
          <VideoBackground
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_151551_992053d1-3d3e-4b8c-abac-45f22158f411.mp4"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#010828]/18" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-shell flex-col justify-between px-5 py-16 sm:px-7 md:py-20 lg:px-10 lg:py-24">
          <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-start">
            <div className="relative">
              <h2 className="font-grotesk text-[32px] uppercase leading-[0.95] text-cream sm:text-[44px] md:text-[52px] lg:text-[60px]">
                <span className="block">We build</span>
                <span className="block">lead flow</span>
              </h2>
              <span className="pointer-events-none absolute bottom-[-0.65rem] right-[-0.2rem] rotate-[-2deg] font-condiment text-[36px] text-neon opacity-95 mix-blend-exclusion sm:text-[48px] md:text-[58px] lg:text-[68px]">
                direct source
              </span>
            </div>

            <p className="max-w-[266px] font-mono text-[14px] uppercase leading-[1.7] tracking-[0.08em] text-cream sm:text-[15px] md:text-[16px]">
              We run Google ads, Meta ads, email campaigns, and special AI tech to capture high quality MCA data for clean files with strong response rates.
            </p>
          </div>

          <div className="flex items-end justify-between gap-10">
            <div className="space-y-8">
              <p className="max-w-[360px] font-mono text-[14px] uppercase leading-[1.7] tracking-[0.08em] text-[#010828] opacity-100 lg:text-cream/10">
                {decorativeCopy}
              </p>
              <p className="max-w-[360px] font-mono text-[14px] uppercase leading-[1.7] tracking-[0.08em] text-[#010828] opacity-100 lg:text-cream/10">
                {decorativeCopy}
              </p>
            </div>

            <div className="hidden space-y-8 lg:block">
              <p className="max-w-[360px] font-mono text-[14px] uppercase leading-[1.7] tracking-[0.08em] text-cream/10">
                {decorativeCopy}
              </p>
              <p className="max-w-[360px] font-mono text-[14px] uppercase leading-[1.7] tracking-[0.08em] text-cream/10">
                {decorativeCopy}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-shell px-5 sm:px-7 lg:px-10">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="font-grotesk text-[32px] uppercase leading-[0.95] text-cream sm:text-[44px] md:text-[52px] lg:text-[60px]">
                <span className="block">Lead files for</span>
                <span className="ml-12 block sm:ml-24 lg:ml-32">
                  <span className="font-condiment normal-case text-neon">MCA</span> teams
                </span>
              </h2>
            </div>

            <button type="button" className="group inline-flex w-fit flex-col items-start">
              <div className="flex items-end gap-3">
                <span className="font-grotesk text-[32px] uppercase leading-none text-cream sm:text-[44px] md:text-[52px] lg:text-[60px]">
                  Get
                </span>
                <div className="flex flex-col pb-1">
                  <span className="font-grotesk text-[20px] uppercase leading-none text-cream sm:text-[26px] md:text-[32px] lg:text-[36px]">
                    Fresh
                  </span>
                  <span className="font-grotesk text-[20px] uppercase leading-none text-cream sm:text-[26px] md:text-[32px] lg:text-[36px]">
                    Files
                  </span>
                </div>
              </div>
              <span className="mt-3 h-[6px] w-full bg-neon shadow-glow sm:h-[8px] lg:h-[10px]" />
            </button>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {collectionCards.map((card, index) => (
              <article
                key={index}
                className="liquid-glass rounded-[32px] p-[18px] transition hover:bg-white/10"
              >
                <div className="relative overflow-hidden rounded-[24px] pb-[100%]">
                  <VideoBackground
                    src={card.video}
                    className="absolute inset-0 h-full w-full object-cover"
                  />

                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="liquid-glass flex items-center justify-between rounded-[20px] px-5 py-4">
                      <div>
                        <p className="font-grotesk text-[11px] uppercase tracking-[0.14em] text-cream/70">
                          File type:
                        </p>
                        <p className="mt-1 font-grotesk text-[16px] uppercase text-cream">{card.score}</p>
                      </div>

                      <button
                        type="button"
                        className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#b724ff] to-[#7c3aed] text-white shadow-lg shadow-purple-500/50 transition hover:scale-110"
                        aria-label="View card"
                      >
                        <ChevronRight size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-background pb-14">
        <div className="relative overflow-hidden">
          <VideoBackground
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055729_72d66327-b59e-4ae9-bb70-de6ccb5ecdb0.mp4"
            className="block h-auto w-full"
            objectCover={false}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#010828]/22 to-[#010828]/18" />

          <div className="absolute inset-0 flex items-center">
            <div className="w-full">
              <div className="ml-auto max-w-[980px] px-5 sm:px-7 lg:pl-[15%] lg:pr-[20%]">
                <div className="relative text-right">
                  <span className="absolute left-0 top-[-1.2rem] font-condiment text-[17px] text-neon opacity-95 mix-blend-exclusion sm:text-[28px] md:text-[42px] lg:text-[68px]">
                    ready to blast
                  </span>
                  <h2 className="font-grotesk text-[16px] uppercase leading-[1.05] text-cream sm:text-[26px] md:text-[42px] lg:text-[60px]">
                    <span className="mb-4 block sm:mb-7 lg:mb-12">Direct source.</span>
                    <span className="block">High revenue.</span>
                    <span className="block">Low competition.</span>
                    <span className="block">Built for sms response.</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-[12%] left-[8%] z-20 sm:bottom-[16%] lg:bottom-[20%]">
            <FinalSocialStack />
          </div>
        </div>
      </section>
    </div>
  )
}
