
const app = new Vue({
    el: '#app',
    data: {
        selectedSubstance: null,
        sortDirection: null,
        table: {
            isBusy: false,
            totalRows: 1,
            currentPage: 1,
            perPage: 11,
            filter: null,
            filterOn: [],
            fields: [
                { key: 'id', label: 'ID', sortable: true, sortDirection: 'desc' },
                { key: 'substance_name', label: 'Subsance Name', sortable: true, sortDirection: 'desc' },
                { key: 'ec_number', label: 'EC Number', sortable: true, sortDirection: 'desc' },
                { key: 'cas_number', label: 'CAS Number', sortable: true, sortDirection: 'desc' },
            ],
            items: []
        }
    },
    watch: {
        'table.filter': function() {
            this.table.currentPage = 1 //reset page to 1 on when search function is used - otherwise data may not shown
        },
    },
    methods: {
        rowClicked(row) {
            this.selectedSubstance = row
        },
        onBack() {
            this.selectedSubstance = null
        }
    },
    created() {
        this.table.isBusy = true
        axios.post( '/api') //sending request through routes
        .then((response) => {
            response.data.forEach(x => {
                let obj = {
                    id: x.id, 
                    substance_name: x.substance_name ? x.substance_name : 'N/A' ,
                    ec_number: x.ec_number ? x.ec_number : 'N/A',
                    cas_number: x.cas_number ? x.cas_number : 'N/A',
                    tsd: x.tsd ? x.tsd : null,
                    svhc: x.svhc ? x.svhc : null
                }
                this.table.items.push(obj)
            })
            this.table.totalRows = this.table.items.length
            this.table.isBusy = false
        }).catch(err => {
            this.table.isBusy = false
        });
    }
});
