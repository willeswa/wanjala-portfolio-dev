import React from "react";
import {
  ArticlesSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Android Developer and Cloud DevOps Engineer" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <ProjectsSection sectionId="projects" heading="My Creations" />
        <InterestsSection sectionId="skills" heading="My Stack" />
        <ArticlesSection sectionId="articles" heading="I write, sometimes." sources={['blog']}  />
      </Page>
    </>
  );
}
