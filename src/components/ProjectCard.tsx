import { ExternalLink } from "react-feather";
import type { Project } from "../entries/projects";

function ProjectCard(props: { project: Project }) {
    const project = props.project
    const tags: string[] = (project.languages as string[]).concat(project.platforms).concat(project.frameworks).concat(project.techniques);
    return <div className="border-b-2 border-slate-200 dark:border-gray-800 p-4 md:flex h-full">
        {project.mediaUrls != undefined && project.mediaUrls.length > 0 ?
            <img src={project.mediaUrls[0]} alt={project.name} className="w-full max-h-64 object-cover md:h-fit md:w-1/4 lg:w-1/3 md:object-contain rounded-xl" /> : null}
        <div className="mt-3 md:ml-3 md:mt-0">
            <div className="flex">
                {project.link ?
                    <a className="flex items-center" href={project.link} target="_blank">
                        <h1 className="text-xl font-bold header">{project.name}</h1>
                        <div className="ml-2"><ExternalLink size={18} /></div>
                    </a> :
                    <div className="flex items-center">
                        <h1 className="text-xl font-bold header">{project.name}</h1>
                    </div>}
            </div>
            <p className="leading-tight"><b>{project.tagline}</b></p>
            <small className="block mb-2">{project.date[0]}&ndash;{project.date[1] ?? 'Present'}{tags.length === 0 ? null : ' · ' + tags.join(', ')}</small>
            <p className="leading-tight description" dangerouslySetInnerHTML={{__html: project.description}}></p>
        </div>
    </div>
}

export default ProjectCard;