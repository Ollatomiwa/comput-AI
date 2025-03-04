<template>
  <div class="min-h-screen bg-gray-50 py-20">
    <div class="container mx-auto px-6">
      <article class="prose lg:prose-xl mx-auto">
        <h1 class="text-4xl font-bold mb-8">{{ post.title }}</h1>
        <p class="text-gray-600 mb-8">{{ post.description }}</p>
        <p class="text-sm text-gray-500 mb-8">{{ formatDate(post.date) }}</p>
        <ContentRenderer :value="post" />
      </article>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const { data: post } = await useAsyncData(`blog-post-${route.params.slug}`, () => {
  return queryContent('/blog').where({ _path: `/blog/${route.params.slug}` }).findOne();
});

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
};
</script>