<template>
<div class="header">
  <div class="jumbotron bg-primary text-white text-center">
    <h1 class="display-3"> Showcase.com </h1>
    <h3> Awesome list of websites</h3>
    <h6>Preview curated websites from the best resources.</h6>
  </div>
  <section id="about">
    <div class="card-columns">
      <div class="card">
        <div class="card-body">
          <p class="card-text text-center">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit,
           sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
           Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
           nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
           in reprehenderit in voluptate velit esse cillum dolore eu fugiat
           nulla pariatur. Excepteur sint occaecat cupidatat non proident,
           sunt in culpa qui officia deserunt mollit anim id est laborum
          </p>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <p class="card-text text-center">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit,
           sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
           Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
           nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in repreh
           enderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Ex
           cepteur sint occaecat cupidatat non proident, sunt in culpa qui offi
           cia deserunt mollit anim id est laborum
          </p>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <p class="card-text text-center">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius
           mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat c
            upidatat non proident, sunt in culpa qui officia deserunt mo
            llit anim id est laborum
          </p>
        </div>
      </div>
    </div>
  </section>
  <!-- Footer -->
  <footer class="py-4 bg-dark navbar-fixed-bottom">
    <div class="container">
      <p class="m-0 text-center text-white">Copyright &copy; Showcase 2018</p>
    </div>
  </footer>
</div>
</template>

<style scoped>
@media only screen and (max-width: 600px) {
  .header {
    max-width: 100%;
  }
  .display-3 {
    font-size: 2.7rem;
    font-weight: 300;
    line-height: 1;
  }
}
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: red;
  color: white;
  text-align: center;
}
.jumbotron {
  border-radius: 0rem !important;
}
.card-columns {
  margin: 10px;
}
</style>

