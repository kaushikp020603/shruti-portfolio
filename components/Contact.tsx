import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 px-5 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-2xl">
        <Reveal className="terminal-border p-6 sm:p-8">
          <p className="font-mono text-text-muted text-sm mb-6">
            $ ssh contact@portfolio
          </p>
          <h2 className="text-2xl font-bold mb-2">Establish Connection</h2>
          <p className="text-text-muted mb-8">
            Available for roles in data engineering, observability, and
            AI/ML infrastructure. Based in Mumbai, India.
          </p>
          <div className="space-y-4 font-mono text-sm">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <span className="text-text-muted">email:</span>
              <a href="mailto:shrutimandavkar2003@gmail.com" className="break-all text-cyan hover:underline">
                shrutimandavkar2003@gmail.com
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <span className="text-text-muted">phone:</span>
              <a href="tel:+919167308027" className="break-all text-cyan hover:underline">
                +91 91673 08027
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <span className="text-text-muted">github:</span>
              <a href="https://github.com/shruti26mandavkar" target="_blank" rel="noopener noreferrer" className="break-all text-cyan hover:underline">
                github.com/shruti26mandavkar
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <span className="text-text-muted">linkedin:</span>
              <a href="https://linkedin.com/in/shruti-mandavkar" target="_blank" rel="noopener noreferrer" className="break-all text-cyan hover:underline">
                linkedin.com/in/shruti-mandavkar
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <span className="text-text-muted">resume:</span>
              <a href="/Shruti_Mandavkar_Resume.pdf" target="_blank" rel="noopener noreferrer" className="break-all text-cyan hover:underline">
                Shruti_Mandavkar_Resume.pdf
              </a>
            </div>
          </div>
          <div className="mt-8 border-t border-white/10 pt-6">
            <p className="font-mono text-sm text-green">
              Connection established. Ready for input._
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
