import React from 'react';
import Particles, { IParticlesProps } from 'react-tsparticles';

interface ParticleBackgroundProps {
  params: IParticlesProps['options'];
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({ params }) => {
  return (
    <Particles
      id="tsparticles"
      options={params}
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
    />
  );
};

export default ParticleBackground;