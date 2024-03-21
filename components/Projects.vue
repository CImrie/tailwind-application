<template>
  <div class="w-full md:w-2/3 lg:w-full max-w-content px-6 lg:px-0">
    <Heading3>Projects</Heading3>
    <div class="flex flex-col gap-y-4 lg:flex-row gap-x-4 mt-8">
      <ProjectCard name="Contingens" description="Simple accounting-accurate financial forecasts for startups seeking investment.">
        <ProjectCardSectionStack class="mt-4">
          <ProjectCardSection title="Highlight">
            Building a parser/lexer using ANTLR4 for flexibly modelling price, salary, and value changes over time.
          </ProjectCardSection>
          <ProjectCardSection title="Demo">
            <a href="https://google.com" target="_blank" class="bg-gray-900 opacity-75 w-full h-40 flex items-center justify-center rounded mt-1 group hover:opacity-100 cursor-pointer transition ease-in duration-[50ms]">
                <PlayButton class="w-24 fill-current text-gray-300 group-hover:text-white"/>
            </a>
          </ProjectCardSection>
        </ProjectCardSectionStack>
      </ProjectCard>
      <ProjectCard name="NDTFlow" description="Report digitisation for non-destructive testing companies in the energy sector.">
        <ProjectCardSectionStack class="mt-4">
          <ProjectCardSection title="Highlight">
            Building a drag and drop page builder in Vue/TypeScript to design report templates
          </ProjectCardSection>
          <NDTFlowLogo class="mt-12"/>
        </ProjectCardSectionStack>
      </ProjectCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import Heading3 from "~/components/Heading3.vue";
import ProjectCard from "~/components/ProjectCard.vue";
import ProjectCardSection from "~/components/ProjectCardSection.vue";
import ProjectCardSectionStack from "~/components/ProjectCardSectionStack.vue";
import NDTFlowLogo from "~/components/NDTFlowLogo.vue";
import PlayButton from '~/assets/images/play_button.svg';
</script>