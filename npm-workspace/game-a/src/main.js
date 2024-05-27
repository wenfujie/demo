import { createApp } from 'vue'
import { App, count } from 'share'
console.log('%c count', 'color:#0f0;', count(1, 2))
createApp(App).mount('#app')
