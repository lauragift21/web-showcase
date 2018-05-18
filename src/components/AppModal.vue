<template>
<div class="button-modal">
    <!-- Button to Open the Modal -->
    <button type="button"
      class="btn btn-secondary mx-4 my-4"
      data-toggle="modal"
      data-target="#myModal">
      Create
    </button>
    <div class="modal" id="myModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">Create a Website</h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        <!-- Modal body -->
          <form method="post" class="form modal-body" @submit.prevent="postList">
            <div class="alert alert-success alert-dismissible fade show" v-if="success">
              <button type="button" class="close" data-dismiss="alert">&times;</button>
              <b>Website Created Successfully!</b>
            </div>
            <div>
              <label for="name">Website Name:</label>
              <input
                type="text"
                id="name"
                class="form-control"
                name="name"
                v-model="name"
                v-validate="'required'">
                <span
                  v-show="errors.has('name')"
                  class="text-danger">
                  {{ errors.first('name') }}
                </span>
            </div>
            <div>
              <label for="url" class="mt-3">URL:</label>
              <input
                type="url"
                class="form-control"
                id="url"
                v-model="url"
                name="url"
                v-validate="'required|url'">
                <span
                  v-show="errors.has('url')"
                  class="text-danger">
                  {{ errors.first('url') }}
                </span>
            </div>
            <div>
              <label for="Description" class="mt-3">Description:</label>
              <textarea
                name="description"
                v-model="description"
                id="desc"
                class="form-control"
                v-validate="'required|max:140'"/>
                <span
                  v-show="errors.has('description')"
                  class="text-danger">
                  {{ errors.first('description') }}
                </span>
            </div>
            <div>
              <button
                type="submit"
                class="btn btn-dark mt-3"
                @click.prevent="postList" >
                Submit
              </button>
            </div>
          </form>
        <!-- Modal footer -->
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" @click="refresh" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: '',
      url: '',
      description: '',
      success: null,
      error: false
    };
  },
  methods: {
    postList() {
      this.success = true;
      const URL = 'https://mt-proc.herokuapp.com/websites';
      const AUTH = {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      };
      // console.log(auth);
      axios
        .post(
          URL,
          {
            name: this.name,
            url: this.url,
            description: this.description
          },
          AUTH
        )
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
    refresh() {
      window.location.reload();
    }
  },
};
</script>

