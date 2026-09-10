const PHONE_REGEX = /(?:\+?\d{1,4}[\s-]?)?(?:\(?\d{1,5}\)?[\s-]?)?\d{1,5}[\s-]?\d{1,5}[\s-]?\d{0,5}/g;

const CLEAN_REGEX = /[^\d+]/g;

function normalizeToE164(raw: string): string | null {
  const cleaned = raw.replace(CLEAN_REGEX, '');

  if (cleaned.length < 8 || cleaned.length > 15) return null;

  if (cleaned.startsWith('+')) {
    const digits = cleaned.slice(1);
    if (digits.length < 7 || digits.length > 14) return null;
    return cleaned;
  }

  if (cleaned.startsWith('628')) return `+${cleaned}`;
  if (cleaned.startsWith('62') && cleaned.length >= 10) return `+${cleaned}`;
  if (cleaned.startsWith('08')) return `+62${cleaned.slice(1)}`;
  if (cleaned.startsWith('0')) {
    const withPrefix = `+62${cleaned.slice(1)}`;
    if (withPrefix.length >= 10 && withPrefix.length <= 15) return withPrefix;
  }

  if (cleaned.length >= 10) {
    return `+${cleaned}`;
  }

  return null;
}

function formatReadable(e164: string): string {
  if (e164.startsWith('+628') || e164.startsWith('+62')) {
    const local = e164.slice(3);
    if (local.length >= 9) {
      return `+62 ${local.slice(0, 3)}-${local.slice(3, 7)}-${local.slice(7)}`;
    }
    return e164;
  }
  return e164;
}

export interface ExtractedNumber {
  raw: string;
  e164: string;
  readable: string;
}

export function extractNumbers(text: string): ExtractedNumber[] {
  const matches = text.match(PHONE_REGEX) ?? [];
  const seen = new Set<string>();
  const results: ExtractedNumber[] = [];

  for (const match of matches) {
    const trimmed = match.trim();
    if (trimmed.length < 5) continue;

    const e164 = normalizeToE164(trimmed);
    if (!e164 || seen.has(e164)) continue;
    seen.add(e164);
    results.push({
      raw: trimmed,
      e164,
      readable: formatReadable(e164),
    });
  }

  return results;
}
