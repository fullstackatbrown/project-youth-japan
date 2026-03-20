"use client";

import { useRouter, usePathname } from 'next/navigation';
import {useState, useEffect, useRef} from 'react';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const currentLocale = pathname.split('/')[1];
  const label = currentLocale === 'ja' ? '日本語' : 'ENG';


  const switchTo = (locale: string) => {
    // Replace the locale segment in the current path
    const newPath = pathname.replace(/^\/(en|ja)/, `/${locale}`);
    router.push(newPath);
    setOpen(false);
  };

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
   <div ref={ref} style={{ position: 'relative', display: 'inline-block' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          fontSize: '16px',
          fontWeight: 500,
          color: '#111',
          padding: '4px 2px',
        }}
      >
        {/* Translation icon (SVG matching 文A style) */}
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 8l6 6" />
          <path d="M4 14l6-6 2-3" />
          <path d="M2 5h12" />
          <path d="M7 2h1" />
          <path d="M22 22l-5-10-5 10" />
          <path d="M14 18h6" />
        </svg>

        <span style={{ letterSpacing: '0.03em' }}>{label}</span>

        {/* Dropdown arrow */}
        <span style={{ fontSize: '20px', marginLeft: '2px' }}>▼</span>
      </button>

 {open && (
        <div
          style={{
            position: 'absolute',
            top: 'calc(100% + 8px)',
            left: 0,
            background: '#fff',
            border: '1px solid #e0e0e0',
            borderRadius: '6px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            overflow: 'hidden',
            zIndex: 100,
            minWidth: '110px',
          }}
        >
          {[{ value: 'en', display: 'ENG' }, { value: 'ja', display: '日本語' }].map((opt) => (
            <button
              key={opt.value}
              onClick={() => switchTo(opt.value)}
              style={{
                display: 'block',
                width: '100%',
                padding: '10px 16px',
                background: currentLocale === opt.value ? '#f5f5f5' : '#fff',
                border: 'none',
                textAlign: 'left',
                cursor: 'pointer',
                fontSize: '15px',
                fontWeight: currentLocale === opt.value ? 600 : 400,
                color: '#111',
              }}
            >
              {opt.display}
            </button>
          ))}
        </div>
      )}
       
    </div>
  );
}
