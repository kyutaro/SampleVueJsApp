var personData = {
    headline: '著者名',
    authors: '著者名',
    sentence: '青空文庫掲載の著者一覧を表示',
    persons: []
}

const Person = {
    template: '\
    <div>\
        <h3>{{ headline }}</h3>\
        <button class="header-search" type="text" v-on:click="fetchPerson">{{ sentence }}</button>\
        <ul v-for="person in persons">\
            <li>\
                    <div>\
                        {{ authors }}：{{ person.last_name }}{{ person.first_name }}<br>\
                    </div>\
            </li>\
        </ul>\
    \
    </div>\
    ',
    data: function () {
        return personData
    },
    methods: {
        fetchPerson: function () {
            var vm = this
            var url = AOZORA_PERSONS_API_URL;
            axios.get(CUSHION_URL, {
                params: {
                    url: url,
                }
            }).then(function (response) {
                console.log('sss');
                vm.persons = response.data
            }).catch(function (error) {
                vm.persons = 'Error! Could not reach the API. ' + error
            })
        }
    },
}
