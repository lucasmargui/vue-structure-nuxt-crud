<template>
  <div class="container">
      <h2 class="text-center mt-5 mb-3">Crud Nuxt</h2>
      <div class="card">
          <div class="card-header">
              <NuxtLink to="/create"
                  class="btn btn-outline-primary"
                  >Create New Project
              </NuxtLink>
          </div>
          <div class="card-body">
         
              <table class="table table-bordered">
                  <thead>
                      <tr>
                          <th>Name</th>
                          <th>Description</th>
                          <th width="240px">Action</th>
                      </tr>
                  </thead>
                  <tbody>
                         
                      <tr v-for="project in projects" :key="project.id">
                          <td>{{project.name}}</td>
                          <td>{{project.description}}</td>
                          <td>
                              <NuxtLink :to="`/show/${project.id}`" class="btn btn-outline-info mx-1">Show</NuxtLink>
                              <NuxtLink :to="`/edit/${project.id}`" class="btn btn-outline-success mx-1">Edit</NuxtLink>
                              <button 
                                  @click="handleDelete(project.id)"
                                  className="btn btn-outline-danger mx-1">
                                  Delete
                              </button>
                          </td>
                      </tr>
                             
                  </tbody>
              </table>
          </div>
      </div>
  </div>
</template>
  
<script>
 
 
import { deleteProject, getProjects } from '../services/projectServices'
import Swal from 'sweetalert2'
 
export default {
 
  data() {
    return {
      projects:[]
    };
  },
   
  created(){
    this.fetchProjectList()
  },
 
  methods:{
    fetchProjectList() {       
      getProjects()
        .then(response => {
            this.projects = response.data;
            return response
        })
        .catch(error => {
          return error
      });
 
    },
 
    handleDelete(id){
      Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
        if (result.isConfirmed) {
          deleteProject(id)
            .then( response => {
                Swal.fire({
                    icon: 'success',
                    title: 'Project deleted successfully!',
                    showConfirmButton: false,
                    timer: 1500
                })
                this.fetchProjectList();
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
            });
        }
      })
    }
   
 
  }
};
</script>