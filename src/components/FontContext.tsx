import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

interface FontTheme {
  label: string;
  sans: string;
  serif: string;
  script: string;
}

const fontThemes: FontTheme[] = [
  {
    label: "Attuale (DM Sans + Playfair)",
    sans: "'DM Sans', system-ui, sans-serif",
    serif: "'Playfair Display', Georgia, serif",
    script: "'Cormorant Garamond', Georgia, serif",
  },
  {
    label: "Lora + Nunito",
    sans: "'Nunito', system-ui, sans-serif",
    serif: "'Lora', Georgia, serif",
    script: "'Lora', Georgia, serif",
  },
  {
    label: "Source Serif + Inter",
    sans: "'Inter', system-ui, sans-serif",
    serif: "'Source Serif 4', Georgia, serif",
    script: "'Source Serif 4', Georgia, serif",
  },
  {
    label: "Cormorant Garamond + DM Sans",
    sans: "'DM Sans', system-ui, sans-serif",
    serif: "'Cormorant Garamond', Georgia, serif",
    script: "'Cormorant Garamond', Georgia, serif",
  },
];

interface FontContextType {
  themeIndex: number;
  theme: FontTheme;
  cycleFont: () => void;
}

const FontContext = createContext<FontContextType>({
  themeIndex: 0,
  theme: fontThemes[0],
  cycleFont: () => {},
});

export const useFontTheme = () => useContext(FontContext);

export const FontProvider = ({ children }: { children: ReactNode }) => {
  const [themeIndex, setThemeIndex] = useState(0);
  const theme = fontThemes[themeIndex];

  const cycleFont = useCallback(() => {
    setThemeIndex((i) => (i + 1) % fontThemes.length);
  }, []);

  return (
    <FontContext.Provider value={{ themeIndex, theme, cycleFont }}>
      <div
        style={{
          "--font-sans": theme.sans,
          "--font-serif": theme.serif,
          "--font-script": theme.script,
        } as React.CSSProperties}
      >
        {children}
      </div>
    </FontContext.Provider>
  );
};

export { fontThemes };
