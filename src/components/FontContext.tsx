import { createContext, useContext, type ReactNode } from "react";

interface FontTheme {
  label: string;
  sans: string;
  serif: string;
  script: string;
}

const theme: FontTheme = {
  label: "Source Serif + Inter",
  sans: "'Inter', system-ui, sans-serif",
  serif: "'Source Serif 4', Georgia, serif",
  script: "'Source Serif 4', Georgia, serif",
};

interface FontContextType {
  theme: FontTheme;
}

const FontContext = createContext<FontContextType>({ theme });

export const useFontTheme = () => useContext(FontContext);

export const FontProvider = ({ children }: { children: ReactNode }) => (
  <FontContext.Provider value={{ theme }}>
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
