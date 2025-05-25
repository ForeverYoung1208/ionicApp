import '@capacitor-community/google-maps/dist/plugin';

declare namespace JSX {
  interface IntrinsicElements {
    'capacitor-google-map': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        ref?: React.Ref<HTMLElement>;
        style?: React.CSSProperties;
      },
      HTMLElement
    >;
  }
}
