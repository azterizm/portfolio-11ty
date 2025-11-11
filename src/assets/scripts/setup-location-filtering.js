document.addEventListener("DOMContentLoaded", function () {
  const workSection = document.getElementById("work");
  if (!workSection) return; // Exit if work section doesn't exist

  // Extract project data from the global variable set by the template
  const projectsData = window.projectsData || [];

  function renderProjects(projects) {
    const container = document.getElementById("projects-container");
    const loading = document.getElementById("projects-loading");
    const seoSection = document.getElementById("projects-seo");

    if (!container || !loading || !seoSection) return;

    if (projects.length === 0) {
      container.innerHTML =
        '<div class="col-span-8 text-center py-8"><p class="text-xl">No projects available for your region.</p></div>';
    } else {
      container.innerHTML = projects
        .map(
          (project) => `
      <div class="col-span-8 lg:col-span-3 project-item flex flex-col">
        <div class="relative">
          <img src="${project.main_image}" alt="${project.title}"
            class="w-full mb-4 rounded-xl main-image" />
          <div class="p-4 bg-white/30 backdrop-blur-lg rounded-lg absolute top-4 left-4 ">
            <img src="${project.logo}" alt="${project.title} logo" class="w-8 lg:w-16 project-logo" />
          </div>
        </div>
        <p class="project-title text-3xl">${project.title}</p>
        <p class="text-md">${project.year}</p>
      </div>
      <div class="col-span-8 lg:col-span-2 flex flex-col justify-between mt-4 lg:mt-0">
        <p>${project.description}</p>
        <p class="mt-4 lg:mt-0">${project.technologies.join(", ")}</p>
      </div>
      <div class="col-span-8 lg:col-span-3 flex flex-col justify-end mt-4 lg:mt-0">
        <a href='${project.url}'
          class="p-4 w-full bg-white border-2 border-black flex items-center justify-center rounded-full cross-fade-link mx-auto lg:mx-0 max-w-xs">
          <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="#000000" viewBox="0 0 256 256">
            <path
              d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z">
            </path>
          </svg>
        </a>
      </div>
      <div class="col-span-8 bg-black h-[1px]"></div>
    `,
        )
        .join("");
    }

    seoSection.classList.add("hidden");
    loading.classList.add("hidden");
    container.classList.remove("hidden");
  }

  function filterProjectsByLocation(projects, userCountry) {
    return projects.filter((project) => {
      // If no blocked countries defined, show to everyone
      if (
        !project.blocked_countries ||
        project.blocked_countries.length === 0
      ) {
        return true;
      }

      // If 'ALL' is in blocked countries, don't show to anyone
      if (project.blocked_countries.includes("ALL")) {
        return false;
      }

      // If user's country is in blocked list, don't show
      if (project.blocked_countries.includes(userCountry)) {
        return false;
      }

      // Otherwise, show the project
      return true;
    });
  }

  function fetchUserLocation() {
    const loading = document.getElementById("projects-loading");
    const seoSection = document.getElementById("projects-seo");

    // Show loading state and hide SEO content
    if (loading && seoSection) {
      loading.classList.remove("hidden");
      seoSection.classList.add("hidden");
    }

    // Use localhost:3000 for development, production API for production
    const apiUrl =
      window.location.hostname === "localhost"
        ? "http://localhost:3000/api/ipinfo/me"
        : "https://api.theimpossible.expert/api/ipinfo/me";

    fetch(apiUrl)
      .then((response) => response.text())
      .then((text) => {
        try {
          const data = JSON.parse(text);
          if (data.success && data.data && data.data.country) {
            const userCountry = data.data.country;
            const filteredProjects = filterProjectsByLocation(
              projectsData,
              userCountry,
            );
            renderProjects(filteredProjects);
          } else {
            throw new Error("Invalid API response");
          }
        } catch (error) {
          console.error("Error parsing API response:", error);
          // Fallback to showing all projects (except those blocked for ALL)
          const fallbackProjects = filterProjectsByLocation(projectsData, "");
          renderProjects(fallbackProjects);
        }
      })
      .catch((error) => {
        console.error("Error fetching location:", error);
        // Fallback to showing all projects (except those blocked for ALL)
        const fallbackProjects = filterProjectsByLocation(projectsData, "");
        renderProjects(fallbackProjects);
      });
  }

  // Start the process
  if (projectsData.length > 0) {
    fetchUserLocation();
  }
});
