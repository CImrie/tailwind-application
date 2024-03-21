<template>
  <div class="flex flex-col overflow-x-visible">
    <div v-for="i in rows" class="flex items-end gap-x-4 text-gray-300 font-medium odd:ml-20 lg:w-[1110px] py-1 align-baseline">
      <div ref="rowSlotParents" class="absolute z-10">
        <slot :name="`row_${i}`"/>
      </div>
      <div v-for="j in columns" ref="columnRefs">
        <div class="relative">
<!--          <template v-if="i == rows && j === mePosition">-->
<!--            <div class="invisible">them</div>-->
<!--            <svg class="absolute -mt-20 -ml-32 fill-current text-white">-->
<!--              <circle r="50px" cx="50%" cy="50%"/>-->
<!--            </svg>-->
<!--            <div class="text-red-500 font-bold text-4xl absolute -mt-10">-->
<!--              me-->
<!--            </div>-->
<!--          </template>-->
<!--          <template v-else>-->
            <div :class="{'invisible': !(shouldDisplayColumn(i-1, j-1)).value}">
              them
            </div>
<!--          </template>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {toRefs} from "vue";

const props = defineProps<{
  rows: number,
  columns: number,
  mePosition: number,
}>();

const {rows, columns, mePosition} = toRefs(props);
const rowSlotParents = ref(null);
const columnRefs = ref(null);

/*
  Get the width of the rowSlotContainer (the "HIRE" text).
  If the "them" text is positioned within the rowSlotContainer then it should have the class "invisible".
  "Positioned within" means that the "them" element x,y + width,height is within the x,y + width,height of the rowSlotContainer.

  The visibleMap is a 2D array that stores the visibility of each column for each row.
  Only columns in rows with slot children can be affected.
  We need to loop through all possibly affected rows and create visibility map for each column in that row.
 */

// A matrix of visible columns for each row
const visibleMap = ref({});

onMounted(() => {
  // Chunk the columns into groups of however many columns there are in each row
  // This is to avoid checking the visibility of columns that are not in the row
  const columnChunks = Object.keys(columnRefs.value).reduce((acc, key, index) => {
    const chunkIndex = Math.floor(index / columns.value);
    if (!acc[chunkIndex]) {
      acc[chunkIndex] = [];
    }
    acc[chunkIndex].push(columnRefs.value[key]);
    return acc;
  }, []);

  Object.keys(rowSlotParents.value).forEach(key => {
    const hasChildren = rowSlotParents.value[key].children.length > 0;
    // Create a new row in the visibleMap
    visibleMap.value[key] = [];

    if (!hasChildren) {
      return;
    }

    // Get the bounding box of the rowSlotContainer
    const rowSlotContainer = rowSlotParents.value[key];
    const rowSlotContainerRect = rowSlotContainer.getBoundingClientRect();

    // Loop through all columns in the row
    Object.keys(columnChunks[key]).forEach(columnKey => {
      const column = columnChunks[key][columnKey];
      const columnRect = column.getBoundingClientRect();

      // Set the visibility of the column
      visibleMap.value[key][columnKey] = !intersects(column, rowSlotContainer);
    })
  });
});

const shouldDisplayColumn = (row: number, column: number) => computed(() => {
  if (visibleMap.value[row] && visibleMap.value[row][column] !== undefined) {
    return visibleMap.value[row][column];
  }
  return true;
});

const intersects = (element1: HTMLElement, element2: HTMLElement) => {
  const rect1 = element1.getBoundingClientRect();
  const rect2 = element2.getBoundingClientRect();

  return !(
    rect1.right < rect2.left ||
    rect1.left > rect2.right ||
    rect1.bottom < rect2.top ||
    rect1.top > rect2.bottom
  );
}
</script>