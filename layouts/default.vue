<template>
  <div class="h-screen w-screen flex flex-col">
    <Nuxt class="grow overflow-scroll" />
    <div class="w-full p-2">
      <p class="text-center">
        Created by
        <a class="link" href="https://github.com/cingh-jasdeep">cingh-jasdeep</a
        >, source code:
        <a
          class="link"
          href="https://github.com/cingh-jasdeep/GithubInfoAppForTest"
          >https://github.com/cingh-jasdeep/GithubInfoAppForTest</a
        >
      </p>
    </div>
  </div>
</template>
<style>
.link {
  @apply underline text-blue-700 hover:text-blue-900;
}
</style>