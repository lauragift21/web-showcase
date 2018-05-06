<template>
  <div class="form">
    <form action="/action_page.php">
      <div class="form-group">
        <label for="email">Email address:</label>
        <input type="email" class="form-control" id="email" required>
      </div>
      <div class="form-group">
        <label for="pwd">Password:</label>
        <input type="password" class="form-control" id="pwd" required>
      </div>
      <div class="form-group form-check">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox"> Remember me
        </label>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
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
