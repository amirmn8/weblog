<script setup>
const state = reactive({
  pageIndexes: [],
  showingPosts: [],
  postArray: [],
  page: 1,
});
const { data: postCat } = await useFetch(
  "https://challenge.webjar.ir/post-categories"
);
console.log(postCat.value);
const { data: posts } = await useFetch("https://challenge.webjar.ir/posts");
posts.value.map((post) => {
  state.postArray.push(post);
});
const pagesCount = Math.ceil(state.postArray.length / 10);
for (let i = 1; i <= pagesCount; i++) {
  state.pageIndexes.push(i);
}
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
const changePage = (page) => {
  console.log(page);
  state.page = page;
  paginate(state.postArray);
};
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
        <div class="flex flex-row gap-1 mx-auto justify-center my-8 text-xl">
          <button
            :disabled="state.page === 1"
            class="flex w-12 h-12 shadow-page rounded-lg justify-center items-center mx-4 disabled:fill-my-green-fade fill-my-green">
            <Icons-arrowleft />
          </button>
          <button
            v-for="index in state.pageIndexes"
            :key="index"
            @click="changePage(index)"
            class="flex w-12 h-12 rounded-lg border border-my-green justify-center items-center text-my-green">
            {{ index }}
          </button>
          <button
            :disabled="state.page === state.pageIndexes.length"
            class="flex w-12 h-12 rounded-lg shadow-page justify-center items-center disabled:fill-my-green-fade fill-my-green mx-4">
            <Icons-arrowright />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
