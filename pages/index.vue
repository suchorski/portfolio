<template>
  <div class="flex flex-col justify-center items-stretch space-y-8">
    <SpTitle>{{ $t('portfolio.title') }}</SpTitle>
    <div class="flex flex-row justify-around">
      <div class="flex flex-col space-y-8">
        <SpInfo>
          <template v-slot:left>
            <div class="flex flex-col justify-around text-justify space-y-4 lg:space-y-0">
              <p>{{ $t('about.me') }}</p>
              <p>{{ $t('about.carrer') }}</p>
            </div>
          </template>
          <template v-slot:right>
            <img class="w-60 rounded-full mb-8 lg:mb-0" src="~/assets/images/me/black.jpg" />
          </template>
        </SpInfo>
        <SpInfo>
          <template v-slot:left>
            <div class="flex flex-col justify-around text-justify space-y-4 lg:space-y-0">
              <p>{{ $t('about.technologies') }}</p>
              <p>{{ $t('about.more') }}</p>
            </div>
          </template>
          <template v-slot:right>
            <img class="w-60 rounded-full mb-8 lg:mb-0" src="~/assets/images/me/college.jpg" />
          </template>
        </SpInfo>
      </div>
    </div>
  </div>
</template>
