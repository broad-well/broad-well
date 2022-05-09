import * as React from 'react'
import projects, { Project } from '../entries/projects'
import ProjectCard from './ProjectCard'

const comparators: {[name: string]: {name: string, comp: (p1: Project, p2: Project) => number}} = {
    start: {
        name: 'Start date',
        comp: (p1, p2) =>
            p2.date[0] === p1.date[0] ? (p2.date[1] ?? 1e20) - (p1.date[1] ?? 1e20) : p2.date[0] - p1.date[0]
    },
    end: {
        name: 'End date',
        comp: (p1, p2) =>
            p2.date[1] === p1.date[1] ? p2.date[0] - p1.date[0] : (p2.date[1] ?? 1e20) - (p1.date[1] ?? 1e20)
    },
    impress: {
        name: 'Pride',
        comp: (p1, p2) =>
            p2.rank.impressive - p1.rank.impressive
    },
    collab: {
        name: 'Collaboration',
        comp: (p1, p2) => p2.rank.collaborative - p1.rank.collaborative
    },
    complex: {
        name: 'Complexity',
        comp: (p1, p2) => p2.rank.complex - p1.rank.complex
    },
    creativity: {
        name: 'Creativity',
        comp: (p1, p2) => p2.rank.original - p1.rank.original
    }
}

const filters: {[name: string]: {name: string, include: (p: Project) => boolean}} =
    Object.fromEntries(projects.flatMap(proj => proj.languages).map(lang => [lang, {name: lang, include: p => p.languages.includes(lang)}]))
const filterKeys: {[key: string]: string} = {
    languages: 'Language',
    frameworks: 'Framework',
    platforms: 'Platform',
    techniques: 'Methodology'
}

export function ProjectCollection() {
    const [order, setOrder] = React.useState('impress')
    // { languages: ??, ... }
    const [filter, setFilter] = React.useState({})

    const filterer = (filter: {[k: string]: string}) =>
        (proj: Project) => Object.entries(filter).every(([key, target]) => target === '' || proj[key].includes(target))

    React.useEffect(() => console.log({order, filter}), [order, filter])

    const projectList = projects.filter(filterer(filter)).sort(comparators[order].comp)
    return <><div className="p-4 flex flex-col md:flex-row flex-wrap">
        <select id="sort" className="p-1 m-1 mr-4 bg-slate-200 dark:bg-slate-800 rounded-md" onChange={evt => setOrder(evt.target.value)} value={order}>
            {Object.entries(comparators).map(c =>
                <option key={c[0]} value={c[0]}>{'Sort: ' + c[1].name}</option>)}
        </select>
        {Object.entries(filterKeys).map(([key, name]) => 
        <select id={'filter-' + key} className="p-1 m-1 mr-4 bg-slate-200 dark:bg-slate-800 rounded-md" onChange={evt => setFilter({ ...filter, [key]: evt.target.value})} value={filter[key]}>
            <option key='all' value=''>{name + ': All'}</option>
            {Array.from(new Set(projects.flatMap(proj => proj[key]))).map(val =>
                <option key={val} value={val}>{name + ': ' + val}</option>)}
        </select>)}
    </div>
    <main className="lg:flex lg:flex-wrap">
        {projectList.length === 0 ? <i className="p-6">No projects match the selected filters.</i> : 
            projectList.map(p => <div className="md:basis-1/3 lg:basis-1/2"><ProjectCard project={p} /></div>)}
    </main></>
}

export default ProjectCollection