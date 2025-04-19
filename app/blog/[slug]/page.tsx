import { notFound } from "next/navigation";
import { blogPosts } from "@/constants/Blog";
import BlogDetailClient from "./BlogDetailClient";

// Utility to sanitize the filename
const sanitizeSlug = (slug: string) => {
  return slug
    .toLowerCase()
    .replace(/\s+/g, "-")   // replace spaces with hyphens
    .replace(/[&:]/g, "-");  // replace `&` and `:` with hyphens
};

// Static generation params
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: sanitizeSlug(post.title),
  }));
}

export default function BlogPage(props: { params: any }) {
  const slug = decodeURIComponent(props.params.slug);

  // Sanitize slug here too
  const sanitizedSlug = sanitizeSlug(slug);

  const post = blogPosts.find(
    (post) => sanitizeSlug(post.title) === sanitizedSlug
  );

  if (!post) return notFound();

  return <BlogDetailClient post={post} />;
}
