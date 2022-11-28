<script setup>
const state = reactive({
  pageIndexes: [],
  showingPosts: [],
  postArray: [],
  page: 1,
});
const { data: posts } = await useFetch("https://challenge.webjar.ir/posts");
posts.value.map((post) => {
  state.postArray.push(post);
});
const filterByCategory = (selectedCategories) => {
  if (!!selectedCategories.length) {
    let filteredPosts = [];
    selectedCategories.forEach((selectedCategory) => {
      posts.value.forEach((post) => {
        if (post.category === selectedCategory) {
          filteredPosts.push(post);
        }
      });
    });
    state.postArray = filteredPosts;
    paginate(state.postArray);
  } else {
    posts.value.map((post) => {
      state.postArray.push(post);
    });
    paginate(state.postArray);
  }
};
const paginate = (postArray) => {
  state.pageIndexes = [];
  const pagesCount = Math.ceil(state.postArray.length / 4);
  for (let i = 1; i <= pagesCount; i++) {
    state.pageIndexes.push(i);
  }
  state.showingPosts = postArray.slice(
    (state.page - 1) * 4,
    (state.page - 1) * 4 + 4
  );
};
paginate(state.postArray);
watch(
  () => state.postArray,
  (postArray) => paginate(postArray)
);
const changePage = (page) => {
  state.page = page;
  paginate(state.postArray);
};
const contentSearch = (data) => {
  let filteredBySearch = posts.value.filter((post) => {
    if (post?.title.includes(data)) return post;
  });
  state.postArray = filteredBySearch;
  paginate(filteredBySearch);
};
</script>
<template>
  <div class="lg:mx-200px">
    <div class="flex justify-center">
      <searchBox
        class="mx-auto"
        @searchContent="(data) => contentSearch(data)" />
    </div>

    <div class="divCountainer1">
      <div class="lg:pl-16">
        <categoryBox
          @changeCategory="
            (selectedCategory) => filterByCategory(selectedCategory)
          " />
      </div>
      <div class="lg:w-56vw">
        <postCard
          v-for="(post, index) in state.showingPosts"
          :key="index"
          :title="post.title"
          :body="post.body"
          :createDate="post.createdAt"
          :coments="post.commentCount"
          :creator="post.author"
          :image="post.introImageUrl.host" />
        <div v-if="state.pageIndexes.length > 1" class="divCountainer2">
          <button
            @click="changePage(state.page - 1)"
            :disabled="state.page === 1"
            class="prevBtn">
            <Icons-arrowleft />
          </button>
          <button
            v-for="index in state.pageIndexes"
            :key="index"
            @click="changePage(index)"
            :class="
              state.page == index
                ? 'text-white bg-my-green border-my-green'
                : 'text-my-green border-my-green'
            "
            class="numBtn">
            {{ index }}
          </button>
          <button
            @click="changePage(state.page + 1)"
            :disabled="state.page === state.pageIndexes.length"
            class="prevBtn">
            <Icons-arrowright />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
