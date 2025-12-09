import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import homeBg from './assets/home_bg.jpg';
import blog1 from './assets/blog_1.jpg';
import blog2 from './assets/blog_2.jpg';

function BlogPost() {
    const { id } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const blogContent = {
        1: {
            title: "The AI Revolution in Enterprise",
            date: "December 12, 2025",
            subtitle: "How artificial intelligence is reshaping the corporate landscape and what it means for the future of work",
            image: blog1,
            content: (
                <>
                    <p>The enterprise world is experiencing a seismic shift. Artificial intelligence, once a futuristic concept confined to research labs and science fiction, has become an essential tool in the corporate arsenal. From automating routine tasks to enabling breakthrough innovations, AI is fundamentally transforming how businesses operate, compete, and create value.</p>

                    <h2>The Current State of AI in Business</h2>
                    <p>Today's enterprises are deploying AI across virtually every function. Customer service departments use intelligent chatbots that handle complex inquiries with human-like understanding. Marketing teams leverage predictive analytics to anticipate customer needs before they're expressed. Finance departments employ AI-powered systems that detect fraud in real-time and optimize cash flow with unprecedented precision.</p>
                    <p>What makes this revolution particularly striking is its accessibility. Cloud-based AI services have democratized access to powerful machine learning capabilities, allowing small startups to compete with established giants. The barrier to entry has collapsed, and the competitive advantage now lies not in having AI, but in how effectively you deploy it.</p>

                    <h2>Transforming the Workforce</h2>
                    <p>Perhaps nowhere is the impact more visible than in the changing nature of work itself. Contrary to apocalyptic predictions of mass unemployment, AI is proving to be more of a collaborator than a replacement. Knowledge workers are discovering that AI excels at augmenting human capabilities rather than simply substituting for them.</p>
                    <p>Professionals across industries report spending less time on repetitive tasks and more time on strategic thinking, creative problem-solving, and relationship building. Software developers use AI coding assistants to write boilerplate code while focusing on architecture and innovation. Analysts leverage AI to process vast datasets, freeing them to interpret findings and make recommendations. Lawyers employ AI for document review, allowing them to concentrate on strategy and client counsel.</p>
                    <p>This shift is creating a new category of "AI-augmented workers" who are significantly more productive than their unaugmented counterparts. Early adopters are seeing productivity gains of 20-40% in certain tasks, fundamentally altering the economics of knowledge work.</p>

                    <h2>The Competitive Imperative</h2>
                    <p>For enterprises, AI adoption has moved from optional to essential. Companies that have embraced AI are pulling ahead in measurable ways. They're making faster decisions based on better data, delivering more personalized customer experiences, and operating with greater efficiency. Their products anticipate user needs, their supply chains adapt to disruptions in real-time, and their workforces accomplish more with less friction.</p>
                    <p>The gap between AI leaders and laggards is widening rapidly. Organizations slow to adopt risk finding themselves unable to compete on speed, quality, or cost. The question is no longer whether to invest in AI, but how quickly and comprehensively to do so.</p>

                    <h2>Navigating the Challenges</h2>
                    <p>This revolution isn't without its complexities. Enterprises face significant challenges in AI implementation, from data quality issues to talent shortages to ethical considerations. There's the persistent problem of algorithmic bias, where AI systems inadvertently perpetuate historical prejudices embedded in training data. There's the challenge of transparency, as complex AI models make decisions that even their creators struggle to fully explain.</p>
                    <p>Organizations must also grapple with workforce anxiety. While AI may augment rather than replace most jobs, the transition period creates uncertainty. Forward-thinking companies are investing heavily in reskilling programs, helping their workforce adapt to this new paradigm. They're also being transparent about their AI strategies, involving employees in the transformation rather than imposing it upon them.</p>
                    <p>Privacy and security concerns loom large as well. AI systems require vast amounts of data, raising questions about how that data is collected, stored, and used. Enterprises must balance the hunger for data-driven insights against the imperative to protect customer privacy and maintain trust.</p>

                    <h2>The Road Ahead</h2>
                    <p>Looking forward, the AI revolution in enterprise is still in its early chapters. We're witnessing the emergence of multimodal AI systems that can understand and generate text, images, audio, and video seamlessly. We're seeing autonomous AI agents that can execute complex workflows with minimal human oversight. We're approaching a future where AI doesn't just assist decision-making but actively manages entire business processes.</p>
                    <p>The enterprises that will thrive in this new landscape are those that view AI not as a technology project but as a fundamental reimagining of their business model. They're the ones asking not "What can AI do for us?" but "How should we reinvent ourselves in an AI-enabled world?"</p>
                    <p>This requires investment not just in technology, but in culture. It demands leadership that embraces experimentation and tolerates failure. It calls for workforce development at scale, ethics frameworks that anticipate rather than react, and governance structures that can move at the speed of innovation.</p>

                    <h2>A Human-Centered Revolution</h2>
                    <p>Ultimately, the AI revolution in enterprise is not about technology replacing humans—it's about technology empowering them. The most successful implementations are those that keep humans firmly in the loop, using AI to eliminate drudgery while amplifying creativity, intuition, and judgment.</p>
                    <p>As we stand at this inflection point, one thing is clear: the future of work will be a collaboration between human and artificial intelligence, each contributing what it does best. Enterprises that embrace this partnership, that invest in both their technology and their people, that approach AI with both ambition and responsibility—these are the organizations that will define the next era of business.</p>
                    <p>The AI revolution is here. The only question is whether your enterprise will lead it or be left behind by it.</p>
                </>
            )
        },
        2: {
            title: "Sustainable Tech: The New Gold Rush",
            date: "December 10, 2025",
            subtitle: "Why green technology is the next trillion-dollar industry and the startups leading the charge",
            image: blog2,
            content: (
                <>
                    <p>Silicon Valley has a new obsession, and it's painted green. After decades of chasing clicks, engagement metrics, and digital disruption, the world's most ambitious entrepreneurs and investors are turning their attention to a different kind of transformation: saving the planet while building trillion-dollar businesses.</p>
                    <p>Sustainable technology—once dismissed as a niche market for idealists—has emerged as the defining economic opportunity of our generation. The convergence of climate urgency, technological breakthroughs, and massive capital flows is creating a gold rush that rivals the dot-com boom, the mobile revolution, and the AI explosion.</p>

                    <h2>The Perfect Storm</h2>
                    <p>Three forces are colliding to make this moment inevitable. First, the climate crisis has moved from abstract threat to immediate reality, with extreme weather events costing the global economy hundreds of billions annually. Governments worldwide are responding with aggressive decarbonization targets and unprecedented financial incentives. The Inflation Reduction Act in the United States alone is deploying hundreds of billions in clean energy subsidies, while the European Union's Green Deal is reshaping an entire continent's industrial policy.</p>
                    <p>Second, the technology has finally caught up to the ambition. Solar and wind power are now the cheapest sources of electricity in most markets. Battery costs have plummeted by nearly 90% over the past decade, making electric vehicles genuinely competitive with internal combustion engines. Innovations in materials science, biotechnology, and artificial intelligence are unlocking solutions that seemed impossible just years ago.</p>
                    <p>Third, the money is pouring in. Venture capital funding for climate tech reached record levels in 2024, and 2025 is on track to surpass it. More importantly, the profile of investors has changed dramatically. This isn't just impact investors and sustainability funds anymore—it's Sequoia, Andreessen Horowitz, and every major player in tech finance racing to capture returns in what they see as the defining market opportunity of the 21st century.</p>

                    <h2>The Pioneers</h2>
                    <p>A new generation of startups is attacking every angle of the sustainability challenge, and some are already achieving the scale that matters.</p>
                    <p>In energy storage, companies are moving beyond lithium-ion batteries to develop next-generation solutions using everything from iron-air chemistry to liquid metal to gravity-based systems. These innovations promise to solve the intermittency problem that has long plagued renewable energy, enabling a grid that runs entirely on wind and solar.</p>
                    <p>Carbon capture technology, once considered too expensive and unproven, is experiencing a renaissance. Startups are deploying direct air capture systems that pull CO2 from the atmosphere, while others are capturing emissions at industrial sources and converting them into useful products like building materials and synthetic fuels. The economics are improving rapidly as carbon prices rise and technologies mature.</p>
                    <p>In agriculture, precision farming companies are using sensors, drones, and AI to help farmers optimize water usage, reduce fertilizer application, and increase yields while minimizing environmental impact. Vertical farming operations are producing crops in urban warehouses with 95% less water than traditional agriculture. Alternative protein companies are creating plant-based and cultivated meat products that are becoming increasingly indistinguishable from conventional meat.</p>
                    <p>The built environment is being reimagined from foundation to rooftop. Startups are developing low-carbon concrete formulations that could eliminate one of the world's largest sources of emissions. Smart building management systems are using AI to optimize heating, cooling, and lighting in real-time. Heat pump manufacturers are scaling production of systems that can replace fossil fuel heating with electric alternatives that are three times more efficient.</p>
                    <p>Transportation is undergoing its most dramatic transformation in a century. Beyond the electric vehicle revolution led by companies now achieving massive scale, startups are electrifying everything from cargo ships to aircraft. Battery-electric and hydrogen-powered trucks are beginning to compete with diesel. Urban air mobility companies are developing electric vertical takeoff and landing aircraft that could transform city transportation.</p>

                    <h2>Why Now Is Different</h2>
                    <p>Previous waves of cleantech investment ended in disappointment, with venture capitalists retreating after high-profile failures in the 2000s. What makes this moment different?</p>
                    <p>The answer lies in fundamentally changed economics and a more sophisticated approach. Today's sustainable tech startups are building on proven technologies rather than betting on unproven science. They're focused on markets where they can be cost-competitive today, not in some distant future. They're leveraging software, AI, and digital business models to achieve capital efficiency that was impossible in earlier hardware-heavy approaches.</p>
                    <p>Moreover, the market has matured. Corporate sustainability commitments have moved from public relations exercises to binding targets backed by real budgets. Consumers, particularly younger generations, are making purchasing decisions increasingly influenced by environmental considerations. Governments are deploying policy tools—from carbon pricing to clean energy mandates to electric vehicle requirements—that create massive, predictable demand.</p>

                    <h2>The Trillion-Dollar Opportunity</h2>
                    <p>The numbers are staggering. The International Energy Agency estimates that reaching net-zero emissions globally will require $4 trillion in annual clean energy investment by 2030. McKinsey projects that the transition to net-zero will require $275 trillion in cumulative spending over the next three decades. This isn't money being destroyed—it's being redirected toward new technologies, new industries, and new companies.</p>
                    <p>The winners in this transition will build businesses of unprecedented scale. The market capitalization of today's fossil fuel giants will be replaced by sustainable tech champions. Some of these companies already exist but are still scaling. Others are in garages and accelerators today, preparing for launches that will define the next decade.</p>

                    <h2>The Challenges Ahead</h2>
                    <p>This revolution faces significant obstacles. Scaling hardware is dramatically harder than scaling software, requiring massive capital, complex supply chains, and long development cycles. Permitting and regulatory barriers slow deployment of clean energy projects. The mining of materials needed for batteries and renewable energy infrastructure raises its own environmental and social concerns.</p>
                    <p>There's the risk of greenwashing, where companies make exaggerated sustainability claims that undermine trust in genuinely innovative solutions. As money floods the sector, some ventures will inevitably fail, potentially creating another period of skepticism and retreat.</p>
                    <p>The geopolitical dimension adds complexity. The transition to sustainable technology is reshaping global power dynamics, with competition intensifying over critical mineral supplies, manufacturing capacity, and technological leadership. Supply chain resilience and domestic production are becoming strategic imperatives.</p>

                    <h2>A New Industrial Revolution</h2>
                    <p>What we're witnessing is nothing less than a new industrial revolution—one that will touch every sector of the economy. The companies leading this charge aren't just building better mousetraps; they're reimagining the fundamental systems that power modern civilization.</p>
                    <p>For entrepreneurs, the message is clear: the opportunity to build massively valuable companies while addressing humanity's most pressing challenge has never been greater. For investors, sustainable tech represents not a moral choice but an economic imperative. For society, this transition from the old industrial economy to a sustainable one will define prosperity and quality of life for generations to come.</p>
                    <p>The gold rush is on. The prospectors who strike it rich this time won't be extracting resources from the earth—they'll be protecting it.</p>
                </>
            )
        }
    };

    const post = blogContent[id];

    if (!post) {
        return <div className="text-white text-center mt-20">Post not found</div>;
    }

    return (
        <div className="home-wrapper" style={{
            backgroundImage: `url(${homeBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            minHeight: '100vh',
            width: '100%'
        }}>
            <div className="home-overlay"></div>

            <header className="header">
                <Link to="/home" className="logo" style={{ textDecoration: 'none', color: 'white' }}>UBH</Link>
                <Link to="/home" className="glass-button" style={{ textDecoration: 'none', fontSize: '0.9rem' }}>&larr; Back</Link>
            </header>

            <main className="blog-post-container animate-fade-up">
                <article className="glass-card full-width blog-article">
                    <header className="article-header">
                        <span className="article-date">{post.date}</span>
                        <h1 className="article-title">{post.title}</h1>
                        <p className="article-subtitle">{post.subtitle}</p>
                    </header>

                    {post.image && (
                        <div className="article-image-container">
                            <img src={post.image} alt={post.title} className="article-image" />
                        </div>
                    )}

                    <div className="article-content">
                        {post.content}
                    </div>
                </article>
            </main>

            <footer className="footer">
                <div className="copyright">
                    &copy; 2025 UBH. All rights reserved.
                </div>
            </footer>
        </div>
    );
}

export default BlogPost;
