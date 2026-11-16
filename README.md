# EKİCİ ET MANGAL — Dijital Menü

QR kod üzerinden açılabilecek, mobil uyumlu dijital menü arayüzü. Bu ilk sürüm GitHub Pages üzerinde yayınlanabilir ve Supabase bağlantısı olmadan önizleme/test amacıyla çalışır.

## Özellikler

- Koyu siyah, bordo ve kırmızı marka tasarımı
- Mobil uyumlu menü ve kategori filtreleri
- Pişmiş ürünler, çiğ / pişirmeye hazır ürünler, içecekler ve ekstralar için başlangıç kategorileri
- Ürün adı, açıklama, fiyat, birim ve görsel alanları
- Ürün ekleme, düzenleme, silme ve yayından kaldırma
- Kategori ekleme, düzenleme, silme ve yayından kaldırma
- Ürünleri öne çıkarma
- Yönetici paneli önizlemesi
- Verilerin bu tarayıcıda `localStorage` ile saklanması
- GitHub Pages alt dizinleri için göreli asset yolları

## Önemli: Bu sürümün sınırları

Supabase henüz bağlanmadığı için yönetici paneli **güvenli bir gerçek yönetici girişi değildir**. “Yönetici Girişi” düğmesi bir demo paneli açar. Ürün ve kategori değişiklikleri yalnızca işlemi yaptığınız tarayıcıda saklanır; başka telefonlara veya müşterilere senkronize olmaz. Bu sürümü gerçek işletme yönetimi için güvenli kabul etmeyin.

Ürün görsellerini dosya olarak ekleme özelliği demo aşamasında tarayıcı depolamasını kullanır. Kalıcı ve ortak görsel depolaması Supabase Storage entegrasyonunda yapılacaktır.

Başlangıç ürünleri ve açıklamaları örnek içeriktir. Fiyatlar özellikle boş bırakılmıştır; işletmenin gerçek fiyatları girilmelidir.

## Yerel bilgisayarda çalıştırma

Node.js 20 veya üzeri önerilir.

```bash
npm install
npm run dev
```

Tarayıcıda Vite'ın verdiği yerel adresi açın.

Üretim derlemesi:

```bash
npm run build
npm run preview
```

## GitHub'a yükleme

1. GitHub'da `ekici-et-mangal-menu` adında yeni ve boş bir repository oluşturun.
2. Bu klasördeki dosyaları repository'nin ana dizinine yükleyin.
3. GitHub repository içinde **Settings → Pages** bölümünü açın.
4. **Build and deployment → Source** alanında **GitHub Actions** seçin.
5. Aşağıdaki workflow dosyası projeyi derleyip Pages'e yayınlar.

## GitHub Pages URL'si

Repository adı `ekici-et-mangal-menu` ise yayın adresi genellikle:

`https://GITHUB_KULLANICI_ADINIZ.github.io/ekici-et-mangal-menu/`

## Sonraki aşama: Supabase

Supabase projesi hazır olduğunda:

- Supabase Auth ile gerçek yönetici girişi
- PostgreSQL tablolarıyla kategori ve ürün yönetimi
- Storage ile ürün görselleri
- RLS politikalarıyla yalnızca yetkili yöneticinin düzenleme yapabilmesi
- Müşteri menüsünde herkese açık, yalnızca aktif ürün/kategori okuması
- Verilerin tüm cihazlarda senkronize olması

kurulacaktır. `service_role` veya secret anahtar hiçbir zaman tarayıcı tarafına konulmamalıdır.
