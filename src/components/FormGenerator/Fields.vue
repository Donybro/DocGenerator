<template>
  <form class="w-[600px]">
    <hr>
    <div  class="flex flex-col my-3">
      <label for="field_seq">
        Field sequence
      </label>
      <input @input="emit('update:field_seq',+$event.target.value)" id="field_seq" type="number"  placeholder="" class="base_input" name="field_seq">
    </div>
    <div  class="flex flex-col my-3">
      <label for="field_type">
        Field type
      </label>
      <select @input="emit('update:field_type',+$event.target.value)" id="field_type" name="field_type"  class="base_input">
        <option :value="1">Input</option>
        <option :value="2">Select</option>
        <option :value="3">NumberInput</option>
      </select>
    </div>
    <section v-if="field_type === 2">
      <div class="flex flex-col my-3">
        <label for="select_values">
          Selected Values
        </label>
        <input @input="emit('update:select_values',$event.target.value)" id="select_values"  placeholder="please enter options label and value in json " class="base_input" name="select_values">
        <div>enter options in json form, e.g. [{ "value" : true, "label": "Agree"}, {"value": false, "label": "Disagree"}]</div>
      </div>
    </section>
    <div  class="flex flex-col my-3">
      <label for="field_name">
        Field Name
      </label>
      <input @input="emit('update:field_name',$event.target.value)" id="field_name"  placeholder="" class="base_input" name="field_name">
    </div>
    <div class="flex my-3 gap-[6px]">
      <input @input="emit('update:is_mandatory',$event.target.checked)"  type="checkbox" id="is_mandatory" name="is_mandatory">
      <label for="is_mandatory">Mandatory</label><br>
    </div>
  </form>
</template>

<script setup lang="ts" >
import { useField, useForm } from "vee-validate";
import * as yup from "yup";
import {IForm} from "@/types/form.interface";
import {toRefs} from "vue";

interface Props {
  field_seq: number,
  field_type:number,
  field_name:string,
  select_values:string,
  is_mandatory:boolean,
}
const props = defineProps<Props> ()
const {field_type} = toRefs(props)

const emit = defineEmits(['update:field_name','update:is_mandatory','update:field_seq','update:field_type','update:select_values'])



</script>

<style scoped>

</style>