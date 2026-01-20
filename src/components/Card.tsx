function Card({ title, description, tags, img, link }: { title: string, description: string, tags: string[], img: string, link: string }) {

    return (
        <div className="group relative bg-prussian border border-baltic rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
            {/* Image Placeholder */}
            <div className="h-48 bg-gray-100 dark:bg-slate-700 flex items-center justify-center">
                {!img ? (
                    <span className="text-gray-400 font-medium italic">Project Preview</span>
                ) : (
                    <img src={img} alt="" />
                )}

            </div>

            {/* Content */}
            <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                    {tags.map((tag) => (
                        <span key={tag} className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 bg-navy-deep text-ocean rounded">
                            {tag}
                        </span>
                    ))}
                </div>

                <h3 className="text-xl font-bold text-ghost-white mb-2 group-hover:text-ocean-hover transition-colors">
                    {title}
                </h3>

                <p className="text-ghost-white-inactive text-sm leading-relaxed">
                    {description}
                </p>

                <a href={link} className="mt-5 inline-flex items-center text-ocean dark:text-blue-400 font-semibold text-sm cursor-pointer px-4 py-2 rounded-lg transition-all duration-300 hover:bg-blue-400 hover:text-white hover:w-auto" target="_blank">
                    <span>View</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </a>
            </div>
        </div>
    );
}

export default Card;