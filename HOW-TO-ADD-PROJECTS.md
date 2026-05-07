# إزاي تضيف مشروع جديد

## الخطوات (3 خطوات بس)

### 1. حضّر صورة المشروع
- حط الصورة في مجلد `assets/projects/`
- الأحجام المناسبة:
  - كارد عادي → `800×600 px`
  - كارد واسع (مميز) → `1200×675 px`

### 2. افتح ملف `projects.js`
دور على السطر اللي فيه:
```
// أضف مشاريعك الجديدة هنا ↓
```

### 3. أضف المشروع
انسخ الكود ده وعدّله:
```js
{
  id: 7,                                    // رقم جديد (زيد بـ 1)
  title: 'اسم المشروع',
  titleAr: 'اسم المشروع بالعربي',          // اختياري
  cat: 'Branding',                          // Social | Logo | Branding | Print
  year: '2025',
  tags: ['Brand Identity', 'Logo'],         // وصفين أو 3 قصيرة
  image: 'assets/projects/project-7.jpg',  // مسار الصورة (اتركه فاضي لو مفيش)
  link: 'https://www.behance.net/...',      // رابط Behance (اختياري)
  wide: false,                              // true لو عايزه يبقى عريض
},
```

---

## إزاي تنشر التحديث على الإنترنت

بعد ما تضيف المشروع، بعت الملفات على GitHub وهيتحدث تلقائي:

```bash
git add .
git commit -m "add new project: اسم المشروع"
git push
```

---

## هيكل الملفات

```
My Portfolio/
├── index.html          ← الصفحة الرئيسية (لا تحتاج تعدلها)
├── projects.js         ← بيانات المشاريع (هنا بس بتضيف)
├── assets/
│   ├── ahmed-hassan-photo.png
│   └── projects/       ← صور المشاريع هنا
└── fonts/
    └── Alexandria-VariableFont_wght.ttf
```
