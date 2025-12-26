import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Landing.vue'
import News from '../views/blog/News.vue'
import BlogDetailView from '../views/blog/detailBlog.vue'

const routes = [
    { path: '/', component: HomeView },
    { path: '/blog', component: News, name: 'blog-list' },
    { path: '/blog/:id', component: BlogDetailView, name: 'blog-detail', props: true }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router