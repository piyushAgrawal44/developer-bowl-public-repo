"use client";

import Image from "next/image";
import NewsLetterSection from "@/components/NewsLetterSection";

export default function BlogDetailClient({ post }: { post: any }) {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="">
        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {post.title}
        </h1>

        {/* Meta info */}
        <div className="text-sm text-gray-500 mb-6">
          <span>{post.date}</span> • <span>{post.readTime}</span> •{" "}
          <span className="text-blue-600 font-semibold">
            {post.category}
          </span>
        </div>

        {/* Author */}
        <div className="flex items-center gap-3 mb-6">
          <div className="relative w-10 h-10 rounded-full overflow-hidden">
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              fill
              className="object-cover"
              priority
            />
          </div>
          <span className="text-sm text-gray-700">{post.author.name}</span>
        </div>

        {/* Image */}
        <div className="w-full h-64 relative mb-8 rounded-xl overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="text-lg text-gray-800 leading-8 space-y-6">
          <p>{post.excerpt}</p>
          <p>
            In today’s fast-paced development world, it's crucial to stay updated with the latest
            trends and tools. Whether you're building with Next.js, exploring AI solutions, or scaling
            with DevOps strategies — understanding the core fundamentals will always give you an edge.
          </p>
          <p>
            This blog will dive deep into those practices, outline potential pitfalls, and share how
            developers are transforming workflows across industries. If you're ready to take your dev game
            to the next level, you're in the right place.
          </p>

          <h2>Key Takeaways</h2>
          <ul>
            <li>Modern frameworks are evolving rapidly — adaptability is key.</li>
            <li>Scalability isn’t just backend; it’s design, deployment, and maintenance.</li>
            <li>AI is not replacing developers — it’s empowering them.</li>
          </ul>

          <p>
            Thanks for reading! Stay tuned for more deep dives and tutorials — and don't forget to
            subscribe to stay ahead in the dev world.
          </p>
        </div>
      </div>

      <NewsLetterSection />
    </div>
  );
}
