// Global type declarations to allow side-effect CSS imports
// Next.js normally handles this, but we provide a fallback to silence TS complaints.
declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}
// Also allow plain side-effect imports (no export) by widening the type.
declare module '*/globals.css';
