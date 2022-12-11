<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <header class="navbar">
    <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <!-- <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"> -->
      <span class="icon-text has-text-primary">
        <span class="icon is-large">
          <span class="fa-stack">
            <font-awesome-icon class="fa-stack-2x" transform="shrink-6 left-8" icon="fa-solid fa-angles-right"/>
            <font-awesome-icon class="fa-stack-2x" icon="fa-solid fa-cart-shopping" /> 
          </span>
        </span>
        <span class="is-size-3 pt-2">To-cart</span>
      </span>
      
    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>
    <!-- <HelloWorld msg="You did it!" /> -->
 
    <!--<div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div> -->
  </header>

  <div id="content">
    <aside class="menu">
      <p class="menu-label">
        General
      </p>
      <ul class="menu-list">
        <li><a>Dashboard</a></li>
        <li><a>Customers</a></li>
      </ul>
      <p class="menu-label">
        Administration
      </p>
      <ul class="menu-list">
        <li><a>Team Settings</a></li>
        <li>
          <a class="is-active">Manage Your Team</a>
          <ul>
            <li><a>Members</a></li>
            <li><a>Plugins</a></li>
            <li><a>Add a member</a></li>
          </ul>
        </li>
        <li><a>Invitations</a></li>
        <li><a>Cloud Storage Environment Settings</a></li>
        <li><a>Authentication</a></li>
      </ul>
      <p class="menu-label">
        Transactions
      </p>
      <ul class="menu-list">
        <li><a>Payments</a></li>
        <li><a>Transfers</a></li>
        <li><a>Balance</a></li>
      </ul>
    </aside>
  
    <RouterView id="main" />
  </div>

</template>

<style scoped>

header {
  height: 30px;
  flex-basis: 100%;
}

aside {
  overflow-y: auto; 
}

#content{
  display: flex;
  height: 100%;
}

#main{
  overflow-y: auto; 
}

@media (max-width: 1024px) {
  #content{
    flex-direction: column;
  }
}
</style>
