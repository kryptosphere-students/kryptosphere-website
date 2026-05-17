import { useEffect, useRef, useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import {
  Download,
  Copy,
  Check,
  Mail,
  Sparkles,
  FileArchive,
  ZoomIn,
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '../components/ui/dialog';

type LogoCard = {
  name: string;
  bgLabel: string;
  previewBg: string;
  imgSrc: string;
  files: { label: string; href: string }[];
};

type TemplateCard = {
  name: string;
  imgSrc: string;
  pngHref: string;
  svgHref: string;
};

type ColorSwatch = {
  name: string;
  hex: string;
  text?: 'light' | 'dark';
};

type FontCard = {
  name: string;
  family: string;
  href: string;
};

const MediaKit = () => {
  const { t } = useLanguage();
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  const [previewTemplate, setPreviewTemplate] = useState<TemplateCard | null>(null);
  const copyTimeoutRef = useRef<number | null>(null);

  // Load brand fonts (Manrope + Inter) only on this page,
  // and remove them when the user navigates away.
  useEffect(() => {
    const FONT_HREF =
      'https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&family=Manrope:wght@400;700;800&display=swap';

    const preconnect1 = document.createElement('link');
    preconnect1.rel = 'preconnect';
    preconnect1.href = 'https://fonts.googleapis.com';

    const preconnect2 = document.createElement('link');
    preconnect2.rel = 'preconnect';
    preconnect2.href = 'https://fonts.gstatic.com';
    preconnect2.crossOrigin = 'anonymous';

    const stylesheet = document.createElement('link');
    stylesheet.rel = 'stylesheet';
    stylesheet.href = FONT_HREF;
    stylesheet.dataset.mediaKitFont = 'true';

    document.head.appendChild(preconnect1);
    document.head.appendChild(preconnect2);
    document.head.appendChild(stylesheet);

    return () => {
      document.head.removeChild(preconnect1);
      document.head.removeChild(preconnect2);
      document.head.removeChild(stylesheet);
    };
  }, []);

  const handleCopyColor = async (hex: string) => {
    try {
      await navigator.clipboard.writeText(hex);
      // Cancel any pending reset so the timer restarts from scratch on each click
      if (copyTimeoutRef.current !== null) {
        window.clearTimeout(copyTimeoutRef.current);
      }
      setCopiedColor(hex);
      copyTimeoutRef.current = window.setTimeout(() => {
        setCopiedColor(null);
        copyTimeoutRef.current = null;
      }, 5000);
    } catch {
      // clipboard API can fail silently on some browsers / contexts
    }
  };

  const logos: LogoCard[] = [
    {
      name: t('mediaKit.logos.whiteName'),
      bgLabel: t('mediaKit.logos.darkBg'),
      previewBg: 'bg-slate-950',
      imgSrc: '/media-kit/logos/White_text.png',
      files: [
        { label: 'PNG', href: '/media-kit/logos/White_text.png' },
        { label: 'SVG', href: '/media-kit/logos/White_text.svg' },
        { label: 'ZIP', href: '/media-kit/logos/White_text.zip' },
      ],
    },
    {
      name: t('mediaKit.logos.blackName'),
      bgLabel: t('mediaKit.logos.lightBg'),
      previewBg: 'bg-white',
      imgSrc: '/media-kit/logos/Black_text.png',
      files: [
        { label: 'PNG', href: '/media-kit/logos/Black_text.png' },
        { label: 'SVG', href: '/media-kit/logos/Black_text.svg' },
        { label: 'ZIP', href: '/media-kit/logos/Black_text.zip' },
      ],
    },
  ];

  const templates: TemplateCard[] = [
    {
      name: t('mediaKit.templates.landscape'),
      imgSrc: '/media-kit/templates/background_landscape.png',
      pngHref: '/media-kit/templates/background_landscape.png',
      svgHref: '/media-kit/templates/background_landscape.svg',
    },
    {
      name: t('mediaKit.templates.portrait'),
      imgSrc: '/media-kit/templates/background_portrait.png',
      pngHref: '/media-kit/templates/background_portrait.png',
      svgHref: '/media-kit/templates/background_portrait.svg',
    },
    {
      name: t('mediaKit.templates.square'),
      imgSrc: '/media-kit/templates/background_square.png',
      pngHref: '/media-kit/templates/background_square.png',
      svgHref: '/media-kit/templates/background_square.svg',
    },
  ];

  const colors: ColorSwatch[] = [
    { name: 'Dark blue', hex: '#0143A7', text: 'light' },
    { name: 'Intermediate blue', hex: '#4897F9', text: 'light' },
    { name: 'Light blue', hex: '#96C4FF', text: 'dark' },
    { name: 'Very light blue', hex: '#E2F6FE', text: 'dark' },
    { name: 'White', hex: '#FFFFFF', text: 'dark' },
    { name: 'Black', hex: '#000000', text: 'light' },
  ];

  const fonts: FontCard[] = [
    {
      name: 'Manrope',
      family: '"Manrope", sans-serif',
      href: '/media-kit/fonts/Manrope.zip',
    },
    {
      name: 'Inter',
      family: '"Inter", sans-serif',
      href: '/media-kit/fonts/Inter.zip',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-900/50 backdrop-blur-lg border border-blue-500/30 text-blue-300 px-4 py-2 rounded-full text-sm mb-8">
            <Sparkles className="w-4 h-4" />
            {t('mediaKit.tag')}
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            {t('mediaKit.title')}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>

          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-10">
            {t('mediaKit.subtitle')}
          </p>

          <a
            href="/media-kit/complete-kit.zip"
            download
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transform hover:-translate-y-1"
          >
            <Download className="w-5 h-5" />
            {t('mediaKit.downloadAll')}
          </a>
        </div>
      </section>

      {/* Logos */}
      <section className="py-16 px-6 border-t border-slate-700/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">
            {t('mediaKit.logos.title')}
          </h2>
          <p className="text-center text-slate-300 max-w-3xl mx-auto mb-4 leading-relaxed">
            {t('mediaKit.logos.description')}
          </p>
          <p className="text-center text-blue-300 font-semibold max-w-3xl mx-auto mb-12">
            {t('mediaKit.logos.rule')}
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {logos.map((logo) => (
              <div
                key={logo.name}
                className="bg-slate-800/50 backdrop-blur-lg rounded-2xl border border-slate-700/50 overflow-hidden hover:border-blue-400/50 transition-all duration-300"
              >
                <div
                  className={`${logo.previewBg} p-12 flex items-center justify-center min-h-[220px]`}
                >
                  <img
                    src={logo.imgSrc}
                    alt={logo.name}
                    loading="lazy"
                    className="max-h-24 w-auto"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {logo.name}
                  </h3>
                  <p className="text-sm text-slate-400 mb-5">{logo.bgLabel}</p>
                  <div className="flex flex-wrap gap-2">
                    {logo.files.map((file) => (
                      <a
                        key={file.label}
                        href={file.href}
                        download
                        className="inline-flex items-center gap-2 bg-slate-700/60 hover:bg-blue-600 border border-slate-600 hover:border-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200"
                      >
                        <Download className="w-4 h-4" />
                        {file.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="/media-kit/logos/all-logos.zip"
              download
              className="inline-flex items-center gap-3 bg-slate-800/70 hover:bg-slate-700 border border-slate-700 hover:border-blue-400/50 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
            >
              <FileArchive className="w-5 h-5" />
              {t('mediaKit.logos.downloadAll')}
            </a>
          </div>
        </div>
      </section>

      {/* Templates */}
      <section className="py-16 px-6 border-t border-slate-700/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">
            {t('mediaKit.templates.title')}
          </h2>
          <p className="text-center text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            {t('mediaKit.templates.description')}
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {templates.map((tpl) => (
              <div
                key={tpl.name}
                className="bg-slate-800/50 backdrop-blur-lg rounded-2xl border border-slate-700/50 overflow-hidden hover:border-blue-400/50 transition-all duration-300 flex flex-col"
              >
                <button
                  type="button"
                  onClick={() => setPreviewTemplate(tpl)}
                  className="relative group bg-slate-950 flex items-center justify-center aspect-square overflow-hidden cursor-zoom-in"
                  aria-label={`Agrandir ${tpl.name}`}
                >
                  <img
                    src={tpl.imgSrc}
                    alt={tpl.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full p-3">
                      <ZoomIn className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </button>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-4">
                    {tpl.name}
                  </h3>
                  <div className="flex gap-2 mt-auto">
                    <a
                      href={tpl.pngHref}
                      download
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-slate-700/60 hover:bg-blue-600 border border-slate-600 hover:border-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200"
                    >
                      <Download className="w-4 h-4" />
                      PNG
                    </a>
                    <a
                      href={tpl.svgHref}
                      download
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-slate-700/60 hover:bg-blue-600 border border-slate-600 hover:border-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200"
                    >
                      <Download className="w-4 h-4" />
                      SVG
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="/media-kit/templates/KS_backgrounds_templates.zip"
              download
              className="inline-flex items-center gap-3 bg-slate-800/70 hover:bg-slate-700 border border-slate-700 hover:border-blue-400/50 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
            >
              <FileArchive className="w-5 h-5" />
              {t('mediaKit.templates.downloadAll')}
            </a>
          </div>
        </div>
      </section>

      {/* Colors */}
      <section className="py-16 px-6 border-t border-slate-700/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">
            {t('mediaKit.colors.title')}
          </h2>
          <p className="text-center text-slate-300 max-w-3xl mx-auto mb-2 leading-relaxed">
            {t('mediaKit.colors.description')}
          </p>
          <p className="text-center text-slate-500 text-sm mb-12">
            {t('mediaKit.colors.hint')}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
            {colors.map((color) => {
              const isCopied = copiedColor === color.hex;
              return (
                <button
                  key={color.hex}
                  type="button"
                  onClick={() => handleCopyColor(color.hex)}
                  className="group bg-slate-800/50 backdrop-blur-lg rounded-2xl border border-slate-700/50 overflow-hidden hover:border-blue-400/50 transition-all duration-300 text-left"
                  aria-label={`Copier ${color.hex}`}
                >
                  <div
                    className="aspect-square border-b border-slate-700/50"
                    style={{ backgroundColor: color.hex }}
                  ></div>
                  <div className="p-4">
                    <p className="text-sm font-semibold text-white truncate mb-1">
                      {color.name}
                    </p>
                    <p className="text-xs font-mono flex items-center gap-2">
                      {isCopied ? (
                        <>
                          <Check className="w-3 h-3 text-green-400" />
                          <span className="text-green-400">
                            {t('mediaKit.colors.copied')}
                          </span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3 text-slate-400 group-hover:text-blue-400 transition-colors" />
                          <span className="text-slate-400 group-hover:text-blue-300 transition-colors">
                            {color.hex.toUpperCase()}
                          </span>
                        </>
                      )}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Fonts */}
      <section className="py-16 px-6 border-t border-slate-700/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">
            {t('mediaKit.fonts.title')}
          </h2>
          <p className="text-center text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            {t('mediaKit.fonts.description')}
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {fonts.map((font) => (
              <div
                key={font.name}
                className="bg-slate-800/50 backdrop-blur-lg rounded-2xl border border-slate-700/50 p-8 hover:border-blue-400/50 transition-all duration-300"
                style={{ fontFamily: font.family }}
              >
                <p
                  className="text-[8rem] md:text-[10rem] text-white leading-none mb-2 tracking-tight"
                  style={{ fontWeight: 800 }}
                >
                  Rg
                </p>
                <p
                  className="text-5xl text-slate-300 leading-none mb-8"
                  style={{ fontWeight: 400 }}
                >
                  a1?
                </p>

                {/* Font name */}
                <h3
                  className="text-4xl text-white mb-5"
                  style={{ fontWeight: 800 }}
                >
                  {font.name}
                </h3>

                {/* Weight ladder */}
                <div className="space-y-1 mb-6">
                  <p
                    className="text-2xl text-slate-200 leading-snug"
                    style={{ fontWeight: 400 }}
                  >
                    The quick brown fox
                  </p>
                  <p
                    className="text-2xl text-slate-200 leading-snug"
                    style={{ fontWeight: 700 }}
                  >
                    The quick brown fox
                  </p>
                  <p
                    className="text-2xl text-slate-200 leading-snug"
                    style={{ fontWeight: 800 }}
                  >
                    The quick brown fox
                  </p>
                </div>

                {/* Full alphabet */}
                <p className="text-sm text-slate-400 mb-6 leading-relaxed break-all">
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ
                  <br />
                  abcdefghijklmnopqrstuvwxyz
                  <br />
                  0123456789
                </p>

                <a
                  href={font.href}
                  download
                  className="inline-flex items-center gap-2 bg-slate-700/60 hover:bg-blue-600 border border-slate-600 hover:border-blue-500 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200"
                >
                  <Download className="w-4 h-4" />
                  {font.name}.zip
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 px-6 border-t border-slate-700/50">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Mail className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">
            {t('mediaKit.contact.title')}
          </h2>
          <p className="text-lg text-slate-300 mb-8 leading-relaxed">
            {t('mediaKit.contact.description')}
          </p>
          <a
            href="mailto:contact@kryptosphere.org"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transform hover:-translate-y-1"
          >
            <Mail className="w-5 h-5" />
            contact@kryptosphere.org
          </a>
        </div>
      </section>

      {/* Template preview modal */}
      <Dialog
        open={!!previewTemplate}
        onOpenChange={(open) => !open && setPreviewTemplate(null)}
      >
        <DialogContent className="max-w-4xl bg-slate-900 border-slate-700 text-white">
          {previewTemplate && (
            <>
              <DialogHeader>
                <DialogTitle className="text-white text-xl">
                  {previewTemplate.name}
                </DialogTitle>
              </DialogHeader>
              <div className="bg-slate-950 rounded-xl p-4 flex items-center justify-center max-h-[65vh]">
                <img
                  src={previewTemplate.imgSrc}
                  alt={previewTemplate.name}
                  className="max-w-full max-h-[60vh] w-auto h-auto object-contain rounded-lg"
                />
              </div>
              <div className="flex gap-3 justify-center pt-2">
                <a
                  href={previewTemplate.pngHref}
                  download
                  className="inline-flex items-center gap-2 bg-slate-700/60 hover:bg-blue-600 border border-slate-600 hover:border-blue-500 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200"
                >
                  <Download className="w-4 h-4" />
                  PNG
                </a>
                <a
                  href={previewTemplate.svgHref}
                  download
                  className="inline-flex items-center gap-2 bg-slate-700/60 hover:bg-blue-600 border border-slate-600 hover:border-blue-500 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200"
                >
                  <Download className="w-4 h-4" />
                  SVG
                </a>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default MediaKit;
