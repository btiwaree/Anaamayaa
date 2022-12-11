import Image from 'next/image';

import MisantImage from 'public/misant-dhakal.jpg';
import PrakashImage from 'public/prakash-limbu.jpg';

const imageStyle = {
  borderRadius: 128,
};

export const doctors = [
  {
    name: 'डा. मिसान्त ढकाल',
    title: 'वरिष्ठ पञ्चकर्म विशेषज्ञ',
    degree: 'BAMS-300, PK-04',
    profileImage: (
      <Image
        alt="Dr Misant Dhakal"
        height={128}
        quality={100}
        src={MisantImage}
        style={imageStyle}
        width={128}
      />
    ),
  },
  {
    name: 'डा. प्रकाश लिम्बु',
    title: 'वरिष्ठ आयुर्वेद चिकित्सक',
    degree: 'BAMS-361',
    profileImage: (
      <Image
        alt="Dr Prakash Limbu"
        height={128}
        quality={100}
        src={PrakashImage}
        style={imageStyle}
        width={128}
      />
    ),
  },
];
