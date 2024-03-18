export const getProjects = () =>{
    return useNuxtApp().$axiosApiClient.get('/api/projects')
}   
  
export const getProject = (id) =>{
    return useNuxtApp().$axiosApiClient.get(`/api/projects/${id}`)
}   
  
export const createProject = (project) =>{
    return useNuxtApp().$axiosApiClient.post('/api/projects', project)
}   
  
export const updateProject = (id, project) =>{
    return useNuxtApp().$axiosApiClient.patch(`/api/projects/${id}`, project)
}
  
export const deleteProject = (id) =>{
    return useNuxtApp().$axiosApiClient.delete(`/api/projects/${id}`)
}