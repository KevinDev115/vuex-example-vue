<template>
  <div class="container-fluid text-center mt-5">

    <div class="row">
      <div class="col-12 table-responsive">

        <div class="float-left">
          <button
            type="submit"
            class="btn btn-primary mb-2"
            @click="setAction('create')"
          >Crear</button>
        </div>

        <div class="text-right">
          <a
            href="#"
            @click.stop="getAllUsers"
            class="btn-reload"
          >
            <i class="ti-reload"></i>
          </a>
        </div>

        <table class="table table-sm table-hover">
          <thead class="thead-vue">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Genero</th>
              <th scope="col">Edad</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(user, index) in users"
              :key="index"
            >
              <th>{{user.id}}</th>
              <td>{{user.name}}</td>
              <td>{{user.gender}}</td>
              <td>{{user.years}}</td>
              <td>
                <button
                  type="button"
                  class="btn btn-secondary btn-sm"
                  @click.stop="_setSelectedUser(user, 'view')"
                >Ver</button>
                <button
                  type="button"
                  class="btn btn-primary  ml-2 btn-sm"
                  @click.stop="_setSelectedUser(user, 'update')"
                >Editar</button>
                <button
                  type="button"
                  class="btn btn-danger btn-sm ml-2"
                  @click.stop="deleteUserById(user.id)"
                >
                  <i class="ti-trash"></i>
                </button>
              </td>
            </tr>

            <tr v-if="users.length == 0">
              <td colspan="100">No hay Informacion...</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Detalle -->
      <div class="col-12">
        <UserDetail />
      </div>
    </div>

  </div>
</template>

<script>
//import { mapActions, mapState, mapMutations, mapGetters } from 'vuex'
import { mapState, mapActions, mapMutations } from 'vuex'
import UserDetail from "../components/UserDetail";

export default {
  components: {
    UserDetail
  },
  computed: {
    ...mapState('User', [
      'users'
    ])
  },
  methods: {
    ...mapActions('User', [
      'getAllUsers',
      'deleteUserById'
    ]),
    ...mapMutations('User', [
      'setSelectedUser',
      'setAction'
    ]),
    //
    async _setSelectedUser (user, action) {
      await this.setAction(action)
      await this.setSelectedUser(user)
    }
  },
  created () {
    this.getAllUsers()
  }
}
</script>

<style scoped>
.thead-vue {
  background: #35495e !important;
  color: #fff;
}

.btn-reload {
  text-decoration: none;
}

.btn-reload .ti-reload {
  font-weight: bold;
  font-size: 24px;
}
</style>