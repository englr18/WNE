import { useState, useCallback, useRef, useMemo } from 'react'
import { extractNumbers } from './lib/extract'
import './App.css'

type BannerType = 'error' | 'warning' | 'info'

interface Banner {
  type: BannerType
  message: string
}

function hasShortDigitSequences(text: string): boolean {
  const shortDigitRegex = /\b\d{7}\b/g;
  return shortDigitRegex.test(text);
}

function getBannerForInput(
  text: string,
  count: number,
  clipboardError: boolean
): Banner | null {
  if (clipboardError) {
    return { type: 'error', message: 'Clipboard tidak dapat diakses. Paste atau ketik nomor secara manual.' }
  }
  if (!text.trim()) return null
  if (count === 0) {
    if (hasShortDigitSequences(text)) {
      return { type: 'info', message: 'Nomor 7 digit terdeteksi. Untuk nomor telepon rumah, sertakan kode area (contoh: 021-555-1234).' }
    }
    return { type: 'warning', message: 'Tidak ada nomor telepon terdeteksi. Coba paste teks yang memuat nomor dengan format Indonesia (08xx) atau internasional (+xx).' }
  }
  return null
}

function App() {
  const [input, setInput] = useState('')
  const [selectedE164, setSelectedE164] = useState<string | null>(null)
  const [clipboardError, setClipboardError] = useState(false)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const numbers = useMemo(() => extractNumbers(input), [input])
  const banner = getBannerForInput(input, numbers.length, clipboardError)
  const selected = numbers.find((n) => n.e164 === selectedE164) ?? null

  const handlePaste = useCallback(async () => {
    setClipboardError(false)
    try {
      const text = await navigator.clipboard.readText()
      setInput(text)
      setSelectedE164(null)
    } catch {
      setClipboardError(true)
    }
  }, [])

  const handleClear = useCallback(() => {
    setInput('')
    setSelectedE164(null)
    setClipboardError(false)
    textareaRef.current?.focus()
  }, [])

  const handleSelect = useCallback((e164: string) => {
    setSelectedE164((prev) => (prev === e164 ? null : e164))
  }, [])

  const handleOpenWhatsApp = useCallback(() => {
    if (selectedE164) {
      window.open(`https://wa.me/${selectedE164}`, '_blank')
    }
  }, [selectedE164])

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' && selectedE164 && !e.shiftKey) {
        e.preventDefault()
        window.open(`https://wa.me/${selectedE164}`, '_blank')
      }
    },
    [selectedE164]
  )

  const ctaDisabled = !selected
  const ctaReason = !input.trim()
    ? 'Belum ada nomor terdeteksi'
    : numbers.length > 1 && !selected
      ? 'Pilih nomor dari daftar'
      : numbers.length === 0
        ? 'Tidak ada nomor terdeteksi'
        : ''

  return (
    <>
      <nav className="nav">
        <div className="nav-inner">
          <div className="nav-brand">
            <img src="/icon.svg" alt="" className="nav-logo" width="28" height="28" />
            <span className="nav-wordmark">WA Number Extractor</span>
          </div>
          <div className="nav-links">
            <a href="#features" className="nav-link">Fitur</a>
            <a href="#how-it-works" className="nav-link">Cara Kerja</a>
          </div>
        </div>
      </nav>

      <main className="app">
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-headline">
              Extract &amp; Chat<br />
              <span className="hero-headline-accent">in Seconds</span>
            </h1>
            <p className="hero-subtitle">
              Paste messy text from WhatsApp groups, social media, or notes — we find the numbers and open WhatsApp instantly.
            </p>
          </div>

          <div className="hero-widget">
            <div className="widget-card">
              <label htmlFor="input" className="textarea-label">
                Tempel teks atau ketik nomor telepon
              </label>
              <div className="textarea-wrap">
                <textarea
                  ref={textareaRef}
                  id="input"
                  className="textarea"
                  inputMode="tel"
                  placeholder="Tempel teks berisi nomor telepon, atau ketik nomor langsung..."
                  value={input}
                  onChange={(e) => {
                    setInput(e.target.value)
                    setSelectedE164(null)
                  }}
                  onKeyDown={handleKeyDown}
                  rows={5}
                />
                <div className="textarea-actions">
                  <button
                    type="button"
                    className="btn-ghost"
                    onClick={handlePaste}
                    aria-label="Tempel dari clipboard"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M5.5 2A1.5 1.5 0 0 0 4 3.5V4H3.5A1.5 1.5 0 0 0 2 5.5v8A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 12.5 4H12v-.5A1.5 1.5 0 0 0 10.5 2h-5ZM6 4h4v-.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V4Z" fill="currentColor"/>
                    </svg>
                    Tempel
                  </button>
                  {input && (
                    <button
                      type="button"
                      className="btn-ghost"
                      onClick={handleClear}
                      aria-label="Hapus input"
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M4.5 4.5l7 7M11.5 4.5l-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                      Hapus
                    </button>
                  )}
                </div>
              </div>

              {banner && (
                <div className={`banner banner--${banner.type}`} role="alert">
                  <span className="banner-icon" aria-hidden="true">
                    {banner.type === 'error' ? '!' : banner.type === 'warning' ? '!' : 'i'}
                  </span>
                  {banner.message}
                </div>
              )}

              {numbers.length > 0 && (
                <div className="results">
                  <p className="results-label">
                    {numbers.length === 1
                      ? '1 nomor ditemukan'
                      : `${numbers.length} nomor ditemukan`}
                  </p>
                  <ul className="results-list" role="radiogroup" aria-label="Pilih nomor telepon">
                    {numbers.map((num, i) => {
                      const isSelected = selected?.e164 === num.e164
                      return (
                        <li
                          key={num.e164}
                          className={`result-row ${isSelected ? 'result-row--selected' : ''}`}
                        >
                          <button
                            type="button"
                            className="result-btn"
                            role="radio"
                            aria-checked={isSelected}
                            onClick={() => handleSelect(num.e164)}
                          >
                            <span className={`radio-dot ${isSelected ? 'radio-dot--active' : ''}`} />
                            <span className="result-number">{num.readable}</span>
                            <span className="result-index mono">{String(i + 1).padStart(2, '0')}</span>
                          </button>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              )}

              <div className="cta-area">
                <button
                  type="button"
                  className="cta"
                  disabled={ctaDisabled}
                  onClick={handleOpenWhatsApp}
                  aria-describedby={ctaDisabled ? 'cta-reason' : undefined}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm3.5 5.5L11 10l2.5 2.5-.7.7L9.6 10l3.2-3.2.7.7Z" fill="currentColor"/>
                  </svg>
                  Buka WhatsApp
                </button>
                {ctaDisabled && ctaReason && (
                  <p id="cta-reason" className="cta-reason">
                    {ctaReason}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="trust-badges">
            <div className="badge">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M8 1L2 4v4c0 3.5 2.6 6.8 6 7.5 3.4-.7 6-4 6-7.5V4L8 1Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5.5 8l2 2 3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              100% Private
            </div>
            <div className="badge">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <rect x="2" y="7" width="12" height="7" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M5 7V5a3 3 0 0 1 6 0v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              No Data Stored
            </div>
            <div className="badge">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M8 5v3l2 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              Instant &amp; Free
            </div>
          </div>
        </section>

        <section className="features" id="features">
          <h2 className="section-title">Why WA Number Extractor?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="feature-title">Paste &amp; Go</h3>
              <p className="feature-desc">
                Drop in any text — WhatsApp forwards, social media comments, notes. We find every number automatically.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="feature-title">Privacy First</h3>
              <p className="feature-desc">
                Everything runs in your browser. No servers, no uploads, no tracking. Your data never leaves your device.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="feature-title">One Tap to Chat</h3>
              <p className="feature-desc">
                Select a number, tap the button, and you're in WhatsApp. No copy-paste, no formatting, no friction.
              </p>
            </div>
          </div>
        </section>

        <section className="how-it-works" id="how-it-works">
          <h2 className="section-title">How It Works</h2>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3 className="step-title">Paste text</h3>
              <p className="step-desc">Drop in any text with phone numbers</p>
            </div>
            <div className="step-connector" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3 className="step-title">Pick number</h3>
              <p className="step-desc">Select the number you want to chat</p>
            </div>
            <div className="step-connector" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3 className="step-title">Chat</h3>
              <p className="step-desc">Opens WhatsApp instantly</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <img src="/icon.svg" alt="" className="footer-logo" width="24" height="24" />
            <span className="footer-wordmark">WA Number Extractor</span>
          </div>
          <p className="footer-privacy">
            100% client-side processing. No data ever leaves your device. No servers, no tracking, no accounts.
          </p>
          <div className="footer-links">
            <a href="#features" className="footer-link">Fitur</a>
            <a href="#how-it-works" className="footer-link">Cara Kerja</a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
