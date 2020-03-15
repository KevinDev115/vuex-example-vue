<template>
  <div class="mt-5">
    <h3>Usuario Seleccionado ({{action}})</h3>
    <hr>
    <div
      v-if="userSeleted != null"
      class="text-left"
    >

      <form
        class="bg-white p-3"
        @submit.stop="createOrUpdateUser"
      >
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="name">Nombre</label>
            <input
              type="text"
              class="form-control"
              id="name"
              v-model="userSeleted.name"
              :disabled="action == 'view'"
            >
          </div>
          <div class="form-group col-md-6">
            <label for="gender">Genero</label>
            <select
              id="gender"
              class="form-control"
              v-model="userSeleted.gender"
              :disabled="action == 'view'"
            >
              <option
                disabled
                selected
              >Seleccione...</option>
              <option
                v-for="(gender, index) in genders"
                :key="index"
                :value="gender.value"
              >{{gender.label}}</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <label for="years">Edad</label>
          <input
            type="number"
            class="form-control"
            id="years"
            v-model="userSeleted.years"
            :disabled="action == 'view'"
          >
        </div>
        <button
          type="submit"
          class="btn btn-primary"
          v-if="action != 'view'"
        >{{action == 'create' ? 'Crear' : 'Actualizar'}}</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions('User', [
      'createOrUpdateUser'
    ])
  },
  computed: {
    ...mapState('User', [
      'userSeleted',
      'action',
      'genders'
    ]),

    ...mapGetters('User', [
      'isOfLegalAge'
    ])
  }
}
</script>

<style scoped>
</style>