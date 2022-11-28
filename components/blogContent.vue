<script setup>
const { data: posts } = await useFetch("https://challenge.webjar.ir/posts");
console.log(posts);
</script>
<template>
  <div class="xl:mx-200px mx-8">
    <div
      class="flex flex-col xl:flex-row-reverse justify-center items-center xl:items-start">
      <div><categoryBox /></div>
      <div>
        <postCard
          v-for="(post, index) in posts"
          :key="index"
          :title="post.title"
          :body="post.body"
          :createDate="post.createdAt"
          :coments="post.commentCount"
          :creator="post.author"
          :image="post.introImageUrl.host" />
      </div>
    </div>
  </div>
</template>
