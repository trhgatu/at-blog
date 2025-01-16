import React from 'react';
import Image from 'next/image';

const FeaturedSection: React.FC = () => {
    return (
        <section className="bg-white dark:bg-gray-900 py-16 px-8 border rounded-md">
            <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                    <Image
                        src="/assets/images/couple.avif"
                        alt="Featured Article"
                        width={600}
                        height={400}
                        className="w-full rounded-lg shadow-lg"
                    />
                </div>
                <div className="md:w-1/2">
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                        Hóa ra
                    </h2>
                    <blockquote>
                        Hóa ra những cuộc gặp gỡ đẹp nhất không phải là những lần tình cờ bắt gặp ai đó
                        trên con phố đông đúc, không phải là những ánh mắt giao nhau dưới ánh nắng vàng
                        dịu dàng hay những lần chạm tay giữa dòng người vội vã. Mà chính là khi trong
                        lòng ta có ai đó khắc sâu, đủ để khiến trái tim rung động mỗi khi nhớ về.
                        Đó là một cảm giác ấm áp, dịu dàng và an yên, không cần phải tìm kiếm xa xôi, cũng
                        không cần phải gắng gượng. Cuộc gặp gỡ đẹp nhất chính là khi trái tim ta hiểu
                        và cảm nhận được sự hiện diện của người đó, ngay cả khi họ không còn ở cạnh.
                    </blockquote>
                    <p>
                        Là khi từng ký ức về họ sống mãi trong ta, mỗi lần nghĩ tới, đều mang đến một
                        nụ cười nhẹ nhõm, một thoáng bình yên, một chút tiếc nuối nhưng không hối hận.
                        Bởi lẽ, không phải mọi cuộc gặp gỡ đều phải có hồi kết, đôi khi chỉ cần giữ
                        lại trong tim một bóng hình đẹp đẽ cũng đủ làm ta thấy hạnh phúc.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default FeaturedSection;
