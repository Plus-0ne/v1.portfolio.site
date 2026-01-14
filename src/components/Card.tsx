function Card({ title, description, tags, img }: { title: string, description: string, tags: string[], img: string }) {

    return (
        <div className="group relative bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
            {/* Image Placeholder */}
            <div className="h-48 bg-gray-100 dark:bg-slate-700 flex items-center justify-center">
                {/* <span className="text-gray-400 dark:text-slate-500 font-medium italic">Project Preview</span> */}
                {!img? (
                    <span className="text-gray-400 dark:text-slate-500 font-medium italic">Project Preview</span>
                ) : (
                    <img src={img} alt="" />
                )}
                
            </div>

            {/* Content */}
            <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                    {tags.map((tag) => (
                        <span key={tag} className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded">
                            {tag}
                        </span>
                    ))}
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {description}
                </p>

                <div className="mt-5 flex items-center text-blue-600 dark:text-blue-400 font-semibold text-sm cursor-pointer">
                    View Details
                    
                </div>
            </div>
        </div>
    );
}

export default Card;