<script setup>
const state = reactive({ showingPosts: {} });
const { data: posts } = await useFetch("https://challenge.webjar.ir/posts");
state.showingPosts = posts.value;
const contentSearch = (data) => {
  state.showingPosts = posts.value.filter((post) => {
    if (post?.title.includes(data)) return post;
  });
};
</script>
<template>
  <div class="xl:mx-200px mx-8">
    <searchBox class="mx-auto" @searchContent="(data) => contentSearch(data)" />
    <div
      class="flex flex-col xl:flex-row-reverse justify-center items-center xl:items-start">
      <div><categoryBox /></div>
      <div>
        <postCard
          v-for="(post, index) in state.showingPosts"
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
