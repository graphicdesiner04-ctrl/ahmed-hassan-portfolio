// ═══════════════════════════════════════════════════════════════
//  PROJECTS.JS — Ahmed Hassan Bahaa Portfolio
//  22 مشروع حقيقي مع صور من الفولدرات
//  لإضافة مشروع جديد: انسخ أي كتلة وعدّل البيانات
// ═══════════════════════════════════════════════════════════════

// helper — يبني مسار الصورة داخل فولدر المشروع
function imgs(folder, prefix, count, ext) {
  ext = ext || 'png';
  var arr = [];
  for (var i = 1; i <= count; i++) {
    var n = i < 10 ? '0' + i : '' + i;
    arr.push('assets/projects/' + folder + '/images/' + prefix + '_' + n + '.' + ext);
  }
  return arr;
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
  //  أضف مشاريع جديدة هنا ↓
  //  انسخ الكتلة دي وعدّل:
  //  - id (رقم جديد)
  //  - title / titleAr
  //  - cat: 'Social' | 'Print' | 'Branding' | 'Logo'
  //  - image: مسار صورة الغلاف
  //  - images: مصفوفة صور المشروع
  //  - link: رابط Behance
  // ══════════════════════════════════════════════════════

];
