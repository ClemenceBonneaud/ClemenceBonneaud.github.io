<!-- ////////////////////////////////////////////////// -->
<!--                      TEMPLATE                      -->
<!-- ////////////////////////////////////////////////// -->

<template>
    <div ref="target">
        <transition :name="animationType">
            <div v-if="animate" class="animated-component">
                <slot />
            </div>
        </transition>
    </div>
</template>

<!-- ////////////////////////////////////////////////// -->
<!--                       SCRIPT                       -->
<!-- ////////////////////////////////////////////////// -->
<script lang="js">
import { onMounted, ref } from 'vue';
export default {
  name: 'AnimatedComponent',
  props: {
    animationType: {
      type: String,
      required: false,
      default: 'fade'
    }
  },
  setup() {
    const target = ref();
    const animate = ref(false);
    const observer = new IntersectionObserver(
      ([entry]) => {
        animate.value = entry.isIntersecting;
      },
      {
        threshold: 0.5
      }
    );
    onMounted(() => {
      observer.observe(target.value);
    });
    return {
      animate,
      target
    };
  }
};
</script>

<!-- ////////////////////////////////////////////////// -->
<!--                       STYLE                        -->
<!-- ////////////////////////////////////////////////// -->
<style scoped>
.animated-component.fade-enter-from,
.animated-component.zoom-enter-from,
.animated-component.appear-enter-from {
  transition: none;
}
/* Fade animation */
.fade-enter-active,
.fade-leave-active {
  transition: all 1000ms ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
/* Zoom animation */
.zoom-enter-active,
.zoom-leave-active {
  transition: all 1000ms ease-in-out;
}
.zoom-enter-from,
.zoom-leave-to {
  transform: scale(0.5);
}
/* Appear animation */
.appear-enter-active,
.appear-leave-active {
  transition: all 1000ms ease-in-out both;
}
.appear-enter-from,
.appear-leave-to {
    color: #181818;
}
</style>