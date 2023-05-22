<script setup lang="ts">
  import { onBeforeMount } from "vue";
  //import FetchAdapter from "../infra/http/FetchAdapter";
  import KyAdapter from "../infra/http/KyAdapter";
  //import WretchAdapter from "../infra/http/WretchAdapter";
  defineProps<{ msg: string }>();

  //const httpClient = new FetchAdapter();
  const httpClient = new KyAdapter();
  //const httpClient = new WretchAdapter();

  const get = async () => {
    const response = await httpClient.get({
      url: "https://jsonplaceholder.typicode.com/",
      path: "posts/1",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer 123"
      }
    });
    console.log(response);
  };

  const post = async () => {
    const response = await httpClient.post({
      url: "https://jsonplaceholder.typicode.com/",
      path: "posts",
      body: {
        title: "foo",
        body: "bar",
        userId: 1
      }
    });
    console.log(response);
  };

  const put = async () => {
    const response = await httpClient.put({
      url: "https://jsonplaceholder.typicode.com/",
      path: "posts/2",
      body: {
        id: 2,
        title: "fizz",
        body: "buzz",
        userId: 2
      }
    });
    console.log(response);
  };

  const patch = async () => {
    const response = await httpClient.patch({
      url: "https://jsonplaceholder.typicode.com/",
      path: "posts/3",
      body: {
        title: "fuzz",
        body: "bar",
        userId: 3
      }
    });
    console.log(response);
  };

  const deleteHttp = async () => {
    const response = await httpClient.delete({
      url: "https://jsonplaceholder.typicode.com/",
      path: "posts/4"
    });
    console.log(response);
  };

  onBeforeMount(() => {
    get();
    post();
    put();
    patch();
    deleteHttp();
  });
</script>

<template></template>

<style scoped>
  .read-the-docs {
    color: #888;
  }
</style>
