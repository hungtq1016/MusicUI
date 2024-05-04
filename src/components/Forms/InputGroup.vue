<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    label: String,
    type: String,
    placeholder: String,
    customClasses: String,
    required: {
      type: Boolean,
      default: false
    }
  }
})
</script>

<template>
  <div :class="customClasses">
    <label class="mb-2.5 block text-ebony-clay-950 dark:text-white">
      {{ label }}
      <span v-if="required" class="text-red-ribbon-600">*</span>
    </label>
    <input
      :type="type"
      :placeholder="placeholder"
      class="w-full rounded border-[1.5px] text-ebony-clay-950 border-zumthor-100 bg-transparent py-3 px-5 font-normal outline-none transition focus:border-cerulean-blue-600 active:border-cerulean-blue-600 disabled:cursor-default disabled:bg-zircon-50  dark:text-white dark:border-fiord-700 dark:bg-big-stone-950 dark:focus:border-cerulean-blue-600"
    />
  </div>
</template>
