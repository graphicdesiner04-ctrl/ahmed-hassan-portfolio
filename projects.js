// ═══════════════════════════════════════════════════════════════
//  PROJECTS.JS — Ahmed Hassan Bahaa Portfolio
//  مشاريع متعددة مع صور من الفولدرات
//  لإضافة مشروع جديد: انسخ أي كتلة وعدّل البيانات
// ═══════════════════════════════════════════════════════════════

// helper — يبني مسار الصورة داخل فولدر /images/ (المشاريع القديمة)
function imgs(folder, prefix, count, ext) {
  ext = ext || 'png';
  var arr = [];
  for (var i = 1; i <= count; i++) {
    var n = i < 10 ? '0' + i : '' + i;
    arr.push('assets/projects/' + folder + '/images/' + prefix + '_' + n + '.' + ext);
  }
  return arr;
}

// helper — يبني مسارات صور من الجذر المباشر للفولدر (المشاريع الجديدة)
function flist(folder, files) {
  return files.map(function(f){ return 'assets/projects/' + folder + '/' + f; });
}

const PROJECTS = [

  // ══════════════════════════════════════════════════════
  //  سوشيال ميديا  —  p1 → p11
  // ══════════════════════════════════════════════════════

  {
    id: 1,
    title: 'Social Media — Fashion Brand',
    titleAr: 'سوشيال ميديا — براند أزياء',
    desc: 'Instagram and Facebook post series for a fashion brand. Bold visuals, trend-driven content and cohesive feed layout.',
    descAr: 'سلسلة بوستات إنستقرام وفيسبوك لعلامة أزياء. تصاميم جريئة، محتوى عصري وتغذية متجانسة.',
    cat: 'Social', year: '2025',
    tags: ['Social Media', 'Instagram', 'Fashion'],
    tagsAr: ['سوشيال ميديا', 'انستقرام', 'أزياء'],
    image:  'assets/projects/p1/Thumbnail - Size copy.png',
    images: imgs('p1', 'Presentation1', 13),
    link: 'https://www.behance.net/ahmedhassanbahaa',
    _bg: 'linear-gradient(135deg,#0d0520 0%,#1a0a35 50%,#0f1040 100%)',
  },

  {
    id: 2,
    title: 'Social Media — Food & Beverage',
    titleAr: 'سوشيال ميديا — أغذية ومشروبات',
    desc: 'Creative social media campaign for a food & beverage brand. Rich colors and strong typography.',
    descAr: 'حملة سوشيال ميديا إبداعية لعلامة أغذية ومشروبات. ألوان غنية وطباعة قوية.',
    cat: 'Social', year: '2025',
    tags: ['Social Media', 'F&B', 'Campaign'],
    tagsAr: ['سوشيال ميديا', 'أغذية', 'حملة'],
    image:  'assets/projects/p2/Thumbnail - Size 2 copy.png',
    images: imgs('p2', 'Presentation2', 13),
    link: 'https://www.behance.net/ahmedhassanbahaa',
    _bg: 'linear-gradient(135deg,#0d0520 0%,#1a0a35 50%,#0f1040 100%)',
  },

  {
    id: 3,
    title: 'Social Media — Real Estate',
    titleAr: 'سوشيال ميديا — عقارات',
    desc: 'Luxury real estate social content. Cinematic photography treatment and premium layout.',
    descAr: 'محتوى سوشيال ميديا لعقارات فاخرة. معالجة سينمائية وتخطيط راقٍ.',
    cat: 'Social', year: '2025',
    tags: ['Social Media', 'Real Estate', 'Luxury'],
    tagsAr: ['سوشيال ميديا', 'عقارات', 'فاخر'],
    image:  'assets/projects/p3/Thumbnail - Size 3 copy.png',
    images: imgs('p3', 'Presentation-3', 13),
    link: 'https://www.behance.net/ahmedhassanbahaa',
    _bg: 'linear-gradient(135deg,#0d0520 0%,#1a0a35 50%,#0f1040 100%)',
  },

  {
    id: 4,
    title: 'Social Media — Tech Startup',
    titleAr: 'سوشيال ميديا — شركة تقنية',
    desc: 'Clean, minimal social media design for a tech startup with bold accent colors.',
    descAr: 'تصميم سوشيال ميديا بسيط لشركة تقنية مع ألوان جريئة.',
    cat: 'Social', year: '2025',
    tags: ['Social Media', 'Tech', 'Minimal'],
    tagsAr: ['سوشيال ميديا', 'تقنية', 'بسيط'],
    image:  'assets/projects/p4/Thumbnail - Size 3 copy.png',
    images: imgs('p4', 'Presentation-4', 13),
    link: 'https://www.behance.net/ahmedhassanbahaa',
    _bg: 'linear-gradient(135deg,#0d0520 0%,#1a0a35 50%,#0f1040 100%)',
  },

  {
    id: 17,
    title: 'Social Media — Brand Campaign',
    titleAr: 'سوشيال ميديا — حملة براند',
    desc: 'Full social media campaign with consistent visual language across all platforms.',
    descAr: 'حملة سوشيال ميديا متكاملة بلغة بصرية موحدة عبر جميع المنصات.',
    cat: 'Social', year: '2025',
    tags: ['Social Media', 'Campaign', 'Branding'],
    tagsAr: ['سوشيال ميديا', 'حملة', 'براندينج'],
    image:  'assets/projects/p5/Thumbnail - Size 5 copy.png',
    images: imgs('p5', 'Presentation-5', 13),
    link: 'https://www.behance.net/ahmedhassanbahaa',
    _bg: 'linear-gradient(135deg,#0d0520 0%,#1a0a35 50%,#0f1040 100%)',
  },

  {
    id: 18,
    title: 'Social Media — Retail Brand',
    titleAr: 'سوشيال ميديا — براند تجاري',
    desc: 'Dynamic social media content for a retail brand. Engaging visuals with a modern aesthetic.',
    descAr: 'محتوى سوشيال ميديا ديناميكي لعلامة تجارية. تصاميم جذابة بجماليات عصرية.',
    cat: 'Social', year: '2025',
    tags: ['Social Media', 'Retail', 'Dynamic'],
    tagsAr: ['سوشيال ميديا', 'تجزئة', 'ديناميكي'],
    image:  'assets/projects/p6/Thumbnail - Size 7 copy.png',
    images: imgs('p6', 'Presentation-7', 13),
    link: 'https://www.behance.net/ahmedhassanbahaa',
    _bg: 'linear-gradient(135deg,#0d0520 0%,#1a0a35 50%,#0f1040 100%)',
  },

  {
    id: 19,
    title: 'Social Media — Lifestyle Brand',
    titleAr: 'سوشيال ميديا — براند لايف ستايل',
    desc: 'Lifestyle brand social media presence with editorial-style photography and typography.',
    descAr: 'حضور سوشيال ميديا لعلامة لايف ستايل بتصوير وطباعة بأسلوب تحريري.',
    cat: 'Social', year: '2025',
    tags: ['Social Media', 'Lifestyle', 'Editorial'],
    tagsAr: ['سوشيال ميديا', 'لايف ستايل', 'تحريري'],
    image:  'assets/projects/p8/Thumbnail - Size 8 copy.png',
    images: imgs('p8', 'Presentation-8', 13),
    link: 'https://www.behance.net/ahmedhassanbahaa',
    _bg: 'linear-gradient(135deg,#0d0520 0%,#1a0a35 50%,#0f1040 100%)',
    wide: true,
  },

  {
    id: 20,
    title: 'Social Media — Medical Brand',
    titleAr: 'سوشيال ميديا — علامة طبية',
    desc: 'Professional and clean social media content for a medical or health brand.',
    descAr: 'محتوى سوشيال ميديا احترافي لعلامة طبية أو صحية.',
    cat: 'Social', year: '2025',
    tags: ['Social Media', 'Medical', 'Clean'],
    tagsAr: ['سوشيال ميديا', 'طبي', 'نظيف'],
    image:  'assets/projects/p9/Thumbnail - Size 9 copy.png',
    images: imgs('p9', 'Presentation-9', 13),
    link: 'https://www.behance.net/ahmedhassanbahaa',
    _bg: 'linear-gradient(135deg,#0d0520 0%,#1a0a35 50%,#0f1040 100%)',
  },

  {
    id: 21,
    title: 'Social Media — Beauty Brand',
    titleAr: 'سوشيال ميديا — براند تجميل',
    desc: 'Elegant and refined social media designs for a beauty and cosmetics brand.',
    descAr: 'تصاميم سوشيال ميديا أنيقة لعلامة تجميل ومستحضرات.',
    cat: 'Social', year: '2025',
    tags: ['Social Media', 'Beauty', 'Elegant'],
    tagsAr: ['سوشيال ميديا', 'تجميل', 'أنيق'],
    image:  'assets/projects/p10/Thumbnail - Size 10 copy.png',
    images: imgs('p10', 'Presentation-10', 13),
    link: 'https://www.behance.net/ahmedhassanbahaa',
    _bg: 'linear-gradient(135deg,#0d0520 0%,#1a0a35 50%,#0f1040 100%)',
  },

  {
    id: 22,
    title: 'Social Media — Sports Brand',
    titleAr: 'سوشيال ميديا — براند رياضي',
    desc: 'High-energy social media content for a sports brand. Bold, dynamic, performance-driven.',
    descAr: 'محتوى سوشيال ميديا عالي الطاقة لعلامة رياضية. جريء وديناميكي.',
    cat: 'Social', year: '2025',
    tags: ['Social Media', 'Sports', 'Dynamic'],
    tagsAr: ['سوشيال ميديا', 'رياضة', 'ديناميكي'],
    image:  'assets/projects/p11/Thumbnail - Size 11 copy.png',
    images: imgs('p11', 'Presentation-11', 13),
    link: 'https://www.behance.net/ahmedhassanbahaa',
    _bg: 'linear-gradient(135deg,#0d0520 0%,#1a0a35 50%,#0f1040 100%)',
  },

  // ══════════════════════════════════════════════════════
  //  ملفات الشركات  —  P12 → P15
  // ══════════════════════════════════════════════════════

  {
    id: 5,
    title: 'Company Profile — Etching',
    titleAr: 'ملف الشركة — إيتشينج',
    desc: 'Premium company profile design for Etching, a creative production company.',
    descAr: 'تصميم ملف شركة احترافي لشركة Etching للإنتاج الإبداعي.',
    cat: 'Print', year: '2025',
    tags: ['Company Profile', 'Print', 'Editorial'],
    tagsAr: ['ملف شركة', 'مطبوعات', 'تحريري'],
    image:  'assets/projects/P12 - PROFILE/Thumbnail - Size 12 copy.png',
    images: imgs('P12 - PROFILE', 'Presentation-12', 13),
    link: 'https://www.behance.net/gallery/224062339/Company-Profile-Etching',
    _bg: 'linear-gradient(135deg,#060e14 0%,#0a1428 50%,#060a12 100%)',
  },

  {
    id: 6,
    title: 'Company Profile — DOJO',
    titleAr: 'ملف الشركة — دوجو',
    desc: 'Corporate profile for DOJO, a martial arts & fitness training center.',
    descAr: 'ملف مؤسسي لمركز دوجو للفنون القتالية واللياقة.',
    cat: 'Print', year: '2025',
    tags: ['Company Profile', 'Sports', 'Print'],
    tagsAr: ['ملف شركة', 'رياضة', 'مطبوعات'],
    image:  'assets/projects/P13 - PROFILE/Thumbnail - Size 13 copy.png',
    images: imgs('P13 - PROFILE', 'Presentation-13', 13),
    link: 'https://www.behance.net/gallery/224062399/Company-Profile-DOJO',
    _bg: 'linear-gradient(135deg,#060e16 0%,#0a1628 50%,#060810 100%)',
  },

  {
    id: 7,
    title: 'Company Profile — Grasse',
    titleAr: 'ملف الشركة — غراس',
    desc: 'Luxury company profile for Grasse, a high-end fragrance & lifestyle brand.',
    descAr: 'ملف شركة فاخر لعلامة غراس للعطور واللايف ستايل.',
    cat: 'Print', year: '2025',
    tags: ['Company Profile', 'Luxury', 'Print'],
    tagsAr: ['ملف شركة', 'فاخر', 'مطبوعات'],
    image:  'assets/projects/P14 - PROFILE/Thumbnail - Size 14 copy.png',
    images: ['assets/projects/P14 - PROFILE/images/Presentation 14.png'],
    link: 'https://www.behance.net/gallery/241299397/Company-Profile-Grasse',
    _bg: 'linear-gradient(135deg,#0c0c1c 0%,#181420 50%,#080614 100%)',
  },

  {
    id: 8,
    title: 'Company Profile — Thailand Tourism',
    titleAr: 'ملف الشركة — سياحة تايلاند',
    desc: 'Travel & tourism company profile. Rich visual narrative with an immersive editorial layout.',
    descAr: 'ملف شركة سياحة. سرد بصري غني بتخطيط تحريري غامر.',
    cat: 'Print', year: '2025',
    tags: ['Company Profile', 'Tourism', 'Print'],
    tagsAr: ['ملف شركة', 'سياحة', 'مطبوعات'],
    image:  'assets/projects/P15 - PROFILE/Thumbnail - Size 15 copy.png',
    images: imgs('P15 - PROFILE', 'Presentation-15', 13),
    link: 'https://www.behance.net/gallery/224062449/Company-Profile-Thailand',
    _bg: 'linear-gradient(135deg,#0a1810 0%,#0d2015 50%,#060c0a 100%)',
  },

  // ══════════════════════════════════════════════════════
  //  هوية بصرية وشعارات  —  P16 → P22
  // ══════════════════════════════════════════════════════

  {
    id: 9,
    title: 'Visual Identity — Souq Mazad',
    titleAr: 'الهوية البصرية — سوق مزاد',
    desc: 'Full brand identity for an Egyptian online auction marketplace.',
    descAr: 'هوية بصرية متكاملة لمنصة مزادات إلكترونية مصرية.',
    cat: 'Branding', year: '2025',
    tags: ['Brand Identity', 'Logo', 'Digital'],
    tagsAr: ['هوية بصرية', 'شعار', 'رقمي'],
    image:  'assets/projects/P16 - logo guideline/Thumbnail - Size 16 copy.png',
    images: [],
    link: 'https://www.behance.net/gallery/224062067/Souq-Mazad-Visual-Identity',
    _bg: 'linear-gradient(135deg,#07051c 0%,#100a30 50%,#080618 100%)',
  },

  {
    id: 10,
    title: 'Logo Guideline — DORUN',
    titleAr: 'دليل الشعار — دورن',
    desc: 'Complete logo guidelines for DORUN, a sports & fitness brand.',
    descAr: 'دليل شعار متكامل لعلامة دورن للرياضة.',
    cat: 'Logo', year: '2025',
    tags: ['Logo', 'Brand Guidelines', 'Sports'],
    tagsAr: ['شعار', 'دليل هوية', 'رياضة'],
    image:  'assets/projects/P17 - logo guideline/Thumbnail - Size 17 copy.png',
    images: imgs('P17 - logo guideline', 'Presentation-17', 13),
    link: 'https://www.behance.net/gallery/224062141/Logo-Guideline-DORUN',
    _bg: 'linear-gradient(135deg,#07051c 0%,#100a30 50%,#080618 100%)',
  },

  {
    id: 11,
    title: 'Logo Guideline — GST',
    titleAr: 'دليل الشعار — جي إس تي',
    desc: 'Brand guidelines for GST, a professional services company.',
    descAr: 'دليل هوية لشركة GST للخدمات المهنية.',
    cat: 'Logo', year: '2025',
    tags: ['Logo', 'Brand Guidelines', 'Corporate'],
    tagsAr: ['شعار', 'دليل هوية', 'مؤسسي'],
    image:  'assets/projects/P18 - logo guideline/Thumbnail - Size 18 copy.png',
    images: imgs('P18 - logo guideline', 'Presentation-18', 13),
    link: 'https://www.behance.net/gallery/224062197/Logo-Guideline-GST',
    _bg: 'linear-gradient(135deg,#07051c 0%,#100a30 50%,#080618 100%)',
  },

  {
    id: 12,
    title: 'Logo Guideline — Monterey Bay',
    titleAr: 'دليل الشعار — مونتيري باي',
    desc: 'Visual identity guidelines for Monterey Bay, a premium seafood brand.',
    descAr: 'دليل هوية بصرية لعلامة مونتيري باي للمأكولات البحرية الفاخرة.',
    cat: 'Logo', year: '2025',
    tags: ['Logo', 'Visual Identity', 'Premium'],
    tagsAr: ['شعار', 'هوية بصرية', 'فاخر'],
    image:  'assets/projects/P19 - logo guideline/Thumbnail - Size 19 copy.png',
    images: imgs('P19 - logo guideline', 'Presentation-19', 13),
    link: 'https://www.behance.net/gallery/224062257/Logo-Guideline-Monterey-Bay',
    _bg: 'linear-gradient(135deg,#07051c 0%,#100a30 50%,#080618 100%)',
  },

  {
    id: 13,
    title: 'Logo Guideline — Al-Arzaq Billah',
    titleAr: 'دليل الشعار — الأرزاق بالله',
    desc: 'Arabic brand identity for Al-Arzaq Billah, a traditional food brand.',
    descAr: 'هوية بصرية عربية أصيلة لعلامة الأرزاق بالله للأغذية.',
    cat: 'Logo', year: '2025',
    tags: ['Logo', 'Arabic Brand', 'Food'],
    tagsAr: ['شعار', 'براند عربي', 'أغذية'],
    image:  'assets/projects/P20 - logo guideline/Thumbnail - Size 20 copy.png',
    images: imgs('P20 - logo guideline', 'Presentation-20', 13),
    link: 'https://www.behance.net/gallery/224062313/Logo-Guideline',
    _bg: 'linear-gradient(135deg,#07051c 0%,#100a30 50%,#080618 100%)',
  },

  {
    id: 14,
    title: 'Logo Guideline — Hottie',
    titleAr: 'دليل الشعار — هوتي',
    desc: 'Vibrant logo guidelines for Hottie, a bold street food & beverages brand.',
    descAr: 'دليل شعار نابض لعلامة هوتي لطعام الشارع.',
    cat: 'Logo', year: '2025',
    tags: ['Logo', 'Brand Guidelines', 'F&B'],
    tagsAr: ['شعار', 'دليل هوية', 'أغذية'],
    image:  'assets/projects/P21 - logo guideline/Thumbnail - 21 copy.png',
    images: imgs('P21 - logo guideline', 'Presentation-21', 13),
    link: 'https://www.behance.net/gallery/224062353/Logo-Guideline-Hottie',
    _bg: 'linear-gradient(135deg,#07051c 0%,#100a30 50%,#080618 100%)',
  },

  {
    id: 15,
    title: 'Logo Guideline — Mosaic',
    titleAr: 'دليل الشعار — موزاييك',
    desc: 'Logo and brand guidelines for Mosaic, an interior design studio.',
    descAr: 'دليل شعار وهوية لاستوديو موزاييك للديكور الداخلي.',
    cat: 'Logo', year: '2025',
    tags: ['Logo', 'Brand Guidelines', 'Interior'],
    tagsAr: ['شعار', 'دليل هوية', 'ديكور'],
    image:  'assets/projects/P22 - logo guideline/images/Presentation-22_01.png',
    images: imgs('P22 - logo guideline', 'Presentation-22', 13),
    link: 'https://www.behance.net/ahmedhassanbahaa',
    _bg: 'linear-gradient(135deg,#07051c 0%,#100a30 50%,#080618 100%)',
  },

  // ══════════════════════════════════════════════════════
  //  مشاريع المملكة العربية السعودية — p23 → p39
  // ══════════════════════════════════════════════════════

  // ── سوشيال ميديا السعودية ──────────────────────────

  {
    id: 23,
    title: 'Social Media — Al Yamamah (KSA)',
    titleAr: 'سوشيال ميديا — اليمامة | المملكة',
    desc: 'Social media content series for Al Yamamah, a Saudi Arabian company. Includes Ramadan campaigns, religious posts and promotional content.',
    descAr: 'سلسلة محتوى سوشيال ميديا لشركة اليمامة السعودية. تشمل حملات رمضان والمحتوى الديني والترويجي.',
    cat: 'Social', year: '2025',
    tags: ['Social Media', 'Saudi Arabia', 'Ramadan Campaign'],
    tagsAr: ['سوشيال ميديا', 'السعودية', 'حملة رمضان'],
    image: 'assets/projects/p23 Al Yamamah Social media/Artboard 1.png',
    images: flist('p23 Al Yamamah Social media', [
      'Artboard 1.png','Artboard 2.png','Artboard 3.png',
      'Artboard 4.png','Artboard 5.png','Artboard 6.png',
      'Artboard 1-.png','Artboard 2-.png',
      '-دعاء وحديث 28 copy2.png','-دعاء وحديث 28 copy3.png',
      'افطار copy.png','حملة عمرة رمضان copy2.png'
    ]),
    link: 'https://www.behance.net/ahmedhassanbahaa',
    _bg: 'linear-gradient(135deg,#0d0520 0%,#1a0a35 50%,#0f1040 100%)',
    saudi: true,
  },

  {
    id: 27,
    title: 'Social Media — Luini Bakery (KSA)',
    titleAr: 'سوشيال ميديا — لويني بيكري | السعودية',
    desc: 'Visual identity and social media campaign for Luini Bakery, a Saudi artisan bakery brand. Rich warm tones and appetising imagery.',
    descAr: 'هوية بصرية وحملة سوشيال ميديا لمخبز لويني السعودي. ألوان دافئة وصور شهية.',
    cat: 'Social', year: '2025',
    tags: ['Social Media', 'Saudi Arabia', 'Food & Beverage', 'Bakery'],
    tagsAr: ['سوشيال ميديا', 'السعودية', 'أغذية', 'مخبز'],
    image: 'assets/projects/p27 luini Bakery/Artboard 1.png',
    images: flist('p27 luini Bakery', [
      'Artboard 1.png','Artboard 2.png','Artboard 3.png','Artboard 4.png',
      '51.png','52.png',
      '2.jpeg','3.jpeg','4.jpeg','5.jpeg','6.jpeg','7.jpeg','8.jpeg',
      'luini.sa-20250113_110610-136167611.jpg',
      'luini.sa-20250121_115936-3264591470.jpg',
      'luini.sa-20250130_182414-272922730.jpg'
    ]),
    link: 'https://www.behance.net/ahmedhassanbahaa',
    _bg: 'linear-gradient(135deg,#1a0a00 0%,#2a1205 50%,#120800 100%)',
    saudi: true,
  },

  {
    id: 33,
    title: 'Web Design — Resalah (KSA)',
    titleAr: 'تصميم ويب — رسالة | السعودية',
    desc: 'Website UI design for Resalah, a Saudi professional services company. Clean layouts with strong Arabic typography.',
    descAr: 'تصميم واجهة موقع ويب لشركة رسالة السعودية للخدمات المهنية.',
    cat: 'Social', year: '2025',
    tags: ['Web Design', 'UI', 'Saudi Arabia', 'Arabic'],
    tagsAr: ['تصميم ويب', 'واجهة مستخدم', 'السعودية', 'عربي'],
    image: 'assets/projects/p33 Resalah Web/Artboard 1.png',
    images: flist('p33 Resalah Web', [
      'Artboard 1.png','Artboard 2.png','Artboard 3.png',
      'Artboard 3 - Copy.png','Artboard 4.png','Artboard 5.png',
      'Artboard 6.png','Artboard 7.png','Artboard8.png','5.jpeg'
    ]),
    link: 'https://www.behance.net/ahmedhassanbahaa',
    _bg: 'linear-gradient(135deg,#061014 0%,#0a1c28 50%,#060c12 100%)',
    saudi: true,
  },

  {
    id: 36,
    title: 'Social Media — Eilaf Cover Web (KSA)',
    titleAr: 'سوشيال ميديا — غلافات إيلاف | السعودية',
    desc: 'Website and social media cover designs for Eilaf, a Saudi company. Professional banner layouts with brand consistency.',
    descAr: 'تصاميم غلافات موقع ويب وسوشيال ميديا لشركة إيلاف السعودية.',
    cat: 'Social', year: '2025',
    tags: ['Social Media', 'Cover Design', 'Saudi Arabia'],
    tagsAr: ['سوشيال ميديا', 'تصميم غلافات', 'السعودية'],
    image: 'assets/projects/p36 Eilaf Cover web/Artboard 1.png',
    images: flist('p36 Eilaf Cover web', [
      'Artboard 1.png','Artboard 2.png','Artboard 3.png','Artboard 4.png',
      'Artboard 5.png','Artboard 6.png','Artboard 7.png','Artboard 8.png',
      'Artboard 9.png','Artboard 10.png'
    ]),
    link: 'https://www.behance.net/ahmedhassanbahaa',
    _bg: 'linear-gradient(135deg,#0d0520 0%,#1a0a35 50%,#0f1040 100%)',
    saudi: true,
  },

  {
    id: 361,
    title: 'Social Media — Elaf Posts (KSA)',
    titleAr: 'سوشيال ميديا — بوستات إلاف | السعودية',
    desc: 'Social media posts series for Elaf, a Saudi company. Consistent visual language and brand identity across all posts.',
    descAr: 'سلسلة بوستات سوشيال ميديا لشركة إلاف السعودية.',
    cat: 'Social', year: '2025',
    tags: ['Social Media', 'Posts', 'Saudi Arabia'],
    tagsAr: ['سوشيال ميديا', 'بوستات', 'السعودية'],
    image: 'assets/projects/p36 Elaf post/Artboard 1.png',
    images: flist('p36 Elaf post', [
      'Artboard 1.png','Artboard 2.png','Artboard 3.png','Artboard 4.png',
      'Artboard 5.png','Artboard 6.png','Artboard 7.png','Artboard 8.png'
    ]),
    link: 'https://www.behance.net/ahmedhassanbahaa',
    _bg: 'linear-gradient(135deg,#0d0520 0%,#1a0a35 50%,#0f1040 100%)',
    saudi: true,
  },

  {
    id: 37,
    title: 'Social Media — Alfdal (KSA)',
    titleAr: 'سوشيال ميديا — الأفضل | السعودية',
    desc: 'Social media post designs for Alfdal, a Saudi brand. Bold graphics and engaging visual storytelling.',
    descAr: 'تصاميم بوستات سوشيال ميديا لعلامة الأفضل السعودية.',
    cat: 'Social', year: '2025',
    tags: ['Social Media', 'Posts', 'Saudi Arabia'],
    tagsAr: ['سوشيال ميديا', 'بوستات', 'السعودية'],
    image: 'assets/projects/p37 Alfdal posts/post 00 copy.png',
    images: flist('p37 Alfdal posts', [
      'post 00 copy.png','Artboard 1.png','Artboard 2.png','Artboard 3.png'
    ]),
    link: 'https://www.behance.net/ahmedhassanbahaa',
    _bg: 'linear-gradient(135deg,#0d0520 0%,#1a0a35 50%,#0f1040 100%)',
    saudi: true,
  },

  {
    id: 39,
    title: 'Social Media — Lushly (KSA)',
    titleAr: 'سوشيال ميديا — لوشلي | السعودية',
    desc: 'Elegant social media posts for Lushly, a Saudi lifestyle brand. Soft tones and refined design aesthetic.',
    descAr: 'بوستات سوشيال ميديا أنيقة لعلامة لوشلي السعودية.',
    cat: 'Social', year: '2025',
    tags: ['Social Media', 'Lifestyle', 'Saudi Arabia'],
    tagsAr: ['سوشيال ميديا', 'لايف ستايل', 'السعودية'],
    image: 'assets/projects/p39 Lushly Posts/Artboard 1.png',
    images: flist('p39 Lushly Posts', [
      'Artboard 1.png','Artboard 2.png','Artboard 3.png',
      'Artboard 4.png','Artboard 5.png','Artboard 6.png'
    ]),
    link: 'https://www.behance.net/ahmedhassanbahaa',
    _bg: 'linear-gradient(135deg,#0d0520 0%,#1a0a35 50%,#0f1040 100%)',
    saudi: true,
  },

  // ── مطبوعات السعودية ────────────────────────────────

  {
    id: 24,
    title: 'Company Profile — Al Yamamah (KSA)',
    titleAr: 'ملف الشركة — اليمامة | المملكة',
    desc: 'Professional company profile for Al Yamamah, a Saudi business corporation. High-end print design with bilingual content.',
    descAr: 'ملف شركة احترافي لمؤسسة اليمامة السعودية. تصميم طباعي راقٍ بمحتوى ثنائي اللغة.',
    cat: 'Print', year: '2025',
    tags: ['Company Profile', 'Print', 'Saudi Arabia', 'Bilingual'],
    tagsAr: ['ملف شركة', 'مطبوعات', 'السعودية', 'ثنائي اللغة'],
    image: 'assets/projects/P24 Profile Company Al Yamamh/mOCKUP غشةشةشا copy.png',
    images: flist('P24 Profile Company Al Yamamh', ['mOCKUP غشةشةشا copy.png']),
    link: 'https://www.behance.net/ahmedhassanbahaa',
    _bg: 'linear-gradient(135deg,#060e14 0%,#0a1428 50%,#060a12 100%)',
    saudi: true,
  },

  {
    id: 25,
    title: 'Corporate Brochure — Al Yamamah Crosswell (KSA)',
    titleAr: 'بروشور — اليمامة كروسويل | السعودية',
    desc: 'Corporate brochure and profile design for Al Yamamah Crosswell, a Saudi company. Clean grid-based editorial layout.',
    descAr: 'تصميم بروشور وملف مؤسسي لشركة اليمامة كروسويل السعودية.',
    cat: 'Print', year: '2025',
    tags: ['Brochure', 'Print', 'Saudi Arabia', 'Corporate'],
    tagsAr: ['بروشور', 'مطبوعات', 'السعودية', 'مؤسسي'],
    image: 'assets/projects/p25 Alyamamh Crosswel/Artboard 1.png',
    images: flist('p25 Alyamamh Crosswel', [
      'Artboard 1.png','Artboard 2.png','Artboard 3.png',
      'Artboard 4.png','Artboard 5.png','Artboard 6.png','Artboard 7.png'
    ]),
    link: 'https://www.behance.net/ahmedhassanbahaa',
    _bg: 'linear-gradient(135deg,#060e14 0%,#0a1428 50%,#060a12 100%)',
    saudi: true,
  },

  {
    id: 26,
    title: 'Company Profile — Al Yamamah Crosswell Vol.2 (KSA)',
    titleAr: 'ملف الشركة — اليمامة كروسويل Vol.2 | السعودية',
    desc: 'Second edition company profile for Al Yamamah Crosswell. Updated brand direction with a premium editorial approach.',
    descAr: 'الإصدار الثاني من ملف شركة اليمامة كروسويل بتوجه براندي محدّث.',
    cat: 'Print', year: '2025',
    tags: ['Company Profile', 'Print', 'Saudi Arabia'],
    tagsAr: ['ملف شركة', 'مطبوعات', 'السعودية'],
    image: 'assets/projects/p26 Alyamamh Crosswel/Artboard 1.png',
    images: flist('p26 Alyamamh Crosswel', [
      'Artboard 1.png','Artboard 2.png','Artboard 3.png',
      'Artboard 4.png','Artboard 5.png','Artboard 6.png'
    ]),
    link: 'https://www.behance.net/ahmedhassanbahaa',
    _bg: 'linear-gradient(135deg,#060e14 0%,#0a1428 50%,#060a12 100%)',
    saudi: true,
  },

  {
    id: 262,
    title: 'Business Card — Hazim (KSA)',
    titleAr: 'بطاقة أعمال — حازم | السعودية',
    desc: 'Premium business card design for Hazim, a Saudi professional. Refined typography and high-quality print finish.',
    descAr: 'تصميم بطاقة أعمال راقية لحازم — مهني سعودي. طباعة فاخرة وبصمة مميزة.',
    cat: 'Print', year: '2025',
    tags: ['Business Card', 'Print', 'Saudi Arabia'],
    tagsAr: ['بطاقة أعمال', 'مطبوعات', 'السعودية'],
    image: 'assets/projects/p26 Hazim Busniess Card/mOCKUP1.png',
    images: flist('p26 Hazim Busniess Card', [
      'mOCKUP1.png','mOCKUP 4.png','02 copy5.png',
      'WhatsApp Image 2026-05-02 at 1.56.42 PM.jpeg'
    ]),
    link: 'https://www.behance.net/ahmedhassanbahaa',
    _bg: 'linear-gradient(135deg,#080808 0%,#141414 50%,#0a0a0a 100%)',
    saudi: true,
  },

  {
    id: 28,
    title: 'Business Card — Rio Media (KSA)',
    titleAr: 'بطاقة أعمال — ريو ميديا | السعودية',
    desc: 'Sleek business card design for Rio Media, a Saudi creative agency.',
    descAr: 'بطاقة أعمال أنيقة لوكالة ريو ميديا الإبداعية السعودية.',
    cat: 'Print', year: '2025',
    tags: ['Business Card', 'Print', 'Saudi Arabia', 'Agency'],
    tagsAr: ['بطاقة أعمال', 'مطبوعات', 'السعودية', 'وكالة'],
    image: 'assets/projects/p28 Rio media Bussiness Card/0 copy.png',
    images: flist('p28 Rio media Bussiness Card', ['0 copy.png']),
    link: 'https://www.behance.net/ahmedhassanbahaa',
    _bg: 'linear-gradient(135deg,#080808 0%,#141414 50%,#0a0a0a 100%)',
    saudi: true,
  },

  {
    id: 29,
    title: 'Company Profile — Rio Service (KSA)',
    titleAr: 'ملف الشركة — ريو للخدمات | السعودية',
    desc: 'Company profile design for Rio Service Company, a Saudi professional services firm.',
    descAr: 'تصميم ملف شركة لشركة ريو للخدمات المهنية السعودية.',
    cat: 'Print', year: '2025',
    tags: ['Company Profile', 'Print', 'Saudi Arabia'],
    tagsAr: ['ملف شركة', 'مطبوعات', 'السعودية'],
    image: 'assets/projects/P29 Rio service profile comapny/RIO SER copy.png',
    images: flist('P29 Rio service profile comapny', ['RIO SER copy.png']),
    link: 'https://www.behance.net/ahmedhassanbahaa',
    _bg: 'linear-gradient(135deg,#060e14 0%,#0a1428 50%,#060a12 100%)',
    saudi: true,
  },

  {
    id: 30,
    title: 'Brochure — Rio Print (KSA)',
    titleAr: 'بروشور — ريو مطبوعات | السعودية',
    desc: 'High-end print brochure for Rio, a Saudi print and media company. Premium layout with detailed content structure.',
    descAr: 'بروشور مطبوعات فاخر لشركة ريو السعودية للطباعة والإعلام.',
    cat: 'Print', year: '2025',
    tags: ['Brochure', 'Print', 'Saudi Arabia'],
    tagsAr: ['بروشور', 'مطبوعات', 'السعودية'],
    image: 'assets/projects/p30 Rio pourshure print/brochure_1101510231 - Copy copy.jpg',
    images: flist('p30 Rio pourshure print', ['brochure_1101510231 - Copy copy.jpg']),
    link: 'https://www.behance.net/ahmedhassanbahaa',
    _bg: 'linear-gradient(135deg,#060e14 0%,#0a1428 50%,#060a12 100%)',
    saudi: true,
  },

  {
    id: 31,
    title: 'Company Profile — Resalah Landscape (KSA)',
    titleAr: 'ملف الشركة — رسالة لاندسكيب | السعودية',
    desc: 'Landscape-format company profile for Resalah, a Saudi professional services company. Horizontal editorial layout.',
    descAr: 'ملف شركة بتخطيط أفقي لشركة رسالة السعودية.',
    cat: 'Print', year: '2025',
    tags: ['Company Profile', 'Print', 'Saudi Arabia', 'Landscape'],
    tagsAr: ['ملف شركة', 'مطبوعات', 'السعودية', 'أفقي'],
    image: 'assets/projects/p31 Resalah profile Landscape/m2.png',
    images: flist('p31 Resalah profile Landscape', ['m2.png']),
    link: 'https://www.behance.net/ahmedhassanbahaa',
    _bg: 'linear-gradient(135deg,#060e14 0%,#0a1428 50%,#060a12 100%)',
    saudi: true,
  },

  {
    id: 32,
    title: 'Company Profile — Resalah Arabic (KSA)',
    titleAr: 'ملف الشركة — رسالة عربي | السعودية',
    desc: 'Arabic-language company profile for Resalah, a Saudi company. RTL layout with premium typography.',
    descAr: 'ملف شركة باللغة العربية لشركة رسالة السعودية. تخطيط RTL وطباعة راقية.',
    cat: 'Print', year: '2025',
    tags: ['Company Profile', 'Print', 'Saudi Arabia', 'Arabic'],
    tagsAr: ['ملف شركة', 'مطبوعات', 'السعودية', 'عربي'],
    image: 'assets/projects/p32 Resalah Profile AR/m1.png',
    images: flist('p32 Resalah Profile AR', ['m1.png']),
    link: 'https://www.behance.net/ahmedhassanbahaa',
    _bg: 'linear-gradient(135deg,#060e14 0%,#0a1428 50%,#060a12 100%)',
    saudi: true,
  },

  {
    id: 34,
    title: 'Company Profile — Resalah Interior Design (KSA)',
    titleAr: 'ملف الشركة — رسالة للتصميم الداخلي | السعودية',
    desc: 'Sophisticated company profile for Resalah Interior Design, a Saudi luxury interiors firm. Full editorial treatment across 16 spreads.',
    descAr: 'ملف شركة متكامل لشركة رسالة للتصميم الداخلي الفاخر السعودية. 16 صفحة بأسلوب تحريري راقٍ.',
    cat: 'Print', year: '2025',
    tags: ['Company Profile', 'Print', 'Interior Design', 'Saudi Arabia'],
    tagsAr: ['ملف شركة', 'مطبوعات', 'تصميم داخلي', 'السعودية'],
    image: 'assets/projects/p34 Resalah Profile Introir design/التصميم الداخلي.png',
    images: flist('p34 Resalah Profile Introir design', [
      'التصميم الداخلي.png',
      'Artboard 1.png','Artboard 2.png','Artboard 3.png','Artboard 4.png',
      'Artboard 5.png','Artboard 6.png','Artboard 7.png','Artboard 8.png',
      'Artboard 9.png','Artboard 10.png','Artboard 11.png','Artboard 12.png',
      'Artboard 13.png','Artboard 14.png','Artboard 15.png','Artboard 16.png'
    ]),
    link: 'https://www.behance.net/ahmedhassanbahaa',
    _bg: 'linear-gradient(135deg,#060e14 0%,#0a1428 50%,#060a12 100%)',
    saudi: true,
  },

  {
    id: 35,
    title: 'Company Profile — Resalah Aluminium (KSA)',
    titleAr: 'ملف الشركة — رسالة للألمنيوم | السعودية',
    desc: 'Complete company profile for Resalah Aluminium, a Saudi manufacturing company. Extensive multi-page document covering full brand identity.',
    descAr: 'ملف شركة متكامل لشركة رسالة للألمنيوم السعودية. وثيقة ضخمة متعددة الصفحات تغطي الهوية البصرية الكاملة.',
    cat: 'Print', year: '2025',
    tags: ['Company Profile', 'Print', 'Industrial', 'Saudi Arabia'],
    tagsAr: ['ملف شركة', 'مطبوعات', 'صناعي', 'السعودية'],
    image: 'assets/projects/p35 Resalah Profile Alumunium/Artboard 2.png',
    images: flist('p35 Resalah Profile Alumunium', [
      'Artboard 2.png','Artboard 3.png','Artboard 4.png','Artboard 5.png',
      'Artboard 6.png','Artboard 7.png','Artboard 8.png','Artboard 9.png',
      'Artboard 10.png','Artboard 11.png','Artboard 12.png','Artboard 13.png',
      'Artboard ٢٠ copy 2.png','Artboard ٢٠ copy 3.png','Artboard ٢٠ copy 4.png',
      'Artboard ٢٠ copy 5.png','Artboard ٢٠ copy 6.png','Artboard ٢٠ copy 7.png',
      'Artboard ٢٠ copy 8.png','Artboard ٢٠ copy 9.png','Artboard ٢٠ copy 10.png'
    ]),
    link: 'https://www.behance.net/ahmedhassanbahaa',
    _bg: 'linear-gradient(135deg,#060e14 0%,#0a1428 50%,#060a12 100%)',
    saudi: true,
  },

  // ── شعارات وهوية السعودية ────────────────────────────

  {
    id: 38,
    title: 'Logo Identity — Lushly (KSA)',
    titleAr: 'هوية الشعار — لوشلي | السعودية',
    desc: 'Brand logo and visual identity for Lushly, a Saudi lifestyle brand. Minimal mark with elegant typographic application.',
    descAr: 'شعار وهوية بصرية لعلامة لوشلي السعودية. علامة بسيطة مع تطبيق طباعي أنيق.',
    cat: 'Logo', year: '2025',
    tags: ['Logo', 'Brand Identity', 'Saudi Arabia', 'Lifestyle'],
    tagsAr: ['شعار', 'هوية بصرية', 'السعودية', 'لايف ستايل'],
    image: 'assets/projects/p38 Lushly Logo/logo Identity copy.png',
    images: flist('p38 Lushly Logo', ['logo Identity copy.png']),
    link: 'https://www.behance.net/ahmedhassanbahaa',
    _bg: 'linear-gradient(135deg,#07051c 0%,#100a30 50%,#080618 100%)',
    saudi: true,
  },

];
