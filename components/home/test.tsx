'use client';

import Image from 'next/image';
import React from 'react';
import { SocialLinks } from '../common/SocialLinks';

interface ArticleCardProps {
  imageSrc: string;
  title: string;
  subTitle: string;
  description: string;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  imageSrc,
  title,
  subTitle,
  description,
}) => {

  const handleChatClick = () => {
    // Add your chat functionality here
    console.log('Chat button clicked');
    // You can integrate with your chat service or open a chat modal
  };
  return (
    <article className="rounded-xl transition-colors">
      <div className="flex flex-col sm:flex-row items-start gap-4">
        {/* Image */}
        <a href="#" className="hidden sm:block shrink-0">
          <Image
            height={120}
            width={120}
            src={imageSrc}
            alt={title}
            className="w-30 h-30 sm:w-40 sm:h-40 object-cover rounded-full"
          />
        </a>

        {/* Content */}
        <div className="flex-1">
          <h3 className="font-medium text-base sm:text-lg">
            <a href="#" className="hover:underline">
              {title}
            </a>
          </h3>
          <h5 className="font-medium text-base sm:text-sm">
            {subTitle}
          </h5>

          <p className="text-sm text-muted mb-3">
            {description}
          </p>

          <button
            onClick={handleChatClick}
            className="px-4 py-1 text-sm font-medium rounded-lg transition-colors duration-200 border border-border cursor-pointer"
          >
            Chat with me
          </button>


          {/* <div className='flex justify-start mt-2'>
            <SocialLinks />
          </div> */}

        </div>

      </div>
    </article>
  );
};
