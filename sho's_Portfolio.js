var VueTyperPlugin = window.VueTyper.default
Vue.use(VueTyperPlugin)

var top_nav = new Vue({
    el: '.top-nav',
    data: {
        items: [
            { title: 'TOP', path: '#top' },
            { title: 'ABOUT', path: '#about' },
            { title: 'SKILL', path: '#skill' },
            { title: 'CAREER', path: '#career' },
            { title: 'CERTIFICATION', path: '#certification' },
            { title: 'CONTACT', path: '#contact' }
        ]
    }
});

//SKILLSリスト
Vue.component("list-programming", {
    template: `<ul class="programming-lang programming-lang-smartphone_landscape programming-lang-smartphone_portrait programming-lang-tablet_landscape">
                <li><img class="lang-image" src="https://general0917.github.io/portfolio/html.png" alt="HTML">
                    <h4 class="lang-name">HTML</h4>
                    <p class="skill-level">★★☆☆☆</p>
                    <p>実務経験：1年未満</p>
                </li>
                <li><img class="lang-image" src="https://general0917.github.io/portfolio/css.png" alt="CSS">
                    <h4 class="lang-name">CSS</h4>
                    <p class="skill-level">★★☆☆☆</p>
                    <p>実務経験：1年未満</p>
                </li>
                <li><img class="lang-image" src="https://general0917.github.io/portfolio/JavaScript.png" alt="JavaScript">
                    <h4 class="lang-name">JavaScript</h4>
                    <p class="skill-level">★★☆☆☆</p>
                    <p>実務経験：1年未満</p>
                </li>
                <li><img class="lang-image" src="https://general0917.github.io/portfolio/vue.png" alt="Vue.js">
                    <h4 class="lang-name">Vue.js</h4>
                    <p class="skill-level">★★☆☆☆</p>
                    <p>実務経験：1年未満</p>
                </li>
                <li><img class="lang-image" src="https://general0917.github.io/portfolio/Java.png" alt="Java">
                    <h4 class="lang-name">Java</h4>
                    <p class="skill-level">★☆☆☆☆</p>
                    <p>実務経験：1年未満</p>
                </li>
                <li><img class="lang-image" src="https://general0917.github.io/portfolio/php.png" alt="PHP">
                    <h4 class="lang-name">PHP</h4>
                    <p class="skill-level">★☆☆☆☆</p>
                    <p>実務経験：1年未満</p>
                </li>
                <li><img class="lang-image" src="https://general0917.github.io/portfolio/Python.png" alt="Python">
                    <h4 class="lang-name">python</h4>
                    <p class="skill-level">★☆☆☆☆</p>
                    <p>実務経験：1年未満</p>
                </li>
                <li><img class="lang-image" src="https://general0917.github.io/portfolio/Ruby.png" alt="Ruby">
                    <h4 class="lang-name">Ruby</h4>
                    <p class="skill-level">★☆☆☆☆</p>
                    <p>実務経験：1年未満</p>
                </li>
                <li><img class="lang-image" src="https://general0917.github.io/portfolio/C-2.png" alt="C++">
                    <h4 class="lang-name">C++言語</h4>
                    <p class="skill-level">★☆☆☆☆</p>
                    <p>実務経験：1年未満</p>
                </li>
            </ul>`,
});

new Vue({
    el: '#skill'
});

new Vue({
    el: '.top-text'
});

new Vue({
    el: '#time-line',
    vuetify: new Vuetify()
})
