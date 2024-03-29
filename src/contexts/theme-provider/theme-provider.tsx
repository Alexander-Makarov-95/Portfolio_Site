/** next-themes 0.2.1 - https://github.com/pacocoursey/next-themes.
 *
 *  MIT License
 *
 *  Copyright (c) 2022 Paco Coursey
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import React, { Fragment, createContext, useCallback, useContext, useEffect, useState, useMemo, memo } from 'react';

const colorSchemes = ['light', 'dark'];
const MEDIA = '(prefers-color-scheme: dark)';
const isServer = typeof window === 'undefined';
const ThemeContext = createContext<UseThemeProps | undefined>(undefined);
const defaultContext: UseThemeProps = { setTheme: _ => { }, themes: [] };

export const useTheme = () => useContext(ThemeContext) ?? defaultContext;

export const ThemeProvider: React.FC<ThemeProviderProps> = props => {
  const context = useContext(ThemeContext);

  // Ignore nested context providers, just passthrough children
  if (context) return <Fragment>{props.children}</Fragment>;
  return <Theme {...props} />;
};

// const defaultThemes = ['light', 'dark'];

const defaultThemes = ['light'];

type ValueObject = Record<string, string>;

export interface UseThemeProps {
  /** List of all available theme names */
  themes: string[]
  /** Forced theme name for the current page */
  forcedTheme?: string
  /** Update the theme */
  setTheme: (theme: string) => void
  /** Active theme name */
  theme?: string
  /** If `enableSystem` is true and the active theme is "system", this returns whether the system preference resolved to "dark" or "light". Otherwise, identical to `theme` */
  resolvedTheme?: string
  /** If enableSystem is true, returns the System theme preference ("dark" or "light"), regardless what the active theme is */
  systemTheme?: 'dark' | 'light'
}

export interface ThemeProviderProps {
  /** List of all available theme names */
  themes?: string[]
  /** Forced theme name for the current page */
  forcedTheme?: string
  /** Whether to switch between dark and light themes based on prefers-color-scheme */
  enableSystem?: boolean
  /** Disable all CSS transitions when switching themes */
  disableTransitionOnChange?: boolean
  /** Whether to indicate to browsers which color scheme is used (dark or light) for built-in UI like inputs and buttons */
  enableColorScheme?: boolean
  /** Key used to store theme setting in localStorage */
  storageKey?: string
  /** Default theme name (for v0.0.12 and lower the default was light). If `enableSystem` is false, the default theme is light */
  defaultTheme?: string
  /** HTML attribute modified based on the active theme. Accepts `class` and `data-*` (meaning any data attribute, `data-mode`, `data-color`, etc.) */
  attribute?: string | 'class'
  /** Mapping of theme name to HTML attribute value. Object where key is the theme name and value is the attribute value */
  value?: ValueObject
  /** Nonce string to pass to the inline script for CSP headers */
  nonce?: string
  children?: React.ReactNode
}

