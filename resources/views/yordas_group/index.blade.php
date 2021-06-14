
@extends('layouts.app')

@section('title', 'Dashboard')

<link href="{{ mix('css/dashboard.css') }}" rel="stylesheet">

@section('content')
    <div id="app" v-cloak class="relative flex items-top min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center py-4 sm:pt-0">
        <div class="container max-w-6xl mx-auto sm:px-6 lg:px-8">
            <div class="flex pt-8 sm:justify-start sm:pt-0">
                <h1 class="text-success mb-3">Yordas Group Task</h1>
            </div>
            <div v-if="!selectedSubstance">
                <div class="d-flex align-items-center">
                    <div class="text-light mr-3">
                        <b-form-group
                            v-model="sortDirection"
                            label="Select below to filter"
                            label-size="sm"
                            class="mb-0"
                            v-slot="{ ariaDescribedby }"
                        >
                            <b-form-checkbox-group
                                v-model="table.filterOn"
                                :aria-describedby="ariaDescribedby"
                                class="mt-1"
                            >
                                <b-form-checkbox value="ec_number">EC Number</b-form-checkbox>
                                <b-form-checkbox value="cas_number">Cas Number</b-form-checkbox>
                            </b-form-checkbox-group>
                        </b-form-group>
                    </div>
                    <div class="input-group ml-3 mt-2 w-75 float-right">
                        <input id="filter-input" v-model="table.filter"  class="form-control w-75" aria-label="Type to Search" aria-describedby="button-addon2" type="search" placeholder="Type to Search">
                        <button class="btn btn-secondary" type="button" :disabled="!table.filter" @click="table.filter = ''" id="button-addon2">Clear</button>
                    </div>
                </div>
                <small><p class="text-light mt-2">Click table row to view related information.</p></small>
                <div class="table-box">
                    <b-table 
                        head-variant="dark"
                        borderless
                        striped
                        hover
                        class="mb-0"
                        tbody-class="bg-light"
                        :fields="table.fields"
                        :items="table.items"
                        :filter="table.filter"
                        :filter-included-fields="table.filterOn"
                        :current-page="table.currentPage"
                        :per-page="table.perPage"
                        :busy.sync="table.isBusy"
                        @row-clicked="rowClicked"	
                        >
                    </b-table>
                </div>
                <div class="pagination">
                    <b-pagination
                        v-model="table.currentPage"
                        :total-rows="table.totalRows"
                        :per-page="table.perPage"
                        size="md"
                        class="mt-3 w-25"
                    ></b-pagination>
                </div>
            </div>
            <div v-else>
                <div class="btn btn-outline-light mb-3" @click="onBack">&larr; Go Back</div>
                <b-card bg-variant="dark" text-variant="white" :title="selectedSubstance.substance_name">
                    <hr>
                    <h6 class="mt-3">
                        @{{ selectedSubstance.tsd ? 'Toy Safety Directive' : selectedSubstance.svhc ? 'REACH SVHC Candidate' : 'N/A' }}
                    </h6>
                    <p class="my-3">
                        @{{ selectedSubstance.tsd ? selectedSubstance.tsd.related_information : selectedSubstance.svhc ? selectedSubstance.svhc.related_information : 'No related information available..' }}
                    </p>
                </b-card>
            </div>       
        </div>
    </div>


@endsection

@section('scripts')
    <script src="{{ mix('/js/yordas_group/dashboard.js') }}"></script>
@endsection