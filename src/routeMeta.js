/**
 * SEO metadata for every indexable route. Shared by the useSEO hook (client
 * navigation) and scripts/prerender-routes.mjs (static HTML + sitemap), so
 * keep this file plain JS with no JSX/TS or browser-only imports.
 * Paths must match src/utils/tools.ts and the routes in App.tsx.
 */

export const SITE = {
  name: 'DoAide JSON',
  baseUrl: 'https://json.doaide.com',
  ogImage: 'https://json.doaide.com/og-json.png',
}

export const routes = [
  {
    path: '/',
    h1: 'DoAide JSON',
    title: 'DoAide JSON — Free JSON Formatter, Validator & Developer Tools',
    description:
      'Free online JSON formatter, validator and converter plus JWT decoder, regex tester, Base64, hash and cron tools. Runs in your browser, no login.',
  },
  {
    path: '/formatter',
    h1: 'JSON Formatter',
    title: 'JSON Formatter & Beautifier Online — Free | DoAide JSON',
    description:
      'Format and beautify JSON online with syntax highlighting, indentation control and a collapsible tree view. Free, private, runs in your browser.',
  },
  {
    path: '/validator',
    h1: 'JSON Validator',
    title: 'JSON Validator — Check JSON Syntax Online | DoAide JSON',
    description:
      'Validate JSON and get clear error messages with exact line and column numbers. Free online JSON lint and syntax checker, no login.',
  },
  {
    path: '/json-yaml',
    h1: 'JSON ↔ YAML Converter',
    title: 'JSON to YAML Converter (and YAML to JSON) | DoAide JSON',
    description:
      'Convert JSON to YAML and YAML to JSON instantly. Handy for Kubernetes manifests, Docker Compose and CI configs. Free and private.',
  },
  {
    path: '/json-xml',
    h1: 'JSON ↔ XML Converter',
    title: 'JSON to XML Converter (and XML to JSON) | DoAide JSON',
    description:
      'Convert JSON to XML and XML to JSON online in one click. Free converter that runs entirely in your browser — your data never leaves it.',
  },
  {
    path: '/json-csv',
    h1: 'JSON → CSV Converter',
    title: 'JSON to CSV Converter — Export to Excel | DoAide JSON',
    description:
      'Convert JSON arrays to CSV for Excel or Google Sheets. Nested objects are flattened into columns. Free, instant, no upload needed.',
  },
  {
    path: '/diff',
    h1: 'JSON Diff',
    title: 'JSON Diff — Compare Two JSON Objects Online | DoAide JSON',
    description:
      'Compare two JSON documents side by side and highlight added, removed and changed values. Free online JSON compare tool.',
  },
  {
    path: '/path-finder',
    h1: 'JSON Path Finder',
    title: 'JSONPath Finder — Get the Path to Any Value | DoAide JSON',
    description:
      'Paste JSON, click any value and get its JSONPath expression to use in code, jq or API tests. Free online JSON path finder.',
  },
  {
    path: '/minifier',
    h1: 'JSON Minifier',
    title: 'JSON Minifier — Compress & Minify JSON Online | DoAide JSON',
    description:
      'Minify JSON by stripping all whitespace and line breaks to shrink payload size. Free online JSON compressor, runs in your browser.',
  },
  {
    path: '/schema-validator',
    h1: 'JSON Schema Validator',
    title: 'JSON Schema Validator Online — Draft-07 | DoAide JSON',
    description:
      'Validate JSON data against a JSON Schema and see every error with its path. Free online JSON Schema validator powered by Ajv.',
  },
  {
    path: '/base64',
    h1: 'Base64 Encode/Decode',
    title: 'Base64 Encode & Decode Online — Unicode Safe | DoAide JSON',
    description:
      'Encode text to Base64 or decode Base64 back to text, with full Unicode support. Free online Base64 converter, nothing is uploaded.',
  },
  {
    path: '/url-encode',
    h1: 'URL Encode/Decode',
    title: 'URL Encode & Decode Online — Percent Encoding | DoAide JSON',
    description:
      'Percent-encode or decode URLs and query string components online. Free URL encoder/decoder for developers, runs in your browser.',
  },
  {
    path: '/jwt',
    h1: 'JWT Decoder',
    title: 'JWT Decoder — Decode JSON Web Tokens Online | DoAide JSON',
    description:
      'Decode a JWT to read its header, payload claims and expiry time. Tokens are decoded locally in your browser and never sent anywhere.',
  },
  {
    path: '/hash',
    h1: 'Hash Generator',
    title: 'Hash Generator — MD5, SHA-1, SHA-256, SHA-512 | DoAide JSON',
    description:
      'Generate MD5, SHA-1, SHA-256 and SHA-512 hashes of any text using the Web Crypto API. Free online hash calculator, no upload.',
  },
  {
    path: '/regex',
    h1: 'Regex Tester',
    title: 'Regex Tester — Test Regular Expressions Online | DoAide JSON',
    description:
      'Test JavaScript regular expressions with live match highlighting, capture groups and a library of common patterns. Free online regex tester.',
  },
  {
    path: '/cron',
    h1: 'Cron Parser',
    title: 'Cron Expression Parser — Explain Cron Schedules | DoAide JSON',
    description:
      'Paste a cron expression to get a plain-English explanation and the next run times. Free online crontab parser and schedule checker.',
  },
]

export const canonicalFor = (path) => `${SITE.baseUrl}${path}`

export const metaForPath = (path) => routes.find((r) => r.path === path)

export function jsonLdFor(route) {
  if (route.path === '/') {
    return {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: SITE.name,
      url: canonicalFor('/'),
      description: route.description,
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Any',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
      author: { '@type': 'Organization', name: 'DoAide', url: 'https://doaide.com' },
    }
  }
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: route.h1,
    url: canonicalFor(route.path),
    description: route.description,
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
    isPartOf: { '@type': 'WebSite', name: SITE.name, url: canonicalFor('/') },
  }
}
