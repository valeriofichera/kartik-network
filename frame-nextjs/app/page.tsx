import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';

import Hero from './components/Hero';
import Header from './components/Header';
import Kartonomics from './components/Kartonomics';
import KartikNFT from './components/KartikNFT';





const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'Start Quiz'
    }
  ],
  image: `${NEXT_PUBLIC_URL}/main.png`,
  post_url: `${NEXT_PUBLIC_URL}/api/quiz?currentQuestion=0&answersCorrect=0`,
});

export const metadata: Metadata = {
  title: 'Kartik Network',
  description: 'LFG',
  openGraph: {
    title: 'Kartik Network',
    description: 'LFG',
    images: [`${NEXT_PUBLIC_URL}/main.png`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <div className="bg-[#FFD66D]">
    <Header/>
    <Hero />
    <KartikNFT/>
    <Kartonomics/>
  </div>
  );
}


