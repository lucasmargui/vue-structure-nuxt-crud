<template>
  <h2 class="text-center mt-5 mb-3">Show Project</h2>
  <div class="card">
      <div class="card-header">
          <router-link 
              class="btn btn-outline-info float-right"
              to="/">View All Projects
          </router-link>
      </div>
      <div class="card-body">
          <b className="text-muted">Name:</b>
          <p>{{project.name}}</p>
          <b className="text-muted">Description:</b>
          <p>{{project.description}}</p>
      </div>
  </div>
</template>
  
<script>
 
import Swal from 'sweetalert2'
import { getProject } from '../../services/projectServices'
  
export default {
  data() {
    return {
      project: {
        name: '',
        description: '',
      },
      isSaving:false,
    };
  },
  created() {
    const id = this.$route.params.id;
    getProject(id)
    .then(response => {
        let projectInfo = response.data
        this.project.name = projectInfo.name
        this.project.description = projectInfo.description
        return response
    })
    .catch(error => {
        Swal.fire({
            icon: 'error',
            title: 'An Error Occured!',
            showConfirmButton: false,
            timer: 1500
        })
        return error
    })
  },
  methods: {
      
  },
};
</script>