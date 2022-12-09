<template>
  <section class="w-[600px] mx-auto flex flex-col gap-[12px]">
    <h1 class="text-3xl font-semibold">{{document_name}}</h1>
    <template v-for="field in fields" :key="field.id">
      <div class="flex flex-col">
        <label :for="'input'+field.id"> {{field.field_name}}</label>
        <template v-if="field.field_type === 2">
          <select :required="field.is_mandatory" class="base_input" :id="+field.id">
            <template v-if="field.select_values">
              <option :selected="item.value" v-for="item in field.select_values" :value="item.value">
                {{item.label}}
              </option>
            </template>
          </select>
        </template>
        <template v-else>
          <input class="base_input" :id="'input'+field.id" :type="field.field_type === 1 ? 'text':'number'" :required="field.is_mandatory">
        </template>
      </div>
      
    </template>
  </section>
  <button @click="$router.back()" class="bg-blue-600 px-[12px] py-[6px] rounded text-white mt-[12px]">
    Back
  </button>
  
</template>

<script setup lang="ts">
import {IDocInfoDTO, IForm, IFormData} from "@/types/form.interface";
import {toRefs} from "vue";

interface Props {
  document_name:string,
  fields:IForm[]
}
const props = defineProps<Props>()
const {document_name,fields} = toRefs(props)

</script>

<style scoped>

</style>