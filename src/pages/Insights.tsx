import { Helmet } from 'react-helmet-async';
import { Calendar, User } from 'lucide-react';

const posts = [
    {
        title: "Construction Cost Trends in Chennai 2024",
        excerpt: "An analysis of rising cement and steel prices in Tamil Nadu and how it affects residential construction budgets this fiscal year.",
        date: "March 15, 2024",
        author: "Senthil Kumar",
        image: "https://images.unsplash.com/photo-1590644365607-1c5a38a9270f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "Market Trends"
    },
    {
        title: "Sustainable Homes: Beating the Tamil Nadu Heat",
        excerpt: "How selecting the right porotherm bricks and cool-roof tiles can reduce your AC bills by up to 30% during Chennai summers.",
        date: "February 28, 2024",
        author: "Divya Ramesh",
        image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "Green Building"
    },
    {
        title: "Understanding CMDA Approval Process",
        excerpt: "A step-by-step guide to getting your building plan approved by the Chennai Metropolitan Development Authority without delays.",
        date: "January 10, 2024",
        author: "Rajesh Kannan",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "Regulations"
    }
];

export default function InsightsPage() {
    return (
        <>
            <Helmet>
                <title>Insights & Resources | ConstructCorp</title>
                <meta name="description" content="Latest news, trends and guides on construction in Tamil Nadu. Learn about costs, approvals, and sustainable materials." />
            </Helmet>

            <div className="pt-32 pb-20 bg-secondary text-white">
                <div className="container-custom ">
                    <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Knowledge Hub</span>
                    <h1 className="text-white text-4xl md:text-6xl font-black mb-6 font-heading">
                        Insights & <span className="text-primary">Resources</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
                        Expert advice and updates from the Tamil Nadu construction industry.
                    </p>
                </div>
            </div>

            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {posts.map((post, index) => (
                            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
                                <div className="h-60 overflow-hidden relative">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 left-4 bg-primary text-secondary text-xs font-bold px-3 py-1 rounded uppercase tracking-wider">
                                        {post.category}
                                    </div>
                                </div>
                                <div className="p-8">
                                    <div className="flex items-center gap-4 text-xs text-gray-400 mb-4 font-bold uppercase tracking-wide">
                                        <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {post.date}</span>
                                        <span className="flex items-center gap-1"><User className="h-3 w-3" /> {post.author}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-secondary mb-3 leading-tight group-hover:text-primary transition-colors">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-500 mb-6 text-sm leading-relaxed">
                                        {post.excerpt}
                                    </p>
                                    <a href="#" className="text-secondary font-bold text-sm uppercase border-b-2 border-primary pb-1 hover:text-primary transition-colors">
                                        Read Article
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
