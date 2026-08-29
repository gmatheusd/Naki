type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[]
}

/**
 * Injeta Schema.org como JSON-LD.
 * O conteúdo é definido em build time, nunca vem de entrada do usuário.
 */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
