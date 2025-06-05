import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { config } from "@/config";
import { signOgImageUrl } from "@/lib/og-image";
import Markdown from "react-markdown";

const content = `# About Me

![Samantha](https://imagedelivery.net/lLmNeOP7HXG0OqaG97wimw/clvlugru90000o4g8ahxp069s/db7abbe3-aa5c-433e-a16d-cbf137d1c9e5.png/public)


I'm Warsa, a passionate software programmer from Ethiopia, and a proud graduate of the Open University. Much of my journey has been shaped by self-tuition, curiosity, and the drive to keep learning in a world that's constantly evolving.

Technology wasn’t always accessible or obvious where I started, but I’ve always believed that with the right mindset and dedication, you can learn anything. Over the years, I’ve taught myself how to code, build applications, and navigate the ever-changing world of software development—one challenge at a time.

This blog is where I share my thoughts, projects, and experiences—from debugging stubborn code to reflecting on what it means to be a self-made programmer in a global tech ecosystem. I’ll also be writing about the tools I use, the lessons I’ve learned, and the personal growth that comes with building a career from the ground up.

But this blog isn’t just about programming. It’s about the journey of becoming—growing not just in skills, but in mindset, resilience, and purpose. If you're a fellow learner, a dreamer, or just someone curious about technology, I hope you'll find something here to inspire you.

Let’s build, learn, and grow—together.

Warm regards,
Abdi

export async function generateMetadata() {
  return {
    title: "About Me",
    description: "Learn more about Samantha and her travel adventures",
    openGraph: {
      title: "About Me",
      description: "Learn more about Samantha and her travel adventures",
      images: [
        signOgImageUrl({
          title: "Samantha",
          label: "About Me",
          brand: config.blog.name,
        }),
      ],
    },
  };
}

const Page = async () => {
  return (
    <div className="container mx-auto px-5">
      <Header />
      <div className="prose lg:prose-lg dark:prose-invert m-auto mt-20 mb-10 blog-content">
        <Markdown>{content}</Markdown>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
