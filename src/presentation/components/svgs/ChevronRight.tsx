import react from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

const ChevronRight = (props: SvgProps) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={36}
      height={36}
      fill="none"
      {...props}>
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="M10 1h16a9 9 0 0 1 9 9v16a9 9 0 0 1-9 9H10a9 9 0 0 1-9-9V10a9 9 0 0 1 9-9ZM0 10C0 4.477 4.477 0 10 0h16c5.523 0 10 4.477 10 10v16c0 5.523-4.477 10-10 10H10C4.477 36 0 31.523 0 26V10Zm14.354-1.354a.5.5 0 0 0-.708.708L22.293 18l-8.647 8.646a.5.5 0 0 0 .708.708l9-9a.5.5 0 0 0 0-.708l-9-9Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default ChevronRight;
