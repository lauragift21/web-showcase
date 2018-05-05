<template>
<div class="form">
   <form action="/action_page.php">
  <div class="form-group">
    <label for="email">Email address:</label>
    <input type="email" class="form-control" id="email">
  </div>
  <div class="form-group">
    <label for="pwd">Password:</label>
    <input type="password" class="form-control" id="pwd">
  </div>
  <div class="form-group">
    <label for="pwd">Confirm Password</label>
      <input class="form-control" type="password" id="pwd">
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
