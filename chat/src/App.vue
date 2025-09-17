<script lang="ts" setup>
// App.vue
import { onMounted } from 'vue'
import '@n8n/chat/style.css'
import { createChat } from '@n8n/chat'

onMounted(() => {
  createChat({
    webhookUrl:
      'https://unhazily-unrejected-harmony.ngrok-free.app/webhook/5995bfc9-d8cd-45dc-82a3-068f4be20fcf/chat',
    mode: 'fullscreen',
    initialMessages: [
      'Hola! Estoy ansioso porque conversemos',
      'No seas timido, escribe un mensaje.. ;)',
    ],
    i18n: {
      en: {
        title: 'Como vas!? 🤖',
        subtitle: "Soy tu asistente 24/7. Y estoy aqui para lo que necesites!",
        footer: '',
        getStarted: 'Conversamos?',
        inputPlaceholder: 'Escribe tu mensaje...',
        closeButtonTooltip: 'Cerrar Conversación',
      },
    },
  })
})
</script>
<template>
  <div></div>
</template>
