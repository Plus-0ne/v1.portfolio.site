import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from "@headlessui/react";
import { Fragment } from "react";

interface ProjectDrawerProps {
    open: boolean;
    onClose: () => void;
    title: string;
    description: string;
    key_features?: string[];
    techStack?: string[];
    links?: { live?: string; github?: string };
}


export default function CardProjectsDrawer({ open, onClose, title, description, key_features = [], techStack = [], links }: ProjectDrawerProps) {
    return (
        <Transition show={open} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={onClose}>

                {/* Overlay */}
                <TransitionChild
                    as={Fragment}
                    enter="transition-opacity duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/50" />
                </TransitionChild>

                {/* Drawer panel */}
                <div className="fixed inset-0 flex items-center justify-center p-4">
                    <TransitionChild
                        as={Fragment}
                        enter="transform transition ease-in-out duration-300"
                        enterFrom="translate-y-full"
                        enterTo="translate-y-0"
                        leave="transform transition ease-in-out duration-300"
                        leaveFrom="translate-y-0"
                        leaveTo="translate-y-full"
                    >
                        <DialogPanel className="w-full max-w-3xl max-h-[80vh] bg-navy-deep text-ghost-white rounded-xl shadow-xl flex flex-col border border-baltic">

                            {/* Header */}
                            <div className="flex items-center justify-between p-10 border-b">
                                <DialogTitle className="text-xl font-semibold tracking-tight font-heading">{title}</DialogTitle>
                                <button onClick={onClose} className="text-lg">✕</button>
                            </div>

                            {/* Content */}
                            <div className="py-5 px-10 flex-1 overflow-y-auto space-y-6">
                                {/* Overview */}
                                <section>
                                    <h3 className="font-semibold font-heading tracking-tight mb-0.5">Overview</h3>
                                    <p className="text-sm text-muted-foreground font-body tracking-wide">{description}</p>
                                </section>

                                {/* Features */}
                                {key_features.length > 0 && (
                                    <section>
                                        <h3 className="font-semibold font-heading tracking-tight mb-0.5">Key Features</h3>
                                        <ul className="list-disc pl-5 text-sm font-body tracking-wide">
                                            {key_features.map((feature, idx) => (
                                                <li key={idx}>{feature}</li>
                                            ))}
                                        </ul>
                                    </section>
                                )}

                                {/* Tech Stack */}
                                {techStack.length > 0 && (
                                    <section>
                                        <h3 className="font-semibold font-heading tracking-tight mb-0.5">Tech Stack</h3>
                                        <p className="text-sm font-body tracking-wide">{techStack.join(", ")}</p>
                                    </section>
                                )}
                            </div>

                            {/* Footer Links */}
                            {links && (links.live || links.github) && (
                                <div className="border-t p-10 flex gap-4">
                                    {links.live && (
                                        <a href={links.live} target="_blank" className="text-sm underline">
                                            Live Demo
                                        </a>
                                    )}
                                    {links.github && (
                                        <a href={links.github} target="_blank" className="text-sm underline">
                                            GitHub Repo
                                        </a>
                                    )}
                                </div>
                            )}
                        </DialogPanel>
                    </TransitionChild>
                </div>

            </Dialog>
        </Transition>
    );
}