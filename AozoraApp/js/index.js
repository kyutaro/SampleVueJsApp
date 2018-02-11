var index = new Vue({
    el: '#index',
    data: {
        headline: '作品名',
        message: 'この下に記事が展開されます',
        search: '',
        title: '作品名',
        authors: '作者名',
        posts: []
    },
    watch: {
        // この関数は question が変わるごとに実行されます。
        question: function (newQuestion, oldQuestion) {
            this.message = '検索しています...'
            this.fetchData(message)
        }
    },
    methods: {
        fetchData: function () {
            console.log(this.search);
            var vm = this
            if(this.search.length == 0) {
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
    }
})