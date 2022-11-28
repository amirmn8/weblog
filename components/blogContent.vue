<script setup>
const state = reactive({ showingPosts: [], postArray: [], page: 1 });
const { data: posts } = await useFetch("https://challenge.webjar.ir/posts");
posts.value.map((post) => {
  state.postArray.push(post);
});
const paginate = (postArray) => {
  state.showingPosts = postArray.slice(
    (state.page - 1) * 10,
    (state.page - 1) * 10 + 9
  );
};
paginate(state.postArray);
watch(
  () => state.postArray,
  (postArray) => paginate(postArray)
);

const contentSearch = (data) => {
  state.postArray = posts.value.filter((post) => {
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
