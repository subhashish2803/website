import { Link } from "react-router-dom";

const BlogSection = () => {
  return (
    <div className="bg-gray-100">
    <section id="blog" className="min-h-screen font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6">
      <div className="space-y-12 w-full py-12">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="bg-black text-white px-3 py-1 rounded-md text-sm">Blog Post</div>
          </div>
        </div>

        {/* Blog Post Links */}

        <div>
          <Link to="/blog/hello-world" className="flex flex-col space-y-1 mb-4">
            <div className="w-full flex flex-col">
              <p className="tracking-tight text-black">New Beginnings: My First Blog! 🌝</p>
              <p className="h-6 text-xs text-black text-muted-foreground">2025-02-03</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
    </div>
  );
};

export default BlogSection;
