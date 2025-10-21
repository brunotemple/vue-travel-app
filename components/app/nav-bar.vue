<template>
  <div class="navbar bg-primary text-primary-content">
    <div class="navbar-start">
      <NuxtLink to="/" class="text-xl">
        Travel Log
      </NuxtLink>
    </div>
    <div class="navbar-end ">
      <AppThemeToggle />
      <a class="btn btn-accent">
        Sign In with Github
        <Icon name="tabler:brand-github" size="24" />
      </a>
    </div>
  </div>
</template>
