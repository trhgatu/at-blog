'use client'

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import Marquee from '@/components/ui/marquee';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
const characters = [
  {
    name: "Sherlock Holmes",
    img: "https://images.theconversation.com/files/372277/original/file-20201201-15-1l4iewv.jpg?ixlib=rb-4.1.0&rect=0%2C0%2C6648%2C3319&q=45&auto=format&w=1356&h=668&fit=crop",
    body: "Loại trừ cái không thể, còn lại chính là sự thật.",
  },
  {
    name: "Hercule Poirot",
    img: "https://marcainteligente.com/wp-content/uploads/2024/03/Quien-es-Hercules-Poirot.png",
    body: "Điều không thể đã không xảy ra, vì vậy điều không thể có thể xảy ra.",
  },
  {
    name: "Harry Potter",
    img: "https://upload.wikimedia.org/wikipedia/en/d/d7/Harry_Potter_character_poster.jpg",
    body: "Can đảm là đứng lên chống lại cả bạn bè lẫn kẻ thù.",
  },
  {
    name: "Frodo Baggins",
    img: "https://tolkiengateway.net/w/images/thumb/d/dd/Matt_Stewart_-_Frodo_Baggins.webp/640px-Matt_Stewart_-_Frodo_Baggins.webp.png",
    body: "Chúng ta không thể quyết định thời gian, nhưng có thể quyết định cách sử dụng nó.",
  },
  {
    name: "Atticus Finch",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Gregory_Peck_Atticus_Publicity_Photo.jpg/800px-Gregory_Peck_Atticus_Publicity_Photo.jpg",
    body: "Đừng phán xét ai nếu chưa đặt mình vào vị trí của họ.",
  },
  {
    name: "Jay Gatsby",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/35/Warner_Baxter_as_Jay_Gatsby_in_The_Great_Gatsby_%281926%29_Retouched_Cropped.jpg",
    body: "Gatsby tin vào ánh sáng xanh, và hy vọng vào tương lai.",
  },
  {
    name: "Hoàng Tử Bé",
    img: "https://media.vov.vn/sites/default/files/styles/large/public/2022-02/992021-162033658_680x0.jpg",
    body: "Cái quan trọng nhất là vô hình với mắt thường.",
  },
  {
    name: "Anna Karenina",
    img: "https://www.usatoday.com/gcdn/media/USATODAY/GenericImages/2012/11/15/reviewannakarenina-16_9.jpg?width=660&height=373&fit=crop&format=pjpg&auto=webp",
    body: "Tôi không thể sống nếu không yêu và không được yêu.",
  },
  {
    name: "Dracula",
    img: "https://upload.wikimedia.org/wikipedia/commons/4/47/Dracula_1931.jpg",
    body: "Máu là sự sống, và cuộc sống này không bao giờ kết thúc.",
  },
  {
    name: "Don Quixote",
    img: "https://katerinamorgan.art/cdn/shop/articles/Don_Quixote_and_Sancho_Panza_at_a_crossroad_Wilhelm_Marstrand_1847Nivaagaard_Museum_Denmark_3511x.jpg?v=1612485736",
    body: "Những giấc mơ tốt đẹp sẽ luôn sống mãi trong ta.",
  },
];

const firstRow = characters.slice(0, characters.length / 2);
const secondRow = characters.slice(characters.length / 2);

const CharacterCard = ({
  img,
  name,
  body,
}: {
  img: string;
  name: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] bg-white",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full object-cover h-10 w-10" alt={name} src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

const BackgroundSection: React.FC = () => {
  return (
    <section className="relative flex items-center justify-center overflow-hidden py-10 ">
      <div className="relative z-10 text-center px-10 max-w-3xl flex flex-col items-center">
        <DotLottieReact src='https://lottie.host/8daeb668-7431-49ae-98a8-eb775e2dfc52/6prmrBwtfu.lottie'
          loop
          autoplay
          className='h-60' />
        <p className="text-lg font-lora"> Mỗi câu chữ là nhịp đập của cảm xúc, lưu giữ những bài học sâu sắc và
          những câu chuyện vượt thời gian. Hãy để nơi đây trở thành góc nhỏ để ta viết nên cảm xúc, sẻ chia thấu hiểu,
          và kết nối những tâm hồn đồng điệu trên hành trình khám phá ý nghĩa cuộc sống. </p>
      </div>
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden px-10">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((character) => (
            <CharacterCard key={character.name} {...character} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((character) => (
            <CharacterCard key={character.name} {...character} />
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default BackgroundSection;
