const routes = [
  { path: '/', component: Post },
  { path: '/person', component: Person },
]

const router = new VueRouter({
  routes // `routes: routes` の短縮表記
})
