// components/about-section.tsx
export function AboutSection() {
  return (
    <section className="min-h-screen py-20 px-8 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2 text-foreground-secondary/60 text-sm font-mono mb-8">
          <span className="text-green-500">➜</span>
          <span>man bhabuk</span>
        </div>

        <div className="font-mono text-sm space-y-6 text-foreground-secondary/70">
          <div>
            <div className="text-foreground mb-2">NAME</div>
            <div className="pl-8">Bhabuk Bhattarai - Developer, Writer, Tinkerer</div>
          </div>

          <div>
            <div className="text-foreground mb-2">SYNOPSIS</div>
            <div className="pl-8">
              Building experiments at the intersection of code and creativity.
              Based in Kathmandu, Nepal.
            </div>
          </div>

          <div>
            <div className="text-foreground mb-2">DESCRIPTION</div>
            <div className="pl-8 space-y-4">
              <p>
                I write code, poetry, and sometimes they overlap. Currently exploring
                web experiences, generative systems, and interactive fiction.
              </p>
              <p>
                When not coding: reading, wandering, or attempting to capture
                fleeting thoughts before they vanish.
              </p>
            </div>
          </div>

          <div>
            <div className="text-foreground mb-2">SEE ALSO</div>
            <div className="pl-8">
              ls projects/, cat writings.log, whois contact
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}