import React from 'react';
import Project from '../../components/Projectdetails'; 
import {projectData} from '../data';
import Link from 'next/link';


export default async function Page({params,
}: {
  params: Promise<{ project: string }>
}) {
  var projectName = (await params).project ; 
  const currentProject = projectData[projectName as keyof typeof projectData];
  if(!currentProject){
    return (
    <div>
      <h1 style={{textAlign:"center"}}>Project in Progress</h1>
      <h2 style={{ textAlign: "center" }}><Link href="/projects" style={{ textDecoration: "none", backgroundColor: "#000",  color: "#ff0000",  padding: "10px 20px",  borderRadius: "10px",  display: "inline-block", fontSize: "16px", fontWeight: "bold", textAlign: "center", cursor: "pointer",border:"3px solid white" }}>Back to Projects</Link></h2>
    </div>)

  }
  return (
    <main>
      <Project
        projectKey={projectName}
        projectData={currentProject}
      />
    </main>
  );
}