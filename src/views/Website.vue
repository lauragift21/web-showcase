<template>
  <div>
    <AppModal/>
    <AppCard/>
  </div>
</template>

<script>
import AppCard from '../components/AppCard';
import AppModal from '../components/AppModal';

export default {
  name: 'Website',
  components: {
    AppCard,
    AppModal
  }
};
</script>
