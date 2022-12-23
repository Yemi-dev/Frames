export const CloseIcon = ({ onClick }: { onClick: any }): JSX.Element => (
  <svg
    onClick={onClick}
    width="19"
    height="19"
    viewBox="0 0 19 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.11237 6.51965L2.59272 0L0 2.59273L6.57096 9.16369L1.34706e-05 16L2.64354 18.5409L9.1642 11.7569L15.5563 18.1491L18.1491 15.5563L11.7056 9.11288L17.889 2.67977L15.2455 0.13886L9.11237 6.51965Z"
      fill="#FDD961"
    />
  </svg>
);

CloseIcon.displayName = 'CloseIcon';
