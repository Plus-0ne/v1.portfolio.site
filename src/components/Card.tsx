function Card({ title, description, tags, img, link }: { title: string, description: string, tags: string[], img: string, link: string }) {

    return (
        <div className="group relative bg-prussian border border-baltic rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
            {/* Image Placeholder */}
            <div className="h-48 bg-gray-100 flex items-center justify-center">
                {!img ? (
                    <span className="text-slate-600 font-medium italic">Project Preview</span>
                ) : (
                    <img className="object-cover w-full h-full" src={img} alt={title} loading="lazy" />
                )}

            </div>

            {/* Content */}
            <div className="flex flex-col p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                    {tags.map((tag) => (
                        <span key={tag} className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 bg-navy-deep text-ocean rounded font-body">
                            {tag}
                        </span>
                    ))}
                </div>

                <h3 className="text-xl font-semibold tracking-tight font-heading text-ghost-white mb-2 group-hover:text-ocean-hover transition-colors">
                    {title}
                </h3>

                <p className="text-ghost-white-inactive text-sm leading-relaxed font-body tracking-wide">
                    {description}
                </p>

                <div className="flex flex-row gap-2 mt-5">
                    <a href={link} className="mt-5 inline-flex items-center bg-ocean text-slate-950 font-semibold text-sm cursor-pointer px-4 py-2 rounded-lg transition-all duration-300 hover:bg-ocean-hover hover:text-slate-950 hover:w-auto" target="_blank" aria-label={`Visit this page ${title}`}>
                        <span>View</span>
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </a>
                    <a href={link} className="mt-5 inline-flex items-center bg-ghost-white text-slate-950 font-semibold text-sm cursor-pointer px-4 py-2 rounded-lg transition-all duration-300 hover:bg-ghost-white-hover hover:text-slate-950 hover:w-auto" target="_blank" aria-label={`Visit this page ${title}`}>
                        <span>More details</span>
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Card;