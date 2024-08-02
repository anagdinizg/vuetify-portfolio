import { createRouter, createWebHistory } from "vue-router";
import AboutMe from "@/views/AboutMe.vue";
import Projects from "@/views/Projects.vue";
import ProfessionalExperiences from "@/views/ProfessionalExperiences.vue";
import Technologies from "@/views/Technologies.vue";

const routes = [
  { path: "/", component: AboutMe, name: "AboutMe" },
  { path: "/projects", component: Projects, name: "Projects" },
  {
    path: "/professional-experiences",
    component: ProfessionalExperiences,
    name: "ProfessionalExperiences",
  },
  { path: "/technologies", component: Technologies, name: "Technologies" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
