<template>
  <DocumentInfoCard v-if="docInfo" :document_name="docInfo.document_name" :fields="docInfo?.fields"/>
</template>

<script setup lang="ts">
import {useRoute} from "vue-router";
import {DocumentService} from "@/api/document.service";
import {onMounted, ref, watch} from "vue";
import DocumentInfoCard from "@/components/DocumentInfoCard.vue";

const route = useRoute()
const {id} = route.params
const docInfo = ref()
const getDocInfo = async (id:string)=>{
  try {
    const {data} = await DocumentService.viewById(id)
    if(data){
      docInfo.value = data
    }
  }catch (e) {
    console.log(e)
  }
}
getDocInfo(id)

</script>

<style scoped>

</style>