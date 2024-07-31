<template>
  <Doughnut :data="data" :options="options" width="200px" height="120px" />
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue';
import { Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, Legend, ArcElement } from 'chart.js'
ChartJS.register(Legend, ArcElement)

interface Props {
  uv: number,
}

const props = withDefaults(defineProps<Props>(), {
  uv: 0,
})

const colorPallete = {
    '1': 'rgba(165, 194, 49, 1)',
    '2': 'rgba(165, 194, 49, 1)',
    '3': 'rgba(249, 206, 57, 1)',
    '4': 'rgba(249, 206, 57, 1)',
    '5': 'rgba(249, 206, 57, 1)',
    '6': 'rgba(245, 179, 50, 1)',
    '7': 'rgba(245, 179, 50, 1)',
    '8': 'rgba(242, 135, 41, 1)',
    '9': 'rgba(242, 135, 41, 1)',
    '10': 'rgba(242, 135, 41, 1)',
    '11': 'rgba(149, 82, 199, 1)',
    '12': 'rgba(149, 82, 199, 1)',
  }

  const bgColorPallete = {
    '1': 'rgba(165, 194, 49, 0.1)',
    '2': 'rgba(165, 194, 49, 0.1)',
    '3': 'rgba(249, 206, 57, 0.1)',
    '4': 'rgba(249, 206, 57, 0.1)',
    '5': 'rgba(249, 206, 57, 0.1)',
    '6': 'rgba(245, 179, 50, 0.1)',
    '7': 'rgba(245, 179, 50, 0.1)',
    '8': 'rgba(242, 135, 41, 0.1)',
    '9': 'rgba(242, 135, 41, 0.1)',
    '10': 'rgba(242, 135, 41, 0.1)',
    '11': 'rgba(149, 82, 199, 0.1)',
    '12': 'rgba(149, 82, 199, 0.1)',
  }

const centerTextPlugin = {
  id: 'centerText',
  afterDraw(chart) {
    const { ctx, chartArea: { width, height } } = chart;
    ctx.save();
    ctx.font = '48px sans-serif';
    // ctx.fillStyle = colorPallete[props.uv];
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(props.uv, width / 2, height / 1.3);
    ctx.restore();
  }
};

ChartJS.register(centerTextPlugin);

const generateBackgroundColors = () => {
  return Array.from({ length: 12 }, (_, index) => {
    const i = index + 1;
    const key = i.toString();
    return i <= props.uv ? colorPallete[key] : bgColorPallete[key];
  });
};

const data = computed(() => {
  return {
    labels: ['', '', '', '', '', '', '', '', '', '', '', ''],
    datasets: [
      {
        data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        backgroundColor: generateBackgroundColors(),
        borderWidth: 1,
        hoverBorderWidth: 2,
        hoverBackgroundColor: 'rgba(255, 159, 64, 1)',
      },
    ],
  }
});

const options = {
  responsive: false,
  cutout: '80%',
  rotation: -90,
  circumference: 180,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false
    },
  },
}


</script>