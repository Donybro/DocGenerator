<template>
  <table class="min-w-full table-auto text-sm xl:text-md">
    <thead>
    <tr class="bg-white border-b border-gray-300 text-gray-400">
      <th class="w-20 py-4">
        ID
      </th>
      <th class="text-left py-4 pl-3">
        Document title
      </th>
      <th class="py-4 pl-3">
        Created date
      </th>
      <th>Document size</th>
      <th></th>
    </tr>
    </thead>
    <tbody>
    <tr
        v-for="(bodyItem, indx) in $props.tableBody"
        :key="bodyItem.id"
        class="text-gray-800 odd:bg-white even:bg-grayPrimary rounded-3xl"
    >
      <td class="w-20 py-4">
        <div class="text-center">
          {{ bodyItem.id }}
        </div>
      </td>
      <td class="py-4 overflow-hidden overflow-ellipsis ">
        <div class="flex items-center">
          {{ bodyItem.document_name }}
        </div>
      </td>
      <td class="text-center px-3 py-4">
        {{ bodyItem.created_at }}
      </td>
      <td class="text-center px-3 py-4">
        {{ bodyItem.field_count }}
      </td>
      <td>
        <router-link :to="`/document/${bodyItem.id}`">
          preview
        </router-link>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script setup>
import { defineEmits, defineProps} from "vue";



defineProps({
  tableBody: {
    type: Array,
    required: true
  },
})

defineEmits(['see'])

</script>

<style scoped></style>
