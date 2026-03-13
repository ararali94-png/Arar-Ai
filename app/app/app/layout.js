export const metadata = {
  title: "صانع الفيديو بالذكاء الاصطناعي",
  description: "حوّل أفكارك إلى فيديوهات احترافية مجاناً",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
