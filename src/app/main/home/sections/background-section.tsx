import React from 'react';

const BackgroundSection: React.FC = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-16 px-8">
      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          Chào mừng bạn đến với Blog của tôi
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
          Đây là nơi tôi chia sẻ những bài viết hay mà tôi đã sưu tầm, những câu chuyện
          ý nghĩa và đầy cảm hứng. Blog này không chỉ là kho tàng tri thức, mà còn là góc nhỏ
          để tôi bộc lộ cảm xúc, ghi lại những suy tư và trải nghiệm trong cuộc sống.
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Hy vọng mỗi bài viết tại đây sẽ mang đến cho bạn điều gì đó giá trị, dù là một góc nhìn mới,
          một phút giây thư giãn, hay một động lực nhỏ bé để bước tiếp. Hãy cùng tôi tạo nên những
          kết nối ý nghĩa qua từng dòng chữ!
        </p>
      </div>
    </section>
  );
};

export default BackgroundSection;
