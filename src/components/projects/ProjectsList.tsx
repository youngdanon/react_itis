import React from 'react'
import { observer } from 'mobx-react'
import { useQuery } from '../../models/reactUtils'
import ProjectCard from './ProjectCard'

const ProjectList: React.FC = () => {
  const { store, error, loading, data } = useQuery((store) => store.queryProjects())

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="h-full w-full items-center justify-center bg-slate-200">
        <div className="m-[2rem] h-[93%] rounded-xl bg-white p-[2rem]">
          <h1 className="mb-[2rem] text-2xl font-bold">Cписок проектов</h1>
          <div className="flex h-full w-full flex-col gap-y-[1rem] overflow-auto">
            {data?.projects.map((project) => (
              <ProjectCard name={project.name} createdAt={project.createdAt} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default observer(ProjectList)
