import React from 'react';
import profile from '../../public/profile.png';
import Image from 'next/image';
import Link from 'next/link';

const AboutMe: React.FC = () => {
  const handleChatClick = () => {
    // Add your chat functionality here
    console.log('Chat initiated!');
  };

  return (
    <div className="p-4 lg:p-6 border border-border">
      <div className="flex items-start gap-4 mb-2">
        <article className="rounded-xl transition-colors">
          <div className="flex flex-col sm:flex-row items-start gap-4">
            {/* Image */}
            <Link href="#" className="hidden sm:block shrink-0">
              <Image
                height={120}
                width={120}
                src={profile.src}
                alt="Kawsar Mia"
                className="w-30 h-30 sm:w-40 sm:h-40 object-cover rounded-full"
              />
            </Link>

            {/* Content */}
            <div className="flex-1">
              <h3 className="font-medium text-base sm:text-lg">
                <a href="#" className="hover:underline">
                  Hi, I am Kawsar Mia
                </a>
              </h3>
              <h5 className="font-medium text-base sm:text-sm">
                A Full-Stack Software Engineer
              </h5>

              <p className="text-sm text-muted mb-3">
                with 4 Years of Experience in designing, developing, and maintaining <br />robust applications using modern technologies.
              </p>

              <button
                onClick={handleChatClick}
                className="px-4 py-1 text-sm font-medium rounded-lg transition-colors duration-200 border cursor-pointer border-purple-500 mr-2"
              >
                Chat with Me!
              </button>

              <button
                onClick={handleChatClick}
                className="px-4 py-1 text-sm font-medium rounded-lg transition-colors duration-200 border border-purple-500 cursor-pointer"
              >
                Resume
              </button>


              {/* <div className='flex justify-start mt-2'>
                    <SocialLinks />
                  </div> */}

            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default AboutMe;