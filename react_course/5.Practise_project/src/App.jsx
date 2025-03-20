import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import Sidebar from "./components/sidebar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleStartAddProject() {
    setProjectState((prev) => ({ ...prev, selectedProjectId: null }));
  }

  function handleAddProject(projectData) {
    const projectId = Math.random();
    const newProject = {
      ...projectData,
      id: projectId,
    };

    setProjectState((prev) => ({
      ...prev,
      selectedProjectId: undefined,
      projects: [...prev.projects, newProject],
    }));
  }

  function handleCancelAddProejct() {
    setProjectState((prev) => ({ ...prev, selectedProjectId: undefined }));
  }

  function handleSelectProject(id) {
    setProjectState((prev) => ({ ...prev, selectedProjectId: id }));
  }

  function handleDeleteProject() {
    setProjectState((prev) => ({
      ...prev,
      selectedProjectId: undefined,
      projects: prev.projects.filter(
        (project) => project.id !== prev.selectedProjectId
      ),
    }));
  }

  function handleAddTask(text) {
    setProjectState((prev) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prev.selectedProjectId,
        id: taskId,
      };

      return {
        ...prev,
        tasks: [...prev.tasks, newTask],
      };
    });
  }

  function handleDeleteTask(id) {
    setProjectState((prev) => ({
      ...prev,
      tasks: prev.tasks.filter((task) => task.id !== id),
    }));
  }

  console.log(projectState);

  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectId
  );

  let content = (
    <SelectedProject
      project={selectedProject}
      onDelete={handleDeleteProject}
      tasks={projectState.tasks}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
    />
  );

  if (projectState.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProejct} />
    );
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        onStartAddProject={handleStartAddProject}
        projects={projectState.projects}
        onSelectProject={handleSelectProject}
        selectedProjectId={projectState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
