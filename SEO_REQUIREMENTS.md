# SEO Gereklilikleri ve Görev Listesi

Bu doküman; portföy siten (Next.js statik export) için maksimum SEO, performans, erişilebilirlik ve arama görünürlüğü hedefiyle yapılması gerekenleri önceliklere göre (P0 Kritik, P1 Önemli, P2 İleri Düzey) ayrılmış görevler halinde listeler. Her görev ölçülebilir kabul kriterleri içerir.

---
## Legend
- [ ] Açık (yapılmadı)
- [x] Tamamlandı
- P0: Kritik – İlk sprintte bitmeli
- P1: Önemli – İkinci aşama
- P2: İleri / Nice-to-have

---
## 1. Temel Teknik SEO (P0)
| Görev | Öncelik | Açıklama | Kabul Kriteri |
|-------|---------|----------|---------------|
| [x] Sayfa başlıkları benzersiz | P0 | Her route için özgün `<title>` (Home, About, Projects, Skills, Experience, Contact) | Her sayfa kaynakta farklı `<title>` gösteriyor; SERP kesilmiyor (< 60 karakter) |
| [x] Meta description ekle | P0 | 140–160 karakter; eylem/öz tanımı | Lighthouse SEO bölümünde "Missing meta description" uyarısı yok |
| [x] Canonical etiket | P0 | `https://erencolak.com/route` formatı | Kaynakta `<link rel="canonical" ...>` mevcut; tekil index |
| [x] Robots kontrol | P0 | `robots.ts` çıktısı: indexlenebilir sayfalar | `/robots.txt` içeriği doğrulandı; istenmeyen noindex yok |
| [x] Sitemap güncel | P0 | Tüm public route'lar listede | `sitemap.xml` her deploy sonrası güncel |
| [x] 404 sayfası CTA | P0 | Geri dönüş linki (Home / Projects) | 404 açıldığında yönlendirme linkleri var |
| [x] HTML lang & charset | P0 | `<html lang="en">`, `<meta charset="utf-8">` | Mevcut ve valide |

## 2. Performans & Core Web Vitals (P0)
| Görev | Öncelik | Açıklama | Kabul Kriteri |
|-------|---------|----------|---------------|
| [ ] LCP optimizasyonu | P0 | Hero başlığı + kritik font preload | Mobil Lighthouse LCP < 2.5s |
| [ ] CLS sıfırlama | P0 | Görsel boyutları / layout shift yok | CLS < 0.1 |
| [ ] Font preload / swap | P0 | `next/font` kullanımı optimize | FOUT kısa, layout kaymıyor |
| [ ] Üçüncü parti script yok/min | P0 | Gereksiz script çıkar | "Total Blocking Time" düşük (<150ms) |
| [ ] Görseller optimize (WebP) | P0 | Ağır PNG/JPG küçült | Toplam aktarım boyutu düşer |
| [ ] Lazy load alt bölümler | P0 | Fold altı section’lar geç yüklenir | First contentful alan hızlı |

## 3. Semantik & İçerik Yapısı (P0/P1)
| Görev | Öncelik | Açıklama | Kabul Kriteri |
|-------|---------|----------|---------------|
| [ ] Tekil h1 | P0 | Hero’da tek `<h1>` | Diğer başlıklar h2/h3 |
| [ ] Başlık hiyerarşisi | P0 | Bölümler mantıklı (What I Do = h2) | HTML outlinerde tutarlı |
| [ ] Liste semantiği | P1 | Teknoloji / bullet grupları `<ul><li>` | Erişilebilirlik analizinde OK |
| [ ] Anlamlı buton/anchor metin | P1 | "Click here" yok, eylem odaklı | Lighthouse link-name pass |
| [x] Alt metinler | P0 | Her görsel fonksiyonel alt | Axe audit hatasız |

