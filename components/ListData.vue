<template>
  <v-list-tile avatar>
    <v-list-tile-avatar>
      <v-icon>{{ icon }}</v-icon>
    </v-list-tile-avatar>
    <v-list-tile-content>
      <v-list-tile-title>{{ title }}</v-list-tile-title>
      <v-list-tile-sub-title>
        <slot>{{ content }}</slot>
      </v-list-tile-sub-title>
    </v-list-tile-content>
  </v-list-tile>
</template>

<script>
export default {
  props: {
    icon: String,
    title: String,
    content: String
  }
};
</script>

