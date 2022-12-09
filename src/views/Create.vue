<template>
  <div class="home flex flex-col items-center w-[600px] mx-auto">
    <FormGenerator @submit="handleSubmit"/>
  </div>
</template>
<script setup lang="ts">
import FormGenerator from "@/components/FormGenerator/FormGenerator";
import {DocumentService} from "@/api/document.service";
import {IFormData} from "@/types/form.interface";
import {useRouter} from "vue-router";

const router = useRouter()


const handleSubmit = async(formData:IFormData)=>{
  try {
    const resp = await DocumentService.create(formData)
    router.push('/')
  }catch (e) {
    console.log()
  }
}


</script>