## 4. Structured Data (Schema.org) (P1)
| Görev | Öncelik | Açıklama | Kabul Kriteri |
|-------|---------|----------|---------------|
| [x] Person JSON-LD | P1 | Ad, rol, sameAs linkler | Rich Results Test: valid |
| [x] WebSite + SearchAction (ops.) | P1 | Site entity tanımı | SearchAction henüz eklenmedi (ileride) |
| [ ] Project / SoftwareSourceCode | P1 | Featured Projects için | En az 3 proje schema geçerli |
| [ ] BreadcrumbList | P2 | Derinlik artarsa | Testte breadcrumb görünüyor |
| [ ] FAQ (ops.) | P2 | SSS eklersen | SERP FAQ snippet |

## 5. Open Graph & Sosyal (P0/P1)
| Görev | Öncelik | Açıklama | Kabul Kriteri |
|-------|---------|----------|---------------|
| [x] OG temel taglar | P0 | title, description, url, type | Facebook debugger hatasız |
| [x] OG image 1200x630 | P0 | `/public/og.svg` (orijinal gereksinimde .jpg, SVG kullanıldı) | Twitter Card / OG preview doğru |
| [x] Twitter Card | P1 | `summary_large_image` | Card validator: OK |
| [x] Favicon / Touch icons | P1 | 32x32, 180x180, mask-icon | Lighthouse favicon warning yok |
| [x] Theme-color (dark/light) | P1 | Prefers-color-scheme bazlı | Meta taglar kaynakta |

## 6. Erişilebilirlik (A11y) (P1)
| Görev | Öncelik | Açıklama | Kabul Kriteri |
|-------|---------|----------|---------------|
| [ ] Kontrast kontrol | P1 | Minimum AA | Lighthouse a11y > 95 |
| [ ] Klavye navigasyonu | P1 | Focus ring bozulmamış | Tab ile erişilebilir |
| [ ] Skip to content link | P2 | İlk odak atlama | Ekran okuyucu testi |
| [ ] Prefers-reduced-motion | P2 | Animasyon azalt fallback | Sistem motion reduce açıkken daha az animasyon |

## 7. İç Bağlantı & Yapısal Akış (P1)
| Görev | Öncelik | Açıklama | Kabul Kriteri |
|-------|---------|----------|---------------|
| [ ] Footer mini site-map | P1 | Ana route linkleri tekrar | Crawl graph'ta orphan yok |
| [ ] Proje -> Deneyim linkleri | P2 | İlgili ilişkilendirme | Tarama sonrası dahili link artar |
| [ ] Dış link rel | P1 | `noopener noreferrer` | Güvenlik uyarısı yok |

## 8. Güvenlik / İtibar (P1)
| Görev | Öncelik | Açıklama | Kabul Kriteri |
|-------|---------|----------|---------------|
| [ ] HTTPS zorunlu redirect | P0 | Vercel domain | HTTP -> HTTPS 301 |
| [ ] www redirect (ops.) | P1 | Tek canonical | www -> apex 301 |
| [ ] Referrer policy | P2 | `strict-origin-when-cross-origin` | Response header doğrulandı |
| [ ] CSP (ileride) | P2 | XSS azalt | Basit script-src policy |

## 9. Uluslararasılaştırma (i18n) (P2)
| Görev | Öncelik | Açıklama | Kabul Kriteri |
|-------|---------|----------|---------------|
| [ ] Dil stratejisi | P2 | /en /tr ya da domain | Karar dokümanı |
| [ ] hreflang etiketleri | P2 | Çok dillilik sonrası | Google hreflang coverage |

## 10. Ölçümleme (P1)
| Görev | Öncelik | Açıklama | Kabul Kriteri |
|-------|---------|----------|---------------|
| [ ] Search Console kaydı | P0 | Domain doğrulama | Performans raporları oluşuyor |
| [ ] Bing Webmaster | P2 | Ek görünürlük | Index grafiği aktif |
| [ ] Analytics entegrasyonu | P1 | GA4 / Plausible | Trafik ölçülüyor |
| [ ] Web Vitals RUM | P2 | `web-vitals` raporu | Konsolda metrik loglanıyor |
| [ ] Lighthouse CI (ops.) | P2 | PR bazlı kalite | Pipeline raporu |

