/* eslint-disable */
// Ambient type declarations for CSS imports so `tsc` passes on a fresh clone,
// before Expo generates `expo-env.d.ts` (which references `expo/types`). Kept in
// sync with node_modules/expo/types/global.d.ts.

// CSS modules
declare module '*.module.css' {
  /** **Experimental:** Import styles that can be used with `react-native-web` components, using the `style` prop. */
  export const unstable_styles: { readonly [key: string]: object };

  const classes: { readonly [key: string]: string };
  export default classes;
}

// Global (side-effect) CSS imports
declare module '*.css';
