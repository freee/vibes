import * as React from 'react';
import { SwallowProps, SwallowContainer } from './SwallowContainer';

type Props = SwallowProps;

const NoDataIllust: React.FC<Props> = (props: Props) => {
  return (
    <SwallowContainer
      {...props}
      mediumHeightRem={10}
      renderSVG={({ className, styles }) => (
        <svg
          className={className}
          viewBox="0 0 240 191"
          fill="none"
          role="presentation"
          aria-hidden="true"
          style={styles}
        >
          <path
            d="M70 190H59L89 88H100L70 190Z"
            fill="white"
            stroke="#D7D2D2"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="140 20"
          />
          <path
            d="M97 190H108L91 88H80L97 190Z"
            fill="white"
            stroke="#D7D2D2"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="140 20"
          />
          <path
            d="M66 190L87.07 110.91"
            stroke="#D7D2D2"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="140 20"
          />
          <path
            d="M101 190L89.83 112.35"
            stroke="#D7D2D2"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="140 20"
          />
          <path
            d="M131 190H120L135 88H146L131 190Z"
            fill="white"
            stroke="#D7D2D2"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="140 20"
          />
          <path
            d="M156 190H167L135 88H124L156 190Z"
            fill="white"
            stroke="#D7D2D2"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="140 20"
          />
          <path
            d="M160 190L136.93 110.91"
            stroke="#D7D2D2"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="140 20"
          />
          <path
            d="M127 190L136.17 112.35"
            stroke="#D7D2D2"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="140 20"
          />
          <path
            d="M100 33H94.92H91L86 1H95L100 33Z"
            fill="white"
            stroke="#D7D2D2"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="140 20"
          />
          <path
            d="M89 2L94.91 33"
            stroke="#D7D2D2"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="140 20"
          />
          <path d="M61.8 22H141.48L161.1 123.07H81.43" fill="white" />
          <path
            d="M61.8 22H141.48L161.1 123.07H81.43"
            stroke="#D7D2D2"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="140 20"
          />
          <path
            d="M156.2 127H76.52L81.43 123.07H161.1L156.2 127Z"
            fill="white"
            stroke="#D7D2D2"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M104.11 123H134.1L131.99 115H102L104.11 123Z"
            fill="white"
            stroke="#D7D2D2"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="140 20"
          />
          <path
            d="M81.43 123.07L76.52 127L56.9 25.92L61.8 22L81.43 123.07Z"
            fill="white"
            stroke="#D7D2D2"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="140 20"
          />
          <path
            d="M172 83L169.17 77.86L165.74 79.74C162.43 81.62 159.83 86.31 161.25 88.88C162.67 91.45 168.04 91.83 171.4 90.04L174.83 88.15L172 83Z"
            fill="white"
            stroke="#D7D2D2"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="140 20"
          />
          <path
            d="M221.78 57.82C222.126 57.5209 222.36 57.1119 222.441 56.6615C222.522 56.211 222.447 55.7463 222.227 55.3449C222.007 54.9435 221.656 54.6297 221.232 54.4559C220.809 54.2821 220.339 54.2589 219.9 54.39C219.04 54.86 179.21 72.16 169.13 77.85L172 83L174.83 88.15C185 82.68 220.92 58.29 221.78 57.82Z"
            fill="#D7D2D2"
            fillOpacity="0.2"
            stroke="#D7D2D2"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="260 50"
          />
          <path
            d="M156.23 99.33C157.811 98.4553 158.993 97.0031 159.527 95.2772C160.062 93.5514 159.909 91.6855 159.1 90.07C158.19 88.4984 156.695 87.3499 154.943 86.8742C153.19 86.3985 151.32 86.6342 149.74 87.53C143.84 90.77 144.74 101.04 138.92 101.13C144 102.26 149.6 103.07 156.23 99.33Z"
            fill="#D7D2D2"
            fillOpacity="0.2"
            stroke="#D7D2D2"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="260 50"
          />
        </svg>
      )}
    />
  );
};

export default NoDataIllust;