## 11. Build & Dağıtım (P1)
| Görev | Öncelik | Açıklama | Kabul Kriteri |
|-------|---------|----------|---------------|
| [x] Temiz build script | P1 | `npm run clean` (.next/out) | Script çalışıyor |
| [ ] Görsel envanter temizlik | P1 | Kullanılmayan dosya sil | Public klasör sade |
| [ ] OG image otomasyonu | P2 | Dynamic OG (ops.) | Her proje share görseli |

## 12. Görsel / Medya (P1)
| Görev | Öncelik | Açıklama | Kabul Kriteri |
|-------|---------|----------|---------------|
| [ ] Manuel WebP dönüştürme | P1 | Ağır PNG/JPG optimize | Toplam kb düşüşü ölçülür |
| [ ] Priority görsel seçimi | P1 | Sadece hero critical | Lighthouse LCP görseli doğru |
| [ ] Unoptimized -> Manuel kontrol | P1 | next/image optimize kapalı | Yükleme süresi stabil |

## 13. İçerik Stratejisi (P2)
| Görev | Öncelik | Açıklama | Kabul Kriteri |
|-------|---------|----------|---------------|
| [ ] Proje açıklamalarını genişlet | P2 | 150–250 kelime / proje | Sayfa kelime yoğunluğu artar |
| [ ] Hedef keyword mapping | P2 | Ana sayfa & alt sayfa | Dahili doküman |
| [ ] Blog başlangıcı | P2 | 3 uzun form yazı | İlk 3 içerik yayın |

## 14. İleri Düzey (P2)
| Görev | Öncelik | Açıklama | Kabul Kriteri |
|-------|---------|----------|---------------|
| [ ] Manifest.json | P2 | Minimal PWA meta | Lighthouse PWA basic pass |
| [ ] Offline cache (SW) | P2 | Basit static asset cache | Offline açılış çalışıyor |
| [ ] humans.txt | P2 | Branding / iletişim | `/humans.txt` erişilebilir |
| [ ] Edge CDN header tuning | P2 | Cache-Control ince ayar | İlk byte latency düşer |

---
## Hızlı Kazanım (Quick Wins)
- [x] `public/og.jpg` üret (Not: `og.svg` olarak uygulandı)
- [x] Person + WebSite JSON-LD ekle
- [x] Canonical tag şablonu
- [ ] Görselleri sıkıştır (Squoosh)
- [x] Alt metinleri denetle
- [ ] Lighthouse raporu kaydet (baseline)

---
## Ölçüm Metrik Hedefleri
| Metrik | Hedef | Araç |
|--------|-------|------|
| Performance | > 90 | Lighthouse |
| LCP | < 2.5s | DevTools / WebPageTest |
| CLS | < 0.1 | Lighthouse |
| INP | < 200ms | Web Vitals |
| HTML (ana sayfa) | < 80KB | Network panel |
| Structured Data Errors | 0 | Rich Results Test |
| 404 Soft Errors | 0 | Search Console |

---
## Uygulama Sıralı Yol Haritası
1. (P0) Meta / Canonical / OG / Alt / LCP / CLS
2. (P1) Structured Data + Görsel optimizasyon + Footer navigation
3. (P1) Analytics + Search Console + Web Vitals RUM
4. (P2) Blog / Çok dillilik / Manifest / Dynamic OG

---
## İsteğe Bağlı Komponent / Kod Parçaları (Plan)
- [ ] `<SEOProvider>`: Head içinde JSON-LD + meta injection
- [ ] `<StructuredData type="Person" />`
- [ ] `<Canonical />` yardımı: pathname tabanlı canonical
- [ ] `scripts/optimize-images.mjs` (imagemin / sharp)

---
## Notlar
- Statik export modunda server runtime yok; tüm SEO verisi build-time üretilecek.
- Dinamik veri (GitHub stats) istenirse: build script ile JSON generate.
- OG görsel otomasyonu için ileride @vercel/og ya da local satori (SSR gerekirse export modundan çıkılır).

---
Bu listeyi güncelleyip işaretleyerek ilerleyebilirsin. Sonraki adım istersen: "Schema JSON-LD component ekle" yaz ve ekleyeyim.
