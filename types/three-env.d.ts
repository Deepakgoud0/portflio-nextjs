/// <reference types="next" />
/// <reference types="three" />

declare module 'maath/random' {
  export function inSphere(array: Float32Array, options: { radius: number }): Float32Array;
}

declare namespace JSX {
  interface IntrinsicElements {
    group: any;
    geometry: any;
    lineBasicMaterial: any;
    mesh: any;
    octahedronGeometry: any;
    points: any;
  }
} 