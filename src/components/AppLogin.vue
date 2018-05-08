<template>
  <div class="form">
    <form action="#" method="post">
      <div class="form-group">
        <label for="email">Email address:</label>
        <input
          type="email"
          autocomplete="on"
          class="form-control"
          id="email"
          required>
      </div>
      <div class="form-group">
        <label for="pwd">Password:</label>
        <input
          type="password"
          autocomplete="off"
          class="form-control"
          id="pwd"
          required>
      </div>
      <div class="form-group form-check">
        <label class="form-check-label">
          <input
            class="form-check-input"
            type="checkbox">
            Remember me
        </label>
      </div>
      <button type="submit" class="btn btn-dark">Submit</button>
    </form>
  </div>
</template>

<style scoped>
.form {
  display: block;
  width: 800px;
  margin: 40px auto;
}
</style>
