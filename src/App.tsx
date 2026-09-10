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
    <div className="app">
      <header className="header">
        <h1 className="title">WA Number Extractor</h1>
        <p className="subtitle">Tempel teks, ekstrak nomor, langsung chat WhatsApp</p>
      </header>

      <div className="textarea-wrap">
        <label htmlFor="input" className="sr-only">
          Tempel teks atau ketik nomor telepon
        </label>
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
          rows={6}
        />
        <div className="textarea-actions">
          <button
            type="button"
            className="btn-ghost"
            onClick={handlePaste}
            aria-label="Tempel dari clipboard"
          >
            Tempel
          </button>
          {input && (
            <button
              type="button"
              className="btn-ghost"
              onClick={handleClear}
              aria-label="Hapus input"
            >
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
        <div className="cta-divider" aria-hidden="true" />
        <button
          type="button"
          className="cta"
          disabled={ctaDisabled}
          onClick={handleOpenWhatsApp}
          aria-describedby={ctaDisabled ? 'cta-reason' : undefined}
        >
          Buka WhatsApp
        </button>
        {ctaDisabled && ctaReason && (
          <p id="cta-reason" className="cta-reason">
            {ctaReason}
          </p>
        )}
      </div>

      <footer className="footer">
        <span>100% client-side. No data leaves your device.</span>
      </footer>
    </div>
  )
}

export default App