const Theme: React.FC<ThemeProviderProps> = ({
  forcedTheme,
  disableTransitionOnChange = false,
  enableSystem = true,
  enableColorScheme = true,
  storageKey = 'theme',
  themes = defaultThemes,
  defaultTheme = enableSystem ? 'system' : 'light',
  attribute = 'data-theme',
  value,
  children,
  nonce
}) => {
  const [theme, setThemeState] = useState(() => getTheme(storageKey, defaultTheme));
  const [resolvedTheme, setResolvedTheme] = useState(() => getTheme(storageKey));
  const attrs = !value ? themes : Object.values(value);

  const applyTheme = useCallback(theme => {
    let resolved = theme;
    if (!resolved) return;

    // If theme is system, resolve it before setting theme
    if (theme === 'system' && enableSystem) {
      resolved = getSystemTheme();
    }

    const name = value ? value[resolved] : resolved;
    const enable = disableTransitionOnChange ? disableAnimation() : null;
    const d = document.documentElement;

    if (attribute === 'class') {
      d.classList.remove(...attrs);

      if (name) d.classList.add(name);
    } else {
      if (name) {
        d.setAttribute(attribute, name);
      } else {
        d.removeAttribute(attribute);
      }
    }

    if (enableColorScheme) {
      const fallback = colorSchemes.includes(defaultTheme) ? defaultTheme : null;
      const colorScheme = colorSchemes.includes(resolved) ? resolved : fallback;
      d.style.colorScheme = colorScheme;
    }

    enable?.();
  }, []);

  const setTheme = useCallback(
    theme => {
      setThemeState(theme);

      // Save to storage
      try {
        localStorage.setItem(storageKey, theme);
      } catch (e) {
        // Unsupported
      }
    },
    [forcedTheme]
  );

  const handleMediaQuery = useCallback(
    (e: MediaQueryListEvent | MediaQueryList) => {
      const resolved = getSystemTheme(e);
      setResolvedTheme(resolved);

      if (theme === 'system' && enableSystem && !forcedTheme) {
        applyTheme('system');
      }
    },
    [theme, forcedTheme]
  );

  // Always listen to System preference
  useEffect(() => {
    const media = window.matchMedia(MEDIA);

    // Intentionally use deprecated listener methods to support iOS & old browsers
    media.addListener(handleMediaQuery);
    handleMediaQuery(media);

    return () => media.removeListener(handleMediaQuery);
  }, [handleMediaQuery]);

  // localStorage event handling
  useEffect(() => {
    const handleStorage = (e: StorageEvent) => {
      if (e.key !== storageKey) {
        return;
      }

      // If default theme set, use it if localstorage === null (happens on local storage manual deletion)
      const theme = e.newValue || defaultTheme;
      setTheme(theme);
    };

    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, [setTheme]);

  // Whenever theme or forcedTheme changes, apply it
  useEffect(() => {
    applyTheme(forcedTheme ?? theme);
  }, [forcedTheme, theme]);

  const providerValue = useMemo(() => ({
    theme,
    setTheme,
    forcedTheme,
    resolvedTheme: theme === 'system' ? resolvedTheme : theme,
    themes: enableSystem ? [...themes, 'system'] : themes,
    systemTheme: (enableSystem ? resolvedTheme : undefined) as 'light' | 'dark' | undefined
  }), [theme, setTheme, forcedTheme, resolvedTheme, enableSystem, themes]);

  return (
    <ThemeContext.Provider
      value={providerValue}
    >
      <ThemeScript
        {...{
          forcedTheme,
          disableTransitionOnChange,
          enableSystem,
          enableColorScheme,
          storageKey,
          themes,
          defaultTheme,
          attribute,
          value,
          children,
          attrs,
          nonce
        }}
      />
      {children}
    </ThemeContext.Provider>
  );
};

/* eslint-disable react/display-name */
const ThemeScript = memo(function({
  forcedTheme,
  storageKey,
  attribute,
  enableSystem,
  enableColorScheme,
  defaultTheme,
  value,
  attrs,
  nonce
}: ThemeProviderProps & { attrs: string[], defaultTheme: string }) {
  const defaultSystem = defaultTheme === 'system';

  // Code-golfing the amount of characters in the script
  const optimization = (() => {
    if (attribute === 'class') {
      const removeClasses = `c.remove(${attrs.map((t: string) => `'${t}'`).join(',')})`;

      return `var d=document.documentElement,c=d.classList;${removeClasses};`;
    } else {
      return `var d=document.documentElement,n='${attribute}',s='setAttribute';`;
    }
  })();

  const fallbackColorScheme = (() => {
    if (!enableColorScheme) {
      return '';
    }

    const fallback = colorSchemes.includes(defaultTheme) ? defaultTheme : null;

    if (fallback) {
      return `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${defaultTheme}'`;
    } else {
      return 'if(e===\'light\'||e===\'dark\')d.style.colorScheme=e';
    }
  })();

  const updateDOM = (name: string, literal: boolean = false, setColorScheme = true) => {
    const resolvedName = value ? value[name] : name;
    const val = literal ? name + '|| \'\'' : `'${resolvedName}'`;
    let text = '';

    // MUCH faster to set colorScheme alongside HTML attribute/class
    // as it only incurs 1 style recalculation rather than 2
    // This can save over 250ms of work for pages with big DOM
    if (enableColorScheme && setColorScheme && !literal && colorSchemes.includes(name)) {
      text += `d.style.colorScheme = '${name}';`;
    }

    if (attribute === 'class') {
      if (literal || resolvedName) {
        text += `c.add(${val})`;
      } else {
        text += 'null';
      }
    } else {
      if (resolvedName) {
        text += `d[s](n,${val})`;
      }
    }

    return text;
  };

  const scriptSrc = (() => {
    if (forcedTheme) {
      return `!function(){${optimization}${updateDOM(forcedTheme)}}()`;
    }

    if (enableSystem) {
      return `!function(){try{${optimization}var e=localStorage.getItem('${storageKey}');if('system'===e||(!e&&${defaultSystem})){var t='${MEDIA}',m=window.matchMedia(t);if(m.media!==t||m.matches){${updateDOM(
        'dark'
      )}}else{${updateDOM('light')}}}else if(e){${value ? `var x=${JSON.stringify(value)};` : ''
        }${updateDOM(value ? 'x[e]' : 'e', true)}}${!defaultSystem ? 'else{' + updateDOM(defaultTheme, false, false) + '}' : ''
        }${fallbackColorScheme}}catch(e){}}()`;
    }

    return `!function(){try{${optimization}var e=localStorage.getItem('${storageKey}');if(e){${value ? `var x=${JSON.stringify(value)};` : ''
      }${updateDOM(value ? 'x[e]' : 'e', true)}}else{${updateDOM(
        defaultTheme,
        false,
        false
      )};}${fallbackColorScheme}}catch(t){}}();`;
  })();

  return <script nonce={nonce} dangerouslySetInnerHTML={{ __html: scriptSrc }} />;
}, () => true); // Never re-render this component

// Helpers
const getTheme = (key: string, fallback?: string) => {
  if (isServer) return undefined;
  let theme;
  try {
    theme = localStorage.getItem(key) || undefined;
  } catch (e) {
    // Unsupported
  }
  return theme || fallback;
};

const disableAnimation = () => {
  const css = document.createElement('style');
  css.appendChild(
    document.createTextNode(
      '*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}'
    )
  );
  document.head.appendChild(css);

  return () => {
    // Force restyle
    (() => window.getComputedStyle(document.body))();

    // Wait for next tick before removing
    setTimeout(() => {
      document.head.removeChild(css);
    }, 1);
  };
};

const getSystemTheme = (e?: MediaQueryList | MediaQueryListEvent) => {
  if (!e) e = window.matchMedia(MEDIA);
  const isDark = e.matches;
  const systemTheme = isDark ? 'dark' : 'light';
  return systemTheme;
};
