declare module 'react-slick';
declare module 'react-router-dom';
declare module '@tailwindcss/line-clamp';
declare module 'module-alias';
declare module 'lucide-react';
declare module '@radix-ui/colors';
declare module '@tailwindcss/vite';
declare module 'react-i18next';
declare module '*.svg?react' {
  import * as React from 'react';
  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>;
  export default ReactComponent;
}
