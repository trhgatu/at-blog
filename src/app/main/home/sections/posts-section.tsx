export default function PostsSection() {
  const posts = [
    {
      id: 1,
      title: "KHÔNG CẦN phải LÀM CHỦ thì mới GIÀU",
      category: "SÁCH",
      excerpt:
        "Làm thế nào để xây dựng nền tảng tài chính vững chắc và gia tăng tài sản?",
      image: "https://dummyimage.com/600x400/000/fff", // Dummy image
      timeToRead: "3 phút đọc",
      author: {
        name: "Spiderum Team",
        avatar: "https://avatar.iran.liara.run/public/45", // Dummy avatar
      },
    },
    {
      id: 2,
      title: "Lịch sử hình thành thung lũng Silicon",
      category: "SÁCH",
      excerpt:
        "Đối với những người yêu công nghệ, có lẽ không còn quá xa lạ...",
      image: "https://dummyimage.com/600x400/000/fff",
      timeToRead: "25 phút đọc",
      author: {
        name: "Lê Công Thành",
        avatar: "https://avatar.iran.liara.run/public/23",
      },
    },
    {
      id: 3,
      title: "Hành trình nhận thức nỗi đau tinh thần...",
      category: "SÁCH",
      excerpt:
        "Khi thơ mạng không còn là thơ 3 xu nữa mà giờ đây thơ đang định hình...",
      image: "https://dummyimage.com/600x400/000/fff",
      timeToRead: "12 phút đọc",
      author: {
        name: "Lệ Huyền",
        avatar: "https://avatar.iran.liara.run/public/20",
      },
    },
    {
      id: 4,
      title: "Xa nhà và câu chuyện muôn thuở 'Bao giờ lại tới Tết?'",
      category: "SÁCH",
      excerpt:
        "Có hai thứ mà đời người không nên bỏ lỡ. Một là chuyến tàu về nhà...",
      image: "https://dummyimage.com/600x400/000/fff",
      timeToRead: "5 phút đọc",
      author: {
        name: "Cà Phê Phin",
        avatar: "https://avatar.iran.liara.run/public/9",
      },
    },
    {
      id: 5,
      title: "Xa nhà và câu chuyện muôn thuở 'Bao giờ lại tới Tết?'",
      category: "THINKING OUT LOUD",
      excerpt:
        "Có hai thứ mà đời người không nên bỏ lỡ. Một là chuyến tàu về nhà...",
      image: "https://dummyimage.com/600x400/000/fff",
      timeToRead: "5 phút đọc",
      author: {
        name: "Cà Phê Phin",
        avatar: "https://avatar.iran.liara.run/public/9",
      },
    },
  ];

  return (
    <section className="w-full px-4">
      <h2 className="text-2xl font-bold mb-6">Phổ biến trên AT Blog</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {posts.slice(1).map((post) => (
          <div key={post.id} className="flex flex-col lg:flex-row gap-4">
            <div className="flex-shrink-0">
              <img
                src={post.image}
                alt={post.title}
                className="rounded-md object-cover w-full lg:w-48 h-40 lg:h-48"
              />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xs text-gray-500 uppercase">
                {post.category}
              </span>
              <h3 className="text-sm font-semibold">{post.title}</h3>
              <p className="text-xs text-gray-600">{post.excerpt}</p>
              <div className="flex items-center gap-2 text-xs text-gray-500 mt-2">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="rounded-full w-5 h-5"
                />
                <span>{post.author.name}</span>
                <span>•</span>
                <span>{post.timeToRead}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
