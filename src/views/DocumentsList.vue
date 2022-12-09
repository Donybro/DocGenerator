<template>
  <section class="m-[100px] shadow">
    <div class="flex justify-end">
      <router-link to="/create" class="bg-blue-600 px-[12px] py-[6px] rounded text-white">
        New document
      </router-link>
    </div>
    <div class="p-[25px]">
      <DocumentsTable :table-body="docList"/>
    </div>
  </section>
</template>

<script setup>

import {DocumentService} from "@/api/document.service";
import {ref} from "vue";
import DocumentsTable from "@/components/DocumentsTable";
const docList = ref([])
const getList = async ()=>{
  try {
    const {data:documents} = await DocumentService.getAll()
    if(documents){
      docList.value = documents
    }
  }catch (e) {
    
  }
}
getList()
</script>

<style scoped>

</style>