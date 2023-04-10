import dayjs from 'dayjs'
import React from 'react'

interface ProjectCardProps {
  name?: string | null
  createdAt: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({ name, createdAt }) => {
  return (
    <div className="flex max-w-[30rem] flex-col gap-y-[1rem] rounded-xl border border-orange-500 px-[1rem] py-[1rem] shadow-md">
      <p className="w-fit rounded-lg bg-orange-500 px-[0.7rem] py-[0.5rem]  font-light text-white">
        {name ? name : 'Без названия'}
      </p>
      <p className="text-slate-[600] font-light">
        Создан: {dayjs(createdAt).format('YYYY-MM-DD в HH:mm:ss')}
      </p>
    </div>
  )
}

export default ProjectCard
