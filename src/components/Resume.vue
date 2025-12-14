<template>
  <!-- <v-container class="fill-height"> -->
  <v-timeline style="position: relative; z-index: 160;">
    <v-timeline-item :size="'large'" dot-color="white" fill-dot v-for="(exp, i) in resumeTimeline.value" :key="exp" size="small" style="height: 50vh;">
      <div class="resume-item">
        <v-card style="background-color: inherit; z-index: 161;" class="p-0">
          <div class="overlay"></div>
          <v-card-text class="p-2">
            <div>
              <!-- <h4>{{ exp.title }}</h4> -->
              <h5>{{ exp.company }}</h5>
              <h6>{{ exp.fromTo }}</h6>
            </div>
            <hr>
            </hr>
          </v-card-text>
          <v-card-actions class="p-0 mt-5">
            <div>
              <h6 v-for="detail in exp.details" :innerHTML="detail">
              </h6>
            </div>
          </v-card-actions>
        </v-card>
      </div>
      <template #opposite>
        <v-card-text class="p-0">
          <div>
            <h5>{{ exp.title }}</h5>
          </div>
        </v-card-text>
        <div v-if="i === 0">
          <img src="./../assets/img/satellite_1.png"
            class="satellite-img animate__animated animate__shakeY animate__infinite animate__slower"></img>
        </div>

        <div v-if="i === 3">
          <div style="position: absolute; width: 100%; left: 0; bottom: 0; height: 70%;">
            <!-- Particles -->
            <vue-particles id="rockparticles" :options="particlesOptions" style=" z-index: 150; height: 100%;" />
          </div>
        </div>
      </template>
      <template v-slot:icon>
          <div class="d-flex flex-column justify-center align-center gap-0 p-1" style="height: 100%;">
            <span v-if="exp.duration.years !== 0" style="font-size: 0.8rem;">{{ `${exp.duration.years} ${exp.duration.years === 1 ? 'yr' : 'yrs'}` }}</span>
            <span v-if="exp.duration.months !== 0" style="font-size: 0.5rem;">{{ exp.duration.months }} months</span>
          </div>
        </template>
    </v-timeline-item>
  </v-timeline>
  <!-- </v-container> -->
</template>

<script setup>
import { onMounted, ref } from "vue";
import { particlesOptions } from './../plugins/space-rocks'

const resumeTimeline = ref([]);
onMounted(() => {
  resumeTimeline.value = ref([
    {
      title: 'Technical Intern',
      fromTo: 'December 2019 - May 2020',
      company: 'Thomson Reuters, Ahmedabad',
      details: [
        'Worked on Behaviour Driven Development with <strong>SpecFlow</strong> Framework'
      ],
      duration: formatDuration(monthsBetween('2019-12-01', '2020-05-31'))
    },
    {
      title: 'Associate Software Engineer',
      fromTo: 'June 2020 - July 2023',
      company: 'Thomson Reuters, Ahmedabad',
      details: [
        'Worked as a Full Stack Developer in Angular/Angular JS and Microsoft .NET C# while following Agile Methodology',
        '<strong>Product: </strong>Onvio Advisory Tax & Accounting), Onvio Accounts',
        '<strong>Major Areas: </strong>Angular Components and Libraries, Angular Migration, CI/CD Pipelines, Asynchronous Code and Wijmo Grid Library',
      ],
      duration: formatDuration(monthsBetween('2020-06-01', '2023-07-31'))
    },
    {
      title: 'Software Engineer',
      fromTo: 'August 2023 - July 2024',
      company: 'MaRS Engineering & Planning Services, Ahmedabad',
      details: [
        '<strong>Areas of experience: </strong>Configuring App deployment and Automation Pipelines using Azure App service and Azure Devops, Basic UI design with Figma, Managing Azure Git Repos and writing efficient code with Angular and Django',
        '<strong>Tools and Platforms: </strong>Microsoft Azure, Microsoft Azure DevOps, Azure PostgreSQL Server, Figma',
        '<strong>Tech Stack: </strong>Angular 16 + Django + PostgreSQL'
      ],
      duration: formatDuration(monthsBetween('2023-08-01', '2024-07-31'))
    },
    {
      title: 'Packaged App Development Senior Analyst',
      fromTo: 'August 2024 - Present',
      company: 'Accenture - Pune, Ahmedabad',
      details: [
        'Working as a Full Stack Developer, focused on upgrading and maintaining an Angular-based platform, along with developing new features and enhancements. Also gained hands-on experience with Generative AI, exploring its integration for basic use cases and future applications (with GPT and DALL-E'
      ],
      duration: formatDuration(monthsBetween('2024-08-01'))
    },
  ].reverse());
});

function monthsBetween(startDate, endDate = new Date()) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  let months = 1 + (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
  if (end.getDate() < start.getDate()) months--;
  return Math.max(0, months);
}

// format months into { years, months }
function formatDuration(totalMonths = 0) {
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  return { years, months };
}
</script>
