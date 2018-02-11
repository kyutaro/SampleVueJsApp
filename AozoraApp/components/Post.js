var postData = {
    headline: '作品名',
    message: 'この下に記事が展開されます',
    search: '',
    title: '作品名',
    authors: '作者名',
    sentence: '作品を読む',
    posts: []
}

const Post = {
    template: '\
    <div>\
        <h3>{{ headline }}</h3>\
        <input class="header-search" type="text" v-model="search" v-on:keyup.enter="fetchData" placeholder="作品名を完全一致で入力してください">\
        <p>{{ message }}</p>\
        <ul v-for="post in posts">\
            <li>\
                <div>\
                    {{ title }}：{{ post.title }}<br> {{ authors }}：{{ post.authors[0].last_name }}{{ post.authors[0].first_name }}<br>\
                    <a :href="post.html_url" target="_blank">{{ sentence }}</a>\
                </div>\
            </li>\
        </ul>\
    \
    </div>\
    ',
    data: function () {
        return postData
    },
    methods: {
        fetchData: function () {
            var vm = this
            if (this.search.length == 0) {
                var url = AOZORA_BOOKS_API_URL;
            } else {
                var url = AOZORA_BOOKS_API_URL + '?title=' + encodeURI(this.search);
            }
            axios.get(CUSHION_URL, {
                params: {
                    url: url,
                }
            }).then(function (response) {
                vm.posts = response.data
            }).catch(function (error) {
                vm.posts = 'Error! Could not reach the API. ' + error
            })
        }
    },
}
