<template>
  <div class="min-h-screen bg-gray-50 py-20">
    <div class="container mx-auto px-6">
      <h1 class="text-4xl font-bold text-center mb-12">Blog</h1>
      <div v-if="posts && posts.length > 0" class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article v-for="post in posts" :key="post._path" class="bg-white p-6 rounded-lg shadow-md">
          <h2 class="text-2xl font-semibold mb-4">{{ post.title }}</h2>
          <p class="text-gray-600 mb-4">{{ post.description }}</p>
          <p class="text-sm text-gray-500">{{ formatDate(post.date) }}</p>
          <NuxtLink :to="post._path" class="text-blue-600 hover:underline mt-4 inline-block">Read More</NuxtLink>
        </article>
      </div>
      <div v-else>
        <p class="text-center text-gray-600">No blog posts found.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const { data: posts } = await useAsyncData('blog-posts', () => {
  return queryContent('/blog').find();
});

console.log('All content files:', posts.value); // Debugging

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
};
</script>