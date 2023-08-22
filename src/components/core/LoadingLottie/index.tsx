import { useMemo } from 'react';
import dynamic from 'next/dynamic';

import { ContainerFullLoading } from './styles';

import loadingAnimation from '../../../assets/animations/loadingAnimation.json';


const Lottie: any = dynamic(
  () => import('lottie-react').then(module => module.default),
  { ssr: false },
);

interface LottieLoadingProps {
  loading: boolean;
  fullLoading?: boolean;
  size?: number;
}

// eslint-disable-next-line react/prop-types
const LoadingLottie: React.FC<LottieLoadingProps> = ({ loading, fullLoading = true, size = 300 }) => {
  const defaultOptions = useMemo(
    () => ({
      loop: true,
      autoplay: true,
      isClickToPauseDisabled: true,
      animationData: loadingAnimation,
    }),
    [],
  );
  const renderLottie = useMemo(
    () => (
      // eslint-disable-next-line react/react-in-jsx-scope
      <Lottie
        {...defaultOptions}
        style={{ height: size, width: size, flex: 1 }}
      />
    ),
    [defaultOptions, size],
  );

  if (!loading) return null;

  if (!fullLoading) return renderLottie;
  // eslint-disable-next-line react/react-in-jsx-scope
  return <ContainerFullLoading>{renderLottie}</ContainerFullLoading>;
};

export default LoadingLottie;
