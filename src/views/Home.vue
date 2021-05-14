<template>
    <div>
        <bounce-loader :loading="isLoading" :color="'#68d391'" :size="100"/>
        <PxAssetsTable v-if="!isLoading"  :assets="assets" />
    </div>
</template>

<script>
import PxAssetsTable from '@/components/PxAssetsTable';
import api from '@/api.js';

export default {
    name:'Home',
    components: {
        PxAssetsTable

    },
    data (){
        return {
            assets: [],
            isLoading: false
        }
    },
    created () {
        this.isLoading = true;
        api.getAssets()
        .then( rslt => (this.assets = rslt))
        .finally(() => (this.isLoading= false));
    }
}
</script>