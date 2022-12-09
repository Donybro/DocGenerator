<template>
  <div class="home flex flex-col items-center w-[600px] mx-auto">
    <div  class="flex flex-col my-3 w-full">
      <label for="document_name">
        Document Name
      </label>
      <input id="document_name" v-model="document_name"  placeholder="" class="base_input" name="document_name">
    </div>
    <Fields v-for="(formObject,indx) in formObjectsArray" :key="indx" 
            v-model:field_seq="formObject.field_seq" 
            v-model:is_mandatory="formObject.is_mandatory" 
            v-model:field_type="formObject.field_type"
            v-model:select_values="formObject.select_values" 
            v-model:field_name="formObject.field_name" />
    <div class="flex justify-around w-full">
      <button @click="addMoreHandler" class="base_input"> Add More</button>
      <button @click="submit" class="base_input bg-blue-800 text-white "> SAVE</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Fields from "@/components/FormGenerator/Fields.vue";
import {ref, watch} from "vue";

const emit = defineEmits(['submit'])

const formObjectsArray = ref([{
  field_seq:1,
  field_type:1,
  field_name:"",
  select_values:"",
  is_mandatory:true,
}])

const addMoreHandler = ()=>{
  formObjectsArray.value =  [...formObjectsArray.value,{
    field_seq:1,
    field_type:1,
    field_name:"",
    select_values:"",
    is_mandatory:true,
  }]
}
const submit =  async ()=>{
  try {
    const result = {
      document_name:document_name.value,
      form_values:formObjectsArray.value.map(val=>{
        if(val.select_values){
          return {
            ...val,
            select_values : JSON.parse(val.select_values)
          }
        }else return  val
        
      })
    }
    emit('submit',result)
  }catch (e) {
    if(e?.message){
      alert(e.message)
    }
  }
}

const document_name = ref('')



</script>
