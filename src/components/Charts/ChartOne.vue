<script setup lang="ts">
import { ref } from 'vue'
// @ts-ignore
import VueApexCharts from 'vue3-apexcharts'

const chartData = {
  series: [
    {
      name: 'Product One',
      data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 45]
    },

    {
      name: 'Product Two',
      data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 51]
    }
  ],
  labels: ['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug']
}

const chart = ref(null)

const apexOptions = {
  legend: {
    show: false,
    position: 'top',
    horizontalAlign: 'left'
  },
  colors: ['#3C50E0', '#80CAEE'],
  chart: {
    fontFamily: 'Satoshi, sans-serif',
    height: 335,
    type: 'area',
    dropShadow: {
      enabled: true,
      color: '#623CEA14',
      top: 10,
      blur: 4,
      left: 0,
      opacity: 0.1
    },

    toolbar: {
      show: false
    }
  },
  responsive: [
    {
      breakpoint: 1024,
      options: {
        chart: {
          height: 300
        }
      }
    },
    {
      breakpoint: 1366,
      options: {
        chart: {
          height: 350
        }
      }
    }
  ],
  stroke: {
    width: [2, 2],
    curve: 'straight'
  },

  labels: {
    show: false,
    position: 'top'
  },
  grid: {
    xaxis: {
      lines: {
        show: true
      }
    },
    yaxis: {
      lines: {
        show: true
      }
    }
  },
  dataLabels: {
    enabled: false
  },
  markers: {
    size: 4,
    colors: '#fff',
    strokeColors: ['#3056D3', '#80CAEE'],
    strokeWidth: 3,
    strokeOpacity: 0.9,
    strokeDashArray: 0,
    fillOpacity: 1,
    discrete: [],
    hover: {
      size: undefined,
      sizeOffset: 5
    }
  },
  xaxis: {
    type: 'category',
    categories: chartData.labels,
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    }
  },
  yaxis: {
    title: {
      style: {
        fontSize: '0px'
      }
    },
    min: 0,
    max: 100
  }
}
</script>

<template>
  <div
    class="col-span-12 rounded-sm border border-zumthor-100 bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-oxford-blue-900 dark:bg-big-stone-950  sm:px-7.5 xl:col-span-8"
  >
    <div class="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
      <div class="flex w-full flex-wrap gap-3 sm:gap-5">
        <div class="flex min-w-47.5">
          <span
            class="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-cerulean-blue-600"
          >
            <span class="block h-2.5 w-full max-w-2.5 rounded-full bg-cerulean-blue-600"></span>
          </span>
          <div class="w-full">
            <p class="font-semibold text-cerulean-blue-600">Total Revenue</p>
            <p class="text-sm font-medium">12.04.2022 - 12.05.2022</p>
          </div>
        </div>
        <div class="flex min-w-47.5">
          <span
            class="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-seagull-300"
          >
            <span class="block h-2.5 w-full max-w-2.5 rounded-full bg-seagull-300"></span>
          </span>
          <div class="w-full">
            <p class="font-semibold text-seagull-300">Total Sales</p>
            <p class="text-sm font-medium">12.04.2022 - 12.05.2022</p>
          </div>
        </div>
      </div>
      <div class="flex w-full max-w-45 justify-end">
        <div class="inline-flex items-center rounded-md bg-zircon-50  p-1.5 dark:bg-oxford-blue-900">
          <button
            class="rounded bg-white py-1 px-3 text-xs font-medium text-ebony-clay-950 shadow-card hover:bg-white hover:shadow-card dark:bg-big-stone-950  dark:text-white dark:hover:bg-big-stone-950 "
          >
            Day
          </button>
          <button
            class="rounded py-1 px-3 text-xs font-medium text-ebony-clay-950 hover:bg-white hover:shadow-card dark:text-white dark:hover:bg-big-stone-950 "
          >
            Week
          </button>
          <button
            class="rounded py-1 px-3 text-xs font-medium text-ebony-clay-950 hover:bg-white hover:shadow-card dark:text-white dark:hover:bg-big-stone-950 "
          >
            Month
          </button>
        </div>
      </div>
    </div>
    <div>
      <div id="chartOne" class="-ml-5">
        <VueApexCharts
          type="area"
          height="350"
          :options="apexOptions"
          :series="chartData.series"
          ref="chart"
        />
      </div>
    </div>
  </div>
</template>
