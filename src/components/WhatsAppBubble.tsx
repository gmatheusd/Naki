import { MessageCircle } from 'lucide-react'
import { WA } from '@/config/siteConfig'

export function WhatsAppBubble() {
  return (
    <a
      href={WA.footer}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com o comercial da Nakí no WhatsApp"
      className="group fixed right-5 bottom-5 z-50"
    >
      <span className="pointer-events-none absolute top-2 right-full mr-3 hidden rounded-lg bg-white px-3 py-1.5 text-xs font-bold whitespace-nowrap text-petroleo opacity-0 shadow-lg transition-opacity group-hover:opacity-100 md:block">
        Falar com o comercial
      </span>
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-2xl transition-transform hover:scale-[1.02] md:h-16 md:w-16">
        <MessageCircle className="h-7 w-7 fill-current text-white md:h-8 md:w-8" aria-hidden />
      </span>
    </a>
  )
}
